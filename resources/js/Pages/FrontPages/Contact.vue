<template>
    <div>
        <Head title="Contact" />
        <div class="bg-white rounded-md shadow overflow-hidden mr-2">
            <form @submit.prevent="update">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <!-- This is an example component -->
                    <div class="w-full mx-auto">

                        <div class="border-b border-gray-200 dark:border-gray-700 tab-head">
                            <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li class="mr-2" role="presentation" v-for="(tab, ti) in tabs" :key="ti">
                                    <div class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" :class="{'active': tab.active }" @click="activeTab(ti)">{{ tab.name }}</div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class=" p-4 t-content" :class="{'active': tabs[0].active}">
                                <text-input v-model="form.html.content_text" class="pr-6 pb-8 pt-5 w-full lg:w-1/3" :label="$t('Text')" />
                                <textarea-input name="content" v-model="form.html.content_details" class="pr-6 pb-8 w-full" :label="$t('Details')"></textarea-input>
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[1].active}">
                                <text-input v-model="form.html.location" class="pr-6 pb-8 pt-5 w-full " :label="$t('Location address')" />
                                <text-input v-model="form.html.location_map" class="pr-6 pb-8 pt-5 w-full " :label="$t('Location map')" />
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[2].active}">
                                <text-input v-model="form.html.phone" class="pr-6 pb-8 pt-5 w-full lg:w-1/3" :label="$t('Phone number')" />
                                <textarea-input name="content" v-model="form.html.phone_details" class="pr-6 pb-8 w-full" :label="$t('Details')"></textarea-input>
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[3].active}">
                                <text-input v-model="form.html.email" class="pr-6 pb-8 pt-5 w-full lg:w-1/3" :label="$t('Email address')" />
                                <textarea-input name="content" v-model="form.html.email_details" class="pr-6 pb-8 w-full" :label="$t('Email details')"></textarea-input>
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[4].active}">
                                <text-input v-model="form.html.contact_recipient" class="pr-6 pb-8 pt-5 w-full lg:w-1/3" :label="$t('Recipient Email (for the contact form)')" />
                            </div>
                        </div>

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
import TextareaInput from '@/Shared/TextareaInput.vue'

export default {
    metaInfo: { title: 'Contact' },
    components: {
        Icon,
        Link,
        Head,
        Pagination,
        TextInput,
        SelectInput,
        LoadingButton,
        TextareaInput,
    },
    layout: Layout,
    props: {
        page: Object,
    },
    remember: 'form',
    data() {
        return {
            tabs:[
                {'name': 'Content', 'active': true},
                {'name': 'Location', 'active': false},
                {'name': 'Phone', 'active': false},
                {'name': 'Email', 'active': false},
                {'name': 'Contact Form', 'active': false},
            ],
            form: this.$inertia.form({
                title: 'Contact',
                slug: 'contact',
                is_active: this.page.is_active,
                html: JSON.parse(this.page.html),
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('front_pages.update', 'contact'))
        },
        activeTab(index){
            for (const tab_item of this.tabs) {
                tab_item.active = false
            }
            this.tabs[index].active = true;
        }
    },
}
</script>
