<template>
    <div>
        <Head :title="$t(title)" />
        <div class="mb-6 flex justify-center items-center">
            <search-input v-model="searchFilter.search" class="w-full max-w-md mr-4 rtl:ml-4" :disableReset="true"></search-input>
            <div class="btn-indigo p-3 rounded-full cursor-pointer" @click="addNew">
                <icon class="w-5 h-5 fill-gray-100" name="plus"></icon>
            </div>
        </div>
        <div class="">
            <div class="mx-auto container py-6 px-2">
                <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    <div class="rounded bg-white cursor-pointer transform hover:scale-105 duration-300 transition-transform shadow-md rounded-lg border mb-6 py-5 px-4" v-for="note in notes.data" :key="note.id" >
                        <div class="w-full h-64 flex flex-col justify-between " @click="updateNote(note)">
                            <div>
                                <h4 class=" font-bold mb-3">{{ note.name }}</h4>
                                <p class=" text-sm">{{ note.details.length < 100 ? note.details : note.details.substring(0,100) + "..." }}</p>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <p class="text-sm">{{ note.created_at }}</p>
                                    <button @click="updateNote(note)" class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center"
                                            aria-label="edit note" role="button">
                                        <icon name="edit" class="w-4 h-4 fill-gray-100" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 v-if="!notes.data.length" class="flex justify-center items-center text-center font-bold">No note found.</h4>
            </div>
        </div>
        <div class="flex justify-center">
            <pagination class="mt-6" :links="notes.links" />
        </div>
        <div v-if="note_form" class="note-form-overlay"></div>
        <div v-if="note_form" class=" note-form py-8 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto">
                <form @submit.prevent="store(update_id)">
                <div class="relative py-10 px-6 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <text-input v-model="form.name" :error="form.errors.name" class=" pb-6 w-full" label="Name" />
                    <textarea-input v-model="form.details" :error="form.errors.details" :rows="5" class=" pb-6 w-full" placeholder="note details here.." :label="$t('Details')"></textarea-input>
                    <div class="flex justify-between">
                        <div class="flex items-center justify-start w-full">
                            <button type="submit" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">Submit</button>
                            <span class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="note_form = false">Cancel</span>
                        </div>
                        <div class="flex">
                            <span v-if="form.id" class="w-36 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="destroy">Delete note</span>
                        </div>
                    </div>
                    <span @click="note_form = false" class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">
                        <icon class="w-6 h-6" name="close" />
                    </span>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SearchInput from '@/Shared/SearchInput.vue'
import TextareaInput from '@/Shared/TextareaInput.vue'
import Pagination from '@/Shared/Pagination.vue'
import Icon from '@/Shared/Icon.vue'
import { Link, Head } from '@inertiajs/vue3'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
export default {
    layout: Layout,
    components: { Link, Head, SearchInput, Icon, TextareaInput, TextInput, Pagination },
    props: {
        filters: Object,
        title: String,
        notes: Object,
    },
    data() {
        return {
            update_id: null,
            note_form: false,
            searchFilter: {
                search: this.filters.search,
            },
            form: this.$inertia.form({
                id: null,
                name: null,
                color: null,
                details: null
            })
        }
    },
    watch: {
        searchFilter: {
            deep: true,
            handler: throttle(function() {
                this.$inertia.get(this.route('notes'), pickBy(this.searchFilter), { preserveState: true })
            }, 150),
        },
    },
    methods: {
        updateNote(note){
            this.form.name = note.name??null
            this.form.details = note.details??null
            this.form.id = note.id??null
            this.update_id = note.id??null
            this.note_form = true
        },
        addNew(){
            this.updateNote({})
            this.note_form = true
        },
        destroy() {
            if (confirm('Are you sure you want to delete this note?')) {
                this.$inertia.delete(this.route('notes.delete', this.update_id),{
                    onSuccess: () => {
                        this.resetForm()
                    }
                })
            }
        },
        store(id) {
            this.form.post(this.route('notes.save', id),{
                onSuccess: () => {
                    this.resetForm()
                },
            })
        },
        resetForm(){
            this.note_form = false
            this.form.reset()
            this.update_id = null
        }
    },
}
</script>
