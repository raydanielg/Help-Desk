<script setup>
import Icon from "@/Shared/Icon.vue";
import {useForm} from "@inertiajs/vue3";

const emit = defineEmits(['closePopup'])

const props = defineProps({
    data: {
        required: true,
    },
    name: {
        required: false,
    },
    url: {
        required: false,
    },
});

const form = useForm({...props.data});

function confirm(){
    form.post(route(props.url),{
        onFinish: () => emit('closePopup'),
    });
}
</script>

<template>
    <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="delete-confirmation-modal" class="modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s] overflow-y-auto show z-[999]">
        <div data-tw-merge="" class="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]">
            <div class="p-5 text-center">
                <Icon name="info" class="stroke-1.5 mx-auto mt-3 h-16 w-16 fill-danger" />
                <div class="mt-5 text-3xl">Are you sure?</div>
                <div class="mt-2 text-slate-500">
                    Do you really want to delete {{ name??'this' }}? <br>
                    This process cannot be undone.
                </div>
            </div>
            <div class="px-5 pb-8 text-center">
                <button @click="$emit('closePopup')" data-tw-merge="" data-tw-dismiss="modal" type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-24">Cancel</button>
                <button @click="confirm" type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-red-700 border-danger text-white dark:border-danger w-24">Delete</button>
            </div>
        </div>
    </div>
</template>
