import { Link } from "@inertiajs/vue3";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
const _sfc_main = {
  props: {
    links: Array
  },
  components: {
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap p-nat -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">${link.label ?? ""}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: key + 1,
          class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded", { "active": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
