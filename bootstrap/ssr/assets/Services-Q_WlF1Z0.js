import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Head } from "@inertiajs/vue3";
import sanitizeHtml from "sanitize-html";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
    data: Object
  },
  data() {
    return {
      page: JSON.parse(this.data.html),
      form: this.$inertia.form({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
    };
  },
  methods: {
    sanitizeHtml,
    store() {
      this.form.post(this.route("contact.send"), {
        onSuccess: () => {
          this.form.reset();
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Services" }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate(_ctx.$t($props.data.title))}</h1></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"><div class="container mx-auto"><div class="-mx-4 flex flex-wrap"><!--[-->`);
  ssrRenderList($data.page.services, (service) => {
    _push(`<div class="w-full px-4 md:w-1/2 lg:w-1/3"><div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"><div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "fill-white w-8 h-8",
      name: service.icon
    }, null, _parent));
    _push(`</div><h4 class="text-dark mb-3 text-xl font-semibold">${ssrInterpolate(service.name)}</h4><p class="text-body-color">${ssrInterpolate(service.details)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Services as default
};
