<template>
    <div>
        <section class="bg-primary relative z-10 py-[120px]">
            <div class="container mx-auto">
                <div class="-mx-4 flex">
                    <div class="w-full px-4">
                        <div class="mx-auto max-w-[400px] text-center">
                            <h2 class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                {{ status }}
                            </h2>
                            <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
                                {{ title }}
                            </h4>
                            <p class="mb-8 text-lg text-white">
                                {{ description }}
                            </p>
                            <a :href="route('home')" class="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white">
                                Go To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                <div class="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                <div class="flex h-full w-1/3">
                    <div class="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div class="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
                <div class="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
        </section>
    </div>
</template>

<script>
import Layout from '@/Shared/Landing/Layout.vue'
export default {
    layout: Layout,
    props: {
        status: Number,
    },
    computed: {
        title() {
            return {
                503: 'Service Unavailable',
                500: 'Server Error',
                404: 'Page Not Found',
                403: 'Forbidden',
            }[this.status]
        },
        description() {
            return {
                503: 'Sorry, we are doing some maintenance. Please check back soon.',
                500: 'Whoops, something went wrong on our servers.',
                404: 'Sorry, the page you are looking for could not be found.',
                403: 'Sorry, you are forbidden from accessing this page.',
            }[this.status]
        },
    },
}
</script>
