<template>
    <div>
        <Head :title="$t(title)" />
        <!-- Start Hero -->
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold text-white">{{ kb.title }}</h1>
                            <ul class="list-none mt-6 text-white">
                                <li class="inline-block font-semibold mx-5"> <span class="block">Time :</span> <span class="block">{{ getReadingTime(kb.details) }}</span></li>
                            </ul>
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
        <!-- End Hero -->

        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div class="container">
                <div class="-mx-4 flex flex-wrap justify-center">
                    <div class="w-full px-4">
                        <div class="-mx-4 flex flex-wrap">
                            <div class="w-full px-4 lg:w-8/12">
                                <div>
                                    <h2
                                        class="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug"
                                        data-wow-delay=".1s">
                                        {{ kb.title }}
                                    </h2>

                                    <div class="post-details html" v-html="kb.details"></div>


                                    <div class="-mx-4 mb-12 flex flex-wrap items-center">
                                        <div class="w-full px-4">
                                            <div v-if="types.length" class="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0" data-wow-delay=".1s">
                                                <a v-for="type in types" :key="type.id" :href="route('kb.by_type',type.id)" class="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-white hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4">
                                                    {{ type.name }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-4 lg:w-4/12">
                                <div>
                                    <div class="-mx-4 mb-8 flex flex-wrap">
                                        <div class="w-full px-4">
                                            <h2 class="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]" data-wow-delay=".1s">
                                                Random
                                            </h2>
                                            <span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                                        </div>

                                        <div class="w-full px-4 md:w-1/2 lg:w-full" v-for="recent_post in random_kb" :key="recent_post.id">
                                            <div class="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5" data-wow-delay=".1s">
                                                <div class="w-full">
                                                    <h4>
                                                        <a :href="route('kb.details', recent_post.id)" class="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg">
                                                            {{ recent_post.title }}
                                                        </a>
                                                    </h4>
                                                    <p class="text-sm text-body-color">{{ moment(recent_post.updated_at).format('MMM DD, YYYY') }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import {Head} from '@inertiajs/vue3'
import Subscribe from '@/Shared/Landing/Subscribe.vue'
import sanitizeHtml from "sanitize-html";
import moment from 'moment'
export default {
    layout: Layout,
    props: {
        kb: Object,
        random_kb: Array,
        types: Array,
    },
    components: {
        Icon,
        Head,
        Subscribe,
    },
    data(){
        return {
            title: this.kb.title,
            author_name: ''
        }
    },
    methods: {
        getReadingTime(text){
            const wpm = 225;
            const words = text.trim().split(/\s+/).length;
            const time = Math.ceil(words / wpm);
            return time+' minute read';
        },
        sanitizeHtml : sanitizeHtml
    },
    created() {
        this.moment = moment
    }
}
</script>
