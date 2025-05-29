<template>
  <div>
      <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-full">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Name')" />
              <select-input v-model="form.status" :error="form.errors.status" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Status')">
                  <option :value="1">{{ $t('Active') }}</option>
                  <option :value="0">{{ $t('Inactive') }}</option>
              </select-input>

              <textarea-input id="ticketDetails" name="content" v-model="form.details" :error="form.errors.details" class="pr-6 pb-8 w-full" :rows="5" placeholder="Ticket Description"></textarea-input>
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <button class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">{{ $t('Delete') }}</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import TextareaInput from '@/Shared/TextareaInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { Link, Head } from '@inertiajs/vue3'

export default {
  metaInfo() {
    return { title: this.form.name }
  },
  components: {
    LoadingButton,
      SelectInput,
      TextareaInput,
      TextInput,
    Link,
      Head,
  },
  layout: Layout,
  props: {
    faq: Object,
      title: String,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
          name: this.faq.name,
          status: this.faq.status,
          details: this.faq.details,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(this.route('faqs.update', this.faq.id))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this faq?')) {
        this.$inertia.delete(this.route('faqs.destroy', this.faq.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this faq?')) {
        this.$inertia.put(this.route('faqs.restore', this.faq.id))
      }
    },
  },
}
</script>
