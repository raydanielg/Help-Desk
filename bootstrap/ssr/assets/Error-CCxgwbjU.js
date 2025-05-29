import { L as Layout } from "./Layout-TbZAiGoL.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./Dropdown-CRPxtfzU.js";
import "@popperjs/core";
import "@inertiajs/vue3";
import "./LoadingButton-C_hDdjdK.js";
import "moment";
import "axios";
const _sfc_main = {
  layout: Layout,
  props: {
    status: Number
  },
  computed: {
    title() {
      return {
        503: "Service Unavailable",
        500: "Server Error",
        404: "Page Not Found",
        403: "Forbidden"
      }[this.status];
    },
    description() {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[this.status];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-primary relative z-10 py-[120px]"><div class="container mx-auto"><div class="-mx-4 flex"><div class="w-full px-4"><div class="mx-auto max-w-[400px] text-center"><h2 class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">${ssrInterpolate($props.status)}</h2><h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">${ssrInterpolate($options.title)}</h4><p class="mb-8 text-lg text-white">${ssrInterpolate($options.description)}</p><a${ssrRenderAttr("href", _ctx.route("home"))} class="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white"> Go To Home </a></div></div></div></div><div class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"><div class="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div><div class="flex h-full w-1/3"><div class="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div><div class="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div></div><div class="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Error as default
};
