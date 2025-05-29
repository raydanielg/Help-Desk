<template>
  <div>
    <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden w-full">
      <form @submit.prevent="store">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Name')" />
              <text-input v-model="form.slug" :error="form.errors.slug" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Slug')" />
        </div>
          <div class="py-8 -mr-6 -mb-8 flex flex-wrap overflow-x-auto">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                      <table class="min-w-full">
                          <thead class="border-b">
                          <tr>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                  Functions
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                  Read
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                  Update
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                  Create
                              </th>
                              <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                  Delete
                              </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr class="border-b" v-for="(value, name, index) in form.access" :key="index">
                              <td class="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-900"> {{ name }} </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <label class="flex toggle_swtich items-center cursor-pointer">
                                      <div class="relative">
                                          <input type="checkbox" class="sr-only" v-model="value.read" />
                                          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                      </div>
                                  </label>
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <label class="flex toggle_swtich items-center cursor-pointer">
                                      <div class="relative">
                                          <input type="checkbox" class="sr-only" v-model="value.update" />
                                          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                      </div>
                                  </label>
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <label class="flex toggle_swtich items-center cursor-pointer">
                                      <div class="relative">
                                          <input type="checkbox" class="sr-only" v-model="value.create" />
                                          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                      </div>
                                  </label>
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <label class="flex toggle_swtich items-center cursor-pointer">
                                      <div class="relative">
                                          <input type="checkbox" class="sr-only" v-model="value.delete" />
                                          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                      </div>
                                  </label>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('Create Role') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  metaInfo: { title: 'Create a New Role' },
  components: {
    LoadingButton,
    TextInput,
    Link,
    Head,
  },
  layout: Layout,
  props: {
      title: String
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        name: null,
          slug: null,
          access: null
      }),
    }
  },
  methods: {
    store() {
      this.form.post(this.route('roles.store'))
    },
  },
    created() {
        this.form.access = {
            "faq": { "read": false, "create": false, "delete": false, "update": false },
            "blog": { "read": false, "create": false, "delete": false, "update": false },
            "chat": { "read": false, "create": false, "delete": false, "update": false },
            "smtp": { "read": false, "create": false, "delete": false, "update": false },
            "type": { "read": false, "create": false, "delete": false, "update": false },
            "user": { "read": false, "create": false, "delete": false, "update": false },
            "global": { "read": false, "create": false, "delete": false, "update": false },
            "pusher": { "read": false, "create": false, "delete": false, "update": false },
            "status": { "read": false, "create": false, "delete": false, "update": false },
            "ticket": { "read": false, "create": false, "delete": false, "update": false },
            "contact": { "read": false, "create": false, "delete": false, "update": false },
            "category": { "read": false, "create": false, "delete": false, "update": false },
            "customer": { "read": false, "create": false, "delete": false, "update": false },
            "language": { "read": false, "create": false, "delete": false, "update": false },
            "priority": { "read": false, "create": false, "delete": false, "update": false },
            "department": { "read": false, "create": false, "delete": false, "update": false },
            "organization": { "read": false, "create": false, "delete": false, "update": false },
            "email_template": { "read": false, "create": false, "delete": false, "update": false },
            "knowledge_base": { "read": false, "create": false, "delete": false, "update": false },
            "front_page": { "read": false, "create": false, "delete": false, "update": false }
        };
    }
}
</script>
