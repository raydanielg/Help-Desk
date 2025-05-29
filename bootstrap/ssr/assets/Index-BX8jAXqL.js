import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { P as Pagination } from "./Pagination-D-H06zcq.js";
import { Head, Link } from "@inertiajs/vue3";
import { S as Subscribe } from "./Subscribe-DC9koxZD.js";
import throttle from "lodash/throttle.js";
import pickBy from "lodash/pickBy.js";
import mapValues from "lodash/mapValues.js";
import moment from "moment";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: {
    Subscribe,
    Icon,
    Head,
    Link,
    Pagination,
    SearchInput
  },
  props: {
    kb: Object,
    types: Array,
    title: String,
    filters: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("kb"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  },
  created() {
    this.moment = moment;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Knowledge Base" }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate("Knowledge Base")}</h1></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20"><div class="container"><div class="flex w-full items-center justify-center pb-16"><div class="flex justify-center w-full"><form class="w-full lg:w-1/3"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search"${ssrRenderAttr("value", $data.form.search)} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in knowledge base..." required></div></form></div></div>`);
  if ($props.kb.data.length) {
    _push(`<div class="-mx-4 flex flex-wrap"><!--[-->`);
    ssrRenderList($props.kb.data, (knowledge) => {
      _push(`<div class="w-full px-4 md:w-1/2 lg:w-1/3"><div class="wow fadeInUp group mb-10" data-wow-delay=".1s"><div><span class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">${ssrInterpolate(_ctx.moment(knowledge.updated_at).format("MMM DD, YYYY"))}</span><h3>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("kb.details", knowledge.id),
        class: "mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(knowledge.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(knowledge.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</h3><p class="text-base text-body-color">${ssrInterpolate(knowledge.details.length < 70 ? knowledge.details : knowledge.details.substring(0, 70) + "...")}</p></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div>No knowledge base items found!</div>`);
  }
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.kb.links
  }, null, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/KnowledgeBase/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
