<template>
  <div>
      <Head :title="$t(title)" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="update">
          <div class="p-8 -mb-6 flex ">
              <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Name')" />
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <button v-if="!['closed','pending','processing'].includes(status.slug)" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">
            {{ $t('Delete') }} {{ $t('Status') }}</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }} {{ $t('Status') }}</loading-button>
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
    status: Object,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
          name: this.status.name,
        slug: this.status.slug,
          color: this.status.color,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(this.route('statuses.update', this.status.id))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this status?')) {
        this.$inertia.delete(this.route('statuses.destroy', this.status.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this status?')) {
        this.$inertia.put(this.route('statuses.restore', this.status.id))
      }
    },
  },
}
</script>
