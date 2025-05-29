<template>
    <div>
        <Head :title="$t('terms_of_services')" />
        <div class="bg-white rounded-md shadow overflow-hidden mr-2">
            <form @submit.prevent="update">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <text-input v-model="form.html.title" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Title')" />
                    <div class="pr-6 pb-8 w-full">
                        <label class="form-label" >Page Content:</label>
                        <ckeditor :editor="editor" v-model="form.html.content" :config="editorConfig"></ckeditor>
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
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';

import UploadAdapter from '@/Shared/UploadAdapter.vue';

export default {
    metaInfo: { title: 'Contact' },
    components: {
        Link,
        Head,
        TextInput,
        LoadingButton,
        Ckeditor,
    },
    layout: Layout,
    props: {
        page: Object,
    },
    remember: 'form',
    data() {
        return {
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
            tabs:[
                {'name': 'Overview', 'active': true},
                {'name': 'List Information', 'active': false},
                {'name': 'Bottom', 'active': false},
            ],
            form: this.$inertia.form({
                title: 'Terms of Services',
                slug: 'terms',
                is_active: this.page.is_active,
                html: JSON.parse(this.page.html),
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('front_pages.update', 'terms'))
        },
        uploader(editor) {
            editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                return new UploadAdapter( loader );
            };
        },
        activeTab(index){
            for (const tab_item of this.tabs) {
                tab_item.active = false
            }
            this.tabs[index].active = true;
        },
    },
    mounted() {

    }
}
</script>
