<template>
    <div>
        <Head :title="$t(title)" />
        <div class="intro-y mt-5 grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6">
                <div class="preview-component intro-y box">
                    <div class="flex flex-col items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400 sm:flex-row">
                        <h2 class="mr-auto text-base font-medium">
                            {{ $t('Custom ticket input fields') }}
                        </h2>
                    </div>
                    <div class="p-5">
                        <div class="grid gap-6 mb-6">
                            <div class="flex w-full" v-for="ticket_field in fields.data" :key="ticket_field.id">
                                <div class="flex flex-col w-full">
                                    <label :for="!['time_picker', 'date_picker', 'checkbox'].includes(ticket_field.type) ? 'ticket_field_'+ticket_field.id : null" class="block mb-2 text-sm dark:text-white">{{ ticket_field.label }} <small class="pl-2 text-xs" v-if="!ticket_field.required">(optional)</small></label>
                                    <input v-if="['text', 'email', 'number'].includes(ticket_field.type)" :type="ticket_field.type" :id="'ticket_field_'+ticket_field.id" :placeholder="ticket_field.placeholder" :required="ticket_field.required" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"  />
                                    <select v-if="ticket_field.type === 'select'" :id="'ticket_field_'+ticket_field.id" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                                        <option value="" disabled>{{ ticket_field.placeholder }}</option>
                                        <option :value="option.value" v-for="(option, oi) in ticket_field.options" :key="oi">{{ option.name }}</option>
                                    </select>
                                    <div class="flex flex-wrap gap-5" v-if="ticket_field.type === 'checkbox'">
                                        <div class="flex items-center" v-for="(option, oi) in ticket_field.options" :key="oi">
                                            <input :id="'ticket_checkbox_'+ticket_field.id+'_field_'+oi" type="checkbox" :value="option.value" class="w-4 h-4 text-blue-600 rounded">
                                            <label :for="'ticket_checkbox_'+ticket_field.id+'_field_'+oi" class="ms-2 text-sm dark:text-gray-300">{{ option.name }}</label>
                                        </div>
                                    </div>
                                    <textarea v-if="ticket_field.type === 'textarea'" :id="'ticket_field_'+ticket_field.id" rows="2" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" :placeholder="ticket_field.placeholder"></textarea>
                                    <div class="flex flex-col" v-if="ticket_field.type === 'file'">
                                        <input :id="'ticket_field_'+ticket_field.id" class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">
                                    </div>
                                    <p v-if="ticket_field.hint" class="mt-1 text-sm text-gray-500 dark:text-gray-300" >{{ ticket_field.hint }}</p>
                                </div>
                                <div class="flex w-[100px] pt-7 justify-end">
                                    <button @click="modifyField(ticket_field)" class="bg-white button rounded px-3 hover:bg-blue-800 hover:fill-white">
                                        <Icon name="edit" class="w-4 h-4" />
                                    </button>
                                    <button @click="deleteField(ticket_field)" class="bg-white button rounded px-3 hover:bg-red-700 hover:fill-white">
                                        <Icon name="trash" class="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6">
                <!-- BEGIN: Daterange Picker -->
                <div class="preview-component intro-y box">
                    <div class="flex flex-col items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400 sm:flex-row">
                        <h2 class="mr-auto text-base font-medium">
                            {{ $t('Field list') }}
                        </h2>
                    </div>
                    <div class="p-5">
                        <h3 class="mb-4 dark:text-white">{{ $t('Select Input Type') }}</h3>
                        <div class=" flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5">
                            <div v-for="(input_type, it_key) in input_types" :key="it_key" class="flex items-center mr-2">
                                <input :id="'input_type_name_'+it_key" name="input_type" v-model="form.type" :value="input_type" type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
                                <label :for="'input_type_name_'+it_key" class="cursor-pointer ml-2 capitalize">{{ input_type.replace('_', ' ') }}</label>
                            </div>
                        </div>

                        <h3 class="mb-4 pt-1 dark:text-white">{{ $t('Is it required') }}</h3>
                        <div class="mt-2 flex flex-col sm:flex-row mb-6">
                            <div class="flex items-center mr-2">
                                <input id="is_required_yes_new" v-model="form.required" name="is_required" :value="1" type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"  />
                                <label for="is_required_yes_new" class="cursor-pointer ml-2">Yes</label>
                            </div>
                            <div class="flex items-center mr-2 mt-2 sm:mt-0">
                                <input id="is_required_no_new" v-model="form.required" name="is_required" :value="0" type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"  />
                                <label for="is_required_no_new" class="cursor-pointer ml-2">No</label>
                            </div>
                        </div>

                        <div class="grid gap-6 mb-6">
                            <div>
                                <label for="label_name_new" class="block mb-2 text-sm dark:text-white">{{ $t('Label') }}</label>
                                <input v-model="form.label" type="text" id="label_name_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g Name" required />
                                <div v-if="form.errors.label" class="form-error">{{ form.errors.label }}</div>
                            </div>
                            <div>
                                <label for="name_new" class="block mb-2 text-sm dark:text-white">{{ $t('Name') }}</label>
                                <input v-model="form.name" type="text" id="name_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g name" required />
                                <div v-if="form.errors.name" class="form-error">{{ form.errors.name }}</div>
                            </div>
                            <div v-if="!['checkbox', 'file'].includes(form.type)">
                                <label for="placeholder_new" class="block mb-2 text-sm dark:text-white">{{ $t('Placeholder') }}</label>
                                <input v-model="form.placeholder" type="text" id="placeholder_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g. Muhammad Ali" required />
                            </div>
                            <div v-if="['checkbox', 'select'].includes(form.type)">
                                <label for="options_new" class="block mb-2 text-sm dark:text-white">{{ $t('Options') }}</label>
                                <div class="flex w-full gap-1 pb-2" v-for="(option, oi) in form.options" :key="oi">
                                    <input type="text" v-model="option.name" id="options_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" :placeholder="$t('option_name')" required />
                                    <input type="text" v-model="option.value" id="options_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" :placeholder="$t('option_value')" required />
                                    <button v-if="oi>0" @click="deleteOption(form.options, oi)" class="flex justify-center items-center button rounded px-3 hover:bg-red-700 hover:fill-white h-10">
                                        <icon name="trash" class="w-4 h-4" />
                                    </button>
                                </div>
                                <button class="flex gap-1 items-center text-xs w-28 hover:underline" @click="addOption()"><icon name="plus" class="w-3 h-3" /> Add new option</button>
                            </div>
                            <div v-if="['file'].includes(form.type)">
                                <label for="hints_new" class="block mb-2 text-sm dark:text-white">{{ $t('Hint') }}</label>
                                <input v-model="form.hint" type="text" id="hints_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="MAX 5MB" required />
                            </div>
                        </div>
                        <button class="ml-auto btn-indigo w-full items-center justify-center cursor-pointer" tabindex="-1" type="button" @click="submitField(form)">{{ $t(!modify_input ? 'Add field' : 'Update field') }}</button>
                    </div>
                </div>
                <!-- END: Daterange Picker -->
            </div>
        </div>
    </div>
    <delete-confirmation v-if="!!delete_element" :data="{id: delete_element}" url="ticket-fields.delete" name="the field" @close-popup='deleteClose' />
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import axios from 'axios'
import Layout from '@/Shared/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import DeleteConfirmation from "@/Shared/DeleteConfirmation.vue";

export default {
    metaInfo: { title: 'Tickets' },
    components: {
        DeleteConfirmation,
        Link,
        Head,
        Icon
    },
    layout: Layout,
    props: {
        title: {
            type: String,
        },
        fields: {
            type: Object,
        },
    },
    data() {
        return {
            delete_element: false,
            modify_input: false,
            input_types : ['text', 'textarea'],
            // input_types : ['text', 'select', 'checkbox', 'textarea', 'file'],
            new_input: {
                'type': 'text',
                'required': 0,
                label: '',
                name: '',
                'placeholder': '',
                id: null,
                'options': [{name: '', value: ''}],
                'hint': ''},
            form: this.$inertia.form({
                'type': 'text',
                'required': 0,
                label: '',
                name: '',
                'placeholder': '',
                id: null,
                'options': [{name: '', value: ''}],
                'hint': ''}),
        }
    },
    watch: {

    },
    methods: {
        deleteClose(){
            this.delete_element = false
        },
        submitField(obj){
            if(!['select', 'checkbox'].includes(this.form.type)){
                this.form.options = null;
            }
            this.form.post(this.route('ticket-fields.store'));
            Object.assign(this.form, this.new_input)
        },
        modifyField(fieldObject){
            Object.assign(this.form, fieldObject)
            this.modify_input = true;
        },
        deleteField(fieldObject){
            this.delete_element = fieldObject.id;
        },
        addOption(){
            this.form.options.push({name: '', value: ''})
        },
        deleteOption(options, index){
            options.splice(index, 1)
        }
    },
    created() {
    }
}
</script>
