import { v4 } from "uuid";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
const _sfc_main = {
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    onInput: {
      type: Function
    },
    items: {
      type: Array
    },
    id: {
      type: String,
      default() {
        return `select-input-filter-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selectedValue: "",
      selected: this.modelValue,
      isListVisible: false
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  created() {
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isListVisible = false;
      }
    },
    onFocus() {
      this.isListVisible = true;
    },
    selectItem(item) {
      this.$refs.input.value = item.name;
      this.selected = item.id;
      this.selectedValue = item.name;
      this.isListVisible = false;
    },
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["sel__filter", _ctx.$attrs.class],
    ref: "sel__filter"
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input",
    class: ["form-select", { error: $props.error }],
    type: "text"
  }, { ..._ctx.$attrs, class: null }, {
    placeholder: $props.placeholder,
    autocomplete: "off"
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isListVisible && $props.items.length) {
    _push(`<div class="i__filter__list"><ul><!--[-->`);
    ssrRenderList($props.items, (item, index) => {
      _push(`<li>${ssrInterpolate(item.name)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInputFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectInputFilter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SelectInputFilter as S
};
