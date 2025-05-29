import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "white") {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: "logo w-[195px] h-auto",
      src: "/images/logo_white.png",
      alt: "Logo"
    }, _attrs))}>`);
  } else {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: "logo w-[195px] h-auto",
      src: "/images/logo.png",
      alt: "Logo"
    }, _attrs))}>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-center w-full flash-message">`);
  if (_ctx.$page.props.flash && _ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="mt-3 mb-3 flex items-center justify-between bg-green-500 rounded max-w-3xl"><div class="flex items-center"><svg class="ml-4 mr-2 shrink-0 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.flash && (_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="mb-8 flex items-center justify-between bg-red-400 rounded max-w-3xl"><div class="flex items-center"><svg class="ml-4 mr-2 shrink-0 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium flex flex-col">`);
      if (Object.keys(_ctx.$page.props.errors).length === 1) {
        _push(`<span>There is one form error.</span>`);
      } else {
        _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.$page.props.errors, (error, ei) => {
        _push(`<span> * ${ssrInterpolate(error)}</span>`);
      });
      _push(`<!--]--></div>`);
    }
    _push(`</div><button type="button" class="${ssrRenderClass([{ "dir_top": Object.keys(_ctx.$page.props.errors).length > 1 }, "group mr-2 p-2"])}"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FlashMessages as F,
  Logo as L,
  _export_sfc as _
};
