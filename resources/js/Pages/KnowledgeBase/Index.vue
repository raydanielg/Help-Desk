<template>
  <div>
      <Head :title="$t(title)" />
    <div class="mb-6 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-md mr-4" @reset="reset"></search-input>
      <Link class="btn-indigo" :href="route('knowledge_base.create')">
        <span>{{ $t('Create Knowledge Base') }}</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">{{ $t('Title') }}</th>
          <th class="px-6 pt-6 pb-4">{{ $t('Type') }}</th>
        </tr>
        <tr v-for="knowledge in knowledge_base.data" :key="knowledge.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="route('knowledge_base.edit', knowledge.id)">
              {{ knowledge.title }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center" :href="route('knowledge_base.edit', knowledge.id)" tabindex="-1">
              {{ knowledge.type }}
            </Link>
          </td>
          <td class="border-t w-px">
            <Link class="px-4 flex items-center" :href="route('knowledge_base.edit', knowledge.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="knowledge_base.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">{{ $t('No knowledge base found.') }}</td>
        </tr>
          </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="knowledge_base.links" />
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
  metaInfo: { title: 'Knowledge Base' },
  components: {
    Icon,
    Pagination,
      SearchInput,
    Link,
      Head,
  },
  layout: Layout,
  props: {
    filters: Object,
      knowledge_base: Object,
      title: String,
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
        this.$inertia.get(this.route('knowledge_base'), pickBy(this.form), { preserveState: true })
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
