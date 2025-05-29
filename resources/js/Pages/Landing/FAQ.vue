<template>
    <div>
        <Head title="FAQ" />
        <section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">

            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4">
                        <div class="text-center text-white">
                            <h1 class="text-4xl font-semibold text-white">{{ $t('Frequently Asked Questions') }}</h1>
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

        <section class="relative py-16">
            <div class="container">
                <div class="flex w-full items-center justify-center mb-8">
                    <div class="flex justify-center w-full">
                        <form class="w-full lg:w-1/3">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" v-model="form.search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('Search your query in the FAQ items...')" required>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- New Code -->

                <div id="accordion-open" data-accordion="open">
                    <div v-for="(faq, fi) in faqs.data" :key="faq.id">
                        <h2 id="accordion-open-heading-1">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1" :class="{'rounded-t-xl' : fi===0, 'border-b-0' : fi!==(faqs.data.length - 1)}" @click="toggleActive(fi)">
                                <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    {{ faq.name }}
                                </span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180' : faq.active}"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" class="" aria-labelledby="accordion-open-heading-1" :class="{'hidden' : !faq.active}">
                            <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900" :class="{'border-b-0' : fi!==(faqs.data.length - 1), 'border-t-0' : fi===(faqs.data.length - 1)}">
                                <p class="text-gray-500 dark:text-gray-400" v-html="sanitizeHtml(faq.details)"></p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- New Code -->
            </div>
        </section>
    </div>
</template>
<script>
import Layout from '@/Shared/Landing/Layout.vue'
import Icon from '@/Shared/Icon.vue'
import { Head } from '@inertiajs/vue3'
import sanitizeHtml from 'sanitize-html';
import SearchInput from '@/Shared/SearchInput.vue'
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import mapValues from "lodash/mapValues";
export default {
    layout: Layout,
    components: {
        Icon,
        Head,
        SearchInput
    },
    props: {
        faqs: Object,
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
                this.$inertia.get(this.route('faq'), pickBy(this.form), { preserveState: true })
            }, 150),
        },
    },
    methods:{
        toggleActive(index){
            this.faqs.data[index].active = !this.faqs.data[index].active;
        },
        sanitizeHtml : sanitizeHtml,
        reset() {
            this.form = mapValues(this.form, () => null)
        },
    },

    created() {
        if(this.faqs.data.length){
            this.faqs.data[0].active = true;
        }
    }
}
</script>
