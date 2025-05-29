<template>
    <div>
        <Head :title="title" />
        <div class="bg-white rounded-md shadow overflow-hidden mr-2">
            <form @submit.prevent="update">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                        <div class="font-bold text-sm mb-1">{{ $t('Enable Email Piping Option') }} </div>
                        <p class="text-sm pt-1 mb-1">{{ $t('Ticket create automatically including attachment when receive a new email.') }}</p>
                    </div>
                    <div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3">
                        <label for="enablePiping" class="flex toggle_swtich items-center cursor-pointer">
                            <div class="relative">
                                <input id="enablePiping" type="checkbox" class="sr-only" v-model="option.value" />
                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                            <div class="ml-3 text-sm">
                                {{ option.name }}
                            </div>
                        </label>
                    </div>
                </div>
                <div class="px-8 flex">
                    <p class=" pt-1 mb-1" v-if="demo">{{ $t('You can try to sending email with the `piping@atorali.com` email address to test on the demo mode.') }}</p>
                </div>
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <text-input type="text" v-model="form.IMAP_HOST" :error="form.errors.IMAP_HOST" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Host')" />
                    <text-input type="text" v-model="form.IMAP_PORT" :error="form.errors.IMAP_PORT" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Port')" />
                    <text-input type="text" v-model="form.IMAP_PROTOCOL" :error="form.errors.IMAP_PROTOCOL" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Protocol')" :placeholder="$t('e.g. imap')" />
                    <text-input type="text" v-model="form.IMAP_ENCRYPTION" :error="form.errors.IMAP_ENCRYPTION" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Encryption')" :placeholder="$t('e.g. ssl')" />
                    <text-input type="text" v-model="form.IMAP_USERNAME" :error="form.errors.IMAP_USERNAME" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Username')" />
                    <text-input type="text" v-model="form.IMAP_PASSWORD" :error="form.errors.IMAP_PASSWORD" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('IMAP Password')" />
                </div>
                <div class="p-8 flex flex-wrap">
                    <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                        <div class="font-bold text-sm mb-1">{{ $t('Email Piping Cronjob Instruction') }} </div>
                        <p class="mt-2 font-light">If you would like to create automatically ticket from sending email you need set a cron job for that which one run like every 3 minute.</p>
                        <code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/3 * * * * /usr/bin/php artisan command:piping_email</code>

                        <p class="mt-3 font-light">For the shared hosting like cPanel or any panel server you can call url as like this</p>
                        <code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/3	* *	* *	wget -q -O - https://website.com/cron/piping >/dev/null 2>&1</code>
                        <img src="/images/cron_job_example.png" alt="cron job example" />
                    </div>
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
        keys: Object,
        option: Object,
        demo: Boolean,
    },
    remember: 'form',
    data() {
        return {
            form: this.$inertia.form({
                IMAP_HOST: this.keys['IMAP_HOST']['value'],
                IMAP_PORT: this.keys['IMAP_PORT']['value'],
                IMAP_PROTOCOL: this.keys['IMAP_PROTOCOL']['value'],
                IMAP_ENCRYPTION: this.keys['IMAP_ENCRYPTION']['value'],
                IMAP_USERNAME: this.keys['IMAP_USERNAME']['value'],
                IMAP_PASSWORD: this.keys['IMAP_PASSWORD']['value'],
                enable_piping: this.option
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('settings.piping.update'), {
                onSuccess: () => {
                    axios.get(this.route('clear.cache','config')).then((response) => {})
                }
            })
        },
    },
}
</script>
