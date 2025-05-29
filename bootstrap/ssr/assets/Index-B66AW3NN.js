import { Head, Link } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import pickBy from "lodash/pickBy.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import moment from "moment";
import axios from "axios";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "laravel-vue-i18n";
const _sfc_main = {
  components: {
    SearchInput,
    Head,
    Icon,
    Link
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Array,
    title: String
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        role: this.filters.role
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("users"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    approveAccount(id) {
      axios.get(this.route("pending.active", { id })).then((res) => {
        window.location.reload();
      });
    },
    removeAccount(id) {
      axios.get(this.route("pending.decline", { id })).then((res) => {
        window.location.reload();
      });
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  },
  created() {
    this.moment = moment;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_input = resolveComponent("search-input");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, null, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tbody><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Name"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Email"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Phone"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("City"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Address"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Updated"))}</th><th class="pb-4 pt-6 px-6">${ssrInterpolate(_ctx.$t("Action"))}</th></tr><!--[-->`);
  ssrRenderList($props.users, (user) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">${ssrInterpolate(user.first_name)} ${ssrInterpolate(user.last_name)}</td><td class="border-t">${ssrInterpolate(user.email)}</td><td class="border-t">${ssrInterpolate(user.phone)}</td><td class="border-t">${ssrInterpolate(_ctx.$t(user.city))}</td><td class="border-t capitalize">${ssrInterpolate(user.address)}</td><td class="border-t capitalize">${ssrInterpolate(_ctx.moment(user.created_at).fromNow())}</td><td class="border-t capitalize"><div class="action flex">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "tick",
      onClick: ($event) => $options.approveAccount(user.id),
      class: "ml-2 w-7 h-7 cursor-pointer"
    }, null, _parent));
    _push(ssrRenderComponent(_component_icon, {
      name: "cross",
      onClick: ($event) => $options.removeAccount(user.id),
      class: "ml-2 w-7 h-7 cursor-pointer"
    }, null, _parent));
    _push(`</div></td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="7">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PendingUsers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
