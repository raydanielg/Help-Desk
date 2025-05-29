<template>
    <div>
        <Head title="Services" />
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
                                <span class="btn-indigo border-gray-200 float-right inline-block rounded-full mt-1 mb-1 cursor-pointer" @click="newService">
                                    + Add New
                                </span>
                                <fieldset class="border border-solid border-gray-200 p-4 w-full mb-3 relative" v-for="(service, si) in form.html.services" :key="si">
                                    <legend class="text-sm">Service {{ si+1 }}</legend>
                                    <span class="remove cursor-pointer items-center bg-red-700 rounded-full w-6 h-6 inline-flex justify-center absolute top-[-20px] right-[-10px] fill-white" @click="removeService(si)"><icon name="dash" class="w-4 h-5" /></span>
                                    <div class="flex flex-col md:flex-row">
                                        <text-input v-model="service.name" class="pr-6 w-full lg:w-2/3" :label="$t('Name')" />
                                        <text-input v-model="service.icon" class=" w-full lg:w-1/3" :label="$t('Icon')" />
                                    </div>
                                    <textarea-input name="content" v-model="service.details" class="pt-3 w-full" :rows="2" :label="$t('Details')"></textarea-input>
                                </fieldset>
                            </div>
<!--                            <div class=" p-4 t-content" :class="{'active': tabs[1].active}">-->
<!--                                <text-input v-model="form.html.contact.tag" class="pr-6 pb-8 pt-5 w-full" :label="$t('Tag')" />-->
<!--                                <text-input v-model="form.html.contact.title" class="pr-6 pb-8 pt-5 w-full" :label="$t('Title')" />-->
<!--                                <textarea-input name="content" v-model="form.html.contact.details" :rows="3" class="pr-6 pb-8 w-full" :label="$t('Details')"></textarea-input>-->
<!--                            </div>-->
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
                {'name': 'Services', 'active': true},
                // {'name': 'Contact', 'active': false},
            ],
            services:[
                {
                    'name': '', 'icon': '', 'details': ''
                }
            ],
            form: this.$inertia.form({
                title: 'Services',
                slug: 'services',
                is_active: this.page.is_active,
                html: JSON.parse(this.page.html),
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('front_pages.update', 'services'))
        },
        activeTab(index){
            for (const tab_item of this.tabs) {
                tab_item.active = false
            }
            this.tabs[index].active = true;
        },
        newService(){
            this.form.html.services.push({'name': '', 'icon': '', 'details': ''})
        },
        removeService(index){
            this.form.html.services.splice(index, 1)
        }
    },
}
</script>
