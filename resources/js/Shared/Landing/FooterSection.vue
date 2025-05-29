
<template>
    <!-- ====== Footer Section Start -->
    <footer class="wow fadeInUp relative z-10 bg-footer-black pt-20 lg:pt-[80px]" data-wow-delay=".15s">
        <div class="container">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                    <div class="mb-10 w-full">
                        <Link :href="route('home')" class="mb-6 inline-block max-w-[160px]">
                            <logo class="help-desk-logo" />
                        </Link>
                        <p class="mb-7 text-base text-[#f3f4fe]" v-html="$t(footer_text)"></p>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                    <div class="mb-10 w-full">
                        <h4 class="mb-9 text-lg font-semibold text-white">{{ $t('Company') }}</h4>
                        <ul>
                            <li v-if="!!this.enable_option && this.enable_option.show_login">
                                <a :href="route('login')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary"> {{ $t('Login') }}</a>
                            </li>
                            <li v-if="!!this.enable_option && this.enable_option.show_login">
                                <a :href="route('register')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary"> {{ $t('Register') }}</a>
                            </li>
                            <li v-if="!!this.enable_option && this.enable_option.blog">
                                <a :href="route('blog')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">
                                    {{ $t('Blog') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                    <div class="mb-10 w-full">
                        <h4 class="mb-9 text-lg font-semibold text-white">{{ $t('Useful Links') }}</h4>
                        <ul>
                            <li>
                                <a :href="route('terms_service')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary"> {{ $t('Terms of Services') }}</a>
                            </li>
                            <li>
                                <a :href="route('privacy')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">{{ $t('Privacy Policy') }}</a>
                            </li>
                            <li v-if="!!this.enable_option && this.enable_option.kb">
                                <a :href="route('kb')" class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">
                                    {{ $t('Knowledge Base') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                    <div class="mb-10 w-full">
                        <h4 class="mb-9 text-lg font-semibold text-white">{{ $t('Newsletter') }}</h4>
                        <p class="mt-5 text-white">{{ $t('Join our newsletter service.') }}</p>
                        <form @submit.prevent="subscribe">
                            <div class="grid grid-cols-1">
                                <div class="foot-subscribe my-3">
                                    <label class="form-label text-white">{{ $t('Your email address') }} <span class="text-red-600">*</span></label>
                                    <div class="form-icon relative mt-2 text-white">
                                        <icon class="w-4 absolute top-3 left-4 z-1 fill-gray-800" name="send_plan" />
                                        <input type="email" v-model="form.email" class="form-input bg-gray-800 border border-white pl-12 focus:shadow-none" placeholder="Email" name="email" required="">
                                    </div>
                                </div>

                                <loading-button :loading="form.processing" class="rounded-lg bg-primary py-3 px-6 text-base font-medium justify-center text-white duration-300 ease-in-out hover:bg-opacity-80" type="submit">{{ $t('Submit') }}</loading-button>
                            </div>
                        </form>
                    </div><!--end col-->
                </div>
            </div>
        </div>

        <div class="mt-12 border-t border-opacity-40 py-8 lg:mt-[60px]">
            <div class="container">
                <div class="-mx-4 flex flex-wrap justify-center">
                    <div class="my-1 flex justify-center ">
                        <p class="text-base text-center text-[#f3f4fe]" v-html="$t(footer_content.copyright)"></p>
                    </div>
                </div>
            </div>
        </div>

        <div>
        <span class="absolute left-0 top-0 z-[-1]">
          <img src="/landing/images/footer/shape-1.svg" alt="" />
        </span>

            <span class="absolute bottom-0 right-0 z-[-1]">
          <img src="/landing/images/footer/shape-3.svg" alt="" />
        </span>

             <span class="absolute top-0 right-0 z-[-1]">
            <img src="/landing/images/footer/shape-2.svg" alt="" />
        </span>
        </div>
    </footer>
</template>

<script>
import Logo from '@/Shared/Logo.vue'
import Icon from '@/Shared/Icon.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { Link } from '@inertiajs/vue3'
export default {
    components: {
        Logo, LoadingButton, Link, Icon
    },
    props: {
        footer: Object,
    },
    data() {
        return {
            footer_content: this.footer ? JSON.parse(this.footer.html) : [],
            footer_text: this.footer ? JSON.parse(this.footer.html).text: 'Start working with HelpDesk that can provide everything you need to generate awareness, drive traffic, connect.',
            form: this.$inertia.form({
                email: '',
            }),
            enable_option: {},
        }
    },
    methods: {
        subscribe() {
            this.form.post(this.route('subscribe.news'))
            this.form.email = ''
        },
    },
    created() {
        if(this.$page.props.enable_options){
            let options = JSON.parse(this.$page.props.enable_options.value)
            options.forEach(option=>{
                this.enable_option[option.slug] = !!option.value
            })
        }
    }

}
</script>
