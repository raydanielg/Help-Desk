import { v4 } from "uuid";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
const _sfc_main = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    is_required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)} ${ssrInterpolate($props.is_required ? "*" : "")}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    placeholder: $props.placeholder,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TextInput as T
};
