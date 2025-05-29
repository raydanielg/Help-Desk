<template>
    <div :class="$attrs.class">
        <label v-if="label" class="form-label" :for="id">{{ label }} {{is_required ? '*' :'' }}</label>
        <div v-if="itemValue && !editItem" class="font-light text-sm flex gap-3">
            {{ modelValue }}
            <icon v-if="editable" name="edit" @click="editItem=!editItem" class="w-4 h-4 mr-1 cursor-pointer" />
        </div>
        <div class="w-25 flex items-center" v-if="editItem">
            <input :id="id" ref="input" v-bind="{ ...$attrs, class: null }" class="form-input" :class="{ error: error }" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
            <icon @click="editItem=false" name="close" class="w-4 h-4 ml-2 cursor-pointer" />
        </div>
        <div v-if="error" class="form-error">{{ error }}</div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid'
import Icon from '@/Shared/Icon.vue'

export default {
    components:{
        Icon
    },
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default() {
                return `text-input-${uuid()}`
            },
        },
        type: {
            type: String,
            default: 'text',
        },
        error: String,
        label: String,
        editable: {
            type: [Number, Boolean],
            default: false,
        },
        value: {
            type: String,
            default: '',
        },
        is_required: {
            type: Boolean,
            default: false,
        },
        placeholder: String,
        modelValue: String,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            editItem: false,
            itemValue: this.value
        }
    },
    methods: {
        focus() {
            this.$refs.input.focus()
        },
        select() {
            this.$refs.input.select()
        },
        setSelectionRange(start, end) {
            this.$refs.input.setSelectionRange(start, end)
        },
    },
}
</script>
