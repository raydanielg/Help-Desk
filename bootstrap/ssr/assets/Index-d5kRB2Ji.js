import { Head, Link } from "@inertiajs/vue3";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "moment";
import "laravel-vue-i18n";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  metaInfo: { title: "Dashboard" },
  components: {
    Head,
    Icon,
    Link
  },
  layout: Layout,
  props: {
    auth: Object,
    entries: Array,
    chart_line: Object,
    api_key: String,
    new_tickets: Number,
    total_tickets: Number,
    un_assigned_tickets: Number,
    opened_tickets: Number,
    closed_tickets: Number,
    first_response: Array,
    top_creators: Array,
    last_response: Array,
    top_departments: Array,
    top_types: Array,
    total_customer: Number,
    total_contacts: Number
  },
  data() {
    return {
      errors: [],
      loading: false,
      firstResponse: [],
      lastResponse: [],
      months: []
    };
  },
  created() {
    for (let i = 0; i < this.first_response.length; i++) {
      if (i % 2 === 0) {
        this.firstResponse = [...this.firstResponse, [this.first_response[i], this.first_response[i + 1]]];
      }
    }
    for (let i = 0; i < this.last_response.length; i++) {
      if (i % 2 === 0) {
        this.lastResponse = [...this.lastResponse, [this.last_response[i], this.last_response[i + 1]]];
      }
    }
    this.months = this.chart_line.previousMonths.map((m) => {
      return { "month": m, "value": this.chart_line.months[m] ? this.chart_line.months[m] * 100 / this.chart_line.total + "%" : "0%" };
    });
  },
  methods: {
    goToLink(link) {
      window.location.href = link;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_vc_donut = resolveComponent("vc-donut");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t("Dashboard")
  }, null, _parent));
  _push(`<div class="badge__items flex flex-col lg:flex-row gap-5"><div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("New Tickets"))}</span><span class="number">${ssrInterpolate($props.new_tickets)}</span></div><div class="a__right"><div class="round_circle pr-3 rtl:pl-3"><div class="pie animate" style="${ssrRenderStyle({ "--pie_val": parseInt($props.new_tickets * 100 / $props.total_tickets) })}">${ssrInterpolate(parseInt($props.new_tickets * 100 / $props.total_tickets) || 0)}%</div></div></div></div></div><div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("Open Tickets"))}</span><span class="number">${ssrInterpolate($props.opened_tickets)}</span></div><div class="a__right"><div class="round_circle pr-3 rtl:pl-3"><div class="pie animate" style="${ssrRenderStyle({ "--pie_val": parseInt($props.opened_tickets * 100 / $props.total_tickets) })}">${ssrInterpolate(parseInt($props.opened_tickets * 100 / $props.total_tickets) || 0)}%</div></div></div></div></div><div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("Closed Tickets"))}</span><span class="number">${ssrInterpolate($props.closed_tickets)}</span></div><div class="a__right"><div class="round_circle pr-3 rtl:pl-3"><div class="pie animate" style="${ssrRenderStyle({ "--pie_val": parseInt($props.closed_tickets * 100 / $props.total_tickets) })}">${ssrInterpolate(parseInt($props.closed_tickets * 100 / $props.total_tickets) || 0)}%</div></div></div></div></div>`);
  if ($props.auth.user.role.slug !== "customer") {
    _push(`<div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("Unassigned Tickets"))}</span><span class="number">${ssrInterpolate($props.un_assigned_tickets)}</span></div><div class="a__right"><div class="round_circle pr-3 rtl:pl-3"><div class="pie animate" style="${ssrRenderStyle({ "--pie_val": parseInt($props.un_assigned_tickets * 100 / $props.total_tickets) })}">${ssrInterpolate(parseInt($props.un_assigned_tickets * 100 / $props.total_tickets) || 0)}%</div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.auth.user.role.slug !== "customer") {
    _push(`<div class="response__details mt-8 flex gap-5 flex-col lg:flex-row"><div class="w-full"><div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white items-center rounded-lg shadow-lg rd"><h2 class="th__ttl font-bold text-lg pt-3">${ssrInterpolate(_ctx.$t("Ticket by department"))}</h2><div class="th__info flex flex-col pt-3">`);
    _push(ssrRenderComponent(_component_vc_donut, {
      background: "white",
      foreground: "grey",
      size: 120,
      unit: "px",
      thickness: 45,
      "has-legend": "",
      "legend-placement": "right",
      sections: $props.top_departments,
      total: 100,
      "start-angle": 0,
      "auto-adjust-text-size": true
    }, null, _parent));
    _push(`</div></div></div><div class="w-full"><div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white items-center rounded-lg shadow-lg rd"><h2 class="th__ttl font-bold text-lg pt-3">${ssrInterpolate(_ctx.$t("Ticket by type"))}</h2><div class="th__info flex flex-col pt-3">`);
    _push(ssrRenderComponent(_component_vc_donut, {
      background: "white",
      foreground: "grey",
      size: 120,
      unit: "px",
      thickness: 45,
      "has-legend": "",
      "legend-placement": "right",
      sections: $props.top_types,
      total: 100,
      "start-angle": 0,
      "auto-adjust-text-size": true
    }, null, _parent));
    _push(`</div></div></div><div class="w-full"><div class="r__wrapper flex flex-col pl-5 pl-5 pb-5 bg-white items-center rounded-lg shadow-lg rd"><h2 class="th__ttl font-bold text-lg pt-3">${ssrInterpolate(_ctx.$t("Top ticket creator"))}</h2><div class="th__info flex flex-col pt-3">`);
    _push(ssrRenderComponent(_component_vc_donut, {
      background: "white",
      foreground: "grey",
      size: 120,
      unit: "px",
      thickness: 45,
      "has-legend": "",
      "legend-placement": "right",
      sections: $props.top_creators,
      total: 100,
      "start-angle": 0,
      "auto-adjust-text-size": true
    }, null, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.auth.user.role.slug !== "customer") {
    _push(`<div class="response__details flex flex-col lg:flex-row mt-8 gap-5"><div class="flex gap-5 flex-col lg:flex-row lg:w-10/12"><div class="w-full"><div class="r__wrapper flex flex-col p-5 bg-white rounded-lg shadow-lg rd"><h2 class="th__ttl font-bold text-lg pt-3">${ssrInterpolate(_ctx.$t("Ticket history"))}</h2><div class="th__info flex"><span class="text-2xl font-bold">${ssrInterpolate($props.chart_line.this_month)}</span><span class="pt-2 text-xs pl-1 pr-1">/ ${ssrInterpolate(_ctx.$t("this month"))}</span><span class="pt-2 text-xs font-bold pl-2 pr-2">${ssrInterpolate(_ctx.$t("last month"))} ${ssrInterpolate($props.chart_line.last_month)}</span></div>`);
    if ($data.months.length) {
      _push(`<div class="flex w-full justify-center c__wrapper"><!--[-->`);
      ssrRenderList($data.months, (cl) => {
        _push(`<div class="c__line flex flex-col w-full items-center gap-3"><span class="cl__b" style="${ssrRenderStyle({ "--cl_value": cl.value })}"></span><span class="cl__n text-xs">${ssrInterpolate(cl.month)}</span></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="rd w-full lg:w-2/5"><div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white rounded-lg shadow-lg rd"><div class="res__info"><span class="title">${ssrInterpolate(_ctx.$t("First Response Time"))}</span><span class="res_avg">${ssrInterpolate(_ctx.$t("Average"))}</span><div class="flex justify-start">`);
    if ($data.firstResponse.length) {
      _push(`<!--[-->`);
      ssrRenderList($data.firstResponse, (fr, fri) => {
        _push(`<div class="res_time pr-5"><span class="num">${ssrInterpolate(fr[0])}</span><span class="text">${ssrInterpolate(_ctx.$t(fr[1]))}</span></div>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<div class="res_time pr-5"> 0 </div>`);
    }
    _push(`</div></div><div class="tc__info"><span class="title">${ssrInterpolate(_ctx.$t("Last Response Time"))}</span><span class="res_avg">${ssrInterpolate(_ctx.$t("Average"))}</span><div class="flex justify-start">`);
    if ($data.lastResponse.length) {
      _push(`<!--[-->`);
      ssrRenderList($data.lastResponse, (fr, fri) => {
        _push(`<div class="res_time pr-5"><span class="num">${ssrInterpolate(fr[0])}</span><span class="text">${ssrInterpolate(_ctx.$t(fr[1]))}</span></div>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<div class="res_time pr-5"> 0 </div>`);
    }
    _push(`</div></div></div></div></div><div class="flex gap-5 flex-col lg:w-2/12"><div class="badge__item h-32 w-full cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("Customers"))}</span><span class="number">${ssrInterpolate($props.total_customer)}</span></div><div class="a__right">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "pending_users",
      class: "h-5 fill-gray-400 mr-5 ml-5"
    }, null, _parent));
    _push(`</div></div></div><div class="badge__item h-32 w-full cursor-pointer"><div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full"><div class="badge__info"><span class="title">${ssrInterpolate(_ctx.$t("Contacts"))}</span><span class="number">${ssrInterpolate($props.total_contacts)}</span></div><div class="a__right">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "contact",
      class: "h-5 fill-gray-400 mr-5 ml-5"
    }, null, _parent));
    _push(`</div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loading) {
    _push(`<div class="processing-overlay"><div class="background"></div><div class="loader"> \`<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="${ssrRenderStyle({ "background": "none" })}"><circle cx="75" cy="50" fill="#ffffff" r="6.39718"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.875s"></animate></circle><circle cx="67.678" cy="67.678" fill="#ffffff" r="4.8"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate></circle><circle cx="50" cy="75" fill="#ffffff" r="4.8"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.625s"></animate></circle><circle cx="32.322" cy="67.678" fill="#ffffff" r="4.8"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate></circle><circle cx="25" cy="50" fill="#ffffff" r="4.8"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.375s"></animate></circle><circle cx="32.322" cy="32.322" fill="#ffffff" r="4.80282"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate></circle><circle cx="50" cy="25" fill="#ffffff" r="6.40282"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.125s"></animate></circle><circle cx="67.678" cy="32.322" fill="#ffffff" r="7.99718"><animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate></circle></svg>\` </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
