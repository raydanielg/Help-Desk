<template>
  <div>
      <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-full">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <text-input v-model="form.title" :error="form.errors.title" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Title')" />
              <select-input v-model="form.type_id" :error="form.errors.type_id" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Ticket Type')" :required="true">
                  <option :value="null">{{ $t('Select type') }}</option>
                  <option v-for="s in types" :key="s.id" :value="s.id">{{ s.name }}</option>
              </select-input>

              <div class="pr-6 pb-8 w-full">
                  <label class="form-label" >{{ $t('Details') }}:</label>
                  <ckeditor id="kbDetails" :editor="editor" v-model="form.details" :error="form.errors.details" :config="editorConfig"></ckeditor>
              </div>
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <button class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete knowledge base</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Update knowledge base</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import TextareaInput from '@/Shared/TextareaInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { Link, Head } from '@inertiajs/vue3'

import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as LNK, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';

import UploadAdapter from '@/Shared/UploadAdapter.vue';

export default {
  components: {
    LoadingButton,
      SelectInput,
      TextareaInput,
      TextInput,
    Link,
      Head,
      Ckeditor,
  },
  layout: Layout,
  props: {
      knowledge_base: Object,
      title: String,
      types: Array,
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
      form: this.$inertia.form({
          title: this.knowledge_base.title,
          type_id: this.knowledge_base.type_id,
          details: this.knowledge_base.details,
      }),
    }
  },
  methods: {
    update() {
      this.form.post(this.route('knowledge_base.update', this.knowledge_base.id))
    },

      uploader(editor) {
          editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
              return new UploadAdapter( loader );
          };
      },

    destroy() {
      if (confirm('Are you sure you want to delete this knowledge base?')) {
        this.$inertia.delete(this.route('knowledge_base.destroy', this.knowledge_base.id))
      }
    },
  },
}
</script>
