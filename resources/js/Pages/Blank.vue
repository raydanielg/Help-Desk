<template>
    <div>
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">

            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center text-white">
                            <h1 class="text-4xl font-semibold text-white">{{ data }}</h1>

                            <div class="mt-4">
                                <a href="/" class="btn py-2 px-5 bg-black hover:bg-indigo-700 text-white rounded-md">Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div>
                <span class="absolute top-0 left-0 z-[-1]">
                    <img src="/landing/images/header/shape-1.svg" alt="" />
                </span>
                <span class="absolute top-0 right-0 z-[-1]">
                    <img src="/landing/images/header/shape-2.svg" alt="" />
                </span>
            </div>
        </section>
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import { Head } from '@inertiajs/vue3'
export default {
    layout: Layout,
    components: {
        Icon,
        Head,
    },
    props: {
        title: String,
        data: {
            required: false
        },
    },
    created() {

    }
}
</script>
