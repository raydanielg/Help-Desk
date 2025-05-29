import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Head } from "@inertiajs/vue3";
import { S as Subscribe } from "./Subscribe-DC9koxZD.js";
import sanitizeHtml from "sanitize-html";
import moment from "moment";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  props: {
    post: Object,
    recent_posts: Array,
    types: Array
  },
  components: {
    Icon,
    Head,
    Subscribe
  },
  data() {
    return {
      title: this.post.title,
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
    if (this.post.author) {
      this.author_name = this.post.author.first_name + " " + this.post.author.last_name;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($data.title)
  }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate(_ctx.kb.title)}</h1><ul class="list-none mt-6 text-white"><li class="inline-block font-semibold mx-5"><span class="block">Time :</span> <span class="block">${ssrInterpolate($options.getReadingTime(_ctx.kb.details))}</span></li></ul></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20"><div class="container"><div class="-mx-4 flex flex-wrap justify-center"><div class="w-full px-4"><div class="wow fadeInUp relative z-20 mb-[60px] h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]" data-wow-delay=".1s">`);
  if (_ctx.kb.image) {
    _push(`<img${ssrRenderAttr("src", _ctx.kb.image)} alt="image" class="h-full w-full object-cover object-center">`);
  } else {
    _push(`<img src="/images/image.jpg" alt="image" class="h-full w-full object-cover object-center">`);
  }
  _push(`<div class="absolute top-0 left-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark-700 to-transparent"><div class="flex flex-wrap items-center p-4 pb-4 sm:p-8"><div class="mb-4 mr-5 flex items-center md:mr-10"><div class="mr-4 h-10 w-10 overflow-hidden rounded-full">`);
  if (_ctx.kb.author.photo_path) {
    _push(`<img${ssrRenderAttr("src", _ctx.kb.author.photo_path)} class="w-full" alt="">`);
  } else {
    _push(`<img src="/images/svg/profile.svg" class="w-full" alt="">`);
  }
  _push(`</div><p class="text-base font-medium text-white"> By ${ssrInterpolate($data.author_name)}</p></div><div class="mb-4 flex items-center"><p class="mr-5 flex items-center text-sm font-medium text-white md:mr-8"><span class="mr-3"><svg width="15" height="15" viewBox="0 0 15 15" class="fill-current"><path d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"></path><path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"></path><path d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"></path><path d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"></path><path d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"></path><path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"></path><path d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"></path><path d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"></path><path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"></path></svg></span> ${ssrInterpolate(_ctx.moment($props.post.updated_at).format("DD MMM YYYY"))}</p></div></div></div></div><div class="-mx-4 flex flex-wrap"><div class="w-full px-4 lg:w-8/12"><div><h2 class="wow fadeInUp mb-6 text-[26px] font-bold leading-snug text-dark sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug" data-wow-delay=".1s">${ssrInterpolate($props.post.title)}</h2><div class="post-details html">${$options.sanitizeHtml($props.post.details) ?? ""}</div><div class="-mx-4 mb-12 flex flex-wrap items-center"><div class="w-full px-4">`);
  if ($props.types.length) {
    _push(`<div class="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0" data-wow-delay=".1s"><!--[-->`);
    ssrRenderList($props.types, (type) => {
      _push(`<a${ssrRenderAttr("href", _ctx.route("blog.by_type", type.id))} class="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-white hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4">${ssrInterpolate(type.name)}</a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><div class="w-full px-4 lg:w-4/12"><div><div class="-mx-4 mb-8 flex flex-wrap"><div class="w-full px-4"><h2 class="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]" data-wow-delay=".1s"> Recent Articles </h2><span class="mb-10 inline-block h-[2px] w-20 bg-primary"></span></div><!--[-->`);
  ssrRenderList(_ctx.random_kb, (recent_post) => {
    _push(`<div class="w-full px-4 md:w-1/2 lg:w-full"><div class="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5" data-wow-delay=".1s"><div class="w-full"><h4><a${ssrRenderAttr("href", _ctx.route("kb.details", recent_post.id))} class="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg">${ssrInterpolate(recent_post.title)}</a></h4><p class="text-sm text-body-color">${ssrInterpolate(_ctx.moment(recent_post.updated_at).format("MMM DD, YYYY"))}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/KnowledgeBase/Det.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Det = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Det as default
};
