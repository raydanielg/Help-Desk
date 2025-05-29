<template>
  <div>
      <Head :title="$t(title)" />
    <div class="mb-6 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-md mr-4" @reset="reset"></search-input>
      <Link class="btn-indigo" :href="route('categories.create')">
        <span>{{ $t('Create New') }}</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">Name</th>
            <th class="px-6 pt-6 pb-4">Department</th>
            <th class="px-6 pt-6 pb-4">Parent</th>
        </tr>
        <tr v-for="category in getCategories()" :key="category.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t px-6 py-4">
            <Link class=" flex items-center focus:text-indigo-500" :href="route('categories.edit', category.id)">
              {{ category.parent?' &nbsp; — ':'' }} {{ category.name }}
            </Link>
          </td>
            <td class="border-t px-6 py-4">
                <Link class="flex items-center focus:text-indigo-500" :href="route('categories.edit', category.id)">
                    {{ category.department ? category.department.name : '-' }}
                </Link>
            </td>
            <td class="border-t px-6 py-4">
                <Link class="flex items-center focus:text-indigo-500" :href="route('categories.edit', category.id)">
                    {{ category.parent ? category.parent.name : '-' }}
                </Link>
            </td>
          <td class="border-t w-px px-4 ">
            <Link class=" flex items-center" :href="route('categories.edit', category.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="categories.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">No categories found.</td>
        </tr>
          </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="categories.links" />
  </div>
</template>

<script>
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchInput from '@/Shared/SearchInput.vue'
import { Link, Head } from '@inertiajs/vue3'


export default {
  metaInfo: { title: 'Categories' },
  components: {
      SearchInput,
    Icon,
    Pagination,
      Link,
      Head,
  },
  layout: Layout,
  props: {
      title: String,
    filters: Object,
    categories: Object,
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
        this.$inertia.get(this.route('categories'), pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
      getCategories(){
          let cats = this.categories.data.filter(cat => !cat.parent);
          for (let ci = 0; ci < this.categories.data.length; ci++) {
              if(this.categories.data[ci].parent){
                  const findIndex = cats.findIndex(cat=>cat.id === this.categories.data[ci].parent.id)
                  if(findIndex > -1){
                      cats.splice(findIndex + 1, 0, this.categories.data[ci])
                  }
              }
          }
          return cats;
      },
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
