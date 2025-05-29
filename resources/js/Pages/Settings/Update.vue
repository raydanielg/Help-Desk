<template>
  <div class="sec-cont">
    <Head :title="title" />
    <div class="bg-white rounded-md shadow overflow-hidden mr-2">
        <form @submit.prevent="update">
        <div class="py-8 px-6 flex m-auto flex-col gap-4 text-sm">
            <div class="flex flex-col">
                <span class="font-bold">Your current version: {{ current_version }}</span>
            </div>
            <p class="leading-6">
                Please click on the "Check update" button to get the latest update information.
            </p>
            <div class="flex flex-col" v-if="latest_version">
                <span class="font-bold pb-3">Latest Envato version: {{ latest_version }}</span>
                <h4 class="font-bold underline pb-1">Manual update instruction</h4>
                <p class="leading-6">
                    We don't want to auto update all files to messed up your changes if you made your own.
                    You will see here all of the files that made changes on the latest releases.
                    <hr class="my-1">
                    Just download the latest files from the CodeCanyon and replace the following changed files from those downloaded files.
                    After replace the file please set the version number to your `.env` file.
                </p>
            </div>
        </div>
            <div class="relative overflow-x-auto" v-if="files.length">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Changes files
                        </th>
                        <th scope="col" class="px-6 py-3">
                            New file?
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Is the file deleted?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(file, fi) in this.files" :key="fi" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ file.new_path || file.old_path }}
                        </th>
                        <td class="px-6 py-4">
                            {{ file.new_file }}
                        </td>
                        <td class="px-6 py-4">
                            {{ file.deleted_file }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="py-2 px-6" v-else>{{ $t('No new update found!') }}</div>

            <div class="mt-5 px-8 py-4 bg-gray-50 border-t border-gray-100 flex gap-2 items-center">
                <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ $t('Check Update') }}</loading-button>
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
import axios from 'axios'

export default {
  metaInfo: { title: 'Priorities' },
  components: {
    Icon,
    Link,
      Head,
    Pagination,
      TextInput,
      SelectInput,
      LoadingButton,
  },
  layout: Layout,
  props: {
      title: String,
      demo: Boolean,
      current_version: { required: false },
  },
    remember: 'form',
  data() {
    return {
        files: [],
        latest_version: '',
        form: this.$inertia.form({
            processing: false,
        }),
    }
  },
  methods: {
      update() {
          this.form.processing = true;
          axios.post(this.route('settings.update.check'),{}).then((response) => {
              const data = response.data;
              this.files = [].concat(data.files)
              if(data.version){
                  this.latest_version = data.version
              }
              this.form.processing = false;
          }).catch((error) => {
              console.log(error)
          })
      },
  },
    created() {
      console.log(this.demo)
    }
}
</script>
