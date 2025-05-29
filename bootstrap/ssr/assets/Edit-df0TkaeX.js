import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Link, Head } from "@inertiajs/vue3";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
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
  metaInfo() {
    return { title: this.form.name };
  },
  components: {
    SelectInput,
    LoadingButton,
    TextInput,
    Link,
    Head
  },
  layout: Layout,
  props: {
    title: String,
    category: Object,
    categories: { required: false },
    departments: { required: false }
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: this.category.name,
        color: this.category.color,
        department_id: this.category.department_id,
        parent_id: this.category.parent_id
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("categories.update", this.category.id));
    },
    destroy() {
      if (confirm("Are you sure you want to delete this category?")) {
        this.$inertia.delete(this.route("categories.destroy", this.category.id));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this category?")) {
        this.$inertia.put(this.route("categories.restore", this.category.id));
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_select_input = resolveComponent("select-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden max-w-3xl"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  if (!$data.form.parent_id) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.department_id,
      "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
      error: $data.form.errors.department_id,
      class: "pr-6 pb-8 w-full",
      label: _ctx.$t("Department")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>None</option><!--[-->`);
          ssrRenderList($props.departments, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, "None"),
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
  } else {
    _push(`<!---->`);
  }
  if (!$data.form.department_id) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.parent_id,
      "onUpdate:modelValue": ($event) => $data.form.parent_id = $event,
      error: $data.form.errors.parent_id,
      class: "pr-6 pb-8 w-full",
      label: _ctx.$t("Parent")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>None</option><!--[-->`);
          ssrRenderList($props.categories, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, "None"),
            (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (s) => {
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
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pr-6 pb-8 w-full",
    label: "Name"
  }, null, _parent));
  _push(`</div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center"><button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Category</button>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Category`);
      } else {
        return [
          createTextVNode("Update Category")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Categories/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
