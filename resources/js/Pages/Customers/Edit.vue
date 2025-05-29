<template>
  <div>
    <Head :title="title" />
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('First name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Last name')" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Email')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Phone')" />
            <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('City')" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Address')" />
          <select-input v-model="form.country_id" :error="form.errors.country_id" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Country')">
            <option :value="null" />
            <option v-for="c in countries" :key="c.id" :value="c.id">{{ $t(c.name) }}</option>
          </select-input>
          <text-input v-model="form.password" :error="form.errors.password" class="pb-8 pr-6 w-full lg:w-1/3" type="password" autocomplete="new-password" :label="$t('Password')" />
          <file-input v-model="form.photo_path" :error="form.errors.photo_path" class="pb-8 pr-6 w-full lg:w-1/3" type="file" accept="image/*" label="Photo" />
            <div class="w-full lg:w-1/3 flex items-center justify-start"><img v-if="user.photo_path" class="block mb-2 w-8 h-8 rounded-full" :src="user.photo_path" /></div>
        </div>
        <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="user.id !== auth.user.id && user_access.customer.delete" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">
            {{ $t('Delete') }}</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import FileInput from '@/Shared/FileInput.vue'
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
    user: Object,
    auth: Object,
    countries: Array,
    cities: Array,
    title: String,
  },
  remember: 'form',
  data() {
    return {
        user_access: this.$page.props.auth.user.access,
      form: this.$inertia.form({
        _method: 'put',
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
        city: this.user.city,
        address: this.user.address,
        country_id: this.user.country_id,
        password: '',
          photo_path: null
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
    update() {
      this.form.post(this.route('customers.update', this.user.id), {
        onSuccess: () => this.form.reset('password', 'photo'),
      })
    },
    destroy() {
      if (confirm('Are you sure you want to delete this user?')) {
        this.$inertia.delete(this.route('customers.destroy', this.user.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this user?')) {
        this.$inertia.put(this.route('customers.restore', this.user.id))
      }
    },
  },
}
</script>
