import { Head, Link } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import pickBy from "lodash/pickBy.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "axios";
const _sfc_main = {
  components: {
    SearchInput,
    Head,
    Icon,
    Link,
    Pagination
  },
  layout: Layout,
  props: {
    filters: Object,
    organizations: Object,
    title: String
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
        this.$inertia.get(this.route("organizations"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
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
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("organizations.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("Create"))}</span><span class="hidden md:inline"${_scopeId}>${ssrInterpolate(_ctx.$t("Organization"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("Create")), 1),
          createVNode("span", { class: "hidden md:inline" }, toDisplayString(_ctx.$t("Organization")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Name"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("City"))}</th><th class="pb-4 pt-6 px-6" colspan="2">${ssrInterpolate(_ctx.$t("Phone"))}</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.organizations.data, (organization) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("organizations.edit", organization.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("organizations.edit", organization.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("organizations.edit", organization.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("organizations.edit", organization.id),
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
  if ($props.organizations.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">${ssrInterpolate(_ctx.$t("No organizations found."))}</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.organizations.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
