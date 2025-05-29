<template>
    <div>
        <Head title="Terms of services" />
        <!-- Start Hero -->
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold text-white">{{ page.title }}</h1>
                            <p class="mt-2 text-base leading-7 text-white">Last updated on {{ data.updated_at }}</p>
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
        </section><!--end section-->
        <div class="relative">
            <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!-- End Hero -->

        <!-- Start Terms & Conditions -->
        <section class="relative md:py-20 py-16">
            <div class="container">
                <div class="md:flex justify-center">
                    <div class="md:w-full">
                        <div class="p-6 bg-white rounded-md leading-7 html" v-html="sanitizeHtml(page.content)">


                        </div>
                    </div><!--end -->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Terms & Conditions -->
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import { Head } from '@inertiajs/vue3'
import sanitizeHtml from "sanitize-html";
export default {
    layout: Layout,
    components: {
        Icon,
        Head
    },
    props: {
        data: Object,
    },
    data() {
        return {
            page: JSON.parse(this.data.html)
        }
    },
    methods: {
        sanitizeHtml : sanitizeHtml
    }
}
</script>
