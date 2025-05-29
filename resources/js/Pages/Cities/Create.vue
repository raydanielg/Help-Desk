<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="this.route('cities')">{{ $t('City') }}</Link>
      <span class="text-indigo-400 font-medium">/</span> {{ $t('Create') }}
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="store">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-full" :label="$t('Name')" />
        </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('Create') }} &nbsp; {{ $t('City') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  metaInfo: { title: 'Create City' },
  components: {
    LoadingButton,
    TextInput,
    Link,
  },
  layout: Layout,
  props: {},
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        color: null
      }),
    }
  },
  methods: {
    store() {
      this.form.post(this.route('cities.store'))
    },
  },
}
</script>
