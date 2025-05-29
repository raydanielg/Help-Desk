<template>
  <div>
      <Head :title="$t(title)" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-full">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <div class="pr-6 pb-8 w-full lg:w-1/3">
                  <div class="font-bold text-sm mb-1">{{ $t('Language Name') }} </div>
                  <div class="font-light text-sm"> {{ language_data.name }} </div>
              </div>
              <div class="pr-6 pb-8 w-full lg:w-1/3">
                  <div class="font-bold text-sm mb-1">{{ $t('Code') }} </div>
                  <div class="font-light text-sm"> {{ language_data.code }} </div>
              </div>
              <div class="pr-6 pb-8 w-full lg:w-1/3 flex justify-end">
                  <div class="btn-indigo p-3 rounded-full cursor-pointer ml-auto" @click="addNew">
                      <icon class="w-5 h-5 fill-gray-100" name="plus"></icon>
                  </div>
                  <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}</loading-button>
              </div>
          </div>
          <div class="flex flex-col mb-5 text-sm">
              <div v-for="(lan, li) in form.language_values" :key="li" class="p-8 -mr-6 -mb-8 flex flex-wrap md:flex-nowrap items-center lang_input">
                  <text-input class="pr-6 pb-2 w-full lg:w-1/2" v-model="lan.name" :label="$t('Title')" />
                  <text-input class="pr-6 pb-2 w-full lg:w-1/2" v-model="lan.value" label="Value" />
                  <div class="flex justify-start pr-2 pt-3">
                      <icon name="trash" class="w-4 h-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2" @click="destroy(lan.value)" />
                  </div>
              </div>
          </div>
          <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
              <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}</loading-button>
          </div>
      </form>
        <div v-if="new_lang_form" class="note-form-overlay"></div>
        <div v-if="new_lang_form" class=" note-form py-8 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto">
                <form @submit.prevent="store()">
                    <div class="relative py-10 px-6 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div class="lan_items flex flex-col">
                            <div class="lan__item">
                                <text-input v-model="form.new_data['en']" class=" pb-6 w-full" label="English" />
                            </div>
                            <div class="lan__item">
                                <text-input v-model="form.new_data[language_data.code]" class=" pb-6 w-full" :label="language_data.name" />
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex items-center justify-start w-full">
                                <button type="submit" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">Submit</button>
                                <span class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="new_lang_form = false">Cancel</span>
                            </div>
                        </div>
                        <span @click="new_lang_form = false" class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">
                        <icon class="w-6 h-6" name="close" />
                    </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import { Link, Head } from '@inertiajs/vue3'
import TextInput from '@/Shared/TextInput.vue'
import Icon from '@/Shared/Icon.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    LoadingButton,
    TextInput,
    Link,
      Head,
      Icon,
  },
  layout: Layout,
  props: {
      title: String,
      language_data: Object,
      languages: Object,
  },
  remember: 'form',
  data() {
    return {
        new_lang_form: false,
      form: this.$inertia.form({
          language_values: this.language_data.data,
          new_data: {}
      }),
    }
  },
  methods: {
      addNew(){
          this.languages.forEach(language=>{
              this.form.new_data[language.code] = ''
          })
          this.new_lang_form = true
      },
      destroy(value) {
          if (confirm('Are you sure you want to delete this language data?')) {
              this.$inertia.delete(this.route('languages.deleteItem', value),{
                  onSuccess: () => {
                      this.form.reset()
                  }
              })
          }
      },
      store() {
          const languages = [{'name': 'English', 'code': 'en'}, {'name' : this.language_data.name, 'code': this.language_data.code}]
          for (let len = 0; len < languages.length; len++) {
              if(!this.form.new_data[languages[len]['code']]){
                  alert('Please input text for the '+languages[len]['name']+' language!')
                  return
              }
          }
          this.form.post(this.route('languages.newItem'),{
              onSuccess: () => {
                  this.form.reset()
                  this.new_lang_form = false
              },
          })
      },
    update() {
      this.form.put(this.route('languages.update', this.language_data.id))
    },
  },
}
</script>
