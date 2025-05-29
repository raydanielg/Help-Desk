<template>
  <div>
      <Head :title="$t(title)" />
    <div class="mb-6 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-md mr-4" @reset="reset"></search-input>
      <Link class="btn-indigo" :href="this.route('departments.create')">
        <span>{{ $t('Create') }}</span>
        <span class="hidden md:inline">&nbsp;{{ $t('Department') }}</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">{{ $t('Name') }}</th>
        </tr>
        <tr v-for="department in departments.data" :key="department.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="this.route('departments.edit', department.id)">
              {{ department.name }}
            </Link>
          </td>
          <td class="border-t w-px">
            <Link class="px-4 flex items-center" :href="this.route('departments.edit', department.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="departments.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">No departments found.</td>
        </tr>
          </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="departments.links" />
  </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchInput from '@/Shared/SearchInput.vue'

export default {
  metaInfo: { title: 'Departments' },
  components: {
    Icon,
    Link,
    Pagination,
      SearchInput,
      Head,
  },
  layout: Layout,
  props: {
    title: String,
    filters: Object,
    departments: Object,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route('departments'), pickBy(this.form), { preserveState: true })
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
