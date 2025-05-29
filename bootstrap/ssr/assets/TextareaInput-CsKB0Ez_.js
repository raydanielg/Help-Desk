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
        return `textarea-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: String,
    rows: {
      type: Number,
      default: 3
    }
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-textarea", { error: $props.error }],
    rows: $props.rows,
    value: $props.modelValue
  }), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextareaInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextareaInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TextareaInput as T
};
