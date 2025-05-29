import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Link, Head } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./Dropdown-CRPxtfzU.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  metaInfo() {
    return { title: this.form.name };
  },
  components: {
    LoadingButton,
    SelectInput,
    TextareaInput,
    TextInput,
    Link,
    Head
  },
  layout: Layout,
  props: {
    faq: Object,
    title: String
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: this.faq.name,
        status: this.faq.status,
        details: this.faq.details
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("faqs.update", this.faq.id));
    },
    destroy() {
      if (confirm("Are you sure you want to delete this faq?")) {
        this.$inertia.delete(this.route("faqs.destroy", this.faq.id));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this faq?")) {
        this.$inertia.put(this.route("faqs.restore", this.faq.id));
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden max-w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Name")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.status,
    "onUpdate:modelValue": ($event) => $data.form.status = $event,
    error: $data.form.errors.status,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Status")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", 1)}${_scopeId}>${ssrInterpolate(_ctx.$t("Active"))}</option><option${ssrRenderAttr("value", 0)}${_scopeId}>${ssrInterpolate(_ctx.$t("Inactive"))}</option>`);
      } else {
        return [
          createVNode("option", { value: 1 }, toDisplayString(_ctx.$t("Active")), 1),
          createVNode("option", { value: 0 }, toDisplayString(_ctx.$t("Inactive")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    id: "ticketDetails",
    name: "content",
    modelValue: $data.form.details,
    "onUpdate:modelValue": ($event) => $data.form.details = $event,
    error: $data.form.errors.details,
    class: "pr-6 pb-8 w-full",
    rows: 5,
    placeholder: "Ticket Description"
  }, null, _parent));
  _push(`</div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center"><button class="text-red-600 hover:underline" tabindex="-1" type="button">${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Update"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Update")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Faqs/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
