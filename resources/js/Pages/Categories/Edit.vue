<template>
  <div>
      <Head :title="$t(title)" />
    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl">
      <form @submit.prevent="update">
          <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
              <select-input v-if="!form.parent_id" v-model="form.department_id" :error="form.errors.department_id" class="pr-6 pb-8 w-full" :label="$t('Department')">
                  <option :value="null">None</option>
                  <option v-for="s in departments" :key="s.id" :value="s.id">{{ s.name }}</option>
              </select-input>
              <select-input v-if="!form.department_id" v-model="form.parent_id" :error="form.errors.parent_id" class="pr-6 pb-8 w-full" :label="$t('Parent')">
                  <option :value="null">None</option>
                  <option v-for="s in categories" :key="s.id" :value="s.id">{{ s.name }}</option>
              </select-input>
              <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full " label="Name" />
<!--              <text-input v-model="form.color" :error="form.errors.color" class="pr-6 pb-8 w-full lg:w-1/2" label="Color" />-->
          </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <button class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete Category</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Update Category</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { Link, Head } from '@inertiajs/vue3'
import SelectInput from "../../Shared/SelectInput.vue";

export default {
  metaInfo() {
    return { title: this.form.name }
  },
  components: {
      SelectInput,
    LoadingButton,
    TextInput,
      Link,
      Head,
  },
  layout: Layout,
  props: {
    title: String,
    category: Object,
      categories: { required: false },
      departments: { required: false },
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
          name: this.category.name,
          color: this.category.color,
          department_id: this.category.department_id,
          parent_id: this.category.parent_id,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(this.route('categories.update', this.category.id))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this category?')) {
        this.$inertia.delete(this.route('categories.destroy', this.category.id))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this category?')) {
        this.$inertia.put(this.route('categories.restore', this.category.id))
      }
    },
  },
}
</script>
