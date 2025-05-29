<template>
  <div>
      <Head :title="$t(title)" />
    <div class="mb-6 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-md mr-4" @reset="reset"></search-input>
      <Link class="btn-indigo" :href="route('faqs.create')">
        <span>{{ $t('Create New') }}</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
          <tbody>
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">{{ $t('Name') }}</th>
          <th class="px-6 pt-6 pb-4">{{ $t('Status') }}</th>
        </tr>
        <tr v-for="faq in faqs.data" :key="faq.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="route('faqs.edit', faq.id)">
              {{ faq.name }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="px-6 py-4 flex items-center" :href="route('faqs.edit', faq.id)" tabindex="-1">
              {{ faq.status?'Active': 'Inactive' }}
            </Link>
          </td>
          <td class="border-t w-px">
            <Link class="px-4 flex items-center" :href="route('faqs.edit', faq.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="faqs.data.length === 0">
          <td class="border-t px-6 py-4" colspan="4">{{ $t('No faqs found.') }}</td>
        </tr>
          </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="faqs.links" />
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
  metaInfo: { title: 'FAQs' },
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
    faqs: Object,
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
        this.$inertia.get(this.route('faqs'), pickBy(this.form), { preserveState: true })
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
