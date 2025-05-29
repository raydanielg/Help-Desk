import { _ as _export_sfc, F as FlashMessages, L as Logo } from "./FlashMessages-BlPv0OK4.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Head, Link } from "@inertiajs/vue3";
import vueRecaptcha from "vue3-recaptcha2";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Login" },
  components: {
    FlashMessages,
    LoadingButton,
    Logo,
    TextInput,
    Head,
    Link,
    vueRecaptcha
  },
  props: {
    is_demo: Number,
    site_key: String
  },
  data() {
    return {
      loadingTimeout: 3e4,
      disable_login_button: true,
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    recaptchaVerified(response) {
      this.disable_login_button = false;
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
      this.form.post(this.route("login.store"));
    },
    autofillLogin(e, role, login) {
      e.preventDefault();
      const roleEmails = { "admin": "john.due.helo@mail.com", "manager": "robert.slaughter@mail.com", "customer": "mmarks@example.com" };
      this.form.email = roleEmails[role];
      this.form.password = "w3bd.com";
      if (login) {
        this.login();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_flash_messages = resolveComponent("flash-messages");
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_vue_recaptcha = resolveComponent("vue-recaptcha");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="p-6 min-h-screen flex justify-center items-center light">`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  _push(`<div class="w-full max-w-md">`);
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
  _push(`<form class="auth mt-8 bg-white dark:bg-slate-900 border border-gray-100 rounded-lg shadow-xl overflow-hidden"><div class="px-8 py-5"><h2 class="text-center font-bold text-xl">${ssrInterpolate(_ctx.$t("Login"))}</h2><div class="mx-auto mt-2 w-24 border-b"></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: "Email",
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "mt-6",
    label: "Password",
    type: "password"
  }, null, _parent));
  _push(`<label class="mt-6 select-none flex items-center" for="remember"><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} class="mr-1" type="checkbox"><span class="text-sm">${ssrInterpolate(_ctx.$t("Remember Me"))}</span></label><div class="flex justify-center items-center pt-4">`);
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
    disabled: $data.disable_login_button && $props.site_key,
    loading: $data.form.processing,
    class: ["ml-auto btn-indigo w-full items-center justify-center mt-4", { "opacity-50 cursor-not-allowed": $data.disable_login_button && $props.site_key }],
    type: "submit"
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
  _push(`<div class="mt-5 flex justify-center">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "ml-2",
    href: _ctx.route("password.reset")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Forgot your password?"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Forgot your password?")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mt-5 flex justify-center">${ssrInterpolate(_ctx.$t("Don’t have account?"))} `);
  _push(ssrRenderComponent(_component_Link, {
    class: "ml-2",
    href: _ctx.route("register")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Register"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Register")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if ($props.is_demo) {
    _push(`<div class="pb-2 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-1 login-as items-center"><table style="${ssrRenderStyle({ "width": "100%" })}" class="mb-1"><tr><th>Role</th><th>Email</th><th>Password</th><th>Action</th></tr><tr><td>Admin</td><td>john.due.helo@mail.com</td><td>w3bd.com</td><td class="action">Copy</td></tr><tr><td>Manager</td><td>robert.slaughter@mail.com</td><td>w3bd.com</td><td class="action">Copy</td></tr><tr><td>Customer</td><td>mmarks@example.com</td><td>w3bd.com</td><td class="action">Copy</td></tr></table><h2 class="text-sm font-bold mb-1">Quick Login Without Captcha As: </h2><div class="action flex flex-col sm:flex-row gap-3"><button class="btn-indigo">Admin</button><button class="btn-indigo">Manager</button><button class="btn-indigo">Customer</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};
