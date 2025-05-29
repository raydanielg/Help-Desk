import { Head, Link } from "@inertiajs/vue3";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./Dropdown-CRPxtfzU.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  props: {
    organizations: Array,
    departments: Array,
    countries: Array,
    title: String
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        title: "",
        organization_id: null,
        department_id: null,
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        status: 1
      })
    };
  },
  methods: {
    store() {
      this.form.post(this.route("contacts.store"));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="max-w-full bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("First name")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Last name")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.title,
    "onUpdate:modelValue": ($event) => $data.form.title = $event,
    error: $data.form.errors.title,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Title")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Phone")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Email")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.organization_id,
    "onUpdate:modelValue": ($event) => $data.form.organization_id = $event,
    error: $data.form.errors.organization_id,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Organization")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.organizations, (organization) => {
          _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.organizations, (organization) => {
            return openBlock(), createBlock("option", {
              key: organization.id,
              value: organization.id
            }, toDisplayString(organization.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Address")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("City")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Country")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.countries, (c) => {
          _push2(`<option${ssrRenderAttr("value", c.code)}${_scopeId}>${ssrInterpolate(_ctx.$t(c.name))}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.countries, (c) => {
            return openBlock(), createBlock("option", {
              key: c.id,
              value: c.code
            }, toDisplayString(_ctx.$t(c.name)), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.department_id,
    "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
    error: $data.form.errors.department_id,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Department")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.departments, (s) => {
          _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (s) => {
            return openBlock(), createBlock("option", {
              key: s.id,
              value: s.id
            }, toDisplayString(s.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.status,
    "onUpdate:modelValue": ($event) => $data.form.status = $event,
    error: $data.form.errors.status,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Status")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option value="1"${_scopeId}>Active</option><option value="0"${_scopeId}>InActive</option>`);
      } else {
        return [
          createVNode("option", { value: "1" }, "Active"),
          createVNode("option", { value: "0" }, "InActive")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Create"))} ${ssrInterpolate(_ctx.$t("Contact"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Create")) + " " + toDisplayString(_ctx.$t("Contact")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
