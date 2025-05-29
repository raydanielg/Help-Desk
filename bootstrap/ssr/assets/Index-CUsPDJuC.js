import { L as Layout } from "./Layout-DjOXHHQT.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { Link, Head } from "@inertiajs/vue3";
import throttle from "lodash/throttle.js";
import pickBy from "lodash/pickBy.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "uuid";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: { Link, Head, SearchInput, Icon, TextareaInput, TextInput, Pagination },
  props: {
    filters: Object,
    title: String,
    notes: Object
  },
  data() {
    return {
      update_id: null,
      note_form: false,
      searchFilter: {
        search: this.filters.search
      },
      form: this.$inertia.form({
        id: null,
        name: null,
        color: null,
        details: null
      })
    };
  },
  watch: {
    searchFilter: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("notes"), pickBy(this.searchFilter), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    updateNote(note) {
      this.form.name = note.name ?? null;
      this.form.details = note.details ?? null;
      this.form.id = note.id ?? null;
      this.update_id = note.id ?? null;
      this.note_form = true;
    },
    addNew() {
      this.updateNote({});
      this.note_form = true;
    },
    destroy() {
      if (confirm("Are you sure you want to delete this note?")) {
        this.$inertia.delete(this.route("notes.delete", this.update_id), {
          onSuccess: () => {
            this.resetForm();
          }
        });
      }
    },
    store(id) {
      this.form.post(this.route("notes.save", id), {
        onSuccess: () => {
          this.resetForm();
        }
      });
    },
    resetForm() {
      this.note_form = false;
      this.form.reset();
      this.update_id = null;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_input = resolveComponent("search-input");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  const _component_text_input = resolveComponent("text-input");
  const _component_textarea_input = resolveComponent("textarea-input");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="mb-6 flex justify-center items-center">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.searchFilter.search,
    "onUpdate:modelValue": ($event) => $data.searchFilter.search = $event,
    class: "w-full max-w-md mr-4 rtl:ml-4",
    disableReset: true
  }, null, _parent));
  _push(`<div class="btn-indigo p-3 rounded-full cursor-pointer">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-5 h-5 fill-gray-100",
    name: "plus"
  }, null, _parent));
  _push(`</div></div><div class=""><div class="mx-auto container py-6 px-2"><div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"><!--[-->`);
  ssrRenderList($props.notes.data, (note) => {
    _push(`<div class="rounded bg-white cursor-pointer transform hover:scale-105 duration-300 transition-transform shadow-md rounded-lg border mb-6 py-5 px-4"><div class="w-full h-64 flex flex-col justify-between"><div><h4 class="font-bold mb-3">${ssrInterpolate(note.name)}</h4><p class="text-sm">${ssrInterpolate(note.details.length < 100 ? note.details : note.details.substring(0, 100) + "...")}</p></div><div><div class="flex items-center justify-between"><p class="text-sm">${ssrInterpolate(note.created_at)}</p><button class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center" aria-label="edit note" role="button">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "edit",
      class: "w-4 h-4 fill-gray-100"
    }, null, _parent));
    _push(`</button></div></div></div></div>`);
  });
  _push(`<!--]--></div>`);
  if (!$props.notes.data.length) {
    _push(`<h4 class="flex justify-center items-center text-center font-bold">No note found.</h4>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex justify-center">`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.notes.links
  }, null, _parent));
  _push(`</div>`);
  if ($data.note_form) {
    _push(`<div class="note-form-overlay"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.note_form) {
    _push(`<div class="note-form py-8 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal"><div role="alert" class="container mx-auto"><form><div class="relative py-10 px-6 md:px-10 bg-white shadow-md rounded border border-gray-400">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.name,
      "onUpdate:modelValue": ($event) => $data.form.name = $event,
      error: $data.form.errors.name,
      class: "pb-6 w-full",
      label: "Name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.details,
      "onUpdate:modelValue": ($event) => $data.form.details = $event,
      error: $data.form.errors.details,
      rows: 5,
      class: "pb-6 w-full",
      placeholder: "note details here..",
      label: _ctx.$t("Details")
    }, null, _parent));
    _push(`<div class="flex justify-between"><div class="flex items-center justify-start w-full"><button type="submit" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">Submit</button><span class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancel</span></div><div class="flex">`);
    if ($data.form.id) {
      _push(`<span class="w-36 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Delete note</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><span class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-6 h-6",
      name: "close"
    }, null, _parent));
    _push(`</span></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
