<template>
    <div>
        <!-- Start Hero -->
        <Head title="Home" />
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold text-white">{{ 'Open a ticket' }}</h1>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div>
                <span class="absolute top-0 left-0 z-[-1]">
                    <img src="/landing/images/header/shape-1.svg" alt="" />
                </span>
                <span class="absolute top-0 right-0 z-[-1]">
                    <img src="/landing/images/header/shape-2.svg" alt="" />
                </span>
            </div>

        </section><!--end section-->

        <!-- Start -->
        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-50">
            <div class="container">
                <form class="card mt-2 p-4 rounded shadow-xl overflow-hidden" @submit.prevent="store" enctype="multipart/form-data">
                    <div class="px-5 pt-8">
                        <div class="flex flex-wrap">
                            <text-input v-model="form.first_name" :error="form.errors.last_name" class="pr-6 pb-5 md:col-span-6 lg:w-1/3" :label="$t('First name')" />
                            <text-input v-model="form.last_name" :error="form.errors.last_name" class="pr-6 pb-5 md:col-span-6 lg:w-1/3" :label="$t('Last name')" />
                            <text-input v-model="form.email" :error="form.errors.email" class=" pb-5 md:col-span-6 lg:w-1/3" :label="$t('Email Address')" />
                            <text-input v-model="form.subject" :error="form.errors.subject" class=" pb-5 w-full lg:w-2/3 pr-6" :label="$t('Subject')" />
                            <select-input v-model="form.type_id" :error="form.errors.type_id" class=" pb-5 pr-6 md:col-span-6 lg:w-1/3" :label="$t('Ticket type')">
                                <option :value="null">{{ $t('Select a type') }}</option>
                                <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
                            </select-input>

                            <select-input v-if="!hide_ticket_fields.includes('department')" @change="getCategories()" v-model="form.department_id" :error="form.errors.department_id" class="pr-6 pb-5 md:col-span-6 lg:w-1/3" :label="$t('Department')">
                                <option :value="null">{{ $t('Select a department') }}</option>
                                <option v-for="department in departments" :key="department.id" :value="department.id">{{ department.name }}</option>
                            </select-input>

                            <select-input ref="category" v-if="form.department_id" @change="getSubCategories()" v-model="form.category_id" :error="form.errors.category_id" class=" pb-5 pr-6 md:col-span-6 lg:w-1/3" :label="$t('Category')">
                                <option :value="null">{{ $t('Select a category') }}</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select-input>

                            <select-input ref="sub_category"  v-if="form.category_id" v-model="form.sub_category_id" :error="form.errors.sub_category_id" class=" pb-5 md:col-span-6 lg:w-1/3" :label="$t('Sub Category')">
                                <option :value="null">{{ $t('Select a sub category') }}</option>
                                <option v-for="category in sub_categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select-input>

                            <div class=" pt-2 pb-8 w-full">
                                <label class="form-label" >{{ $t('Request Details') }}:</label>
                                <ckeditor id="ticketDetails" :editor="editor" v-model="form.details" :error="form.errors.details" :config="editorConfig"></ckeditor>
                            </div>

                        </div>

                        <div class="grid gap-6 mb-6">
                            <div class="flex w-full" v-for="ticket_field in custom_fields" :key="ticket_field.id">
                                <div class="flex flex-col w-full">
                                    <label :for="!['checkbox'].includes(ticket_field.type) ? 'ticket_field_'+ticket_field.id : null" class="block mb-2 text-sm text-gray-900 dark:text-white">{{ ticket_field.label }} <small class="pl-2 text-xs" v-if="!ticket_field.required">(optional)</small></label>
                                    <input v-if="['text', 'email', 'number'].includes(ticket_field.type)" v-model="form.custom_field[ticket_field.name]" :type="ticket_field.type" :id="'ticket_field_'+ticket_field.id" :placeholder="ticket_field.placeholder" :required="ticket_field.required" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"  />
                                    <textarea v-if="ticket_field.type === 'textarea'" :id="'ticket_field_'+ticket_field.id" rows="2" v-model="form.custom_field[ticket_field.name]" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" :placeholder="ticket_field.placeholder"></textarea>
                                    <p v-if="ticket_field.hint" class="mt-1 text-sm text-gray-500 dark:text-gray-300" >{{ ticket_field.hint }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Attachments -->
                        <input ref="file" type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, .zip" class="hidden" multiple="multiple" @change="fileInputChange" />
                        <div class="pr-6 pb-8 w-full lg:w-full flex-col">
                            <button type="button" class="btn flex justify-center items-center border-0" @click="fileBrowse">
                                <icon name="file" class="flex-shrink-0 h-8 fill-gray-400 pr-1" /> <h4>{{ $t('Attach files') }}</h4>
                            </button>
                            <div v-if="form.files.length" class="flex items-center justify-between pr-6 pt-8 w-full lg:w-1/2" v-for="(file, fi) in form.files" :key="fi">
                                <div class="flex-1 pr-1">
                                    {{ file.name }} <span class="text-gray-500 text-xs">({{ getFileSize(file.size) }})</span>
                                </div>
                                <button type="button" class="btn flex justify-center items-center" @click="fileRemove(file, fi)">
                                    {{ $t('Remove') }}</button>
                            </div>
                        </div>
                        <!-- Attachments -->

                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" v-model="accept_terms" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                            </div>
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('I agree with the') }} <a :href="this.route('terms_service')" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">{{ $t('terms and conditions') }}</a></label>
                        </div>
                    </div>
                    <div class="px-4 py-4 border-t border-gray-100 flex justify-end">
                        <loading-button :loading="form.processing" class="rounded-lg bg-primary py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80" type="submit">{{ $t('Submit') }}</loading-button>
                    </div>

                </form>
            </div>
        </section>

    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Logo from '@/Shared/Logo.vue'
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';

import UploadAdapter from '@/Shared/UploadAdapter.vue';

export default {
    metaInfo: { title: 'Home' },
    layout: Layout,
    components: {
        Logo,
        Icon,
        LoadingButton,
        SelectInput,
        TextInput,
        Head,
        Link,
        Ckeditor,
    },
    props: {
        all_categories: Array,
        departments: Array,
        types: Array,
        title: String,
        hide_ticket_fields: Array,
        auth: Object,
        custom_fields: Object,
    },
    remember: 'form',
    data() {
        return {
            editor: ClassicEditor,
            accept_terms: false,
            categories: [],
            sub_categories: [],
            editorConfig: {
                plugins: [ Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote ],
                toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'insertTable', 'blockQuote', '|', 'imageUpload', 'mediaEmbed', '|', 'undo', 'redo' ],
                table: {
                    toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                },
                extraPlugins: [function uploader(editor) {
                    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                        return new UploadAdapter( loader );
                    };
                },],
            },
            form: this.$inertia.form({
                first_name: '',
                last_name: '',
                email: '',
                department_id: null,
                category_id: null,
                sub_category_id: null,
                type_id: null,
                subject: null,
                details: '',
                files: [],
                custom_field: {}
            }),
        }
    },

    methods: {
        getCategories(){
            this.categories = this.all_categories.filter(cat=>cat.department_id === this.form.department_id)
            this.form.category_id = null;
            this.$refs.category.selected = null;
        },
        getSubCategories(){
            this.sub_categories = this.all_categories.filter(cat=>cat.parent_id === this.form.category_id)
            this.form.sub_category_id = null;
            this.$refs.sub_category.selected = null;
        },
        uploadFiles() {
            this.form.files = this.$refs.files.files
        },
        store() {
            if(!this.accept_terms){
                alert('You must need to accept the terms and condition.')
            }
            this.form.post(this.route('ticket_store'),{
                onSuccess: () => {
                    this.form.reset()
                },
                // form.reset()
            })
        },
        fileInputChange(e) {
            let selectedFiles = e.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                this.form.files.push(selectedFiles[i]);
            }
        },
        fileRemove(image, index) {
            this.form.files.splice(index, 1);
        },
        getFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024))
            return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
        },
        fileBrowse() {
            this.$refs.file.click()
        },
    },

    created() {
        if(this.auth.user){
            this.form.first_name = this.auth.user.first_name;
            this.form.last_name = this.auth.user.last_name;
            this.form.email = this.auth.user.email;
        }
        for (let cf_c = 0; cf_c < this.custom_fields.length; cf_c++) {
            if(this.custom_fields[cf_c.name]){
                this.form.custom_field[this.custom_fields[cf_c.name]] = '';
            }
        }
    }
}
</script>




