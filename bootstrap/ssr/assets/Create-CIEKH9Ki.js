import { Link } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { S as SelectInputFilter } from "./SelectInputFilter-BWStuymG.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import { _ as _sfc_main$1 } from "./UploadAdapter-D1xerzqJ.js";
import axios from "axios";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Create Ticket" },
  components: {
    LoadingButton,
    SelectInput,
    SelectInputFilter,
    TextInput,
    TextareaInput,
    Link,
    Icon,
    Ckeditor
  },
  layout: Layout,
  props: {
    customers: Array,
    usersExceptCustomers: Array,
    priorities: Array,
    statuses: Array,
    types: Array,
    departments: Array,
    all_categories: Array,
    auth: Object,
    hidden_fields: Object,
    custom_fields: Object
  },
  remember: false,
  data() {
    return {
      user_access: this.$page.props.auth.user.access,
      editor: ClassicEditor,
      editorConfig: {
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote],
        toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|", "outdent", "indent", "|", "insertTable", "blockQuote", "|", "imageUpload", "mediaEmbed", "|", "undo", "redo"],
        table: {
          toolbar: ["tableColumn", "tableRow", "mergeTableCells"]
        },
        extraPlugins: [function uploader(editor) {
          editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return new _sfc_main$1(loader);
          };
        }]
      },
      categories: [],
      sub_categories: [],
      form: this.$inertia.form({
        user_id: null,
        priority_id: null,
        status_id: null,
        department_id: null,
        category_id: null,
        sub_category_id: null,
        assigned_to: null,
        type_id: null,
        subject: null,
        details: "",
        files: [],
        custom_field: {}
      })
    };
  },
  created() {
    console.log(this.custom_fields);
    this.setDefaultValue(this.statuses, "status_id", "Pending");
    this.setDefaultValue(this.priorities, "priority_id", "Generally");
  },
  methods: {
    getCategories() {
      this.categories = this.all_categories.filter((cat) => cat.department_id === this.form.department_id);
      this.form.category_id = null;
      this.$refs.category.selected = null;
    },
    getSubCategories() {
      this.sub_categories = this.all_categories.filter((cat) => cat.parent_id === this.form.category_id);
      this.form.sub_category_id = null;
      this.$refs.sub_category.selected = null;
    },
    doFilter(e) {
      axios.get(this.route("filter.customers", { search: e.target.value })).then((res) => {
        this.customers.splice(0, this.customers.length, ...res.data);
      });
    },
    doFilterUsersExceptCustomer(e) {
      axios.get(this.route("filter.users_except_customer", { search: e.target.value })).then((res) => {
        this.usersExceptCustomers.splice(0, this.usersExceptCustomers.length, ...res.data);
      });
    },
    setDefaultValue(arr, key, value) {
      const find = arr.find((i) => i.name.match(new RegExp(value + ".*")));
      if (find) {
        this.form[key] = find["id"];
      }
    },
    fileInputChange(e) {
      let selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.form.files.push(selectedFiles[i]);
      }
    },
    fileRemove(image, index) {
      this.form.files.splice(index, 1);
    },
    getFileSize(size) {
      const i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    fileBrowse() {
      this.$refs.file.click();
    },
    store() {
      this.form.user_id = this.auth.user.id;
      this.form.post(this.route("tickets.store"));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_select_input_filter = resolveComponent("select-input-filter");
  const _component_select_input = resolveComponent("select-input");
  const _component_text_input = resolveComponent("text-input");
  const _component_ckeditor = resolveComponent("ckeditor");
  const _component_icon = resolveComponent("icon");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white rounded-md shadow overflow-hidden max-w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  if ($data.user_access.ticket.update && $props.auth.user.role.slug !== "customer") {
    _push(ssrRenderComponent(_component_select_input_filter, {
      placeholder: "Start typing",
      onInput: $options.doFilter,
      items: $props.customers,
      modelValue: $data.form.user_id,
      "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
      error: $data.form.errors.user_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Customer")
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.user_access.ticket.update) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.priority_id,
      "onUpdate:modelValue": ($event) => $data.form.priority_id = $event,
      error: $data.form.errors.priority_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Priority")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
          ssrRenderList($props.priorities, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }),
            (openBlock(true), createBlock(Fragment, null, renderList($props.priorities, (s) => {
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
  if (!($props.hidden_fields && $props.hidden_fields.includes("ticket_type"))) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.type_id,
      "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
      error: $data.form.errors.type_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Ticket Type")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
          ssrRenderList($props.types, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }),
            (openBlock(true), createBlock(Fragment, null, renderList($props.types, (s) => {
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
  if (!($props.hidden_fields && $props.hidden_fields.includes("department"))) {
    _push(ssrRenderComponent(_component_select_input, {
      onChange: ($event) => $options.getCategories(),
      modelValue: $data.form.department_id,
      "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
      error: $data.form.errors.department_id,
      class: "pr-6 pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Department")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Select a department"))}</option><!--[-->`);
          ssrRenderList($props.departments, (department) => {
            _push2(`<option${ssrRenderAttr("value", department.id)}${_scopeId}>${ssrInterpolate(department.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Select a department")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (department) => {
              return openBlock(), createBlock("option", {
                key: department.id,
                value: department.id
              }, toDisplayString(department.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("category")) && $data.form.department_id) {
    _push(ssrRenderComponent(_component_select_input, {
      ref: "category",
      onChange: ($event) => $options.getSubCategories(),
      modelValue: $data.form.category_id,
      "onUpdate:modelValue": ($event) => $data.form.category_id = $event,
      error: $data.form.errors.category_id,
      class: "pb-5 pr-6 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Category")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Select a category"))}</option><!--[-->`);
          ssrRenderList($data.categories, (category) => {
            _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Select a category")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($data.categories, (category) => {
              return openBlock(), createBlock("option", {
                key: category.id,
                value: category.id
              }, toDisplayString(category.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.form.category_id) {
    _push(ssrRenderComponent(_component_select_input, {
      ref: "sub_category",
      modelValue: $data.form.sub_category_id,
      "onUpdate:modelValue": ($event) => $data.form.sub_category_id = $event,
      error: $data.form.errors.sub_category_id,
      class: "pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Sub Category")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Select a sub category"))}</option><!--[-->`);
          ssrRenderList($data.sub_categories, (category) => {
            _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Select a sub category")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($data.sub_categories, (category) => {
              return openBlock(), createBlock("option", {
                key: category.id,
                value: category.id
              }, toDisplayString(category.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.auth.user.role.slug !== "customer" && $data.user_access.ticket.update && !($props.hidden_fields && $props.hidden_fields.includes("assigned_to"))) {
    _push(ssrRenderComponent(_component_select_input_filter, {
      placeholder: "Start typing",
      onInput: $options.doFilterUsersExceptCustomer,
      items: $props.usersExceptCustomers,
      modelValue: $data.form.assigned_to,
      "onUpdate:modelValue": ($event) => $data.form.assigned_to = $event,
      error: $data.form.errors.assigned_to,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Assigned to")
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.custom_fields, (ticket_field) => {
    _push(`<div class="pr-6 pb-8 w-full lg:w-1/3"><div class="flex flex-col w-full"><label${ssrRenderAttr("for", !["checkbox"].includes(ticket_field.type) ? "ticket_field_" + ticket_field.id : null)} class="form-label">${ssrInterpolate(ticket_field.label)} `);
    if (!ticket_field.required) {
      _push(`<small class="pl-2 text-xs">(optional)</small>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (["text", "email", "number"].includes(ticket_field.type)) {
      _push(`<input${ssrRenderDynamicModel(ticket_field.type, $data.form.custom_field[ticket_field.name], null)}${ssrRenderAttr("type", ticket_field.type)}${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)}${ssrRenderAttr("placeholder", ticket_field.placeholder)}${ssrIncludeBooleanAttr(ticket_field.required) ? " required" : ""} class="form-input">`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.type === "textarea") {
      _push(`<textarea${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)} rows="2" class="form-textarea"${ssrRenderAttr("placeholder", ticket_field.placeholder)}>${ssrInterpolate($data.form.custom_field[ticket_field.name])}</textarea>`);
    } else {
      _push(`<!---->`);
    }
    if (ticket_field.hint) {
      _push(`<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">${ssrInterpolate(ticket_field.hint)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.subject,
    "onUpdate:modelValue": ($event) => $data.form.subject = $event,
    error: $data.form.errors.subject,
    class: "pr-6 pb-8 w-full lg:w-full",
    label: _ctx.$t("Subject")
  }, null, _parent));
  _push(`<div class="pr-6 pb-8 w-full"><label class="form-label">Request Details:</label>`);
  _push(ssrRenderComponent(_component_ckeditor, {
    id: "ticketDetails",
    editor: $data.editor,
    modelValue: $data.form.details,
    "onUpdate:modelValue": ($event) => $data.form.details = $event,
    config: $data.editorConfig
  }, null, _parent));
  _push(`</div><input type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, .zip" class="hidden" multiple="multiple"><div class="pr-6 pb-8 w-full lg:w-full flex-col"><button type="button" class="btn flex justify-center items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "file",
    class: "flex-shrink-0 h-8 fill-gray-400 pr-1"
  }, null, _parent));
  _push(` <h4>${ssrInterpolate(_ctx.$t("Attach files"))}</h4></button>`);
  if ($data.form.files.length) {
    _push(`<!--[-->`);
    ssrRenderList($data.form.files, (file, fi) => {
      _push(`<div class="flex items-center justify-between pr-6 pt-8 w-full lg:w-1/2"><div class="flex-1 pr-1">${ssrInterpolate(file.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.getFileSize(file.size))})</span></div><button type="button" class="btn flex justify-center items-center">${ssrInterpolate(_ctx.$t("Remove"))}</button></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Create"))} ${ssrInterpolate(_ctx.$t("Ticket"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Create")) + " " + toDisplayString(_ctx.$t("Ticket")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
