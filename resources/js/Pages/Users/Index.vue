<template>
  <div>
    <Head :title="$t('Users')" />
      <div class="mb-6 flex flex-col md:flex-row gap-3 justify-between items-center ticket-filters">
          <search-input v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset"></search-input>
          <div class="filter-add-new flex flex-col gap-3 md:flex-row w-full items-center max-w-md">
              <select-input v-model="form.role_id" class=" mr-2 w-full">
                  <option :value="null">{{ $t('Filter by role') }}</option>
                  <option v-for="(r, ri) in roles" :key="ri" :value="r.id">{{ r.name }}</option>
              </select-input>
              <Link class="btn-indigo" :href="route('users.create')">
                  <span>{{ $t('Create New') }}</span>
              </Link>
          </div>
      </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="pb-4 pt-6 px-6">{{ $t('Name') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Email') }}</th>
          <th class="pb-4 pt-6 px-6">{{ $t('Phone') }}</th>
            <th class="pb-4 pt-6 px-6">{{ $t('Country') }}</th>
            <th class="pb-4 pt-6 px-6">{{ $t('City') }}</th>
            <th class="pb-4 pt-6 px-6" colspan="2">{{ $t('Role') }}</th>
        </tr>
        <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('users.edit', user.id)">
              <img v-if="user.photo" class="block -my-2 mr-2 w-5 h-5 rounded-full" :src="user.photo" />
              {{ user.name }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('users.edit', user.id)" tabindex="-1">
              {{ user.email }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('users.edit', user.id)" tabindex="-1">
              {{ user.phone }}
            </Link>
          </td>
            <td class="border-t">
                <Link class="flex items-center px-6 py-4" :href="route('users.edit', user.id)" tabindex="-1">
                    {{ $t(user.country) }}
                </Link>
            </td>
            <td class="border-t">
                <Link class="flex items-center px-6 py-4" :href="route('users.edit', user.id)" tabindex="-1">
                    {{ $t(user.city) }}
                </Link>
            </td>
          <td class="border-t capitalize">
            <Link class="flex items-center px-6 py-4" :href="route('users.edit', user.id)" tabindex="-1">
              {{ user.role?user.role.name:null }}
            </Link>
          </td>
          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('users.edit', user.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="users.data.length === 0">
          <td class="px-6 py-4 border-t" colspan="6">No users found.</td>
        </tr>
          </tbody>
      </table>
    </div>
      <pagination class="mt-6" :links="users.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchInput from '@/Shared/SearchInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'

export default {
  components: {
      SearchInput,
    Head,
    Icon,
    Link,
      SelectInput,
      Pagination,
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Object,
    roles: Array,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        role_id: this.filters.role_id ?? null,
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
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
