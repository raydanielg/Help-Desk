import { Link, Head } from "@inertiajs/vue3";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./Dropdown-CRPxtfzU.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Create a New Role" },
  components: {
    LoadingButton,
    TextInput,
    Link,
    Head
  },
  layout: Layout,
  props: {
    title: String
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        slug: null,
        access: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(this.route("roles.store"));
    }
  },
  created() {
    this.form.access = {
      "faq": { "read": false, "create": false, "delete": false, "update": false },
      "blog": { "read": false, "create": false, "delete": false, "update": false },
      "chat": { "read": false, "create": false, "delete": false, "update": false },
      "smtp": { "read": false, "create": false, "delete": false, "update": false },
      "type": { "read": false, "create": false, "delete": false, "update": false },
      "user": { "read": false, "create": false, "delete": false, "update": false },
      "global": { "read": false, "create": false, "delete": false, "update": false },
      "pusher": { "read": false, "create": false, "delete": false, "update": false },
      "status": { "read": false, "create": false, "delete": false, "update": false },
      "ticket": { "read": false, "create": false, "delete": false, "update": false },
      "contact": { "read": false, "create": false, "delete": false, "update": false },
      "category": { "read": false, "create": false, "delete": false, "update": false },
      "customer": { "read": false, "create": false, "delete": false, "update": false },
      "language": { "read": false, "create": false, "delete": false, "update": false },
      "priority": { "read": false, "create": false, "delete": false, "update": false },
      "department": { "read": false, "create": false, "delete": false, "update": false },
      "organization": { "read": false, "create": false, "delete": false, "update": false },
      "email_template": { "read": false, "create": false, "delete": false, "update": false },
      "knowledge_base": { "read": false, "create": false, "delete": false, "update": false },
      "front_page": { "read": false, "create": false, "delete": false, "update": false }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Name")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.slug,
    "onUpdate:modelValue": ($event) => $data.form.slug = $event,
    error: $data.form.errors.slug,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Slug")
  }, null, _parent));
  _push(`</div><div class="py-8 -mr-6 -mb-8 flex flex-wrap overflow-x-auto"><div class="py-2 inline-block min-w-full sm:px-6 lg:px-8"><div class="overflow-hidden"><table class="min-w-full"><thead class="border-b"><tr><th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"> Functions </th><th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"> Read </th><th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"> Update </th><th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"> Create </th><th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left"> Delete </th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.form.access, (value, name, index) => {
    _push(`<tr class="border-b"><td class="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-900">${ssrInterpolate(name)}</td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(value.read) ? ssrLooseContain(value.read, null) : value.read) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div></label></td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(value.update) ? ssrLooseContain(value.update, null) : value.update) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div></label></td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(value.create) ? ssrLooseContain(value.create, null) : value.create) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div></label></td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(value.delete) ? ssrLooseContain(value.delete, null) : value.delete) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div></label></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Create Role"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Create Role")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
