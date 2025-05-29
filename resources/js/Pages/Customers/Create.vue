<template>
  <div>
    <Head :title="$t(title)" />
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('First name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Last name')" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Email')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('Phone')" />
          <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2" :label="$t('City')" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Address')" />
          <select-input v-model="form.country_id" :error="form.errors.country_id" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Country')">
            <option :value="null" />
            <option v-for="c in countries" :key="c.id" :value="c.id">{{ $t(c.name) }}</option>
          </select-input>
          <text-input v-model="form.password" :error="form.errors.password" class="pb-8 pr-6 w-full lg:w-1/3" type="password" autocomplete="new-password" :label="$t('Password')" />
          <file-input v-model="form.photo" :error="form.errors.photo" class="pb-8 pr-6 w-full lg:w-1/2" type="file" accept="image/*" :label="$t('Photo')" />
        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('create') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import FileInput from '@/Shared/FileInput.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
  },
  layout: Layout,
  props: {
    countries: Array,
    cities: Array,
    title: String,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        city: null,
        address: '',
        country_id: null,
        password: '',
        role_id: null,
        photo: null
      }),
    }
  },
  created() {
    // this.setDefaultValue(this.countries, 'country_id', 'United States')
  },
  methods: {
    setDefaultValue(arr, key, value){
      const find = arr.find(i=>i.name.match(new RegExp(value + ".*")))
      if(find){
        this.form[key] = find['id']
      }
    },
    store() {
      this.form.post(this.route('customers.store'))
    },
  },
}
</script>
