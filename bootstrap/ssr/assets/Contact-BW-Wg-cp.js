import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Head } from "@inertiajs/vue3";
import sanitizeHtml from "sanitize-html";
import vueRecaptcha from "vue3-recaptcha2";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "moment";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: {
    vueRecaptcha,
    Icon,
    Head
  },
  props: {
    data: Object,
    site_key: String
  },
  data() {
    return {
      disabled: true,
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
    recaptchaVerified(response) {
      this.disabled = false;
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    },
    recaptchaError(reason) {
      console.log(reason);
    },
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
  const _component_vue_recaptcha = resolveComponent("vue-recaptcha");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Contact" }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate(_ctx.$t($props.data.title))}</h1></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]"><div class="container mx-auto"><div class="-mx-4 flex flex-wrap lg:justify-between"><div class="w-full px-4 lg:w-1/2 xl:w-6/12"><div class="mb-12 max-w-[570px] lg:mb-0"><h2 class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">${ssrInterpolate($data.page.content_text)}</h2><p class="text-body-color mb-9 text-base leading-relaxed">${ssrInterpolate($data.page.content_details)}</p><div class="mb-8 flex w-full max-w-[370px]"><div class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "home",
    class: "w-8 h-8 fill-white"
  }, null, _parent));
  _push(`</div><div class="w-full"><h4 class="text-dark mb-1 text-xl font-bold">${ssrInterpolate("Our Location")}</h4><p class="text-body-color text-base">${$options.sanitizeHtml($data.page.location) ?? ""}</p></div></div><div class="mb-8 flex w-full max-w-[370px]"><div class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "phone",
    class: "w-8 h-8 fill-white"
  }, null, _parent));
  _push(`</div><div class="w-full"><h4 class="text-dark mb-1 text-xl font-bold">${ssrInterpolate("Phone Number")}</h4><p class="text-body-color text-base"><a${ssrRenderAttr("href", "tel:" + $data.page.phone)}>${ssrInterpolate($data.page.phone)}</a></p></div></div><div class="mb-8 flex w-full max-w-[370px]"><div class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "email",
    class: "w-8 h-8 fill-white"
  }, null, _parent));
  _push(`</div><div class="w-full"><h4 class="text-dark mb-1 text-xl font-bold">${ssrInterpolate("Email Address")}</h4><p class="text-body-color text-base"><a${ssrRenderAttr("href", "mailto:" + $data.page.email)}>${ssrInterpolate($data.page.email)}</a></p></div></div></div></div><div class="w-full px-4 lg:w-1/2 xl:w-5/12"><div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12"><form method="post"><div class="mb-6"><input type="text"${ssrRenderAttr("value", $data.form.name)} placeholder="Your Name" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" required></div><div class="mb-6"><input type="email"${ssrRenderAttr("value", $data.form.email)} placeholder="Your Email" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" required></div><div class="mb-6"><input type="text"${ssrRenderAttr("value", $data.form.phone)} placeholder="Your Phone" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"></div><div class="mb-4"><textarea rows="6" placeholder="Your Message" class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" required>${ssrInterpolate($data.form.message)}</textarea></div><div class="flex justify-center items-center pb-3">`);
  if ($props.site_key) {
    _push(ssrRenderComponent(_component_vue_recaptcha, {
      sitekey: $props.site_key,
      size: "normal",
      theme: "light",
      onVerify: $options.recaptchaVerified,
      onExpire: $options.recaptchaExpired,
      onFail: $options.recaptchaFailed,
      onError: $options.recaptchaError,
      ref: "vueRecaptcha"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div><button${ssrIncludeBooleanAttr($data.disabled && $props.site_key) ? " disabled" : ""} type="submit" class="${ssrRenderClass([{ "disabled": $data.disabled && $props.site_key }, "bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90 cursor-pointer"])}"> Send Message </button></div></form><div><span class="absolute -top-10 -right-9 z-[-1]"><img src="/landing/images/contact/shape-1.svg" alt=""></span><span class="absolute -right-10 top-[90px] z-[-1]"><img src="/landing/images/contact/shape-2.svg" alt=""></span><span class="absolute -left-7 -bottom-7 z-[-1]"><img src="/landing/images/contact/shape-3.svg" alt=""></span></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Contact as default
};
