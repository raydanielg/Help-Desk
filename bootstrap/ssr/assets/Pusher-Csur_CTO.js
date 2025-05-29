import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import axios from "axios";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
    keys: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        PUSHER_APP_ID: this.keys["PUSHER_APP_ID"]["value"],
        PUSHER_APP_KEY: this.keys["PUSHER_APP_KEY"]["value"],
        PUSHER_APP_SECRET: this.keys["PUSHER_APP_SECRET"]["value"],
        PUSHER_APP_CLUSTER: this.keys["PUSHER_APP_CLUSTER"]["value"]
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("settings.pusher.update"), {
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
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.PUSHER_APP_ID,
    "onUpdate:modelValue": ($event) => $data.form.PUSHER_APP_ID = $event,
    error: $data.form.errors.PUSHER_APP_ID,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Pusher App ID")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.PUSHER_APP_KEY,
    "onUpdate:modelValue": ($event) => $data.form.PUSHER_APP_KEY = $event,
    error: $data.form.errors.PUSHER_APP_KEY,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Pusher App Key")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "text",
    modelValue: $data.form.PUSHER_APP_SECRET,
    "onUpdate:modelValue": ($event) => $data.form.PUSHER_APP_SECRET = $event,
    error: $data.form.errors.PUSHER_APP_SECRET,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Pusher App Secret")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.PUSHER_APP_CLUSTER,
    "onUpdate:modelValue": ($event) => $data.form.PUSHER_APP_CLUSTER = $event,
    error: $data.form.errors.PUSHER_APP_CLUSTER,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Pusher App Cluster")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Pusher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pusher = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pusher as default
};
