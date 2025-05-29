<template>
    <div>
        <Head :title="$t('Footer Area')" />
        <div class="bg-white rounded-md shadow overflow-hidden mr-2">
            <form @submit.prevent="update">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <textarea-input :rows="3" v-model="form.html.text" class="pr-6 pb-8 w-full" :label="$t('Footer text')" />
                </div>
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <text-input v-model="form.html.copyright" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Copyright info')" />
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
import TextareaInput from "@/Shared/TextareaInput.vue";

import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';

import UploadAdapter from '@/Shared/UploadAdapter.vue';

export default {
    metaInfo: { title: 'Footer Area' },
    components: {
        TextareaInput,
        Link,
        Head,
        TextInput,
        LoadingButton,
        Ckeditor
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
                title: 'Footer Area',
                slug: 'footer',
                is_active: this.page.is_active,
                html: JSON.parse(this.page.html),
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('front_pages.update', 'footer'))
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
