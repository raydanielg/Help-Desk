import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { Link, Head } from "@inertiajs/vue3";
import { F as FileInput } from "./FileInput-Y3725sIq.js";
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import { _ as _sfc_main$1 } from "./UploadAdapter-D1xerzqJ.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./Dropdown-CRPxtfzU.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
const _sfc_main = {
  components: {
    LoadingButton,
    SelectInput,
    TextareaInput,
    TextInput,
    Link,
    Head,
    FileInput,
    Ckeditor
  },
  layout: Layout,
  props: {
    post: Object,
    title: String,
    types: Array
  },
  remember: "form",
  data() {
    return {
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
      form: this.$inertia.form({
        _method: "put",
        title: this.post.title,
        type_id: this.post.type_id,
        is_active: this.post.is_active,
        image: null,
        details: this.post.details
      })
    };
  },
  methods: {
    update() {
      this.form.post(this.route("posts.update", this.post.id), {
        onSuccess: () => this.form.reset("image")
      });
    },
    destroy() {
      if (confirm("Are you sure you want to delete this post?")) {
        this.$inertia.delete(this.route("posts.destroy", this.post.id));
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_ckeditor = resolveComponent("ckeditor");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden max-w-full"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.title,
    "onUpdate:modelValue": ($event) => $data.form.title = $event,
    error: $data.form.errors.title,
    class: "pr-6 pb-8 w-full lg:w-1/2",
    label: _ctx.$t("Title")
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.type_id,
    "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
    error: $data.form.errors.type_id,
    class: "pr-6 pb-8 w-full lg:w-1/4",
    label: _ctx.$t("Type"),
    required: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Select type"))}</option><!--[-->`);
        ssrRenderList($props.types, (s) => {
          _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }, toDisplayString(_ctx.$t("Select type")), 1),
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
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.is_active,
    "onUpdate:modelValue": ($event) => $data.form.is_active = $event,
    error: $data.form.errors.is_active,
    class: "pr-6 pb-8 w-full lg:w-1/4",
    label: _ctx.$t("Is Active"),
    required: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", 1)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", 0)}${_scopeId}>No</option>`);
      } else {
        return [
          createVNode("option", { value: 1 }, "Yes"),
          createVNode("option", { value: 0 }, "No")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pr-6 pb-8 w-full"><label class="form-label">Details:</label>`);
  _push(ssrRenderComponent(_component_ckeditor, {
    id: "ticketDetails",
    editor: $data.editor,
    modelValue: $data.form.details,
    "onUpdate:modelValue": ($event) => $data.form.details = $event,
    error: $data.form.errors.details,
    config: $data.editorConfig
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.image,
    "onUpdate:modelValue": ($event) => $data.form.image = $event,
    error: $data.form.errors.image,
    class: "pb-8 pr-6 w-full lg:w-1/3",
    type: "file",
    accept: "image/*",
    label: _ctx.$t("Feature image")
  }, null, _parent));
  _push(`<div class="w-full flex lg:w-1/3 justify-start">`);
  if ($props.post.image) {
    _push(`<img class="block mb-2 w-10 h-10"${ssrRenderAttr("src", $props.post.image)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center"><button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Post</button>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Post`);
      } else {
        return [
          createTextVNode("Update Post")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blogs/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
