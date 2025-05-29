<template>
  <div>
    <Head :title="title" />
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('First name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('last name')" />
          <text-input v-model="form.title" :error="form.errors.title" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Title')" />
          <select-input v-model="form.organization_id" :error="form.errors.organization_id" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Organization')">
            <option :value="null" />
            <option v-for="organization in organizations" :key="organization.id" :value="organization.id">{{ organization.name }}</option>
          </select-input>
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Email')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Phone')" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Address')" />
          <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('City')" />
          <select-input v-model="form.country" :error="form.errors.country" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Country')">
              <option :value="null" />
              <option v-for="c in countries" :key="c.id" :value="c.id">{{ $t(c.name) }}</option>
          </select-input>
        </div>
        <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">
            {{ $t('Delete') }} {{ $t('Contact') }}</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}
            {{ $t('Contact') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
  },
  layout: Layout,
  props: {
    contact: Object,
    organizations: Array,
      countries: Array,
    title: String,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        title: this.contact.title,
        organization_id: this.contact.organization_id,
        email: this.contact.email,
        phone: this.contact.phone,
        address: this.contact.address,
        city: this.contact.city,
        country: this.contact.country,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(route('contacts.update', this.contact.id))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.$inertia.delete(route('contacts.destroy', this.contact.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this contact?')) {
        this.$inertia.put(route('contacts.restore', this.contact.id))
      }
    },
  },
}
</script>
