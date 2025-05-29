import './bootstrap'
import '../css/app.scss'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import { i18nVue } from 'laravel-vue-i18n'
import Echo from 'laravel-echo'


import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

import Pusher from 'pusher-js'
window.Pusher = Pusher
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
})


createInertiaApp({
    title: title => title ? `${title} - HelpDesk` : 'HelpDesk',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(i18nVue, {
                lang: 'en',
                resolve: async lang => {
                    const langs = import.meta.glob('../../lang/*.json')
                    return await langs[`../../lang/${lang}.json`]()
                },
            })
            .use(Donut)
            .mount(el)
    },
    progress: {
        delay: 100,
        color: '#3c4858',
        includeCSS: true,
        showSpinner: true,
    },
})
