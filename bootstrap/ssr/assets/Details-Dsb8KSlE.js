import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Head } from "@inertiajs/vue3";
import { S as Subscribe } from "./Subscribe-DC9koxZD.js";
import sanitizeHtml from "sanitize-html";
import moment from "moment";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  props: {
    kb: Object,
    random_kb: Array,
    types: Array
  },
  components: {
    Icon,
    Head,
    Subscribe
  },
  data() {
    return {
      title: this.kb.title,
      author_name: ""
    };
  },
  methods: {
    getReadingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      return time + " minute read";
    },
    sanitizeHtml
  },
  created() {
    this.moment = moment;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($data.title)
  }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate($props.kb.title)}</h1><ul class="list-none mt-6 text-white"><li class="inline-block font-semibold mx-5"><span class="block">Time :</span> <span class="block">${ssrInterpolate($options.getReadingTime($props.kb.details))}</span></li></ul></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20"><div class="container"><div class="-mx-4 flex flex-wrap justify-center"><div class="w-full px-4"><div class="-mx-4 flex flex-wrap"><div class="w-full px-4 lg:w-8/12"><div><h2 class="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug" data-wow-delay=".1s">${ssrInterpolate($props.kb.title)}</h2><div class="post-details html">${$props.kb.details ?? ""}</div><div class="-mx-4 mb-12 flex flex-wrap items-center"><div class="w-full px-4">`);
  if ($props.types.length) {
    _push(`<div class="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0" data-wow-delay=".1s"><!--[-->`);
    ssrRenderList($props.types, (type) => {
      _push(`<a${ssrRenderAttr("href", _ctx.route("kb.by_type", type.id))} class="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-white hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4">${ssrInterpolate(type.name)}</a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><div class="w-full px-4 lg:w-4/12"><div><div class="-mx-4 mb-8 flex flex-wrap"><div class="w-full px-4"><h2 class="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]" data-wow-delay=".1s"> Random </h2><span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span></div><!--[-->`);
  ssrRenderList($props.random_kb, (recent_post) => {
    _push(`<div class="w-full px-4 md:w-1/2 lg:w-full"><div class="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5" data-wow-delay=".1s"><div class="w-full"><h4><a${ssrRenderAttr("href", _ctx.route("kb.details", recent_post.id))} class="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg">${ssrInterpolate(recent_post.title)}</a></h4><p class="text-sm text-body-color">${ssrInterpolate(_ctx.moment(recent_post.updated_at).format("MMM DD, YYYY"))}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/KnowledgeBase/Details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Details = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Details as default
};
