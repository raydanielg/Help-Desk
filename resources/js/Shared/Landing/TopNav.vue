<template>
    <!-- New Navigation -->
    <!-- ====== Navbar Section Start -->
    <nav id="topnav" class="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
        <div id="dropdown" />
        <div class="container">
            <div class="relative -mx-4 flex items-center justify-between">
                <div class="w-60 max-w-full px-4">
                    <Link :href="route('home')" class="logo pl-0 mt-2 mb-2">
                        <logo class="help-desk-logo"/>
                        <logo name="white" class="help-desk-logo white"/>
                    </Link>
                </div>
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                            id="navbarToggler"
                            class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary lg:hidden"
                        >
                <span
                    class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                            <span
                                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                            ></span>
                            <span
                                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                            ></span>
                        </button>
                        <nav
                            id="navbarCollapse"
                            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                        >
                            <ul class="blcok lg:flex">
                                <li class="group relative" :class="{'active' : active_menu === 'home'}" @click="active_menu = 'home'">
                                    <Link :href="route('home')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('Home') }}</Link>
                                </li>
                                <li v-if="!!this.enable_option && this.enable_option.service" class="group relative" :class="{'active' : active_menu === 'services'}" @click="active_menu = 'services'">
                                    <Link :href="route('services')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('Services') }}</Link>
                                </li>
                                <li v-if="!!this.enable_option && this.enable_option.kb" class="group relative" :class="{'active' : active_menu === 'kb'}" @click="active_menu = 'kb'">
                                    <Link :href="route('kb')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('Knowledge') }}</Link>
                                </li>
                                <li v-if="!!this.enable_option && this.enable_option.faq" class="group relative" :class="{'active' : active_menu === 'faq'}" @click="active_menu = 'faq'">
                                    <Link :href="route('faq')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('FAQs') }}</Link>
                                </li>
                                <li v-if="!!this.enable_option && this.enable_option.blog" class="group relative" :class="{'active' : active_menu === 'blog'}" @click="active_menu = 'blog'">
                                    <Link :href="route('blog')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('Blog') }}</Link>
                                </li>
                                <li v-if="!!this.enable_option && this.enable_option.contact" class="group relative" :class="{'active' : active_menu === 'contact'}" @click="active_menu = 'contact'">
                                    <Link :href="route('contact')" class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">{{ $t('Contact') }}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div v-if="$page.props.auth && $page.props.auth.user" class="justify-end pr-16 flex lg:pr-0">
                        <div class="dd__wrapper">
                            <dropdown class="mt-1 select_user" placement="bottom-end">
                                <template #default>
                                    <div class="flex items-center cursor-pointer group">
                                        <div class=" mr-1 whitespace-nowrap text-white">
                                            <img v-if="$page.props.auth.user.photo" class="user_photo w-8 h-8" :alt="$page.props.auth.user.first_name" :src="$page.props.auth.user.photo" />
                                            <img v-else src="/images/svg/profile.svg" class="w-8 h-8" alt="user profile" />
                                            <span class="hidden">{{ $page.props.auth.user.first_name }}</span>
                                            <span class="hidden">{{ $page.props.auth.user.last_name }}</span>
                                        </div>
                                        <icon class="w-5 h-5 drop-down-caret-icon" name="cheveron-down" />
                                    </div>
                                </template>
                                <template #dropdown>
                                    <div class="shadow-xl bg-white rounded text-sm">
                                        <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('dashboard')">{{ $t('Dashboard') }}</Link>
                                        <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('tickets')">{{ $t('Tickets') }}</Link>
                                        <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('users.edit.profile')">{{ $t('Edit Profile') }}</Link>
                                        <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white w-full text-left" :href="route('logout')" method="delete" as="button">{{ $t('Logout') }}</Link>
                                    </div>
                                </template>
                            </dropdown>
                        </div>
                    </div>
                    <div v-else class="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <a :href="route('login')" class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                            {{ $t('Login') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import Logo from '@/Shared/Logo.vue'
import Dropdown from '@/Shared/Dropdown.vue'
import Icon from '@/Shared/Icon.vue'
import {Link} from '@inertiajs/vue3'

export default {
    components: {
        Logo,
        Icon,
        Dropdown,
        Link
    },
    data() {
        return {
            active_menu: 'home',
            enable_option: {}
        }
    },
    computed: {
        selected_language() {
            return this.$page.props.languages.find(language => language.code === this.$page.props.locale)
        },
        languages_except_selected() {
            return this.$page.props.languages.filter(language => language.code !== this.$page.props.locale)
        }
    },
    methods: {
        toggleMenu() {
            document.getElementById('isToggle').classList.toggle('open');
            var isOpen = document.getElementById('navigation')
            if (isOpen.style.display === "block") {
                isOpen.style.display = "none";
            } else {
                isOpen.style.display = "block";
            }
        },
        windowScroll() {
            const navbar = document.getElementById("topnav");
            if (navbar != null) {
                if (
                    document.body.scrollTop >= 50 ||
                    document.documentElement.scrollTop >= 50
                ) {
                    navbar.classList.add("sticky");
                } else {
                    navbar.classList.remove("sticky");
                }
            }
        }
    },
    mounted() {
        this.active_menu = this.$page.url.substr(1) || 'home'
    },
    created() {
        if (this.$page.props.enable_options) {
            let options = JSON.parse(this.$page.props.enable_options.value)
            options.forEach(option => {
                this.enable_option[option.slug] = !!option.value
            })
        }

        window.addEventListener('scroll', (ev) => {
            ev.preventDefault();
            this.windowScroll();
        })

        window.onload = function(){
            const navbarToggler = document.getElementById('navbarToggler')
            const navbarCollapse = document.getElementById("navbarCollapse")
            navbarToggler.onclick = function() {
                navbarToggler.classList.toggle("navbarTogglerActive")
                navbarCollapse.classList.toggle("hidden")
            }
        }

    }
}
</script>
