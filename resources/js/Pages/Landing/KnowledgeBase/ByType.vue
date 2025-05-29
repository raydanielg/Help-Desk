<template>
    <div>
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">

            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold text-white" v-if="type.name">{{ type.name }}</h1>
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

        <!-- Start Section-->
        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div class="container">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="post in posts.data" :key="post.id">
                        <div class="wow fadeInUp group mb-10" data-wow-delay=".1s">
                            <div>
                                <span class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">{{ moment(post.updated_at).format('MMM DD, YYYY') }}</span>
                                <h3>
                                    <Link :href="route('kb.details', post.id)" class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">{{ post.title }}</Link>
                                </h3>
                                <p class="text-base text-body-color">
                                    {{ post.details.length < 70 ? post.details : post.details.substring(0,70) + "..." }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <pagination class="mt-6" :links="posts.links" />
            </div>
        </section>
        <!-- End -->

        <!-- Start Section-->

        <!-- End -->
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import {Link} from '@inertiajs/vue3'
import Pagination from '@/Shared/Landing/Pagination.vue'
import Subscribe from '@/Shared/Landing/Subscribe.vue'
import moment from 'moment'
export default {
    layout: Layout,
    props: {
        posts: Object,
        type: Object,
    },
    components: {
        Icon, Pagination, Subscribe, Link
    },
    created() {
        this.moment = moment
    }
}
</script>
