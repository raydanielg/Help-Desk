import { L as Layout } from "./Layout-DjOXHHQT.js";
import { Link } from "@inertiajs/vue3";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
    TextInput,
    Link
  },
  layout: Layout,
  props: {
    city: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: this.city.name
      })
    };
  },
  created() {
  },
  methods: {
    update() {
      this.form.put(this.route("cities.update", this.city.id));
    },
    destroy() {
      if (confirm("Are you sure you want to delete this city?")) {
        this.$inertia.delete(this.route("cities.destroy", this.city.id));
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-8 font-bold text-3xl">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: this.route("cities")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("City"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("City")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.name)}</h1><div class="bg-white rounded-md shadow overflow-hidden max-w-3xl"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Name")
  }, null, _parent));
  _push(`</div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center"><button class="text-red-600 hover:underline" tabindex="-1" type="button">${ssrInterpolate(_ctx.$t("Delete"))} ${ssrInterpolate(_ctx.$t("City"))}</button>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Update"))} ${ssrInterpolate(_ctx.$t("City"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Update")) + " " + toDisplayString(_ctx.$t("City")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cities/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
