<template>
  <div class="layout-app" :class="current_mode" :dir="$page.props.dir">
      <div id="dropdown" />
    <div class="md:flex md:flex-col">
      <div class="md:h-screen md:flex md:flex-col">
        <div class="md:flex md:shrink-0 ">
          <div class="md:shrink-0 md:py-2 md:w-60 flex items-center justify-between md:justify-center sidebar-left-top">
              <Link class="mt-1" href="/">
                  <logo class="help-desk-logo" />
              </Link>
              <dropdown class=" md:hidden" className="small-menu" placement="bottom-end">
                  <template #default>
                      <svg class="w-6 h-6 mobile-menu-selector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                  </template>
                  <template #dropdown>
                      <div class="mt-2 px-8 py-4 bg-hd-sidebar rounded shadow-lg">
                          <main-menu :auth="auth" />
                      </div>
                  </template>
              </dropdown>
          </div>
          <div class="bg-white w-full p-4 md:py-2 md:pr-12 md:pl-8 text-sm flex justify-first items-center top_bar">
              <div class="placement-top-left">
                  <div class="mt-1 welcome_text">{{ $t(generateGreetings()) }} <span>{{ $page.props.auth.user.first_name }}!</span></div>
                  <div class="display-time">
                      <span class="time">{{ time }} </span>
                  </div>
              </div>
              <div class="placement-top-right">
                  <dropdown class="mt-1 rtl:ml-2 language_menu_wrapper" placement="bottom-end">
                      <template #default>
                      <div class="flex items-center cursor-pointer group language_menu">
                          <div class=" font-bold mr-1 rtl:mr-0 whitespace-nowrap w-[7rem]">
                              <icon class="w-5 h-5" :name="selected_language.code" /> <span class="rtl:mr-[6px]">{{ selected_language.name }}</span>
                          </div>
                          <icon class="w-5 h-5 drop-down-caret-icon" name="cheveron-down" />
                      </div>
                      </template>
                      <template #dropdown>
                      <div class=" py-0 shadow-xl rounded text-sm language_menu_list">
                          <div v-for="language in languages_except_selected" :key="language.code" class="flex gap-2 cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white" @click="updateLanguage(language.code)">
                              <icon class="w-5 h-5" :name="language.code" /> <span class="lang_name rtl:mr-[6px]">{{ language.name }}</span>
                          </div>
                      </div>
                      </template>
                  </dropdown>
                  <dropdown class="mt-1 select_user" placement="bottom-end">
                      <template #default>
                          <div class="flex items-center cursor-pointer group">
                              <div class=" mr-1 whitespace-nowrap">
                                  <img v-if="$page.props.auth.user.photo" class="user_photo" :alt="$page.props.auth.user.first_name" :src="$page.props.auth.user.photo" />
                                  <img v-else src="/images/svg/profile.svg" class="w-5 h-5" alt="user profile" />
                                  <span>{{ $page.props.auth.user.first_name }}</span>
                                  <span class="hidden md:inline">{{ $page.props.auth.user.last_name }}</span>
                              </div>
                              <icon class="w-5 h-5 drop-down-caret-icon" name="cheveron-down" />
                          </div>
                      </template>
                      <template #dropdown>
                          <div class="shadow-xl bg-white rounded text-sm">
                              <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('users.edit.profile')">{{ $t('Edit Profile') }}</Link>
                              <Link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white w-full text-left" :href="route('logout')" method="delete" as="button">{{ $t('Logout') }}</Link>
                          </div>
                      </template>
                  </dropdown>
              </div>
          </div>
        </div>
        <div class="md:flex md:flex-grow md:overflow-hidden">
          <main-menu class="hidden md:block sidebar shrink-0 md:w-60 overflow-y-auto" />
          <div class="md:flex-1 md:overflow-y-auto" scroll-region>
              <div class="container-head">
                  <div class="ch-left">
                      <h1 class="page-title">{{ $t(title) }}</h1>
                      <div class="breadcrumb text-sm">
                          <Link :href="route('dashboard')"><icon class="w-3 h-3" name="home" /></Link>
                          <span class="b-item">/</span>
                          <Link v-if="edit_route" :href="route(edit_route)" class="capitalize">{{ edit_route }}</Link>
                          <span v-if="edit_route" class="b-item">/</span>
                          <span class="b-item">{{ $t(title) }}</span>
                      </div>
                  </div>
                  <div class="ch-right cursor-pointer">
                      <button class="theme-toggle" id="theme-toggle" title="Toggles light & dark" :aria-label="current_mode" aria-live="polite" @click="switchMode">
                          <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                              <mask class="moon" id="moon-mask">
                                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                  <circle cx="24" cy="10" r="6" fill="black" />
                              </mask>
                              <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                              <g class="sun-beams" stroke="currentColor">
                                  <line x1="12" y1="1" x2="12" y2="3" />
                                  <line x1="12" y1="21" x2="12" y2="23" />
                                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                  <line x1="1" y1="12" x2="3" y2="12" />
                                  <line x1="21" y1="12" x2="23" y2="12" />
                                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                              </g>
                          </svg>
                      </button>
                  </div>
              </div>
            <flash-messages />
              <div class="sec-cont">
                  <slot />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/Shared/Icon.vue'
import Logo from '@/Shared/Logo.vue'
import Dropdown from '@/Shared/Dropdown.vue'
import MainMenu from '@/Shared/MainMenu.vue'
import FlashMessages from '@/Shared/FlashMessages.vue'
import { Link } from '@inertiajs/vue3'
import moment from 'moment'
import { loadLanguageAsync, getActiveLanguage } from 'laravel-vue-i18n';
import axios from 'axios'

export default {
    components: {
        Dropdown,
        FlashMessages,
        Icon,
        Logo,
        Link,
        MainMenu,
    },
    props: {
        title: String,
    },
    data() {
        return{
            time: '',
            current_mode: 'light',
            modes: ['dark', 'light'],
            edit_route: '',
            locale: this.$page.props.auth.user.locale || this.$page.props.settings.default_language,
        }
    },
    computed: {
        selected_language() {
            return this.$page.props.languages.find(language => language.code === this.$page.props.locale)
        },
        languages_except_selected(){
            return this.$page.props.languages.filter(language => language.code !== this.$page.props.locale)
        }
    },
    methods:{
        updateLanguage(code){
            axios.post(this.route('language', code), {}).then((response) => {
                if(response.data){
                    window.location.reload();
                }
            })
        },
        generateGreetings(){
            const currentHour = this.moment().format('HH')
            if (currentHour >= 3 && currentHour < 12){
                return 'Good Morning'
            } else if (currentHour >= 12 && currentHour < 15){
                return 'Good Noon'
            }else if (currentHour >= 15 && currentHour < 18){
                return 'Good Afternoon'
            }   else if (currentHour >= 18 && currentHour < 20){
                return 'Good Evening'
            } else {
                return 'Hello'
            }
        },
        switchMode(){
            this.current_mode = this.current_mode === 'light' ? 'dark' : 'light'
            localStorage.setItem('current_mode', this.current_mode)
        },
        detectCurrentUrl(){
            const url = this.$page.url;
            const splitUrl = url.split('/');
            let editString = ['edit', 'create'].includes(url.substring(url.lastIndexOf("/") + 1));
            if(!editString){
                editString = splitUrl[splitUrl.length - 2] === 'tickets';
            }
            let editRoute = url.split('/')[2]
            if(['settings','front_pages'].includes(editRoute)){
                editRoute = url.split('/')[3];
            }
            this.edit_route = editString? editRoute : '';
        },
    },
    updated() {
        this.detectCurrentUrl()
    },
    created() {
        console.log('hello')
        this.moment = moment;
        let vm = this
        if(localStorage.getItem('current_mode')){
            this.current_mode = localStorage.getItem('current_mode')
        }
        vm.time = vm.moment().format('MMMM Do YYYY, h:mm A')
        window.setInterval(function () {
            vm.time = vm.moment().format('MMMM Do YYYY, h:mm A')
        }, 1000)
        this.detectCurrentUrl()

        console.log(this.locale, getActiveLanguage())
        if(getActiveLanguage() !== this.locale){
            console.log(this.locale)
            loadLanguageAsync(this.locale)
        }
    }
}
</script>
