import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import axios from "axios";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
    keys: Object,
    option: Object,
    demo: Boolean
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        IMAP_HOST: this.keys["IMAP_HOST"]["value"],
        IMAP_PORT: this.keys["IMAP_PORT"]["value"],
        IMAP_PROTOCOL: this.keys["IMAP_PROTOCOL"]["value"],
        IMAP_ENCRYPTION: this.keys["IMAP_ENCRYPTION"]["value"],
        IMAP_USERNAME: this.keys["IMAP_USERNAME"]["value"],
        IMAP_PASSWORD: this.keys["IMAP_PASSWORD"]["value"],
        enable_piping: this.option
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("settings.piping.update"), {
        onSuccess: () => {
          axios.get(this.route("clear.cache", "config")).then((response) => {
          });
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap"><div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Enable Email Piping Option"))}</div><p class="text-sm pt-1 mb-1">${ssrInterpolate(_ctx.$t("Ticket create automatically including attachment when receive a new email."))}</p></div><div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3"><label for="enablePiping" class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input id="enablePiping" type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray($props.option.value) ? ssrLooseContain($props.option.value, null) : $props.option.value) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div><div class="ml-3 text-sm">${ssrInterpolate($props.option.name)}</div></label></div></div><div class="px-8 flex">`);
  if ($props.demo) {
    _push(`<p class="pt-1 mb-1">${ssrInterpolate(_ctx.$t("You can try to sending email with the `piping@atorali.com` email address to test on the demo mode."))}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_HOST,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_HOST = $event,
    error: $data.form.errors.IMAP_HOST,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Host")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_PORT,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_PORT = $event,
    error: $data.form.errors.IMAP_PORT,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Port")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_PROTOCOL,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_PROTOCOL = $event,
    error: $data.form.errors.IMAP_PROTOCOL,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Protocol"),
    placeholder: _ctx.$t("e.g. imap")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_ENCRYPTION,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_ENCRYPTION = $event,
    error: $data.form.errors.IMAP_ENCRYPTION,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Encryption"),
    placeholder: _ctx.$t("e.g. ssl")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_USERNAME,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_USERNAME = $event,
    error: $data.form.errors.IMAP_USERNAME,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Username")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.IMAP_PASSWORD,
    "onUpdate:modelValue": ($event) => $data.form.IMAP_PASSWORD = $event,
    error: $data.form.errors.IMAP_PASSWORD,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("IMAP Password")
  }, null, _parent));
  _push(`</div><div class="p-8 flex flex-wrap"><div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Email Piping Cronjob Instruction"))}</div><p class="mt-2 font-light">If you would like to create automatically ticket from sending email you need set a cron job for that which one run like every 3 minute.</p><code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/3 * * * * /usr/bin/php artisan command:piping_email</code><p class="mt-3 font-light">For the shared hosting like cPanel or any panel server you can call url as like this</p><code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/3 * * * * wget -q -O - https://website.com/cron/piping &gt;/dev/null 2&gt;&amp;1</code><img src="/images/cron_job_example.png" alt="cron job example"></div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Piping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Piping = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Piping as default
};
