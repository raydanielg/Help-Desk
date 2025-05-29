<template>
    <Head title="Reset Password" />
  <div class="p-6 min-h-screen flex justify-center items-center light">
      <flash-messages />
    <div class="w-full max-w-md">
        <Link :href="route('home')"><logo class="block mx-auto w-full max-w-xs fill-white" height="50" /></Link>
      <form class="mt-8 bg-white dark:bg-slate-900 border border-gray-100 rounded-lg shadow-xl overflow-hidden" @submit.prevent="sendLink">
        <div class="px-10 py-12">
          <h2 class="text-center font-bold text-xl">{{ $t('Reset Password') }}</h2>
          <div class="mx-auto mt-3 w-24 border-b" />
          <text-input v-model="form.email" :error="form.errors.email" class="mt-10" :label="$t('Email Address')" type="email" autofocus autocapitalize="off" />
            <loading-button :loading="form.processing" class="ml-auto btn-indigo w-full items-center justify-center mt-8" type="submit">{{ $t('Send Password Reset Link') }}</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '@/Shared/Logo.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { Head, Link } from '@inertiajs/vue3'
import FlashMessages from '@/Shared/FlashMessages.vue'

export default {
  metaInfo: { title: 'Login' },
  components: {
    LoadingButton,
    Logo,
    TextInput,
      Head,
      Link,
      FlashMessages,
  },
    props: {
        is_demo: Number
    },
  data() {
    return {
      form: this.$inertia.form({
        email: '',
      }),
    }
  },
  methods: {
      sendLink() {
          this.form.post(this.route('password.reset.email'))
      },
  }
}
</script>
