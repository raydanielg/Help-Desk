import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@inertiajs/vue3";
import "./LoadingButton-C_hDdjdK.js";
import "moment";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: {
    Icon
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">Privacy Policy</h1></div></div></div></div></section><div class="relative"><div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900"><svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path></svg></div></div><section class="relative md:py-24 py-16"><div class="container"><div class="md:flex justify-center"><div class="md:w-3/4"><div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"><h5 class="text-xl font-semibold mb-4">Overview :</h5><p class="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p><p class="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p><p class="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p><h5 class="text-xl font-semibold mb-4 mt-8">We use your information to :</h5><ul class="list-none text-slate-400 mt-4"><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Digital Marketing Solutions for Tomorrow</li><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Our Talented &amp; Experienced Marketing Agency</li><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Create your own skin to match your brand</li><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Digital Marketing Solutions for Tomorrow</li><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Our Talented &amp; Experienced Marketing Agency</li><li class="flex mt-2">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 chat-top-icon mr-2",
    name: "check"
  }, null, _parent));
  _push(`Create your own skin to match your brand</li></ul><h5 class="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily :</h5><p class="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p><div class="mt-8"><a href="" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Print</a></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Faqs/Site.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Site = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Site as default
};
