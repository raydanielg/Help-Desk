<template>
  <div>
    <Head :title="$t(title)" />
    <div class="flex items-center justify-between mb-6">
      <search-input v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset"></search-input>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="pb-4 pt-6 px-6">{{ $t('Name') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Email') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Phone') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('City') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Address') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Updated') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Action') }}</th>
        </tr>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
              {{ user.first_name }} {{ user.last_name }}
          </td>
          <td class="border-t">
              {{ user.email }}
          </td>
          <td class="border-t">
              {{ user.phone }}
          </td>
          <td class="border-t">
              {{ $t(user.city) }}
          </td>
          <td class="border-t capitalize">
              {{ user.address }}
          </td>
          <td class="border-t capitalize">
              {{ moment(user.created_at).fromNow() }}
          </td>
          <td class="border-t capitalize">
            <div class="action flex ">
              <icon name="tick" @click="approveAccount(user.id)" class=" ml-2 w-7 h-7 cursor-pointer" />
              <icon name="cross" @click="removeAccount(user.id)" class=" ml-2 w-7 h-7 cursor-pointer" />
            </div>
          </td>
        </tr>
        <tr v-if="users.length === 0">
          <td class="px-6 py-4 border-t" colspan="7">No users found.</td>
        </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import SearchInput from '@/Shared/SearchInput.vue'
import moment from 'moment'
import axios from 'axios'

export default {
  components: {
      SearchInput,
    Head,
    Icon,
    Link,
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Array,
    title: String,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        role: this.filters.role,
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get(this.route('users'), pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    approveAccount(id) {
      axios.get(this.route('pending.active', { id })).then((res)=>{
        window.location.reload();
      })
    },
    removeAccount(id) {
      axios.get(this.route('pending.decline', { id })).then((res)=>{
        window.location.reload();
      })
    },
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
  created() {
    this.moment = moment;
  },
}
</script>
