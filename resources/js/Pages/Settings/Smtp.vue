<template>
  <div>
    <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden mr-2">
        <form @submit.prevent="update">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
            <text-input v-model="form.MAIL_HOST" :error="form.errors.MAIL_HOST" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('SMTP Host')" />
            <text-input v-model="form.MAIL_PORT" :error="form.errors.MAIL_PORT" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('SMTP Port')" />
            <text-input v-model="form.MAIL_USERNAME" :error="form.errors.MAIL_USERNAME" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('SMTP Username')" />
            <text-input v-model="form.MAIL_PASSWORD" :error="form.errors.MAIL_PASSWORD" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('SMTP Password')" />
            <text-input v-model="form.MAIL_ENCRYPTION" :error="form.errors.MAIL_ENCRYPTION" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Mail Encryption')" />
            <text-input v-model="form.MAIL_FROM_ADDRESS" :error="form.errors.MAIL_FROM_ADDRESS" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('From Address')" />
            <text-input v-model="form.MAIL_FROM_NAME" :error="form.errors.MAIL_FROM_NAME" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('From Name')" />
        </div>
            <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
                <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Save') }}</loading-button>
            </div>
        </form>

    </div>
  </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Layout from '@/Shared/Layout.vue'
import Pagination from '@/Shared/Pagination.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import axios from 'axios'

export default {
  metaInfo: { title: 'Priorities' },
  components: {
    Icon,
    Link,
      Head,
    Pagination,
      TextInput,
      SelectInput,
      LoadingButton,
  },
  layout: Layout,
  props: {
      title: String,
      demo: Boolean,
      keys: Object,
  },
    remember: 'form',
  data() {
    return {
        form: this.$inertia.form({
            MAIL_HOST: this.demo?'******************':this.keys['MAIL_HOST']['value'],
            MAIL_PORT: this.keys['MAIL_PORT']['value'],
            MAIL_USERNAME: this.demo?'**********************':this.keys['MAIL_USERNAME']['value'],
            MAIL_PASSWORD: this.demo?'*********':this.keys['MAIL_PASSWORD']['value'],
            MAIL_ENCRYPTION: this.keys['MAIL_ENCRYPTION']['value'],
            MAIL_FROM_ADDRESS: this.keys['MAIL_FROM_ADDRESS']['value'],
            MAIL_FROM_NAME: this.keys['MAIL_FROM_NAME']['value'],
        }),
    }
  },
  methods: {
      update() {
          this.form.put(this.route('settings.smtp.update'), {
              onSuccess: () => {
                  axios.get(this.route('clear.cache','config')).then((response) => {})
              }
          })
      },
  },
    created() {
      console.log(this.demo)
    }
}
</script>
