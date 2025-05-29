<template>
    <div class="flex items-center">
        <div class="flex w-full bg-white rounded shadow relative">
            <input class="relative px-6 py-3 w-full rounded focus:shadow-outline" autocomplete="off" type="text" name="search" :placeholder="$t('Search...')" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
            <span v-if="!disableReset && modelValue" class="cursor-pointer absolute right-3 rtl:left-3 top-3" type="button" @click="$emit('reset')"><icon name="close" class="block w-5 h-5 fill-black focus:fill-red-800" /></span>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/Shared/Dropdown.vue'
import Icon from "@/Shared/Icon.vue";

export default {
    components: {
        Icon,
        Dropdown,
    },
    props: {
        modelValue: String,
        disableTrash: String,
        maxWidth: {
            type: Number,
            default: 300,
        },
        disableReset: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue', 'reset'],
}
</script>
