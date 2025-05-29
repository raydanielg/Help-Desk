import { L as Layout } from "./Layout-DjOXHHQT.js";
import { Link } from "@inertiajs/vue3";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
    template: Object
  },
  remember: "form",
  data() {
    return {
      editorOptions: {
        debug: "info",
        modules: {}
      },
      form: this.$inertia.form({
        html: this.template.html
      })
    };
  },
  methods: {
    onInput(e) {
      this.form.html = e.target.innerHTML;
    },
    update() {
      this.form.put(this.route("templates.update", this.template.id));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white rounded-md shadow overflow-hidden max-w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap"><div class="pr-6 pb-8 w-full lg:w-1/3"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Name"))}</div><div class="font-light text-sm">${ssrInterpolate($props.template.name)}</div></div><div class="pr-6 pb-8 w-full lg:w-2/3"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Details"))}</div><div class="font-light text-sm">${ssrInterpolate($props.template.details)}</div></div><div class="pr-6 pb-8 w-full"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Email Html"))}</div><div class="editable-content" contenteditable="true">${$props.template.html ?? ""}</div></div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Update"))} ${ssrInterpolate(_ctx.$t("Template"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Update")) + " " + toDisplayString(_ctx.$t("Template")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/EmailTemplates/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
