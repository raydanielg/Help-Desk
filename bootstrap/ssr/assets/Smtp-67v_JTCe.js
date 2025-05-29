import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import axios from "axios";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Priorities" },
  components: {
    Icon,
    Link,
    Head,
    Pagination,
    TextInput,
    SelectInput,
    LoadingButton
  },
  layout: Layout,
  props: {
    title: String,
    demo: Boolean,
    keys: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        MAIL_HOST: this.demo ? "******************" : this.keys["MAIL_HOST"]["value"],
        MAIL_PORT: this.keys["MAIL_PORT"]["value"],
        MAIL_USERNAME: this.demo ? "**********************" : this.keys["MAIL_USERNAME"]["value"],
        MAIL_PASSWORD: this.demo ? "*********" : this.keys["MAIL_PASSWORD"]["value"],
        MAIL_ENCRYPTION: this.keys["MAIL_ENCRYPTION"]["value"],
        MAIL_FROM_ADDRESS: this.keys["MAIL_FROM_ADDRESS"]["value"],
        MAIL_FROM_NAME: this.keys["MAIL_FROM_NAME"]["value"]
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("settings.smtp.update"), {
        onSuccess: () => {
          axios.get(this.route("clear.cache", "config")).then((response) => {
          });
        }
      });
    }
  },
  created() {
    console.log(this.demo);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_HOST,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_HOST = $event,
    error: $data.form.errors.MAIL_HOST,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("SMTP Host")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_PORT,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_PORT = $event,
    error: $data.form.errors.MAIL_PORT,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("SMTP Port")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_USERNAME,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_USERNAME = $event,
    error: $data.form.errors.MAIL_USERNAME,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("SMTP Username")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_PASSWORD,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_PASSWORD = $event,
    error: $data.form.errors.MAIL_PASSWORD,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("SMTP Password")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_ENCRYPTION,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_ENCRYPTION = $event,
    error: $data.form.errors.MAIL_ENCRYPTION,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Mail Encryption")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_FROM_ADDRESS,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_FROM_ADDRESS = $event,
    error: $data.form.errors.MAIL_FROM_ADDRESS,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("From Address")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.MAIL_FROM_NAME,
    "onUpdate:modelValue": ($event) => $data.form.MAIL_FROM_NAME = $event,
    error: $data.form.errors.MAIL_FROM_NAME,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("From Name")
  }, null, _parent));
  _push(`</div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Save"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Smtp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Smtp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Smtp as default
};
