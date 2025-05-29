<template>
  <div v-if="links.length > 3">
    <div class="flex flex-wrap p-nat -mb-1">
      <template v-for="(link, key) in links">
        <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" v-html="link.label" />
        <Link v-else :key="key+1" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded" :class="{ 'active': link.active }" :href="link.url" v-html="link.label" />
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
