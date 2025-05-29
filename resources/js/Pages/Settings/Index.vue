<template>
  <div>
    <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden mr-2">
        <form @submit.prevent="update">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
            <text-input v-model="form.app_name" :error="form.errors.app_name" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('App Name')" />
            <text-input v-model="form.site_key" :error="form.errors.site_key" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Google ReCaptcha Site Key')" />
            <select-input v-model="form.default_language" :error="form.errors.default_language" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Default Language')">
                <option v-for="l in languages" :key="l.id" :value="l.code">{{ l.name }}</option>
            </select-input>
            <div class="pb-8 pr-6 w-full flex lg:w-1/3">
                <file-input v-model="form.logo" :error="form.errors.logo" class="pr-2 w-full lg:w-4/5" type="file" accept="image/png" label="Logo" />
                <div class="w-full lg:w-1/5 flex items-end justify-center">
                    <img v-if="form.main_logo" class="block mb-2 " :src="form.main_logo" />
                </div>
            </div>
            <div class="pb-8 pr-6 w-full flex lg:w-1/3">
                <file-input v-model="form.logo_white" :error="form.errors.logo_white" class="pr-2 w-full lg:w-4/5" type="file" accept="image/png" label="Logo White" />
                <div class="w-full lg:w-1/5 flex items-end justify-center">
                    <img v-if="form.main_logo_white" class="block mb-2 rounded bg-dark" :src="form.main_logo_white" />
                </div>
            </div>
            <div class="pb-8 pr-6 w-full flex lg:w-1/3">
                <file-input v-model="form.favicon" :error="form.errors.favicon" class="pr-2 w-full lg:w-4/5" type="file" accept="image/png" label="Favicon" />
                <div class="w-full lg:w-1/5 flex items-end justify-center">
                    <img v-if="form.main_favicon" class="block mb-2 " :src="form.main_favicon" />
                </div>
            </div>
            <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                <div class="font-bold text-sm mb-1">{{ $t('Enable Options') }} </div>
            </div>
            <div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3" v-for="(option, ni) in form.enable_options" :key="ni">
                <label :for="option.slug" class="flex toggle_swtich items-center cursor-pointer">
                    <div class="flex items-center mb-3">
                        <input :id="option.slug" type="checkbox" v-model="option.value" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                        <div class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.name }}</div>
                    </div>
                </label>
            </div>
            <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                <div class="font-bold text-sm mb-1">{{ $t('Email Notifications') }} </div>
            </div>
            <div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3" v-for="(notification, ni) in form.email_notifications" :key="ni">
                <label :for="notification.slug" class="flex toggle_swtich items-center cursor-pointer">
                    <div class="flex items-center mb-3">
                        <input :id="notification.slug" type="checkbox" v-model="notification.value" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600">
                        <div class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ notification.name }}</div>
                    </div>
                </label>
            </div>
            <div class="flex w-full">
                <select-input v-model="form.default_recipient" :error="form.errors.default_recipient" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Default Email Recipient for customer ticket')">
                    <option v-for="u in users" :key="u.id" :value="u.id">{{ u.name }}</option>
                </select-input>
            </div>
            <div class=" pr-6 pb-1 w-full lg:w-full flex flex-col">
                <div class="font-bold text-sm mb-1">{{ $t('Hide ticket fields') }} </div>
            </div>


            <div class="flex flex-wrap w-full pb-8">
                <label v-for="htf in hide_ticket_fields" class=" select-none flex items-center pr-8 capitalize" :for="'htf_'+htf">
                    <input :id="'htf_'+htf" v-model="form.hide_ticket_fields" class="mr-1" :value="htf" type="checkbox" />
                    <span class="text-sm">{{ htf.replace(/_/g, ' ') }}</span>
                </label>
            </div>

            <div class=" pr-6 pb-1 w-full lg:w-full flex flex-col">
                <div class="font-bold text-sm mb-1">{{ $t('Required fields to submit ticket') }} </div>
            </div>


            <div class="flex flex-wrap w-full pb-8">
                <label v-for="rtf in required_ticket_fields" class=" select-none flex items-center pr-8 capitalize" :for="'rtf_'+rtf">
                    <input @change="checkRequiredFields($event)" :id="'rtf_'+rtf" v-model="form.required_ticket_fields" class="mr-1" :value="rtf" type="checkbox" />
                    <span class="text-sm">{{ rtf.replace(/_/g, ' ') }}</span>
                </label>
            </div>

            <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                <div class="font-bold text-sm mb-1">{{ $t('Cron Job Instruction') }} </div>
                <p class="mt-2 font-light">If you would like to send mail without delaying you need to set a cron job for that with once every 3 minute.</p>
                <code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/2 * * * * /usr/bin/php artisan queue:work --queue=high,default --stop-when-empty</code>

                <p class="mt-3 font-light">For the shared hosting like cPanel or any panel server you can call url as like this</p>
                <code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/2	* *	* *	wget -q -O - https://website.com/cron/queue_work >/dev/null 2>&1</code>

                <p class="mt-3">After adding one of these above option, you need to enable Queue with add <code>QUEUE_ENABLE=true</code> on the .env file </p>
            </div>

            <textarea-input v-model="form.custom_css" :error="form.errors.custom_css" :rows="15" class=" pb-6 w-full" placeholder="your custom css here.." :label="$t('Custom CSS')"></textarea-input>

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
import TextareaInput from '@/Shared/TextareaInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import FileInput from '@/Shared/FileInput.vue'

export default {
  metaInfo: { title: 'Priorities' },
  components: {
    Icon,
    Link,
      Head,
      FileInput,
    Pagination,
      TextInput,
      TextareaInput,
      SelectInput,
      LoadingButton,
  },
  layout: Layout,
  props: {
      title: String,
      site_key: String,
      settings: Object,
      languages: Array,
      users: Array,
      pusher: Boolean,
  },
    remember: 'form',
  data() {
    return {
        form: this.$inertia.form({
            app_name: this.settings.app_name.value,
            logo: null,
            site_key: this.site_key,
            default_recipient: this.settings.default_recipient?this.settings.default_recipient.value:1,
            logo_white: null,
            favicon: null,
            main_logo: '/images/logo.png',
            main_logo_white: '/images/logo_white.png',
            main_favicon: '/favicon.png',
            default_language: this.settings.default_language.value,
            footer_text: this.settings.footer_text.value,
            custom_css: typeof this.settings.custom_css !== 'undefined' && this.settings.custom_css ? this.settings.custom_css.value : null,
            email_notifications: this.settings.email_notifications.value.map(en=>{return {'name': en.name,'slug': en.slug,'value': !!en.value}}),
            enable_options: this.settings.enable_options.value.map(eo=>{return {'name': eo.name,'slug': eo.slug,'value': !!eo.value}}),
            hide_ticket_fields: this.settings.hide_ticket_fields && this.settings.hide_ticket_fields.value ? this.settings.hide_ticket_fields.value : [],
            required_ticket_fields: this.settings.required_ticket_fields && this.settings.required_ticket_fields.value ? this.settings.required_ticket_fields.value : [],
        }),
        hide_ticket_fields: [ 'department', 'category', 'sub_category', 'ticket_type', 'assigned_to'],
        required_ticket_fields: [ 'department', 'category', 'sub_category', 'ticket_type', 'assigned_to'],
    }
  },
    created() {
      console.log(this.settings.hide_ticket_fields)
      console.log(this.settings.required_ticket_fields)
      console.log(this.form)
    },
    methods: {
        checkRequiredFields(e){
            if(e.target.checked && ['category', 'sub_category'].includes(e.target.value)){
                if(!this.form.required_ticket_fields.includes('category')){
                    this.form.required_ticket_fields.push('category')
                }
                if(!this.form.required_ticket_fields.includes('department')){
                    this.form.required_ticket_fields.push('department')
                }
            }
            if(!e.target.checked && ['department'].includes(e.target.value)){
                if(this.form.required_ticket_fields.includes('category')){
                    this.removeElement(this.form.required_ticket_fields, 'category')
                }
                if(this.form.required_ticket_fields.includes('sub_category')){
                    this.removeElement(this.form.required_ticket_fields, 'sub_category')
                }
            }
            if(!e.target.checked && ['category'].includes(e.target.value)){
                if(this.form.required_ticket_fields.includes('sub_category')){
                    this.removeElement(this.form.required_ticket_fields, 'sub_category')
                }
            }
        },
        removeElement(obj, el){
            const index = obj.indexOf(el)
            obj.splice(index, 1)
        },
      update() {
          const vm = this;
          const enableChat = this.form.enable_options.find(o=>o.slug='chat')
          if(!!enableChat.value && !this.pusher){
              alert('Please setup the pusher configuration to enable chat.');
              return
          }
          this.form.post(this.route('global.update'), {
              onSuccess: () => {
                  const successMessage = vm.$page.props.flash.success
                  this.form.logo = null
                  this.form.logo_white = null
                  if(successMessage){
                      window.location.reload()
                  }
              }
          })
      },
  },
}
</script>
