import { L as Layout } from "./Layout-DjOXHHQT.js";
import { Link, Head } from "@inertiajs/vue3";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
import "@popperjs/core";
const _sfc_main = {
  components: {
    LoadingButton,
    TextInput,
    Link,
    Head,
    Icon
  },
  layout: Layout,
  props: {
    title: String,
    language_data: Object,
    languages: Object
  },
  remember: "form",
  data() {
    return {
      new_lang_form: false,
      form: this.$inertia.form({
        language_values: this.language_data.data,
        new_data: {}
      })
    };
  },
  methods: {
    addNew() {
      this.languages.forEach((language) => {
        this.form.new_data[language.code] = "";
      });
      this.new_lang_form = true;
    },
    destroy(value) {
      if (confirm("Are you sure you want to delete this language data?")) {
        this.$inertia.delete(this.route("languages.deleteItem", value), {
          onSuccess: () => {
            this.form.reset();
          }
        });
      }
    },
    store() {
      const languages = [{ "name": "English", "code": "en" }, { "name": this.language_data.name, "code": this.language_data.code }];
      for (let len = 0; len < languages.length; len++) {
        if (!this.form.new_data[languages[len]["code"]]) {
          alert("Please input text for the " + languages[len]["name"] + " language!");
          return;
        }
      }
      this.form.post(this.route("languages.newItem"), {
        onSuccess: () => {
          this.form.reset();
          this.new_lang_form = false;
        }
      });
    },
    update() {
      this.form.put(this.route("languages.update", this.language_data.id));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_icon = resolveComponent("icon");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_text_input = resolveComponent("text-input");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden max-w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap"><div class="pr-6 pb-8 w-full lg:w-1/3"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Language Name"))}</div><div class="font-light text-sm">${ssrInterpolate($props.language_data.name)}</div></div><div class="pr-6 pb-8 w-full lg:w-1/3"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Code"))}</div><div class="font-light text-sm">${ssrInterpolate($props.language_data.code)}</div></div><div class="pr-6 pb-8 w-full lg:w-1/3 flex justify-end"><div class="btn-indigo p-3 rounded-full cursor-pointer ml-auto">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 fill-gray-100",
    name: "plus"
  }, null, _parent));
  _push(`</div>`);
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
  _push(`</div></div><div class="flex flex-col mb-5 text-sm"><!--[-->`);
  ssrRenderList($data.form.language_values, (lan, li) => {
    _push(`<div class="p-8 -mr-6 -mb-8 flex flex-wrap md:flex-nowrap items-center lang_input">`);
    _push(ssrRenderComponent(_component_text_input, {
      class: "pr-6 pb-2 w-full lg:w-1/2",
      modelValue: lan.name,
      "onUpdate:modelValue": ($event) => lan.name = $event,
      label: _ctx.$t("Title")
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      class: "pr-6 pb-2 w-full lg:w-1/2",
      modelValue: lan.value,
      "onUpdate:modelValue": ($event) => lan.value = $event,
      label: "Value"
    }, null, _parent));
    _push(`<div class="flex justify-start pr-2 pt-3">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "trash",
      class: "w-4 h-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
      onClick: ($event) => $options.destroy(lan.value)
    }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
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
  _push(`</div></form>`);
  if ($data.new_lang_form) {
    _push(`<div class="note-form-overlay"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.new_lang_form) {
    _push(`<div class="note-form py-8 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal"><div role="alert" class="container mx-auto"><form><div class="relative py-10 px-6 md:px-10 bg-white shadow-md rounded border border-gray-400"><div class="lan_items flex flex-col"><div class="lan__item">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.new_data["en"],
      "onUpdate:modelValue": ($event) => $data.form.new_data["en"] = $event,
      class: "pb-6 w-full",
      label: "English"
    }, null, _parent));
    _push(`</div><div class="lan__item">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.new_data[$props.language_data.code],
      "onUpdate:modelValue": ($event) => $data.form.new_data[$props.language_data.code] = $event,
      class: "pb-6 w-full",
      label: $props.language_data.name
    }, null, _parent));
    _push(`</div></div><div class="flex justify-between"><div class="flex items-center justify-start w-full"><button type="submit" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">Submit</button><span class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancel</span></div></div><span class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-6 h-6",
      name: "close"
    }, null, _parent));
    _push(`</span></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Languages/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
