import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Head } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "moment";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: {
    Icon,
    Head
  },
  props: {
    title: String,
    data: {
      required: false
    }
  },
  created() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center text-white"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate($props.data)}</h1><div class="mt-4"><a href="/" class="btn py-2 px-5 bg-black hover:bg-indigo-700 text-white rounded-md">Back to Home</a></div></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Blank as default
};
