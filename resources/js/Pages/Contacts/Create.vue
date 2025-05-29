<template>
  <div>
    <Head :title="$t(title)" />
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('First name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Last name')" />
          <text-input v-model="form.title" :error="form.errors.title" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Title')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Phone')" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Email')" />
          <select-input v-model="form.organization_id" :error="form.errors.organization_id" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Organization')">
            <option :value="null" />
            <option v-for="organization in organizations" :key="organization.id" :value="organization.id">{{ organization.name }}</option>
          </select-input>
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Address')" />
          <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('City')" />
          <select-input v-model="form.country" :error="form.errors.country" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Country')">
              <option :value="null" />
              <option v-for="c in countries" :key="c.id" :value="c.code">{{ $t(c.name) }}</option>
          </select-input>
          <select-input v-model="form.department_id" :error="form.errors.department_id" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Department')">
            <option :value="null" />
            <option v-for="s in departments" :key="s.id" :value="s.id">{{ s.name }}</option>
          </select-input>
          <select-input v-model="form.status" :error="form.errors.status" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Status')">
            <option value="1">Active</option>
            <option value="0">InActive</option>
          </select-input>
        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('Create') }} {{ $t('Contact') }}</loading-button>
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
    organizations: Array,
    departments: Array,
      countries: Array,
      title: String,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        first_name: '',
        last_name: '',
        title: '',
        organization_id: null,
        department_id: null,
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        status: 1,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(this.route('contacts.store'))
    },
  },
}
</script>
