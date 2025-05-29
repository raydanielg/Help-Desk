import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
const _sfc_main = {
  components: {
    LoadingButton
  },
  data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    subscribe() {
      this.form.post(this.route("subscribe.news"));
      this.form.email = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container md:mt-24 mt-16" }, _attrs))}><div class="md:flex justify-center"><div class="lg:w-2/3 text-center"><h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3><p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We&#39;ll send you the best of our article just once a weekly.</p><div class="mt-8"><div class="text-center subcribe-form"><form class="relative mx-auto max-w-xl"><input type="email" id="subemail" name="email"${ssrRenderAttr("value", $data.form.email)} class="pt-4 pr-[12rem] pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id..">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Subscribe Now"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Subscribe Now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Landing/Subscribe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Subscribe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Subscribe as S
};
