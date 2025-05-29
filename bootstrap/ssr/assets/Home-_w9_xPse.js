import { Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc, L as Logo } from "./FlashMessages-BlPv0OK4.js";
import { L as Layout } from "./Layout-TbZAiGoL.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import sanitizeHtml from "sanitize-html";
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import { _ as _sfc_main$1 } from "./UploadAdapter-D1xerzqJ.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import "moment";
import "axios";
import "@popperjs/core";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Home" },
  layout: Layout,
  components: {
    Logo,
    Icon,
    LoadingButton,
    SelectInput,
    TextInput,
    Head,
    Link,
    Ckeditor
  },
  props: {
    all_categories: { required: true },
    departments: Array,
    types: Array,
    title: String,
    page: Object,
    auth: Object,
    custom_fields: Object,
    hide_ticket_fields: Array,
    require_login: Boolean
  },
  remember: "form",
  data() {
    return {
      editor: ClassicEditor,
      accept_terms: false,
      html: JSON.parse(this.page.html),
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
        first_name: "",
        last_name: "",
        email: "",
        department_id: null,
        category_id: null,
        sub_category_id: null,
        type_id: null,
        subject: null,
        details: "",
        files: [],
        custom_field: {}
      }),
      sanitizeHtml
    };
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
    uploadFiles() {
      this.form.files = this.$refs.files.files;
    },
    store() {
      if (!this.accept_terms) {
        alert("You must need to accept the terms and condition.");
      }
      this.form.post(this.route("ticket_store"), {
        onSuccess: () => {
          this.form.reset();
        }
        // form.reset()
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
    getFileSize(size) {
      const i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    fileBrowse() {
      this.$refs.file.click();
    }
  },
  created() {
    console.log(this.hide_ticket_fields);
    console.log("ok");
    if (this.auth.user) {
      this.form.first_name = this.auth.user.first_name;
      this.form.last_name = this.auth.user.last_name;
      this.form.email = this.auth.user.email;
    }
    for (let cf_c = 0; cf_c < this.custom_fields.length; cf_c++) {
      if (this.custom_fields[cf_c.name]) {
        this.form.custom_field[this.custom_fields[cf_c.name]] = "";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_ckeditor = resolveComponent("ckeditor");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t("Home")
  }, null, _parent));
  _push(`<div id="home" class="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s"><h1 class="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">${$data.sanitizeHtml($data.html.sections[0].title) ?? ""}</h1><p class="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">${$data.sanitizeHtml($data.html.sections[0].details) ?? ""}</p><ul class="mb-10 flex flex-wrap items-center justify-center gap-6"><!--[-->`);
  ssrRenderList($data.html.sections[0].buttons, (button, bi) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: button.link,
      class: "inline-flex items-center justify-center rounded-lg bg-white py-4 px-6 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:text-primary hover:shadow-lg sm:px-10"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(button.text)}`);
        } else {
          return [
            createTextVNode(toDisplayString(button.text), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="w-full px-4"><div class="wow fadeInUp relative z-10 mx-auto max-w-[845px]" data-wow-delay=".25s"><div class="mt-16">`);
  if ($data.html.sections[0].image) {
    _push(`<img${ssrRenderAttr("src", $data.html.sections[0].image)} alt="" class="mx-auto max-w-full rounded-t-xl rounded-tr-xl">`);
  } else {
    _push(`<img src="/landing/images/dashboard-helpdesk.png" alt="" class="mx-auto max-w-full rounded-t-xl rounded-tr-xl">`);
  }
  _push(`</div><div class="absolute bottom-0 -left-9 z-[-1]"><img src="/images/svg/dot-1.svg" alt="dot"></div><div class="absolute -top-6 -right-6 z-[-1]"><img src="/images/svg/dot-2.svg" alt="dot"></div></div></div></div></div></div><section class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]"><div class="container"><div class="-mx-4 flex flex-wrap"><div class="w-full px-4"><div class="mb-12 max-w-[620px] lg:mb-20"><span class="mb-2 block text-lg font-semibold text-primary">${ssrInterpolate($data.html.sections[1].tagline)}</span><h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">${ssrInterpolate($data.html.sections[1].title)}</h2><p class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">${$data.html.sections[1].details ?? ""}</p></div></div></div>`);
  if ($data.html.sections[1]) {
    _push(`<div class="-mx-4 flex flex-wrap"><!--[-->`);
    ssrRenderList($data.html.sections[1].features, (feature, fi) => {
      _push(`<div class="w-full px-4 md:w-1/2 lg:w-1/4"><div class="wow fadeInUp group mb-12 bg-white" data-wow-delay=".1s"><div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"><span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>`);
      _push(ssrRenderComponent(_component_icon, {
        name: feature.icon,
        class: "w-8 h-8 fill-white"
      }, null, _parent));
      _push(`</div><h4 class="mb-3 text-xl font-bold text-dark">${ssrInterpolate(feature.title)}</h4><p class="mb-8 text-body-color lg:mb-11">${feature.details ?? ""}</p></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
  if ($data.html.sections[2].enable_ticket_section) {
    _push(`<section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="ticketSubmit"><div class="container"><form class="card mt-2 p-4 rounded shadow-xl overflow-hidden" enctype="multipart/form-data"><div class="px-5"><h1 class="py-5 text-center md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">${ssrInterpolate(_ctx.$t("Create a ticket"))}</h1><div class="mx-auto mb-6 mt-1 w-24 border-b"></div><div class="flex flex-wrap">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.first_name,
      "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
      error: $data.form.errors.last_name,
      class: "pr-6 rtl:pr-0 rtl:pl-6 pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("First name")
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.last_name,
      "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
      error: $data.form.errors.last_name,
      class: "pr-6 rtl:pr-0 rtl:pl-6 pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Last name")
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.email,
      "onUpdate:modelValue": ($event) => $data.form.email = $event,
      error: $data.form.errors.email,
      class: "pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Email Address")
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.subject,
      "onUpdate:modelValue": ($event) => $data.form.subject = $event,
      error: $data.form.errors.subject,
      class: "pb-5 pr-6 rtl:pr-0 rtl:pl-6 w-full lg:w-2/3",
      label: _ctx.$t("Subject")
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.type_id,
      "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
      error: $data.form.errors.type_id,
      class: "pr-6 rtl:pr-0 rtl:pl-6 pb-5 md:col-span-6 lg:w-1/3",
      label: _ctx.$t("Ticket type")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Select a type"))}</option><!--[-->`);
          ssrRenderList($props.types, (type) => {
            _push2(`<option${ssrRenderAttr("value", type.id)}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Select a type")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($props.types, (type) => {
              return openBlock(), createBlock("option", {
                key: type.id,
                value: type.id
              }, toDisplayString(type.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
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
    if ($data.form.department_id) {
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
    _push(`<div class="pt-2 pb-8 w-full"><label class="form-label">${ssrInterpolate(_ctx.$t("Request Details"))}</label>`);
    _push(ssrRenderComponent(_component_ckeditor, {
      id: "ticketDetails",
      editor: $data.editor,
      modelValue: $data.form.details,
      "onUpdate:modelValue": ($event) => $data.form.details = $event,
      error: $data.form.errors.details,
      config: $data.editorConfig
    }, null, _parent));
    _push(`</div></div><div class="grid gap-6 mb-6"><!--[-->`);
    ssrRenderList($props.custom_fields, (ticket_field) => {
      _push(`<div class="flex w-full"><div class="flex flex-col w-full"><label${ssrRenderAttr("for", !["checkbox"].includes(ticket_field.type) ? "ticket_field_" + ticket_field.id : null)} class="block mb-2 text-sm text-gray-900 dark:text-white">${ssrInterpolate(ticket_field.label)} `);
      if (!ticket_field.required) {
        _push(`<small class="pl-2 text-xs">(optional)</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      if (["text", "email", "number"].includes(ticket_field.type)) {
        _push(`<input${ssrRenderDynamicModel(ticket_field.type, $data.form.custom_field[ticket_field.name], null)}${ssrRenderAttr("type", ticket_field.type)}${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)}${ssrRenderAttr("placeholder", ticket_field.placeholder)}${ssrIncludeBooleanAttr(ticket_field.required) ? " required" : ""} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">`);
      } else {
        _push(`<!---->`);
      }
      if (ticket_field.type === "textarea") {
        _push(`<textarea${ssrRenderAttr("id", "ticket_field_" + ticket_field.id)} rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"${ssrRenderAttr("placeholder", ticket_field.placeholder)}>${ssrInterpolate($data.form.custom_field[ticket_field.name])}</textarea>`);
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
    _push(`<!--]--></div><input type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, .zip" class="hidden" multiple="multiple"><div class="pr-6 rtl:pl-6 pb-8 w-full lg:w-full flex-col"><button type="button" class="btn flex justify-center items-center border-0">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "file",
      class: "flex-shrink-0 h-8 fill-gray-400 pr-2 rtl:pl-2"
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
    _push(`</div><div class="flex items-start mb-5"><div class="flex items-center h-5"><input id="terms" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.accept_terms) ? ssrLooseContain($data.accept_terms, null) : $data.accept_terms) ? " checked" : ""} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></div><label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(_ctx.$t("I agree with the"))} <a${ssrRenderAttr("href", this.route("terms_service"))} target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">${ssrInterpolate(_ctx.$t("terms and conditions"))}</a></label></div></div><div class="px-4 py-4 border-t border-gray-100 flex justify-end">`);
    _push(ssrRenderComponent(_component_loading_button, {
      loading: $data.form.processing,
      class: "rounded-lg bg-primary py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80",
      type: "submit"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Submit"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Submit")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></form></div></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
