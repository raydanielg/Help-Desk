<template>
  <button :disabled="disabled || loading" class="flex items-center">
    <div v-if="loading" class="btn-spinner mr-2" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
      disabled: {
        required : false
      },
  },
}
</script>
