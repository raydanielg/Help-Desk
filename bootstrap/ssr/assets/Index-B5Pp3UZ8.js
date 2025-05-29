import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { F as FileInput } from "./FileInput-Y3725sIq.js";
import { resolveComponent, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Priorities" },
  components: {
    Icon,
    Link,
    Head,
    FileInput,
    Pagination,
    TextInput,
    TextareaInput,
    SelectInput,
    LoadingButton
  },
  layout: Layout,
  props: {
    title: String,
    site_key: String,
    settings: Object,
    languages: Array,
    users: Array,
    pusher: Boolean
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        app_name: this.settings.app_name.value,
        logo: null,
        site_key: this.site_key,
        default_recipient: this.settings.default_recipient ? this.settings.default_recipient.value : 1,
        logo_white: null,
        favicon: null,
        main_logo: "/images/logo.png",
        main_logo_white: "/images/logo_white.png",
        main_favicon: "/favicon.png",
        default_language: this.settings.default_language.value,
        footer_text: this.settings.footer_text.value,
        custom_css: typeof this.settings.custom_css !== "undefined" && this.settings.custom_css ? this.settings.custom_css.value : null,
        email_notifications: this.settings.email_notifications.value.map((en) => {
          return { "name": en.name, "slug": en.slug, "value": !!en.value };
        }),
        enable_options: this.settings.enable_options.value.map((eo) => {
          return { "name": eo.name, "slug": eo.slug, "value": !!eo.value };
        }),
        hide_ticket_fields: this.settings.hide_ticket_fields && this.settings.hide_ticket_fields.value ? this.settings.hide_ticket_fields.value : [],
        required_ticket_fields: this.settings.required_ticket_fields && this.settings.required_ticket_fields.value ? this.settings.required_ticket_fields.value : []
      }),
      hide_ticket_fields: ["department", "category", "sub_category", "ticket_type", "assigned_to"],
      required_ticket_fields: ["department", "category", "sub_category", "ticket_type", "assigned_to"]
    };
  },
  created() {
    console.log(this.settings.hide_ticket_fields);
    console.log(this.settings.required_ticket_fields);
    console.log(this.form);
  },
  methods: {
    checkRequiredFields(e) {
      if (e.target.checked && ["category", "sub_category"].includes(e.target.value)) {
        if (!this.form.required_ticket_fields.includes("category")) {
          this.form.required_ticket_fields.push("category");
        }
        if (!this.form.required_ticket_fields.includes("department")) {
          this.form.required_ticket_fields.push("department");
        }
      }
      if (!e.target.checked && ["department"].includes(e.target.value)) {
        if (this.form.required_ticket_fields.includes("category")) {
          this.removeElement(this.form.required_ticket_fields, "category");
        }
        if (this.form.required_ticket_fields.includes("sub_category")) {
          this.removeElement(this.form.required_ticket_fields, "sub_category");
        }
      }
      if (!e.target.checked && ["category"].includes(e.target.value)) {
        if (this.form.required_ticket_fields.includes("sub_category")) {
          this.removeElement(this.form.required_ticket_fields, "sub_category");
        }
      }
    },
    removeElement(obj, el) {
      const index = obj.indexOf(el);
      obj.splice(index, 1);
    },
    update() {
      const vm = this;
      const enableChat = this.form.enable_options.find((o) => o.slug = "chat");
      if (!!enableChat.value && !this.pusher) {
        alert("Please setup the pusher configuration to enable chat.");
        return;
      }
      this.form.post(this.route("global.update"), {
        onSuccess: () => {
          const successMessage = vm.$page.props.flash.success;
          this.form.logo = null;
          this.form.logo_white = null;
          if (successMessage) {
            window.location.reload();
          }
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.app_name,
    "onUpdate:modelValue": ($event) => $data.form.app_name = $event,
    error: $data.form.errors.app_name,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("App Name")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.site_key,
    "onUpdate:modelValue": ($event) => $data.form.site_key = $event,
    error: $data.form.errors.site_key,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Google ReCaptcha Site Key")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.default_language,
    "onUpdate:modelValue": ($event) => $data.form.default_language = $event,
    error: $data.form.errors.default_language,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Default Language")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.languages, (l) => {
          _push2(`<option${ssrRenderAttr("value", l.code)}${_scopeId}>${ssrInterpolate(l.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.languages, (l) => {
            return openBlock(), createBlock("option", {
              key: l.id,
              value: l.code
            }, toDisplayString(l.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pb-8 pr-6 w-full flex lg:w-1/3">`);
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.logo,
    "onUpdate:modelValue": ($event) => $data.form.logo = $event,
    error: $data.form.errors.logo,
    class: "pr-2 w-full lg:w-4/5",
    type: "file",
    accept: "image/png",
    label: "Logo"
  }, null, _parent));
  _push(`<div class="w-full lg:w-1/5 flex items-end justify-center">`);
  if ($data.form.main_logo) {
    _push(`<img class="block mb-2"${ssrRenderAttr("src", $data.form.main_logo)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="pb-8 pr-6 w-full flex lg:w-1/3">`);
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.logo_white,
    "onUpdate:modelValue": ($event) => $data.form.logo_white = $event,
    error: $data.form.errors.logo_white,
    class: "pr-2 w-full lg:w-4/5",
    type: "file",
    accept: "image/png",
    label: "Logo White"
  }, null, _parent));
  _push(`<div class="w-full lg:w-1/5 flex items-end justify-center">`);
  if ($data.form.main_logo_white) {
    _push(`<img class="block mb-2 rounded bg-dark"${ssrRenderAttr("src", $data.form.main_logo_white)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="pb-8 pr-6 w-full flex lg:w-1/3">`);
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.favicon,
    "onUpdate:modelValue": ($event) => $data.form.favicon = $event,
    error: $data.form.errors.favicon,
    class: "pr-2 w-full lg:w-4/5",
    type: "file",
    accept: "image/png",
    label: "Favicon"
  }, null, _parent));
  _push(`<div class="w-full lg:w-1/5 flex items-end justify-center">`);
  if ($data.form.main_favicon) {
    _push(`<img class="block mb-2"${ssrRenderAttr("src", $data.form.main_favicon)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Enable Options"))}</div></div><!--[-->`);
  ssrRenderList($data.form.enable_options, (option, ni) => {
    _push(`<div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3"><label${ssrRenderAttr("for", option.slug)} class="flex toggle_swtich items-center cursor-pointer"><div class="flex items-center mb-3"><input${ssrRenderAttr("id", option.slug)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(option.value) ? ssrLooseContain(option.value, null) : option.value) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"><div class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(option.name)}</div></div></label></div>`);
  });
  _push(`<!--]--><div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Email Notifications"))}</div></div><!--[-->`);
  ssrRenderList($data.form.email_notifications, (notification, ni) => {
    _push(`<div class="flex items-center justify-start pr-6 pb-8 w-full lg:w-1/3"><label${ssrRenderAttr("for", notification.slug)} class="flex toggle_swtich items-center cursor-pointer"><div class="flex items-center mb-3"><input${ssrRenderAttr("id", notification.slug)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(notification.value) ? ssrLooseContain(notification.value, null) : notification.value) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"><div class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(notification.name)}</div></div></label></div>`);
  });
  _push(`<!--]--><div class="flex w-full">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.default_recipient,
    "onUpdate:modelValue": ($event) => $data.form.default_recipient = $event,
    error: $data.form.errors.default_recipient,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Default Email Recipient for customer ticket")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.users, (u) => {
          _push2(`<option${ssrRenderAttr("value", u.id)}${_scopeId}>${ssrInterpolate(u.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.users, (u) => {
            return openBlock(), createBlock("option", {
              key: u.id,
              value: u.id
            }, toDisplayString(u.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="pr-6 pb-1 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Hide ticket fields"))}</div></div><div class="flex flex-wrap w-full pb-8"><!--[-->`);
  ssrRenderList($data.hide_ticket_fields, (htf) => {
    _push(`<label class="select-none flex items-center pr-8 capitalize"${ssrRenderAttr("for", "htf_" + htf)}><input${ssrRenderAttr("id", "htf_" + htf)}${ssrIncludeBooleanAttr(Array.isArray($data.form.hide_ticket_fields) ? ssrLooseContain($data.form.hide_ticket_fields, htf) : $data.form.hide_ticket_fields) ? " checked" : ""} class="mr-1"${ssrRenderAttr("value", htf)} type="checkbox"><span class="text-sm">${ssrInterpolate(htf.replace(/_/g, " "))}</span></label>`);
  });
  _push(`<!--]--></div><div class="pr-6 pb-1 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Required fields to submit ticket"))}</div></div><div class="flex flex-wrap w-full pb-8"><!--[-->`);
  ssrRenderList($data.required_ticket_fields, (rtf) => {
    _push(`<label class="select-none flex items-center pr-8 capitalize"${ssrRenderAttr("for", "rtf_" + rtf)}><input${ssrRenderAttr("id", "rtf_" + rtf)}${ssrIncludeBooleanAttr(Array.isArray($data.form.required_ticket_fields) ? ssrLooseContain($data.form.required_ticket_fields, rtf) : $data.form.required_ticket_fields) ? " checked" : ""} class="mr-1"${ssrRenderAttr("value", rtf)} type="checkbox"><span class="text-sm">${ssrInterpolate(rtf.replace(/_/g, " "))}</span></label>`);
  });
  _push(`<!--]--></div><div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Cron Job Instruction"))}</div><p class="mt-2 font-light">If you would like to send mail without delaying you need to set a cron job for that with once every 3 minute.</p><code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/2 * * * * /usr/bin/php artisan queue:work --queue=high,default --stop-when-empty</code><p class="mt-3 font-light">For the shared hosting like cPanel or any panel server you can call url as like this</p><code class="mt-5 mb-5 prose block whitespace-pre mt-1 text-sm">*/2 * * * * wget -q -O - https://website.com/cron/queue_work &gt;/dev/null 2&gt;&amp;1</code><p class="mt-3">After adding one of these above option, you need to enable Queue with add <code>QUEUE_ENABLE=true</code> on the .env file </p></div>`);
  _push(ssrRenderComponent(_component_textarea_input, {
    modelValue: $data.form.custom_css,
    "onUpdate:modelValue": ($event) => $data.form.custom_css = $event,
    error: $data.form.errors.custom_css,
    rows: 15,
    class: "pb-6 w-full",
    placeholder: "your custom css here..",
    label: _ctx.$t("Custom CSS")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
