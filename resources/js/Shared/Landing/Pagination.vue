<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap items-center justify-center -mb-1 __pagination">
            <template v-for="(link, key) in links">
                <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded bg-white dark:bg-slate-900 hover:text-white border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600
                        hover:bg-indigo-600 dark:hover:bg-indigo-600" v-html="link.label" />
                <Link v-else :key="key+1" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded bg-white dark:bg-slate-900 hover:text-white border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600
                        hover:bg-indigo-600 dark:hover:bg-indigo-600" :class="{ 'active': link.active }" :href="link.url" v-html="link.label" />
            </template>
        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/vue3'
export default {
    props: {
        links: Array,
    },
    components: {
        Link,
    },
}
</script>
