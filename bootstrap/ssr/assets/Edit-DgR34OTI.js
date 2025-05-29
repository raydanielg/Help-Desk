import { Head, Link } from "@inertiajs/vue3";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { F as FileInput } from "./FileInput-Y3725sIq.js";
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
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  props: {
    user: Object,
    auth: Object,
    countries: Array,
    roles: Array,
    cities: Array,
    title: String
  },
  remember: "form",
  data() {
    return {
      user_access: this.$page.props.auth.user.access,
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
        city: this.user.city,
        address: this.user.address,
        country_id: this.user.country_id,
        password: "",
        role: this.user.role,
        role_id: this.user.role_id,
        photo: null
      })
    };
  },
  created() {
  },
  methods: {
    setDefaultValue(arr, key, value) {
      const find = arr.find((i) => i.name.match(new RegExp(value + ".*")));
      if (find) {
        this.form[key] = find["id"];
      }
    },
    update() {
      this.form.post(this.route("users.update", this.user.id), {
        onSuccess: () => this.form.reset("password", "photo")
      });
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(route("users.destroy", this.user.id));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(route("users.restore", this.user.id));
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
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
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Email")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Phone")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("City")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    label: _ctx.$t("Address")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country_id,
    "onUpdate:modelValue": ($event) => $data.form.country_id = $event,
    error: $data.form.errors.country_id,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Country")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.countries, (c) => {
          _push2(`<option${ssrRenderAttr("value", c.id)}${_scopeId}>${ssrInterpolate(_ctx.$t(c.name))}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.countries, (c) => {
            return openBlock(), createBlock("option", {
              key: c.id,
              value: c.id
            }, toDisplayString(_ctx.$t(c.name)), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    type: "password",
    autocomplete: "new-password",
    label: _ctx.$t("Password")
  }, null, _parent));
  if ($props.user.id !== $props.auth.user.id) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.role_id,
      "onUpdate:modelValue": ($event) => $data.form.role_id = $event,
      error: $data.form.errors.role,
      class: "pb-8 pr-6 w-full lg:w-1/3",
      label: _ctx.$t("Role")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
          ssrRenderList($props.roles, (c) => {
            _push2(`<option${ssrRenderAttr("value", c.id)}${_scopeId}>${ssrInterpolate(_ctx.$t(c.name))}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }),
            (openBlock(true), createBlock(Fragment, null, renderList($props.roles, (c) => {
              return openBlock(), createBlock("option", {
                key: c.id,
                value: c.id
              }, toDisplayString(_ctx.$t(c.name)), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.photo,
    "onUpdate:modelValue": ($event) => $data.form.photo = $event,
    error: $data.form.errors.photo,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    type: "file",
    accept: "image/*",
    label: "Photo"
  }, null, _parent));
  _push(`<div class="w-full lg:w-1/3 flex items-center justify-start">`);
  if ($props.user.photo_path) {
    _push(`<img class="block mb-2 w-8 h-8 rounded-full"${ssrRenderAttr("src", $props.user.photo_path)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if ($props.user.id !== $props.auth.user.id && $data.user_access.user.delete) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">${ssrInterpolate(_ctx.$t("Delete User"))}</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Update User"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Update User")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
