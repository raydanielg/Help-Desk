import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import pickBy from "lodash/pickBy.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { Link, Head } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
const _sfc_main = {
  metaInfo: { title: "Categories" },
  components: {
    SearchInput,
    Icon,
    Pagination,
    Link,
    Head
  },
  layout: Layout,
  props: {
    title: String,
    filters: Object,
    categories: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("categories"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    getCategories() {
      let cats = this.categories.data.filter((cat) => !cat.parent);
      for (let ci = 0; ci < this.categories.data.length; ci++) {
        if (this.categories.data[ci].parent) {
          const findIndex = cats.findIndex((cat) => cat.id === this.categories.data[ci].parent.id);
          if (findIndex > -1) {
            cats.splice(findIndex + 1, 0, this.categories.data[ci]);
          }
        }
      }
      return cats;
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_input = resolveComponent("search-input");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="mb-6 flex justify-between items-center">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full max-w-md mr-4",
    onReset: $options.reset
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("categories.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("Create New"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("Create New")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tbody><tr class="text-left font-bold"><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Department</th><th class="px-6 pt-6 pb-4">Parent</th></tr><!--[-->`);
  ssrRenderList($options.getCategories(), (category) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t px-6 py-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center focus:text-indigo-500",
      href: _ctx.route("categories.edit", category.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(category.parent ? "   — " : "")} ${ssrInterpolate(category.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(category.parent ? "   — " : "") + " " + toDisplayString(category.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t px-6 py-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center focus:text-indigo-500",
      href: _ctx.route("categories.edit", category.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(category.department ? category.department.name : "-")}`);
        } else {
          return [
            createTextVNode(toDisplayString(category.department ? category.department.name : "-"), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t px-6 py-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center focus:text-indigo-500",
      href: _ctx.route("categories.edit", category.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(category.parent ? category.parent.name : "-")}`);
        } else {
          return [
            createTextVNode(toDisplayString(category.parent ? category.parent.name : "-"), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t w-px px-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center",
      href: _ctx.route("categories.edit", category.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.categories.data.length === 0) {
    _push(`<tr><td class="border-t px-6 py-4" colspan="4">No categories found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.categories.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Categories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
