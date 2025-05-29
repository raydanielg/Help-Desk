<template>
    <div>
        <Head :title="$t(title)" />
        <div class="flex flex-wrap">
            <div class="max-w-full lg:w-3/5">
                <form @submit.prevent="update" class="bg-white rounded-md shadow overflow-hidden mr-2">
                    <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                        <!--Super Admin -->
                        <select-edit-input v-if="auth.user.role.slug !== 'customer'" placeholder="Search customer" :onInput="doFilter" :items="customers"
                                             v-model="form.user_id" :error="form.errors.user_id"
                                             class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Customer')"
                                           :value="ticket.user" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input placeholder="Search priority" :items="priorities"
                                           v-model="form.priority_id" :error="form.errors.priority_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Priority')"
                                           :value="ticket.priority" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input v-if="auth.user.role.slug !== 'customer' && !(hidden_fields && hidden_fields.includes('assigned_to'))" placeholder="Search user" :onInput="doFilterUsersExceptCustomer" :items="usersExceptCustomers"
                                           v-model="form.assigned_to" :error="form.errors.assigned_to"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Assigned to')"
                                           :value="ticket.assigned_user??'Not Assigned'" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input placeholder="Select status to change" :items="statuses"
                                           v-model="form.status_id" :error="form.errors.status_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Status')"
                                           :value="ticket.status?ticket.status.name:'N/A'" :editable="auth.user.role.slug !== 'customer' && user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input v-if="!(hidden_fields && hidden_fields.includes('ticket_type'))" placeholder="Search type" :items="types"
                                           v-model="form.type_id" :error="form.errors.type_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Ticket type')"
                                           :value="ticket.type" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input v-if="!(hidden_fields && hidden_fields.includes('department'))" @change="getCategories()" placeholder="Search department" :items="departments"
                                           v-model="form.department_id" :error="form.errors.department_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Department')"
                                           :value="ticket.department" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input ref="category" v-if="!(hidden_fields && hidden_fields.includes('category')) && form.department_id" @change="getSubCategories()" placeholder="Search category" :items="categories"
                                           v-model="form.category_id" :error="form.errors.category_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Category')"
                                           :value="ticket.category" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <select-edit-input ref="sub_category" v-if="!(hidden_fields && hidden_fields.includes('category')) && form.category_id" placeholder="Search category" :items="sub_categories"
                                           v-model="form.sub_category_id" :error="form.errors.sub_category_id"
                                           class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Sub Category')"
                                           :value="ticket.sub_category" :editable="user_access.ticket.update && !ticket.closed">
                        </select-edit-input>

                        <div class="assigned_user pr-6 pb-8 w-full lg:w-1/3 flex flex-col">
                            <div class="font-bold text-sm mb-1">{{ $t('Created') }} </div>
                            <div class="font-light text-sm">{{ moment(ticket.created_at).fromNow() }}</div>
                        </div>

                        <div v-for="entry in entries" class="assigned_user pr-6 pb-8 w-full lg:w-1/3 flex flex-col" :key="entry.id">
                            <div class="font-bold text-sm mb-1">{{ $t(entry.label) }} </div>
                            <div class="font-light text-sm">{{ entry.value }}</div>
                        </div>

                        <text-edit-input :editable="user_access.ticket.update && !ticket.closed" v-model="form.subject" :value="ticket.subject" :error="form.errors.subject" class="pr-6 pb-8 w-full lg:w-2/3" :label="$t('Subject')" />


                        <div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col">
                            <div class="w-25 flex gap-3">
                                <label class="form-label" >{{ $t('Request Details') }}</label>
                                <icon v-if="!enableEditor && user_access.ticket.update && !ticket.closed" name="edit" @click="enableEditor=!enableEditor" class="w-4 h-4 mr-1 cursor-pointer" />
                            </div>
                            <div v-if="!enableEditor" class="font-light text-sm" v-html="ticket.details"></div>
                            <div v-if="enableEditor" class="w-25 flex items-center ticket_details_area">
                                <ckeditor id="ticketDetails" :editor="editor" v-model="form.details" :config="editorConfig"></ckeditor>
                                <div class="w-4 h-4 cursor-pointer">
                                    <icon @click="enableEditor=false" name="close" class="w-4 h-4 ml-2 cursor-pointer" />
                                </div>
                            </div>
                        </div>


                        <!-- Super Admin Comment -->
                        <input ref="file" type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, .zip" class="hidden" multiple="multiple" @change="fileInputChange" />
                        <div class="pr-6 pb-8 w-full lg:w-full flex-col">
                            <button type="button" class="btn flex justify-center items-center pb-3 border-0 pl-0" @click="fileBrowse">
                                <icon name="file" class="flex-shrink-0 h-5 fill-gray-400 pr-1" /> <strong>{{ $t('Attach File') }}</strong>
                            </button>
                            <div v-if="attachments.length" class="flex items-center justify-between pr-6 pt-8 w-full" v-for="(file, fi) in attachments" :key="fi">
                                <div class="flex-1 pr-1">
                                    {{ file.name }} <span class="text-gray-500 text-xs">({{ getFileSize(file.size) }})</span> <a v-if="file.user" class="text-sm" :href="this.route('users.edit', file.user.id)">{{ file.user.first_name }} {{ file.user.last_name }}</a> at <span class="text-sm">{{ file.created_at }}</span>
                                </div>
                                <div class="a__buttons flex justify-end items-center ">
                                    <button type="button" class="btn flex items-center " @click="downloadAttachment(file)">
                                        {{ $t('Download') }}</button>
                                    <button type="button" class="btn flex items-center ml-3" @click="removeAttachment(file, fi)">
                                        {{ $t('Remove') }}</button>
                                </div>
                            </div>
                            <div v-if="form.files.length" class="flex items-center justify-between pr-6 pt-8 w-full lg:w-1/2" v-for="(file, fi) in form.files" :key="fi">
                                <div class="flex-1 pr-1">
                                    {{ file.name }} <span class="text-gray-500 text-xs">({{ getFileSize(file.size) }})</span>
                                </div>
                                <button v-if="user_access.ticket.delete && ticket.status && !ticket.closed" type="button" class="btn flex justify-center items-center" @click="fileRemove(file, fi)">
                                    {{ $t('Remove') }}</button>
                            </div>
                        </div>

                        <div class="pr-6 pb-8 w-full lg:w-1/3 flex items-center" v-if="ticket.status && ticket.closed && ticket.review">
                            <strong>{{ $t('Rating') }}: </strong> &nbsp; {{ ticket.review.rating }}
                            <p>
                                {{ ticket.review.review }}
                            </p>
                        </div>

                        <div class="flex flex-col w-full" v-if="ticket.status && ticket.closed && !ticket.review && auth.user.role.slug === 'customer'">
                            <div class="assigned_user star__review pb-5 w-full lg:w-1/3 flex flex-col">
                                <div class="font-bold">{{ $t('How do you rate this support service?') }} </div>
                                <div class="star-rating pt-5">
                                    <input type="radio" id="5-stars" name="rating" v-model="form.rating" value="5" />
                                    <label for="5-stars" class="star">&#9733;</label>
                                    <input type="radio" id="4-stars" name="rating" v-model="form.rating" value="4" />
                                    <label for="4-stars" class="star">&#9733;</label>
                                    <input type="radio" id="3-stars" name="rating" v-model="form.rating" value="3" />
                                    <label for="3-stars" class="star">&#9733;</label>
                                    <input type="radio" id="2-stars" name="rating" v-model="form.rating" value="2" />
                                    <label for="2-stars" class="star">&#9733;</label>
                                    <input type="radio" id="1-star" name="rating" v-model="form.rating" value="1" />
                                    <label for="1-star" class="star">&#9733;</label>
                                </div>
                            </div>
                            <textarea-input v-model="form.review" :error="form.errors.review" class="pr-6 pb-4 w-full lg:w-1/3" :label="$t('Feedback')" />
                            <div class="flex lg:w-1/4 mb-4"><button class="btn-indigo" type="submit">{{ $t('Submit') }}</button></div>
                        </div>
                    </div>
                    <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
                        <button v-if="user_access.ticket.delete" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">
                            {{ $t('Delete') }}</button>
                        <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Save') }}</loading-button>
                    </div>
                </form>
            </div>
            <div class="max-w-full lg:w-2/5">
                <div class="bg-white rounded-md shadow overflow-hidden ml-2 chat-area comment-box flex-1 flex flex-col">
                    <div class="flex-3">
                        <div class="chat-header flex flex-col pb-3">
                            <h3 class="text-xl">{{ $t('Ticket discussion') }}</h3>
                            <p class="text-sm font-light">{{ $t('Comment histories for this ticket will be available here.') }}</p>
                        </div>
                    </div>
                    <div class="messages flex-1 overflow-auto reverse__order">
                        <div v-for="(comment, index) in comments.slice().reverse()" :key="index" class="message mb-4 flex">
                            <div v-if="comment.user_id !== user.id" class="flex-2">
                                <div class="w-12 h-12 relative">
                                    <span class="w-12 h-12 rounded-full mx-auto user_icon" alt="chat-user" v-if="comment.user">{{ Array.from(comment.user.first_name)[0] }}</span>
                                </div>
                            </div>
                            <div v-if="comment.user_id !== user.id" class="flex-1 px-2 mt__wrap">
                                <h3 class="font-bold pb-2 text-sm pt-1" v-if="comment.user">{{ comment.user.first_name }} {{ comment.user.last_name }}</h3>
                                <div class="inline-block bg-gray-300 user-comment-round p-2 px-3 text-gray-700 leading-5 ckc" v-html="comment.details">

                                </div>
                                <div class="pl-4"><small class="text-gray-500">{{ moment(comment.updated_at).fromNow(true) }}</small></div>
                            </div>

                            <div v-if="comment.user_id === user.id" class="flex-1 mt__wrap px-2 text-right">
                                <div class="inline-block bg-blue rounded p-2 px-3 text-white leading-5 ckc" v-html="comment.details"></div>
                                <div class="pr-4"><small class="text-gray-500">{{ moment(comment.updated_at).fromNow(true) }}</small></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-2 pt-4 pb-3">
                        <div class="write bg-white shadow flex rounded-lg">
                            <div class="flex-1 ticket_comment_edit">
<!--                                <textarea v-model="comment" name="message" @keydown.enter.exact.prevent="submitComment" class="w-full block outline-none py-4 px-4 text-sm bg-transparent overflow-hidden" rows="1" :placeholder="$t('Write a comment and press enter to send...')" autofocus></textarea>-->
                                <ckeditor id="ticketDiscussion" :editor="editor" v-model="comment" name="comment" :config="editorConfig" autofocus></ckeditor>
                            </div>
                            <div class="flex-2 w-35 p-2 flex content-center items-center">
                                <div class="flex-1">
                                    <button class="bg-blue w-10 h-10 rounded-full flex justify-center items-center" @click="submitComment">
                                        <icon class="w-4 h-4 fill-gray-100" name="send"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import TextEditInput from '@/Shared/TextEditInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import TextareaInput from '@/Shared/TextareaInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import SelectInputFilter from '@/Shared/SelectInputFilter.vue'
import SelectEditInput from '@/Shared/SelectEditInput.vue'
import moment from 'moment'
import axios from 'axios'

import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';

import UploadAdapter from '@/Shared/UploadAdapter.vue';


export default {
    components: {
        LoadingButton,
        SelectInput,
        TextInput,
        TextEditInput,
        TextareaInput,
        Link,
        Head,
        Icon,
        SelectInputFilter,
        SelectEditInput,
        Ckeditor,
    },
    layout: Layout,
    props: {
        title: String,
        ticket: Object,
        priorities: Array,
        statuses: Array,
        types: Array,
        departments: Array,
        all_categories: {required: false},
        customers: Array,
        usersExceptCustomers: Array,
        attachments: Array,
        comments: Array,
        auth: Object,
        entries: Object,
        hidden_fields: Object,
    },
    remember: false,
    data() {
        return {
            user: this.$page.props.auth.user,
            type_status: [],
            categories: this.all_categories.filter(cat => cat.department_id === this.ticket.department_id),
            sub_categories: this.all_categories.filter(cat => cat.parent_id === this.ticket.category_id),
            comment: '',
            editCustomer: false,
            enableEditor: false,
            user_access: this.$page.props.auth.user.access,
            editor: ClassicEditor,
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
                user_id: this.ticket.user_id,
                priority_id: this.ticket.priority_id,
                status_id: this.ticket.status_id,
                department_id: this.ticket.department_id,
                category_id: this.ticket.category_id ?? null,
                sub_category_id: this.ticket.sub_category_id,
                assigned_to: this.ticket.assigned_to,
                type_id: this.ticket.type_id,
                subject: this.ticket.subject,
                details: this.ticket.details,
                files: this.ticket.files,
                comments: this.ticket.comments,
                created_at: this.ticket.created_at,
                removedFiles: [],
                rating: 0,
                review: '',
            }),
        }
    },
    created() {
        console.log(this.ticket.category_id);
        if(this.auth.user.role.slug === 'customer' && this.statuses.length){
            this.type_status = this.statuses.filter(status=> (status.id === this.form.status_id) || status.name.match(/Close.*/))
        }else{
            this.type_status = this.statuses
        }
        this.moment = moment;
    },
    methods: {
        getCategories(){
            this.ticket.category = 'N/A';
            this.form.category_id = null;
            this.categories = this.all_categories.filter(cat=>cat.department_id === this.form.department_id)
        },
        getSubCategories(){
            this.sub_categories = this.all_categories.filter(cat=>cat.parent_id === this.form.category_id)
            this.ticket.sub_category = 'N/A';
            // this.$refs.sub_category.value = 'N/A';
            this.form.sub_category_id = null;
        },
        doFilter(e){
            axios.get(this.route('filter.customers', {search: e.target.value})).then((res)=>{
                this.customers.splice(0, this.customers.length, ...res.data);
            })
        },
        doFilterUsersExceptCustomer(e){
            axios.get(this.route('filter.users_except_customer', {search: e.target.value})).then((res)=>{
                this.usersExceptCustomers.splice(0, this.usersExceptCustomers.length, ...res.data);
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
        fileBrowse() {
            this.$refs.file.click()
        },
        downloadAttachment(file) {
            const link = document.createElement("a");
            link.href = window.location.origin + '/files/' + file.path;
            link.download = file.name;
            link.click();
        },
        removeAttachment(file, index) {
            this.attachments.splice(index, 1);
            this.form.removedFiles.push(file.id)
        },
        getFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024))
            return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i]
        },
        uploadFiles() {
            this.form.files = this.$refs.files.files
        },
        update() {
            this.form.post(this.route('tickets.update', this.ticket.id))
            this.form.files = []
            this.form.comment = ''
        },
        destroy() {
            if (confirm('Are you sure you want to delete this ticket?')) {
                this.$inertia.delete(this.route('tickets.destroy', this.ticket.id))
            }
        },
        restore() {
            if (confirm('Are you sure you want to restore this ticket?')) {
                this.$inertia.put(this.route('tickets.restore', this.ticket.id))
            }
        },
        submitComment(){
            var that = this;
            const messageData = {
                comment: this.comment,
                user_id: this.user.id,
                _token: this.$page.props.csrf_token,
                ticket_id: this.ticket.id
            }
            console.log(messageData);
            this.comment = ''
            axios.post(this.route('ticket.comment'), messageData).then((response) => {
                if(response.data){
                    that.comments.push(response.data)
                }
                this.$emit('comment submitted!')
            }).catch((error) => {
                console.log(error)
            })
        },
    },
}
</script>
