import { I as Icon, D as Dropdown } from "./Dropdown-CRPxtfzU.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
const _sfc_main = {
  components: {
    Icon,
    Dropdown
  },
  props: {
    modelValue: String,
    disableTrash: String,
    maxWidth: {
      type: Number,
      default: 300
    },
    disableReset: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "reset"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow relative"><input class="relative px-6 py-3 w-full rounded focus:shadow-outline" autocomplete="off" type="text" name="search"${ssrRenderAttr("placeholder", _ctx.$t("Search..."))}${ssrRenderAttr("value", $props.modelValue)}>`);
  if (!$props.disableReset && $props.modelValue) {
    _push(`<span class="cursor-pointer absolute right-3 rtl:left-3 top-3" type="button">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "close",
      class: "block w-5 h-5 fill-black focus:fill-red-800"
    }, null, _parent));
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SearchInput as S
};
