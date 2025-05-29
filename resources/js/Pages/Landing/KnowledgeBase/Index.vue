<template>
    <div>
        <Head title="Knowledge Base" />
        <!-- Start Hero -->
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold text-white">{{ 'Knowledge Base' }}</h1>
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

        <!-- Start Section-->
        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div class="container">
                <div class="flex w-full items-center justify-center pb-16">
                    <div class="flex justify-center w-full">
                        <form class="w-full lg:w-1/3">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" v-model="form.search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in knowledge base..." required>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="-mx-4 flex flex-wrap" v-if="kb.data.length">
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="knowledge in kb.data" :key="knowledge.id">
                        <div class="wow fadeInUp group mb-10" data-wow-delay=".1s">
                            <div>
                                <span class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">{{ moment(knowledge.updated_at).format('MMM DD, YYYY') }}</span>
                                <h3>
                                    <Link :href="route('kb.details', knowledge.id)" class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">{{ knowledge.title }}</Link>
                                </h3>
                                <p class="text-base text-body-color">
                                    {{ knowledge.details.length < 70 ? knowledge.details : knowledge.details.substring(0,70) + "..." }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>No knowledge base items found!</div>
                <pagination class="mt-6" :links="kb.links" />
            </div>
        </section>
        <!-- End -->
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import SearchInput from '@/Shared/SearchInput.vue'
import Pagination from '@/Shared/Landing/Pagination.vue'
import { Head, Link } from '@inertiajs/vue3'
import Subscribe from '@/Shared/Landing/Subscribe.vue'
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import mapValues from "lodash/mapValues";
import moment from 'moment'
export default {
    layout: Layout,
    components: {
        Subscribe,
        Icon,
        Head,
        Link,
        Pagination,
        SearchInput,
    },
    props: {
        kb: Object,
        types: Array,
        title: String,
        filters: Object,
    },
    data() {
        return {
            form: {
                search: this.filters.search,
            },
        }
    },

    watch: {
        form: {
            deep: true,
            handler: throttle(function() {
                this.$inertia.get(this.route('kb'), pickBy(this.form), { preserveState: true })
            }, 150),
        },
    },

    methods:{
        reset() {
            this.form = mapValues(this.form, () => null)
        },
    },

    created() {
        this.moment = moment
    }
}
</script>
