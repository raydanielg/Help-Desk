import { _ as _export_sfc, L as Logo, F as FlashMessages } from "./FlashMessages-BlPv0OK4.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Head, Link } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Login" },
  components: {
    LoadingButton,
    Logo,
    TextInput,
    Head,
    Link,
    FlashMessages
  },
  props: {
    is_demo: Number
  },
  data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    sendLink() {
      this.form.post(this.route("password.reset.email"));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_flash_messages = resolveComponent("flash-messages");
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent));
  _push(`<div class="p-6 min-h-screen flex justify-center items-center light">`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  _push(`<div class="w-full max-w-md">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "block mx-auto w-full max-w-xs fill-white",
          height: "50"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "block mx-auto w-full max-w-xs fill-white",
            height: "50"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<form class="mt-8 bg-white dark:bg-slate-900 border border-gray-100 rounded-lg shadow-xl overflow-hidden"><div class="px-10 py-12"><h2 class="text-center font-bold text-xl">${ssrInterpolate(_ctx.$t("Reset Password"))}</h2><div class="mx-auto mt-3 w-24 border-b"></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: _ctx.$t("Email Address"),
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "ml-auto btn-indigo w-full items-center justify-center mt-8",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Send Password Reset Link"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Send Password Reset Link")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ForgotPassword as default
};
