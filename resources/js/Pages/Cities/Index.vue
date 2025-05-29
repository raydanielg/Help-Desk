<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">{{ $t('City') }}</h1>
    <div class="mb-6 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-md mr-4" @reset="reset"></search-input>
      <Link class="btn-indigo" :href="this.route('cities.create')">
        <span>{{ $t('Create') }}</span>&nbsp;
        <span class="hidden md:inline">{{ $t('City') }}</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">{{ $t('Name') }}</th>
        </tr>
        <tr v-for="city in cities.data" :key="city.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="this.route('cities.edit', city.id)">
              {{ city.name }}
            </Link>
          </td>
          <td class="border-t w-px">
            <Link class="px-4 flex items-center" :href="this.route('cities.edit', city.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="cities.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">No cities found.</td>
        </tr>
          </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="cities.links" />
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchInput from '@/Shared/SearchInput.vue'

export default {
  metaInfo: { title: 'Cities' },
  components: {
      SearchInput,
    Icon,
    Link,
    Pagination,
  },
  layout: Layout,
  props: {
    filters: Object,
    cities: Object,
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
        this.$inertia.get(this.route('cities'), pickBy(this.form), { preserveState: true })
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
