<template>
    <div>
        <Head title="Home" />
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
                                <text-input v-model="form.html.sections[0].title" class="pr-6 pb-8 pt-5 w-full" :label="$t('Title')" />
                                <textarea-input name="content" v-model="form.html.sections[0].details" class="pr-6 pb-8 w-full" :label="$t('Details')"></textarea-input>
                                <div class="flex justify-between">
                                    <h2 class="flex text-lg font-bold">Action buttons</h2>
                                    <span class="btn-indigo border-gray-200 rounded-full mt-1 mb-1 cursor-pointer" @click="newButton(0)"> + Add New </span>
                                </div>
                                <fieldset class="border border-solid border-gray-200 p-4 w-full mb-3 relative" v-for="(button, si) in form.html.sections[0].buttons" :key="si">
                                    <legend class="text-sm">Button {{ si+1 }}</legend>
                                    <span class="remove cursor-pointer items-center bg-red-700 rounded-full w-6 h-6 inline-flex justify-center absolute top-[-20px] right-[-10px] fill-white" @click="removeButton(0, si)"><icon name="dash" class="w-4 h-5" /></span>
                                    <div class="flex flex-col md:flex-row">
                                        <text-input v-model="button.text" class="pr-6 w-full lg:w-1/3" :label="$t('Text')" />
                                        <text-input v-model="button.link" class=" w-full lg:w-1/3" :label="$t('Link')" />
                                        <div class="flex items-center pl-5 pt-5 w-full lg:w-1/3">
                                            <label class="flex toggle_swtich items-center cursor-pointer">
                                                <div class="relative">
                                                    <input type="checkbox" class="sr-only" v-model="button.new_tab" />
                                                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                    <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    Open in new tab
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="flex flex-col">
                                    <h2 class="flex text-lg font-bold">Section Image</h2>
                                    <!-- Attachments -->
                                    <input ref="section0image" type="file" accept="image/*" class="hidden" multiple="multiple" @change="fileInputChange($event, 0)" />
                                    <div class="pb-8 w-full lg:w-full flex-col">
                                        <button type="button" class="btn flex justify-center items-center border-0" @click="fileBrowse(0)">
                                            <icon name="image" class="flex-shrink-0 h-8 fill-gray-400 pr-1" /> <h4>{{ $t(form.html.sections[0].image?'Change Image':'Add Image') }}</h4>
                                        </button>
                                        <div v-if="form.html.sections[0].image" class="flex items-center justify-between w-full lg:w-1/2">
                                            <img :src="form.html.sections[0].image" alt="Section Image" style="height: 200px; width: auto" />
                                        </div>
                                    </div>
                                    <!-- Attachments -->
                                </div>
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[1].active}">
                                <text-input v-model="form.html.sections[1].tagline" class="pr-6 pb-8 pt-5 w-full" :label="$t('Tagline')" />
                                <text-input v-model="form.html.sections[1].title" class="pr-6 pb-8 pt-5 w-full" :label="$t('Title')" />
                                <textarea-input name="content" v-model="form.html.sections[1].details" class="pr-6 pb-8 w-full" :label="$t('Details')"></textarea-input>
                                <div class="flex justify-between">
                                    <h2 class="flex text-lg font-bold">Feature List</h2>
                                    <span class="btn-indigo border-gray-200 rounded-full mt-1 mb-1 cursor-pointer" @click="newFeature(1)"> + Add New </span>
                                </div>
                                <fieldset class="border border-solid border-gray-200 p-4 w-full mb-3 relative" v-for="(feature, si) in form.html.sections[1].features" :key="si">
                                    <legend class="text-sm">Feature {{ si+1 }}</legend>
                                    <span class="remove cursor-pointer items-center bg-red-700 rounded-full w-6 h-6 inline-flex justify-center absolute top-[-20px] right-[-10px] fill-white" @click="removeFeature(1, si)"><icon name="dash" class="w-4 h-5" /></span>
                                    <div class="flex flex-col md:flex-row">
                                        <select-input v-model="feature.icon" :error="form.errors.icon" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Icon')">
                                            <option v-for="(l, li) in icons" :key="li" :value="l">{{ l }}</option>
                                        </select-input>
                                        <text-input v-model="feature.title" class="pr-6 w-full lg:w-1/3" :label="$t('Title')" />
                                        <textarea-input name="content" v-model="feature.details" class="w-full lg:w-1/3" :label="$t('Details')"></textarea-input>
                                    </div>
                                </fieldset>
                            </div>
                            <div class=" p-4 t-content" :class="{'active': tabs[2].active}">
                                <div class="flex flex-col items-start gap-[30px] pl-5 pt-5 w-full lg:w-1/3">
                                    <label class="flex toggle_swtich items-center cursor-pointer">
                                        <div class="relative">
                                            <input type="checkbox" class="sr-only" v-model="form.html.sections[2].enable_ticket_section" />
                                            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            {{ 'Enable Ticket Section' }}
                                        </div>
                                    </label>
<!--                                    <label class="flex toggle_swtich items-center cursor-pointer mb-5">-->
<!--                                        <div class="relative">-->
<!--                                            <input type="checkbox" class="sr-only" v-model="form.html.sections[2].login_require_create_ticket" />-->
<!--                                            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>-->
<!--                                            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>-->
<!--                                        </div>-->
<!--                                        <div class="ml-3 text-sm">-->
<!--                                            {{ 'Login Require to create a new ticket' }}-->
<!--                                        </div>-->
<!--                                    </label>-->
                                </div>
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
import axios from 'axios'

export default {
    metaInfo: { title: 'Home' },
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
            icons: ['apple', 'book', 'cheveron-down', 'cheveron-right', 'location', 'office', 'shopping-cart', 'store-front', 'trash', 'service', 'category', 'status', 'ticket', 'contact', 'faq', 'chat', 'knowledge', 'home', 'clock', 'settings', 'dashboard', 'edit', 'up', 'down', 'tick', 'cross', 'close', 'file', 'users', 'all_users', 'types', 'notes', 'plus', 'dash', 'check', 'post', 'no_image', 'to_up', 'angle-up', 'gear', 'phone', 'email', 'user', 'security', 'airplay', 'compass', 'aperture', 'camera', 'palette', 'login', 'page', 'send', 'send_plan', 'user_role', 'global_setting', 'image'],
            tabs:[
                {'name': 'Section 1', 'active': true},
                {'name': 'Section 2', 'active': false},
                {'name': 'Section 3', 'active': false},
            ],
            form: this.$inertia.form({
                title: 'Home',
                slug: 'home',
                is_active: this.page.is_active,
                html: JSON.parse(this.page.html),
                // html: {'sections' : [
                //         {'title': 'Make your working process easier with <span>HelpDesk</span>', 'details': 'It\'s much easier now to create, assign, manage and resolve tickets with HelpDesk. You just need to host this web application on any hosting server of your choice and use it.', buttons: [
                //                 { 'text': 'Login HelpDesk', 'link': '/login', 'new_tab': 'on' },
                //                 { 'text': 'Submit ticket', 'link': '/ticket/open', 'new_tab': 'on' },
                //             ],
                //             'image' : null
                //         },
                //         {'title': 'How It Work ?', 'details': 'You can create a ticket with logged-in on the Dashboard as an existing user or create a ticket as a new user from this front page.',
                //             'title_2': 'You can do following with this HelpDesk', 'details_2': 'Manage tickets\n' +
                //                 'Chat with customers\n' +
                //                 'Manage your marketing contacts and organizations\n' +
                //                 'Manage your blog posts', buttons: [
                //                 { 'text': 'Login HelpDesk', 'link': '/login', 'new_tab': 'on' },
                //             ],
                //             'image' : null },
                //         {'enable_ticket_section': true},
                //         {'title': 'Have Question ? Get in touch!', 'details': 'Start working with HelpDesk that can provide everything you need to generate awareness, drive traffic, connect.', buttons: [
                //                 { 'text': 'Contact us', 'link': '/contact', 'new_tab': 'on' },
                //             ]},
                //     ]}
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('front_pages.update', 'home'))
        },
        activeTab(index){
            for (const tab_item of this.tabs) {
                tab_item.active = false
            }
            this.tabs[index].active = true;
        },
        newButton(index){
            if(this.form.html.sections[index] && this.form.html.sections[index].buttons){
                this.form.html.sections[index].buttons.push({'name': '', 'icon': '', 'details': ''})
            }
        },
        newFeature(index){
            if(this.form.html.sections[index] && this.form.html.sections[index].features){
                this.form.html.sections[index].features.push({'icon': '', 'title': '', 'details': ''})
            }
        },
        removeButton(si, index){
            if(this.form.html.sections[si] && this.form.html.sections[si].buttons){
                this.form.html.sections[si].buttons.splice(index, 1)
            }
        },
        removeFeature(si, index){
            if(this.form.html.sections[si] && this.form.html.sections[si].features){
                this.form.html.sections[si].features.splice(index, 1)
            }
        },
        fileInputChange(e, index) {
            let selectedFiles = e.target.files;
            this.form.processing = true
            if(selectedFiles.length){
                let data = new FormData()
                data.append('image', selectedFiles[0]);
                axios.post(this.route('upload.image'), data).then(( response ) => {
                    if(response.data && response.data.image){
                        this.form.html.sections[index].image = response.data.image;
                        this.form.processing = false
                    }else{
                        alert('something went wrong!')
                        this.form.processing = false
                    }
                }).catch((error) => {
                    this.form.processing = false
                    console.log(error)
                })
            }
        },
        fileRemove(index) {
            this.form.html.sections[index].image = null
        },
        getFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024))
            return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
        },
        fileBrowse(index) {
            this.$refs['section'+index+'image'].click()
        },
    },
    created() {
        this.form.html.sections.map((section, index)=>{
            if(section.buttons && section.buttons.length){
                for (let i = 0; i < section.buttons.length; i++){
                    section.buttons[i].new_tab = !!section.buttons[i].new_tab
                }
            }
            section.enable_ticket_section = !!section.enable_ticket_section
            section.login_require_create_ticket = !!section.login_require_create_ticket
            return section
        })
    }
}
</script>
