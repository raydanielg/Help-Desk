<template>
  <div class="sel__filter" :class="$attrs.class" ref="sel__filter">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <input
      :id="id"
      ref="input"
      class="form-select"
      :class="{ error: error }"
      type="text"
      v-bind="{ ...$attrs, class: null }"
      :placeholder="placeholder"
      @input="onInput"
      @focus="onFocus"
      @keydown.down.prevent="onArrowDown"
      @keydown.up.prevent="onArrowUp"
      @keydown.enter.tab.prevent="selectCurrentSelection"
      autocomplete="off"
    />
    <div v-if="error" class="form-error">{{ error }}</div>
    <div v-if="isListVisible && items.length" class="i__filter__list">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="selectItem(item)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    onInput: {
      type: Function,
    },
    items: {
      type: Array
    },
    id: {
      type: String,
      default() {
        return `select-input-filter-${uuid()}`
      },
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean],
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedValue: '',
      selected: this.modelValue,
      isListVisible: false,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('update:modelValue', selected)
    },
  },
  created() {

  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  methods: {
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isListVisible = false
      }
    },
    onFocus(){
      this.isListVisible = true
    },
    selectItem(item){
      this.$refs.input.value = item.name
      this.selected = item.id
      this.selectedValue = item.name
      this.isListVisible = false
    },
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  },
}
</script>
