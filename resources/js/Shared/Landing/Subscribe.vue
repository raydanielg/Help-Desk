<template>
    <div class="container md:mt-24 mt-16">
        <div class="md:flex justify-center">
            <div class="lg:w-2/3 text-center">
                <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our article just once a weekly.</p>

                <div class="mt-8">
                    <div class="text-center subcribe-form">
                        <form class="relative mx-auto max-w-xl" @submit.prevent="subscribe">
                            <input type="email" id="subemail" name="email" v-model="form.email" class="pt-4 pr-[12rem] pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id..">
                            <loading-button :loading="form.processing" class="btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full" type="submit">{{ $t('Subscribe Now') }}</loading-button>
                        </form><!--end form-->
                    </div>
                </div>
            </div>
        </div>
    </div><!--end container-->
</template>

<script>
import LoadingButton from '@/Shared/LoadingButton.vue'
export default {
    components: {
        LoadingButton,
    },
    data() {
        return {
            form: this.$inertia.form({
                email: '',
            }),
        }
    },
    methods: {
        subscribe() {
            this.form.post(this.route('subscribe.news'))
            this.form.email = ''
        },
    }
}
</script>
