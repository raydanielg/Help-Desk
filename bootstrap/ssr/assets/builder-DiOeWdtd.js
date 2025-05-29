import { useForm, Link, Head } from "@inertiajs/vue3";
import "axios";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { useSSRContext, mergeProps, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "moment";
import "laravel-vue-i18n";
import "@popperjs/core";
const _sfc_main$1 = {
  __name: "DeleteConfirmation",
  __ssrInlineRender: true,
  props: {
    data: {
      required: true
    },
    name: {
      required: false
    },
    url: {
      required: false
    }
  },
  emits: ["closePopup"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useForm({ ...props.data });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-tw-backdrop": "",
        "aria-hidden": "true",
        tabindex: "-1",
        id: "delete-confirmation-modal",
        class: "modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s] overflow-y-auto show z-[999]"
      }, _attrs))}><div data-tw-merge="" class="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]"><div class="p-5 text-center">`);
      _push(ssrRenderComponent(Icon, {
        name: "info",
        class: "stroke-1.5 mx-auto mt-3 h-16 w-16 fill-danger"
      }, null, _parent));
      _push(`<div class="mt-5 text-3xl">Are you sure?</div><div class="mt-2 text-slate-500"> Do you really want to delete ${ssrInterpolate(__props.name ?? "this")}? <br> This process cannot be undone. </div></div><div class="px-5 pb-8 text-center"><button data-tw-merge="" data-tw-dismiss="modal" type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-24">Cancel</button><button type="button" class="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-red-700 border-danger text-white dark:border-danger w-24">Delete</button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/DeleteConfirmation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  metaInfo: { title: "Tickets" },
  components: {
    DeleteConfirmation: _sfc_main$1,
    Link,
    Head,
    Icon
  },
  layout: Layout,
  props: {
    title: {
      type: String
    },
    fields: {
      type: Object
    }
  },
  data() {
    return {
      delete_element: false,
      modify_input: false,
      input_types: ["text", "textarea"],
      // input_types : ['text', 'select', 'checkbox', 'textarea', 'file'],
      new_input: {
        "type": "text",
        "required": 0,
        label: "",
        name: "",
        "placeholder": "",
        id: null,
        "options": [{ name: "", value: "" }],
        "hint": ""
      },
      form: this.$inertia.form({
        "type": "text",
        "required": 0,
        label: "",
        name: "",
        "placeholder": "",
        id: null,
        "options": [{ name: "", value: "" }],
        "hint": ""
      })
    };
  },
  watch: {},
  methods: {
    deleteClose() {
      this.delete_element = false;
    },
    submitField(obj) {
      if (!["select", "checkbox"].includes(this.form.type)) {
        this.form.options = null;
      }
      this.form.post(this.route("ticket-fields.store"));
      Object.assign(this.form, this.new_input);
    },
    modifyField(fieldObject) {
      Object.assign(this.form, fieldObject);
      this.modify_input = true;
    },
    deleteField(fieldObject) {
      this.delete_element = fieldObject.id;
    },
    addOption() {
      this.form.options.push({ name: "", value: "" });
    },
    deleteOption(options, index) {
      options.splice(index, 1);
    }
  },
  created() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Icon = resolveComponent("Icon");
  const _component_icon = resolveComponent("icon");
  const _component_delete_confirmation = resolveComponent("delete-confirmation");
  _push(`<!--[--><div>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="intro-y mt-5 grid grid-cols-12 gap-6"><div class="col-span-12 lg:col-span-6"><div class="preview-component intro-y box"><div class="flex flex-col items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400 sm:flex-row"><h2 class="mr-auto text-base font-medium">${ssrInterpolate(_ctx.$t("Custom ticket input fields"))}</h2></div><div class="p-5"><div class="grid gap-6 mb-6"><!--[-->`);
  ssrRenderList($props.fields.data, (ticket_field) => {
    _push(`<div class="flex w-full"><div class="flex flex-col w-full"><label${ssrRenderAttr("for", !["time_picker", "date_picker", "checkbox"].includes(ticket_field.type) ? "ticket_field_" + ticket_field.id : null)} class="block mb-2 text-sm dark:text-white">${ssrInterpolate(ticket_field.label)} `);
    if (!ticket_field.required) {
      _push(`<small class="pl-2 text-xs">(optional)</small>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (["text", "email", "number"].includes(ticket_field.type)) {
      _push(`<input${ssrRenderAttr("type", ticket_field.type)}${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)}${ssrRenderAttr("placeholder", ticket_field.placeholder)}${ssrIncludeBooleanAttr(ticket_field.required) ? " required" : ""} class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.type === "select") {
      _push(`<select${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)} class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"><option value="" disabled>${ssrInterpolate(ticket_field.placeholder)}</option><!--[-->`);
      ssrRenderList(ticket_field.options, (option, oi) => {
        _push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select>`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.type === "checkbox") {
      _push(`<div class="flex flex-wrap gap-5"><!--[-->`);
      ssrRenderList(ticket_field.options, (option, oi) => {
        _push(`<div class="flex items-center"><input${ssrRenderAttr("id", "ticket_checkbox_" + ticket_field.id + "_field_" + oi)} type="checkbox"${ssrRenderAttr("value", option.value)} class="w-4 h-4 text-blue-600 rounded"><label${ssrRenderAttr("for", "ticket_checkbox_" + ticket_field.id + "_field_" + oi)} class="ms-2 text-sm dark:text-gray-300">${ssrInterpolate(option.name)}</label></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.type === "textarea") {
      _push(`<textarea${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)} rows="2" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"${ssrRenderAttr("placeholder", ticket_field.placeholder)}></textarea>`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.type === "file") {
      _push(`<div class="flex flex-col"><input${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)} class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></div>`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.hint) {
      _push(`<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">${ssrInterpolate(ticket_field.hint)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="flex w-[100px] pt-7 justify-end"><button class="bg-white button rounded px-3 hover:bg-blue-800 hover:fill-white">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "edit",
      class: "w-4 h-4"
    }, null, _parent));
    _push(`</button><button class="bg-white button rounded px-3 hover:bg-red-700 hover:fill-white">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "trash",
      class: "w-4 h-4"
    }, null, _parent));
    _push(`</button></div></div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="col-span-12 lg:col-span-6"><div class="preview-component intro-y box"><div class="flex flex-col items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400 sm:flex-row"><h2 class="mr-auto text-base font-medium">${ssrInterpolate(_ctx.$t("Field list"))}</h2></div><div class="p-5"><h3 class="mb-4 dark:text-white">${ssrInterpolate(_ctx.$t("Select Input Type"))}</h3><div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5"><!--[-->`);
  ssrRenderList($data.input_types, (input_type, it_key) => {
    _push(`<div class="flex items-center mr-2"><input${ssrRenderAttr("id", "input_type_name_" + it_key)} name="input_type"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.type, input_type)) ? " checked" : ""}${ssrRenderAttr("value", input_type)} type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type=&#39;radio&#39;]]:checked:bg-primary [&amp;[type=&#39;radio&#39;]]:checked:border-primary [&amp;[type=&#39;radio&#39;]]:checked:border-opacity-10 [&amp;[type=&#39;checkbox&#39;]]:checked:bg-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50"><label${ssrRenderAttr("for", "input_type_name_" + it_key)} class="cursor-pointer ml-2 capitalize">${ssrInterpolate(input_type.replace("_", " "))}</label></div>`);
  });
  _push(`<!--]--></div><h3 class="mb-4 pt-1 dark:text-white">${ssrInterpolate(_ctx.$t("Is it required"))}</h3><div class="mt-2 flex flex-col sm:flex-row mb-6"><div class="flex items-center mr-2"><input id="is_required_yes_new"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.required, 1)) ? " checked" : ""} name="is_required"${ssrRenderAttr("value", 1)} type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type=&#39;radio&#39;]]:checked:bg-primary [&amp;[type=&#39;radio&#39;]]:checked:border-primary [&amp;[type=&#39;radio&#39;]]:checked:border-opacity-10 [&amp;[type=&#39;checkbox&#39;]]:checked:bg-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50"><label for="is_required_yes_new" class="cursor-pointer ml-2">Yes</label></div><div class="flex items-center mr-2 mt-2 sm:mt-0"><input id="is_required_no_new"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.required, 0)) ? " checked" : ""} name="is_required"${ssrRenderAttr("value", 0)} type="radio" class="transition-all duration-100 ease-in-out border-slate-200 cursor-pointer dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type=&#39;radio&#39;]]:checked:bg-primary [&amp;[type=&#39;radio&#39;]]:checked:border-primary [&amp;[type=&#39;radio&#39;]]:checked:border-opacity-10 [&amp;[type=&#39;checkbox&#39;]]:checked:bg-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-primary [&amp;[type=&#39;checkbox&#39;]]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50"><label for="is_required_no_new" class="cursor-pointer ml-2">No</label></div></div><div class="grid gap-6 mb-6"><div><label for="label_name_new" class="block mb-2 text-sm dark:text-white">${ssrInterpolate(_ctx.$t("Label"))}</label><input${ssrRenderAttr("value", $data.form.label)} type="text" id="label_name_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g Name" required>`);
  if ($data.form.errors.label) {
    _push(`<div class="form-error">${ssrInterpolate($data.form.errors.label)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div><label for="name_new" class="block mb-2 text-sm dark:text-white">${ssrInterpolate(_ctx.$t("Name"))}</label><input${ssrRenderAttr("value", $data.form.name)} type="text" id="name_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g name" required>`);
  if ($data.form.errors.name) {
    _push(`<div class="form-error">${ssrInterpolate($data.form.errors.name)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (!["checkbox", "file"].includes($data.form.type)) {
    _push(`<div><label for="placeholder_new" class="block mb-2 text-sm dark:text-white">${ssrInterpolate(_ctx.$t("Placeholder"))}</label><input${ssrRenderAttr("value", $data.form.placeholder)} type="text" id="placeholder_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="E.g. Muhammad Ali" required></div>`);
  } else {
    _push(`<!---->`);
  }
  if (["checkbox", "select"].includes($data.form.type)) {
    _push(`<div><label for="options_new" class="block mb-2 text-sm dark:text-white">${ssrInterpolate(_ctx.$t("Options"))}</label><!--[-->`);
    ssrRenderList($data.form.options, (option, oi) => {
      _push(`<div class="flex w-full gap-1 pb-2"><input type="text"${ssrRenderAttr("value", option.name)} id="options_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"${ssrRenderAttr("placeholder", _ctx.$t("option_name"))} required><input type="text"${ssrRenderAttr("value", option.value)} id="options_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"${ssrRenderAttr("placeholder", _ctx.$t("option_value"))} required>`);
      if (oi > 0) {
        _push(`<button class="flex justify-center items-center button rounded px-3 hover:bg-red-700 hover:fill-white h-10">`);
        _push(ssrRenderComponent(_component_icon, {
          name: "trash",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--><button class="flex gap-1 items-center text-xs w-28 hover:underline">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "plus",
      class: "w-3 h-3"
    }, null, _parent));
    _push(` Add new option</button></div>`);
  } else {
    _push(`<!---->`);
  }
  if (["file"].includes($data.form.type)) {
    _push(`<div><label for="hints_new" class="block mb-2 text-sm dark:text-white">${ssrInterpolate(_ctx.$t("Hint"))}</label><input${ssrRenderAttr("value", $data.form.hint)} type="text" id="hints_new" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="MAX 5MB" required></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button class="ml-auto btn-indigo w-full items-center justify-center cursor-pointer" tabindex="-1" type="button">${ssrInterpolate(_ctx.$t(!$data.modify_input ? "Add field" : "Update field"))}</button></div></div></div></div></div>`);
  if (!!$data.delete_element) {
    _push(ssrRenderComponent(_component_delete_confirmation, {
      data: { id: $data.delete_element },
      url: "ticket-fields.delete",
      name: "the field",
      onClosePopup: $options.deleteClose
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/builder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const builder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  builder as default
};
