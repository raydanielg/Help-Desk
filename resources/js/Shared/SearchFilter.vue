<template>
    <div class="flex items-center">
        <div class="flex w-full bg-white rounded shadow">
            <dropdown :auto-close="false" class="focus:z-10 button px-4 border-r focus:border-white rounded-l focus:ring md:px-6" placement="bottom-start">
                <template #default>
                    <div class="flex items-baseline">
                        <span class="hidden md:inline">{{ $t('Trash') }}</span>
                        <svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998">
                            <path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" />
                        </svg>
                    </div>
                </template>
                <template #dropdown>
                    <div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" :style="{ maxWidth: `${maxWidth}px` }">
                        <slot />
                    </div>
                </template>
            </dropdown>
            <input class="relative px-6 py-3 w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" :placeholder="$t(placeholder)" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        </div>
        <button class="ml-3 rtl:mr-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm flex" type="button" @click="$emit('reset')">
            {{ $t('Clear') }}
        </button>
    </div>
</template>

<script>
import Dropdown from '@/Shared/Dropdown.vue'

export default {
    components: {
        Dropdown,
    },
    props: {
        modelValue: String,
        maxWidth: {
            type: Number,
            default: 300,
        },
        placeholder:{
            type: String,
            default: 'Search...'
        }
    },
    emits: ['update:modelValue', 'reset'],
}
</script>
