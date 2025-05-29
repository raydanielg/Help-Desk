<template>
    <div>
        <Head :title="$t(title)" />
        <div class="bg-white rounded-md shadow overflow-hidden w-full">
            <form @submit.prevent="update">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Name')" />
                    <text-input v-model="form.slug" :error="form.errors.slug" class="pr-6 pb-8 w-full lg:w-1/2" :label="$t('Slug')" />
                </div>
                <div class="py-8 -mr-6 -mb-8 flex flex-wrap overflow-x-auto">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                        Functions
                                    </th>
                                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                        Read
                                    </th>
                                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                        Update
                                    </th>
                                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                        Create
                                    </th>
                                    <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                        Delete
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="border-b" v-for="(value, name, index) in form.access" :key="index">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-900"> {{ name }} </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <label class="flex toggle_swtich items-center cursor-pointer">
                                            <div class="relative">
                                                <input type="checkbox" class="sr-only" v-model="value.read" />
                                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                            </div>
                                        </label>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <label class="flex toggle_swtich items-center cursor-pointer">
                                            <div class="relative">
                                                <input type="checkbox" class="sr-only" v-model="value.update" />
                                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                            </div>
                                        </label>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <label class="flex toggle_swtich items-center cursor-pointer">
                                            <div class="relative">
                                                <input type="checkbox" class="sr-only" v-model="value.create" />
                                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                            </div>
                                        </label>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <label class="flex toggle_swtich items-center cursor-pointer">
                                            <div class="relative">
                                                <input type="checkbox" class="sr-only" v-model="value.delete" />
                                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                            </div>
                                        </label>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
                    <button v-if="!['admin','manager','customer'].includes(role.slug)" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">{{ $t('Delete') }}</button>
                    <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update') }}</loading-button>
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
        role: Object,
    },
    remember: 'form',
    data() {
        return {
            form: this.$inertia.form({
                name: this.role.name,
                slug: this.role.slug,
                access: JSON.parse(this.role.access),
            }),
        }
    },
    methods: {
        update() {
            this.form.put(this.route('roles.update', this.role.id))
        },
        destroy() {
            if (confirm('Are you sure you want to delete this role?')) {
                this.$inertia.delete(this.route('roles.destroy', this.role.id))
            }
        },
        restore() {
            if (confirm('Are you sure you want to restore this role?')) {
                this.$inertia.put(this.route('roles.restore', this.role.id))
            }
        },
    },
    created() {
        // console.log(this.form.access)
    }
}
</script>
