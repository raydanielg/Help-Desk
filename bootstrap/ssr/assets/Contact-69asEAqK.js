import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Contact" },
  components: {
    Icon,
    Link,
    Head,
    Pagination,
    TextInput,
    SelectInput,
    LoadingButton,
    TextareaInput
  },
  layout: Layout,
  props: {
    page: Object
  },
  remember: "form",
  data() {
    return {
      tabs: [
        { "name": "Content", "active": true },
        { "name": "Location", "active": false },
        { "name": "Phone", "active": false },
        { "name": "Email", "active": false },
        { "name": "Contact Form", "active": false }
      ],
      form: this.$inertia.form({
        title: "Contact",
        slug: "contact",
        is_active: this.page.is_active,
        html: JSON.parse(this.page.html)
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("front_pages.update", "contact"));
    },
    activeTab(index) {
      for (const tab_item of this.tabs) {
        tab_item.active = false;
      }
      this.tabs[index].active = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Contact" }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap"><div class="w-full mx-auto"><div class="border-b border-gray-200 dark:border-gray-700 tab-head"><ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist"><!--[-->`);
  ssrRenderList($data.tabs, (tab, ti) => {
    _push(`<li class="mr-2" role="presentation"><div class="${ssrRenderClass([{ "active": tab.active }, "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"])}">${ssrInterpolate(tab.name)}</div></li>`);
  });
  _push(`<!--]--></ul></div><div class="tab-content"><div class="${ssrRenderClass([{ "active": $data.tabs[0].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.content_text,
    "onUpdate:modelValue": ($event) => $data.form.html.content_text = $event,
    class: "pr-6 pb-8 pt-5 w-full lg:w-1/3",
    label: _ctx.$t("Text")
  }, null, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    name: "content",
    modelValue: $data.form.html.content_details,
    "onUpdate:modelValue": ($event) => $data.form.html.content_details = $event,
    class: "pr-6 pb-8 w-full",
    label: _ctx.$t("Details")
  }, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "active": $data.tabs[1].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.location,
    "onUpdate:modelValue": ($event) => $data.form.html.location = $event,
    class: "pr-6 pb-8 pt-5 w-full",
    label: _ctx.$t("Location address")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.location_map,
    "onUpdate:modelValue": ($event) => $data.form.html.location_map = $event,
    class: "pr-6 pb-8 pt-5 w-full",
    label: _ctx.$t("Location map")
  }, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "active": $data.tabs[2].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.phone,
    "onUpdate:modelValue": ($event) => $data.form.html.phone = $event,
    class: "pr-6 pb-8 pt-5 w-full lg:w-1/3",
    label: _ctx.$t("Phone number")
  }, null, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    name: "content",
    modelValue: $data.form.html.phone_details,
    "onUpdate:modelValue": ($event) => $data.form.html.phone_details = $event,
    class: "pr-6 pb-8 w-full",
    label: _ctx.$t("Details")
  }, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "active": $data.tabs[3].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.email,
    "onUpdate:modelValue": ($event) => $data.form.html.email = $event,
    class: "pr-6 pb-8 pt-5 w-full lg:w-1/3",
    label: _ctx.$t("Email address")
  }, null, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    name: "content",
    modelValue: $data.form.html.email_details,
    "onUpdate:modelValue": ($event) => $data.form.html.email_details = $event,
    class: "pr-6 pb-8 w-full",
    label: _ctx.$t("Email details")
  }, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "active": $data.tabs[4].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.contact_recipient,
    "onUpdate:modelValue": ($event) => $data.form.html.contact_recipient = $event,
    class: "pr-6 pb-8 pt-5 w-full lg:w-1/3",
    label: _ctx.$t("Recipient Email (for the contact form)")
  }, null, _parent));
  _push(`</div></div></div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/FrontPages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Contact as default
};
