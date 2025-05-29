<template>
  <div class="sel__filter" :class="$attrs.class" ref="sel__filter">
      <div class="font-bold text-sm mb-1">{{ $t(label) }} </div>
      <div v-if="itemValue && !editItem" class="font-light text-sm flex gap-3">{{ itemValue }} <icon v-if="editable" name="edit" @click="editItem=!editItem" class="w-4 h-4 mr-1 cursor-pointer" /></div>
      <div class="w-25 flex items-center">
          <input
              v-if="editItem"
              :id="id"
              ref="input"
              class="form-select w-25"
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
          <icon v-if="editItem" @click="editItem=false" name="close" class="w-4 h-4 ml-2 cursor-pointer" />
      </div>
    <div v-if="error" class="form-error">{{ error }}</div>
    <div v-if="isListVisible && items.length" class="i__filter__list">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="selectItem(item, e)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'
import Icon from '@/Shared/Icon.vue'

export default {
    components:{
        Icon
    },
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
      editable: [Number, Boolean],
    error: String,
    label: String,
    value: String,
    modelValue: [String, Number, Boolean],
  },
  emits: ['update:modelValue', 'update:value', 'change'],
  data() {
    return {
      selectedValue: '',
      selected: this.modelValue,
      isListVisible: false,
        editItem: false,
        itemValue: this.value
    }
  },
  watch: {
    selected(selected) {
      this.$emit('update:modelValue', selected)
        this.editItem = false
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
    selectItem(item, e){
      this.$refs.input.value = item.name
      this.selected = item.id
      this.selectedValue = item.name
      this.isListVisible = false
        this.editItem = false
        this.itemValue = item.name
        this.$emit('update:modelValue', item.id)
        this.$emit('update:value', item.name)
        this.$emit('change', e)
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
