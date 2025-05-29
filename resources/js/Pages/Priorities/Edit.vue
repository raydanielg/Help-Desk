<template>
  <div>
      <Head :title="$t(title)" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Name')" />
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <button class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">{{ $t('Delete Priority') }}
            </button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update Priority') }}
            </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import { Link, Head } from '@inertiajs/vue3'
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
      Head,
  },
  layout: Layout,
  props: {
      title: String,
    priority: Object,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
          name: this.priority.name,
      }),
    }
  },
  created() {
  },
  methods: {
    update() {
      this.form.put(this.route('priorities.edit', this.priority.id))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this priority?')) {
        this.$inertia.delete(this.route('priorities.destroy', this.priority.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this priority?')) {
        this.$inertia.put(this.route('priorities.restore', this.priority.id))
      }
    },
  },
}
</script>
