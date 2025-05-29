import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { v4 } from "uuid";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { S as SelectInputFilter } from "./SelectInputFilter-BWStuymG.js";
import moment from "moment";
import axios from "axios";
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import { _ as _sfc_main$3 } from "./UploadAdapter-D1xerzqJ.js";
import "@popperjs/core";
import "laravel-vue-i18n";
const _sfc_main$2 = {
  components: {
    Icon
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    editable: {
      type: [Number, Boolean],
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    is_required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editItem: false,
      itemValue: this.value
    };
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)} ${ssrInterpolate($props.is_required ? "*" : "")}</label>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.itemValue && !$data.editItem) {
    _push(`<div class="font-light text-sm flex gap-3">${ssrInterpolate($props.modelValue)} `);
    if ($props.editable) {
      _push(ssrRenderComponent(_component_icon, {
        name: "edit",
        onClick: ($event) => $data.editItem = !$data.editItem,
        class: "w-4 h-4 mr-1 cursor-pointer"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.editItem) {
    _push(`<div class="w-25 flex items-center"><input${ssrRenderAttrs(mergeProps({
      id: $props.id,
      ref: "input"
    }, { ..._ctx.$attrs, class: null }, {
      class: ["form-input", { error: $props.error }],
      type: $props.type,
      placeholder: $props.placeholder,
      value: $props.modelValue
    }))}>`);
    _push(ssrRenderComponent(_component_icon, {
      onClick: ($event) => $data.editItem = false,
      name: "close",
      class: "w-4 h-4 ml-2 cursor-pointer"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextEditInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TextEditInput = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    Icon
  },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    onInput: {
      type: Function
    },
    items: {
      type: Array
    },
    id: {
      type: String,
      default() {
        return `select-input-filter-${v4()}`;
      }
    },
    editable: [Number, Boolean],
    error: String,
    label: String,
    value: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue", "update:value", "change"],
  data() {
    return {
      selectedValue: "",
      selected: this.modelValue,
      isListVisible: false,
      editItem: false,
      itemValue: this.value
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
      this.editItem = false;
    }
  },
  created() {
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isListVisible = false;
      }
    },
    onFocus() {
      this.isListVisible = true;
    },
    selectItem(item, e) {
      this.$refs.input.value = item.name;
      this.selected = item.id;
      this.selectedValue = item.name;
      this.isListVisible = false;
      this.editItem = false;
      this.itemValue = item.name;
      this.$emit("update:modelValue", item.id);
      this.$emit("update:value", item.name);
      this.$emit("change", e);
    },
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["sel__filter", _ctx.$attrs.class],
    ref: "sel__filter"
  }, _attrs))}><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t($props.label))}</div>`);
  if ($data.itemValue && !$data.editItem) {
    _push(`<div class="font-light text-sm flex gap-3">${ssrInterpolate($data.itemValue)} `);
    if ($props.editable) {
      _push(ssrRenderComponent(_component_icon, {
        name: "edit",
        onClick: ($event) => $data.editItem = !$data.editItem,
        class: "w-4 h-4 mr-1 cursor-pointer"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-25 flex items-center">`);
  if ($data.editItem) {
    _push(`<input${ssrRenderAttrs(mergeProps({
      id: $props.id,
      ref: "input",
      class: ["form-select w-25", { error: $props.error }],
      type: "text"
    }, { ..._ctx.$attrs, class: null }, {
      placeholder: $props.placeholder,
      autocomplete: "off"
    }))}>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.editItem) {
    _push(ssrRenderComponent(_component_icon, {
      onClick: ($event) => $data.editItem = false,
      name: "close",
      class: "w-4 h-4 ml-2 cursor-pointer"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isListVisible && $props.items.length) {
    _push(`<div class="i__filter__list"><ul><!--[-->`);
    ssrRenderList($props.items, (item, index) => {
      _push(`<li>${ssrInterpolate(item.name)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectEditInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SelectEditInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    LoadingButton,
    SelectInput,
    TextInput,
    TextEditInput,
    TextareaInput,
    Link,
    Head,
    Icon,
    SelectInputFilter,
    SelectEditInput,
    Ckeditor
  },
  layout: Layout,
  props: {
    title: String,
    ticket: Object,
    priorities: Array,
    statuses: Array,
    types: Array,
    departments: Array,
    all_categories: { required: false },
    customers: Array,
    usersExceptCustomers: Array,
    attachments: Array,
    comments: Array,
    auth: Object,
    entries: Object,
    hidden_fields: Object
  },
  remember: false,
  data() {
    return {
      user: this.$page.props.auth.user,
      type_status: [],
      categories: this.all_categories.filter((cat) => cat.department_id === this.ticket.department_id),
      sub_categories: this.all_categories.filter((cat) => cat.parent_id === this.ticket.category_id),
      comment: "",
      editCustomer: false,
      enableEditor: false,
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
            return new _sfc_main$3(loader);
          };
        }]
      },
      form: this.$inertia.form({
        user_id: this.ticket.user_id,
        priority_id: this.ticket.priority_id,
        status_id: this.ticket.status_id,
        department_id: this.ticket.department_id,
        category_id: this.ticket.category_id ?? null,
        sub_category_id: this.ticket.sub_category_id,
        assigned_to: this.ticket.assigned_to,
        type_id: this.ticket.type_id,
        subject: this.ticket.subject,
        details: this.ticket.details,
        files: this.ticket.files,
        comments: this.ticket.comments,
        created_at: this.ticket.created_at,
        removedFiles: [],
        rating: 0,
        review: ""
      })
    };
  },
  created() {
    console.log(this.ticket.category_id);
    if (this.auth.user.role.slug === "customer" && this.statuses.length) {
      this.type_status = this.statuses.filter((status) => status.id === this.form.status_id || status.name.match(/Close.*/));
    } else {
      this.type_status = this.statuses;
    }
    this.moment = moment;
  },
  methods: {
    getCategories() {
      this.ticket.category = "N/A";
      this.form.category_id = null;
      this.categories = this.all_categories.filter((cat) => cat.department_id === this.form.department_id);
    },
    getSubCategories() {
      this.sub_categories = this.all_categories.filter((cat) => cat.parent_id === this.form.category_id);
      this.ticket.sub_category = "N/A";
      this.form.sub_category_id = null;
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
    fileInputChange(e) {
      let selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.form.files.push(selectedFiles[i]);
      }
    },
    fileRemove(image, index) {
      this.form.files.splice(index, 1);
    },
    fileBrowse() {
      this.$refs.file.click();
    },
    downloadAttachment(file) {
      const link = document.createElement("a");
      link.href = window.location.origin + "/files/" + file.path;
      link.download = file.name;
      link.click();
    },
    removeAttachment(file, index) {
      this.attachments.splice(index, 1);
      this.form.removedFiles.push(file.id);
    },
    getFileSize(size) {
      const i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "KB", "MB", "GB", "TB"][i];
    },
    uploadFiles() {
      this.form.files = this.$refs.files.files;
    },
    update() {
      this.form.post(this.route("tickets.update", this.ticket.id));
      this.form.files = [];
      this.form.comment = "";
    },
    destroy() {
      if (confirm("Are you sure you want to delete this ticket?")) {
        this.$inertia.delete(this.route("tickets.destroy", this.ticket.id));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this ticket?")) {
        this.$inertia.put(this.route("tickets.restore", this.ticket.id));
      }
    },
    submitComment() {
      var that = this;
      const messageData = {
        comment: this.comment,
        user_id: this.user.id,
        _token: this.$page.props.csrf_token,
        ticket_id: this.ticket.id
      };
      console.log(messageData);
      this.comment = "";
      axios.post(this.route("ticket.comment"), messageData).then((response) => {
        if (response.data) {
          that.comments.push(response.data);
        }
        this.$emit("comment submitted!");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_select_edit_input = resolveComponent("select-edit-input");
  const _component_text_edit_input = resolveComponent("text-edit-input");
  const _component_icon = resolveComponent("icon");
  const _component_ckeditor = resolveComponent("ckeditor");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="flex flex-wrap"><div class="max-w-full lg:w-3/5"><form class="bg-white rounded-md shadow overflow-hidden mr-2"><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  if ($props.auth.user.role.slug !== "customer") {
    _push(ssrRenderComponent(_component_select_edit_input, {
      placeholder: "Search customer",
      onInput: $options.doFilter,
      items: $props.customers,
      modelValue: $data.form.user_id,
      "onUpdate:modelValue": ($event) => $data.form.user_id = $event,
      error: $data.form.errors.user_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Customer"),
      value: $props.ticket.user,
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_select_edit_input, {
    placeholder: "Search priority",
    items: $props.priorities,
    modelValue: $data.form.priority_id,
    "onUpdate:modelValue": ($event) => $data.form.priority_id = $event,
    error: $data.form.errors.priority_id,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Priority"),
    value: $props.ticket.priority,
    editable: $data.user_access.ticket.update && !$props.ticket.closed
  }, null, _parent));
  if ($props.auth.user.role.slug !== "customer" && !($props.hidden_fields && $props.hidden_fields.includes("assigned_to"))) {
    _push(ssrRenderComponent(_component_select_edit_input, {
      placeholder: "Search user",
      onInput: $options.doFilterUsersExceptCustomer,
      items: $props.usersExceptCustomers,
      modelValue: $data.form.assigned_to,
      "onUpdate:modelValue": ($event) => $data.form.assigned_to = $event,
      error: $data.form.errors.assigned_to,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Assigned to"),
      value: $props.ticket.assigned_user ?? "Not Assigned",
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_select_edit_input, {
    placeholder: "Select status to change",
    items: $props.statuses,
    modelValue: $data.form.status_id,
    "onUpdate:modelValue": ($event) => $data.form.status_id = $event,
    error: $data.form.errors.status_id,
    class: "pr-6 pb-8 w-full lg:w-1/3",
    label: _ctx.$t("Status"),
    value: $props.ticket.status ? $props.ticket.status.name : "N/A",
    editable: $props.auth.user.role.slug !== "customer" && $data.user_access.ticket.update && !$props.ticket.closed
  }, null, _parent));
  if (!($props.hidden_fields && $props.hidden_fields.includes("ticket_type"))) {
    _push(ssrRenderComponent(_component_select_edit_input, {
      placeholder: "Search type",
      items: $props.types,
      modelValue: $data.form.type_id,
      "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
      error: $data.form.errors.type_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Ticket type"),
      value: $props.ticket.type,
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("department"))) {
    _push(ssrRenderComponent(_component_select_edit_input, {
      onChange: ($event) => $options.getCategories(),
      placeholder: "Search department",
      items: $props.departments,
      modelValue: $data.form.department_id,
      "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
      error: $data.form.errors.department_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Department"),
      value: $props.ticket.department,
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("category")) && $data.form.department_id) {
    _push(ssrRenderComponent(_component_select_edit_input, {
      ref: "category",
      onChange: ($event) => $options.getSubCategories(),
      placeholder: "Search category",
      items: $data.categories,
      modelValue: $data.form.category_id,
      "onUpdate:modelValue": ($event) => $data.form.category_id = $event,
      error: $data.form.errors.category_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Category"),
      value: $props.ticket.category,
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("category")) && $data.form.category_id) {
    _push(ssrRenderComponent(_component_select_edit_input, {
      ref: "sub_category",
      placeholder: "Search category",
      items: $data.sub_categories,
      modelValue: $data.form.sub_category_id,
      "onUpdate:modelValue": ($event) => $data.form.sub_category_id = $event,
      error: $data.form.errors.sub_category_id,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Sub Category"),
      value: $props.ticket.sub_category,
      editable: $data.user_access.ticket.update && !$props.ticket.closed
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="assigned_user pr-6 pb-8 w-full lg:w-1/3 flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t("Created"))}</div><div class="font-light text-sm">${ssrInterpolate(_ctx.moment($props.ticket.created_at).fromNow())}</div></div><!--[-->`);
  ssrRenderList($props.entries, (entry) => {
    _push(`<div class="assigned_user pr-6 pb-8 w-full lg:w-1/3 flex flex-col"><div class="font-bold text-sm mb-1">${ssrInterpolate(_ctx.$t(entry.label))}</div><div class="font-light text-sm">${ssrInterpolate(entry.value)}</div></div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_text_edit_input, {
    editable: $data.user_access.ticket.update && !$props.ticket.closed,
    modelValue: $data.form.subject,
    "onUpdate:modelValue": ($event) => $data.form.subject = $event,
    value: $props.ticket.subject,
    error: $data.form.errors.subject,
    class: "pr-6 pb-8 w-full lg:w-2/3",
    label: _ctx.$t("Subject")
  }, null, _parent));
  _push(`<div class="assigned_user pr-6 pb-8 w-full lg:w-full flex flex-col"><div class="w-25 flex gap-3"><label class="form-label">${ssrInterpolate(_ctx.$t("Request Details"))}</label>`);
  if (!$data.enableEditor && $data.user_access.ticket.update && !$props.ticket.closed) {
    _push(ssrRenderComponent(_component_icon, {
      name: "edit",
      onClick: ($event) => $data.enableEditor = !$data.enableEditor,
      class: "w-4 h-4 mr-1 cursor-pointer"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (!$data.enableEditor) {
    _push(`<div class="font-light text-sm">${$props.ticket.details ?? ""}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.enableEditor) {
    _push(`<div class="w-25 flex items-center ticket_details_area">`);
    _push(ssrRenderComponent(_component_ckeditor, {
      id: "ticketDetails",
      editor: $data.editor,
      modelValue: $data.form.details,
      "onUpdate:modelValue": ($event) => $data.form.details = $event,
      config: $data.editorConfig
    }, null, _parent));
    _push(`<div class="w-4 h-4 cursor-pointer">`);
    _push(ssrRenderComponent(_component_icon, {
      onClick: ($event) => $data.enableEditor = false,
      name: "close",
      class: "w-4 h-4 ml-2 cursor-pointer"
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><input type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, .zip" class="hidden" multiple="multiple"><div class="pr-6 pb-8 w-full lg:w-full flex-col"><button type="button" class="btn flex justify-center items-center pb-3 border-0 pl-0">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "file",
    class: "flex-shrink-0 h-5 fill-gray-400 pr-1"
  }, null, _parent));
  _push(` <strong>${ssrInterpolate(_ctx.$t("Attach File"))}</strong></button>`);
  if ($props.attachments.length) {
    _push(`<!--[-->`);
    ssrRenderList($props.attachments, (file, fi) => {
      _push(`<div class="flex items-center justify-between pr-6 pt-8 w-full"><div class="flex-1 pr-1">${ssrInterpolate(file.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.getFileSize(file.size))})</span> `);
      if (file.user) {
        _push(`<a class="text-sm"${ssrRenderAttr("href", this.route("users.edit", file.user.id))}>${ssrInterpolate(file.user.first_name)} ${ssrInterpolate(file.user.last_name)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(` at <span class="text-sm">${ssrInterpolate(file.created_at)}</span></div><div class="a__buttons flex justify-end items-center"><button type="button" class="btn flex items-center">${ssrInterpolate(_ctx.$t("Download"))}</button><button type="button" class="btn flex items-center ml-3">${ssrInterpolate(_ctx.$t("Remove"))}</button></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.form.files.length) {
    _push(`<!--[-->`);
    ssrRenderList($data.form.files, (file, fi) => {
      _push(`<div class="flex items-center justify-between pr-6 pt-8 w-full lg:w-1/2"><div class="flex-1 pr-1">${ssrInterpolate(file.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.getFileSize(file.size))})</span></div>`);
      if ($data.user_access.ticket.delete && $props.ticket.status && !$props.ticket.closed) {
        _push(`<button type="button" class="btn flex justify-center items-center">${ssrInterpolate(_ctx.$t("Remove"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.ticket.status && $props.ticket.closed && $props.ticket.review) {
    _push(`<div class="pr-6 pb-8 w-full lg:w-1/3 flex items-center"><strong>${ssrInterpolate(_ctx.$t("Rating"))}: </strong>   ${ssrInterpolate($props.ticket.review.rating)} <p>${ssrInterpolate($props.ticket.review.review)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.ticket.status && $props.ticket.closed && !$props.ticket.review && $props.auth.user.role.slug === "customer") {
    _push(`<div class="flex flex-col w-full"><div class="assigned_user star__review pb-5 w-full lg:w-1/3 flex flex-col"><div class="font-bold">${ssrInterpolate(_ctx.$t("How do you rate this support service?"))}</div><div class="star-rating pt-5"><input type="radio" id="5-stars" name="rating"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.rating, "5")) ? " checked" : ""} value="5"><label for="5-stars" class="star">★</label><input type="radio" id="4-stars" name="rating"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.rating, "4")) ? " checked" : ""} value="4"><label for="4-stars" class="star">★</label><input type="radio" id="3-stars" name="rating"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.rating, "3")) ? " checked" : ""} value="3"><label for="3-stars" class="star">★</label><input type="radio" id="2-stars" name="rating"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.rating, "2")) ? " checked" : ""} value="2"><label for="2-stars" class="star">★</label><input type="radio" id="1-star" name="rating"${ssrIncludeBooleanAttr(ssrLooseEqual($data.form.rating, "1")) ? " checked" : ""} value="1"><label for="1-star" class="star">★</label></div></div>`);
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.review,
      "onUpdate:modelValue": ($event) => $data.form.review = $event,
      error: $data.form.errors.review,
      class: "pr-6 pb-4 w-full lg:w-1/3",
      label: _ctx.$t("Feedback")
    }, null, _parent));
    _push(`<div class="flex lg:w-1/4 mb-4"><button class="btn-indigo" type="submit">${ssrInterpolate(_ctx.$t("Submit"))}</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
  if ($data.user_access.ticket.delete) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
        _push2(`${ssrInterpolate(_ctx.$t("Save"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><div class="max-w-full lg:w-2/5"><div class="bg-white rounded-md shadow overflow-hidden ml-2 chat-area comment-box flex-1 flex flex-col"><div class="flex-3"><div class="chat-header flex flex-col pb-3"><h3 class="text-xl">${ssrInterpolate(_ctx.$t("Ticket discussion"))}</h3><p class="text-sm font-light">${ssrInterpolate(_ctx.$t("Comment histories for this ticket will be available here."))}</p></div></div><div class="messages flex-1 overflow-auto reverse__order"><!--[-->`);
  ssrRenderList($props.comments.slice().reverse(), (comment, index) => {
    _push(`<div class="message mb-4 flex">`);
    if (comment.user_id !== $data.user.id) {
      _push(`<div class="flex-2"><div class="w-12 h-12 relative">`);
      if (comment.user) {
        _push(`<span class="w-12 h-12 rounded-full mx-auto user_icon" alt="chat-user">${ssrInterpolate(Array.from(comment.user.first_name)[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (comment.user_id !== $data.user.id) {
      _push(`<div class="flex-1 px-2 mt__wrap">`);
      if (comment.user) {
        _push(`<h3 class="font-bold pb-2 text-sm pt-1">${ssrInterpolate(comment.user.first_name)} ${ssrInterpolate(comment.user.last_name)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="inline-block bg-gray-300 user-comment-round p-2 px-3 text-gray-700 leading-5 ckc">${comment.details ?? ""}</div><div class="pl-4"><small class="text-gray-500">${ssrInterpolate(_ctx.moment(comment.updated_at).fromNow(true))}</small></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (comment.user_id === $data.user.id) {
      _push(`<div class="flex-1 mt__wrap px-2 text-right"><div class="inline-block bg-blue rounded p-2 px-3 text-white leading-5 ckc">${comment.details ?? ""}</div><div class="pr-4"><small class="text-gray-500">${ssrInterpolate(_ctx.moment(comment.updated_at).fromNow(true))}</small></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="flex-2 pt-4 pb-3"><div class="write bg-white shadow flex rounded-lg"><div class="flex-1 ticket_comment_edit">`);
  _push(ssrRenderComponent(_component_ckeditor, {
    id: "ticketDiscussion",
    editor: $data.editor,
    modelValue: $data.comment,
    "onUpdate:modelValue": ($event) => $data.comment = $event,
    name: "comment",
    config: $data.editorConfig,
    autofocus: ""
  }, null, _parent));
  _push(`</div><div class="flex-2 w-35 p-2 flex content-center items-center"><div class="flex-1"><button class="bg-blue w-10 h-10 rounded-full flex justify-center items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-4 h-4 fill-gray-100",
    name: "send"
  }, null, _parent));
  _push(`</button></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
