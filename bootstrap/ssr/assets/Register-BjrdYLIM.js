import { _ as _export_sfc, L as Logo, F as FlashMessages } from "./FlashMessages-BlPv0OK4.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Head, Link } from "@inertiajs/vue3";
import vueRecaptcha from "vue3-recaptcha2";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Login" },
  components: {
    vueRecaptcha,
    LoadingButton,
    Logo,
    TextInput,
    Head,
    Link,
    FlashMessages
  },
  props: {
    is_demo: Number,
    site_key: String
  },
  data() {
    return {
      disable_button: true,
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        city: "",
        country_id: "",
        address: "",
        password: "",
        confirm_password: ""
      })
    };
  },
  methods: {
    recaptchaVerified(response) {
      this.disable_button = false;
      console.log(response);
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    },
    recaptchaError(reason) {
      console.log(reason);
    },
    login() {
      if (this.form.password !== this.form.confirm_password) {
        alert("Your password is not matched correctly.");
        return;
      }
      this.form.post(this.route("register.store"));
    },
    autofillLogin(e, role) {
      e.preventDefault();
      const roleEmails = { "admin": "john.due.helo@mail.com", "manager": "robert.slaughter@mail.com", "customer": "mmarks@example.com" };
      this.form.email = roleEmails[role];
      this.form.password = "secret";
      this.login();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_flash_messages = resolveComponent("flash-messages");
  const _component_text_input = resolveComponent("text-input");
  const _component_vue_recaptcha = resolveComponent("vue-recaptcha");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="p-6 min-h-screen flex justify-center items-center light"><div class="w-full max-w-xl">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, { class: "block w-48 mx-auto fill-white" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, { class: "block w-48 mx-auto fill-white" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<form class="mt-8 bg-white dark:bg-slate-900 border border-gray-100 rounded-lg shadow-xl overflow-hidden"><div class="px-10 py-12"><h2 class="text-center font-bold text-xl">${ssrInterpolate(_ctx.$t("Registration"))}</h2><div class="mx-auto mt-2 mb-6 w-24 border-b"></div>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  _push(`<div class="flex flex-wrap p-3">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("First name"),
    type: "text",
    autofocus: "",
    autocapitalize: "off",
    is_required: true,
    required: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Last name"),
    type: "text",
    autofocus: "",
    autocapitalize: "off",
    is_required: true,
    required: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Email"),
    type: "email",
    autofocus: "",
    autocapitalize: "off",
    is_required: true,
    required: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Phone"),
    type: "text",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    error: $data.form.errors.country_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Country"),
    type: "text",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("City"),
    type: "text",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full",
    label: _ctx.$t("Address"),
    type: "text",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Password"),
    type: "password",
    is_required: true,
    required: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.confirm_password,
    "onUpdate:modelValue": ($event) => $data.form.confirm_password = $event,
    error: $data.form.errors.confirm_password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: _ctx.$t("Confirm Password"),
    type: "password",
    is_required: true,
    required: ""
  }, null, _parent));
  _push(`<div class="flex justify-center items-center py-3 w-full">`);
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
  _push(`</div>`);
  _push(ssrRenderComponent(_component_loading_button, {
    disabled: $data.disable_button && $props.site_key,
    loading: $data.form.processing,
    class: ["ml-auto btn-indigo w-full items-center justify-center", { "opacity-50 cursor-not-allowed": $data.disable_button && $props.site_key }],
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Submit"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Submit")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mt-4 flex justify-center">${ssrInterpolate(_ctx.$t("Already have an account?"))} `);
  _push(ssrRenderComponent(_component_Link, {
    class: "ml-2",
    href: _ctx.route("login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Login"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Login")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Register as default
};
