<template>
  <div>
    <div class="bg-white rounded-md shadow overflow-hidden max-w-full">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <div class="pr-6 pb-8 w-full lg:w-1/3">
                  <div class="font-bold text-sm mb-1">{{ $t('Name') }} </div>
                  <div class="font-light text-sm"> {{ template.name }} </div>
              </div>
              <div class="pr-6 pb-8 w-full lg:w-2/3">
                  <div class="font-bold text-sm mb-1">{{ $t('Details') }} </div>
                  <div class="font-light text-sm"> {{ template.details }} </div>
              </div>
              <div class="pr-6 pb-8 w-full">
                  <div class="font-bold text-sm mb-1">{{ $t('Email Html') }} </div>
                  <div class="editable-content" contenteditable="true" v-html="template.html" @input="onInput"></div>
              </div>
          </div>
          <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
              <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}
                  {{ $t('Template') }}</loading-button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import { Link } from '@inertiajs/vue3'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  metaInfo() {
    return { title: this.form.name }
  },
  components: {
    LoadingButton,
    TextInput,
    Link,
  },
  layout: Layout,
  props: {
      template: Object,
  },
  remember: 'form',
  data() {
    return {
        editorOptions: {
            debug: 'info',
            modules: {
            },
        },
      form: this.$inertia.form({
          html: this.template.html,
      }),
    }
  },
  methods: {
      onInput(e) {
          this.form.html = e.target.innerHTML;
      },
    update() {
      this.form.put(this.route('templates.update', this.template.id))
    },
  },
}
</script>
