import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import pickBy from "lodash/pickBy.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { S as SelectInputFilter } from "./SelectInputFilter-BWStuymG.js";
import moment from "moment";
import axios from "axios";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "laravel-vue-i18n";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Tickets" },
  components: {
    SearchInput,
    Icon,
    Link,
    Head,
    Pagination,
    SelectInputFilter,
    SelectInput
  },
  layout: Layout,
  props: {
    filters: Object,
    tickets: Object,
    assignees: Array,
    auth: Object,
    title: String,
    priorities: Array,
    statuses: Array,
    types: Array,
    categories: Array,
    departments: Array,
    hidden_fields: Object
  },
  remember: "form",
  data() {
    return {
      headers: [
        { name: "Key", value: "id", sort: true },
        { name: "Subject", value: "subject", sort: true },
        { name: "Priority", value: "priority_id", sort: true },
        { name: "Status", value: "status_id", sort: true },
        { name: "Date", value: "created_at", sort: true },
        { name: "Updated", value: "updated_at", sort: true }
      ],
      user_access: this.$page.props.auth.user.access,
      form: {
        search: this.filters.search,
        limit: this.filters.limit ?? 10,
        customer_id: this.filters.customer_id,
        field: this.filters.field,
        direction: this.filters.direction,
        priority_id: this.filters.priority_id ?? null,
        status_id: this.filters.status_id ?? null,
        type_id: this.filters.type_id ?? null,
        category_id: this.filters.category_id ?? null,
        department_id: this.filters.department_id ?? null
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("tickets"), pickBy(this.form), { replace: true, preserveState: true });
      }, 150)
    }
  },
  methods: {
    doFilter(e) {
      axios.get(this.route("filter.assignees", { search: e.target.value })).then((res) => {
        this.assignees.splice(0, this.assignees.length, ...res.data);
      });
    },
    sort(field) {
      this.form.field = field;
      this.form.direction = this.form.direction === "asc" ? "desc" : "asc";
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    uploadImportCSV(e) {
      if (e.target.files.length) {
        this.$inertia.form({ file: e.target.files[0] }).post(this.route("ticket.csv.import"));
      }
    }
  },
  created() {
    this.moment = moment;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_input = resolveComponent("search-input");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_select_input_filter = resolveComponent("select-input-filter");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="flex flex-col md:flex-row gap-3 mb-4 justify-between items-center ticket-filters"><div class="flex flex-col md:flex-row gap-2"><select class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"><option value="10"${ssrIncludeBooleanAttr(Array.isArray($data.form.limit) ? ssrLooseContain($data.form.limit, "10") : ssrLooseEqual($data.form.limit, "10")) ? " selected" : ""}>10</option><option value="25"${ssrIncludeBooleanAttr(Array.isArray($data.form.limit) ? ssrLooseContain($data.form.limit, "25") : ssrLooseEqual($data.form.limit, "25")) ? " selected" : ""}>25</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray($data.form.limit) ? ssrLooseContain($data.form.limit, "50") : ssrLooseEqual($data.form.limit, "50")) ? " selected" : ""}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray($data.form.limit) ? ssrLooseContain($data.form.limit, "100") : ssrLooseEqual($data.form.limit, "100")) ? " selected" : ""}>100</option></select><label for="importCSV" class="uppercase gap-[1px] cursor-pointer text-sm px-3 py-1 flex items-center justify-center"><img class="w-6 h-6" src="/images/svg/import-csv.svg" alt="Import CSV"><span>${ssrInterpolate(_ctx.$t("Import"))}</span><input class="hidden" id="importCSV" type="file"></label><a class="uppercase gap-[1px] cursor-pointer text-sm px-3 py-1 flex items-center justify-center" href="/dashboard/ticket/csv/export"><img class="w-6 h-6" src="/images/svg/export-csv.svg" alt="Export CSV"><span>${ssrInterpolate(_ctx.$t("Export"))}</span></a></div><div class="filter-add-new flex flex-col gap-3 md:flex-row items-center">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    placeholder: "Search by Key, Subject, Priority, Status, Assign to...",
    class: "w-full max-w-md search",
    onReset: $options.reset
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: this.route("tickets.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("New Ticket"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("New Ticket")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-3 mb-4 md:flex-row w-full items-center ticket-filters"><div class="mr-2 w-full">${ssrInterpolate(_ctx.$t("Filter Ticket By"))}:</div>`);
  if (!($props.hidden_fields && $props.hidden_fields.includes("ticket_type"))) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.type_id,
      "onUpdate:modelValue": ($event) => $data.form.type_id = $event,
      class: "mr-2 w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Type"))}</option><!--[-->`);
          ssrRenderList($props.types, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Type")), 1),
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
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("category"))) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.category_id,
      "onUpdate:modelValue": ($event) => $data.form.category_id = $event,
      class: "mr-2 w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Category"))}</option><!--[-->`);
          ssrRenderList($props.categories, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Category")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (s) => {
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
  } else {
    _push(`<!---->`);
  }
  if (!($props.hidden_fields && $props.hidden_fields.includes("department"))) {
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.department_id,
      "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
      class: "mr-2 w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Department"))}</option><!--[-->`);
          ssrRenderList($props.departments, (s) => {
            _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            createVNode("option", { value: null }, toDisplayString(_ctx.$t("Department")), 1),
            (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (s) => {
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
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.priority_id,
    "onUpdate:modelValue": ($event) => $data.form.priority_id = $event,
    class: "mr-2 w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Priority"))}</option><!--[-->`);
        ssrRenderList($props.priorities, (s) => {
          _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }, toDisplayString(_ctx.$t("Priority")), 1),
          (openBlock(true), createBlock(Fragment, null, renderList($props.priorities, (s) => {
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
    modelValue: $data.form.status_id,
    "onUpdate:modelValue": ($event) => $data.form.status_id = $event,
    class: "mr-2 w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}>${ssrInterpolate(_ctx.$t("Status"))}</option><!--[-->`);
        ssrRenderList($props.statuses, (s) => {
          _push2(`<option${ssrRenderAttr("value", s.id)}${_scopeId}>${ssrInterpolate(s.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }, toDisplayString(_ctx.$t("Status")), 1),
          (openBlock(true), createBlock(Fragment, null, renderList($props.statuses, (s) => {
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
  if (!($props.hidden_fields && $props.hidden_fields.includes("assigned_to")) && $data.user_access.ticket.update) {
    _push(ssrRenderComponent(_component_select_input_filter, {
      placeholder: _ctx.$t("Assign To"),
      onInput: $options.doFilter,
      onFocus: $options.doFilter,
      items: $props.assignees,
      modelValue: $data.form.assigned_to,
      "onUpdate:modelValue": ($event) => $data.form.assigned_to = $event,
      class: "w-full"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="min-w-full whitespace-nowrap ticket_list"><tbody><tr class="text-left font-bold"><!--[-->`);
  ssrRenderList($data.headers, (h, i) => {
    _push(`<th><span class="${ssrRenderClass({ "sort": h.sort, "active": $data.form.field === h.name }, $data.form.direction)}">${ssrInterpolate(_ctx.$t(h.name))} `);
    if (h.sort) {
      _push(`<span class="icons">`);
      _push(ssrRenderComponent(_component_icon, {
        class: ["fill-gray-300", { "fill-gray-800": $data.form.direction === "desc" && $data.form.field === h.value }],
        name: "up",
        onClick: ($event) => $options.sort(h.value)
      }, null, _parent));
      _push(ssrRenderComponent(_component_icon, {
        class: ["fill-gray-300", { "fill-gray-800": $data.form.direction === "asc" && $data.form.field === h.value }],
        name: "down",
        onClick: ($event) => $options.sort(h.value)
      }, null, _parent));
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</span></th>`);
  });
  _push(`<!--]--></tr><!--[-->`);
  ssrRenderList($props.tickets.data, (ticket) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` #${ssrInterpolate(ticket.uid)}`);
        } else {
          return [
            createTextVNode(" #" + toDisplayString(ticket.uid), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "s__details flex flex-col",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="subject_t"${_scopeId}>${ssrInterpolate(ticket.subject)}</span><span class="user__d flex text-xs items-center pt-1"${_scopeId}>`);
          if (ticket.user) {
            _push2(`<span class="user__n flex items-center pr-4" title="Client"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "user",
              class: "flex-shrink-0 h-3 fill-gray-400 pr-1"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(ticket.user)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          if (ticket.assigned_to) {
            _push2(`<span class="user__n flex items-center pr-4" title="Assignee"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "user-check",
              class: "flex-shrink-0 h-3 fill-gray-400 pr-1"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(ticket.assigned_to)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</span>`);
        } else {
          return [
            createVNode("span", { class: "subject_t" }, toDisplayString(ticket.subject), 1),
            createVNode("span", { class: "user__d flex text-xs items-center pt-1" }, [
              ticket.user ? (openBlock(), createBlock("span", {
                key: 0,
                class: "user__n flex items-center pr-4",
                title: "Client"
              }, [
                createVNode(_component_icon, {
                  name: "user",
                  class: "flex-shrink-0 h-3 fill-gray-400 pr-1"
                }),
                createTextVNode(" " + toDisplayString(ticket.user), 1)
              ])) : createCommentVNode("", true),
              ticket.assigned_to ? (openBlock(), createBlock("span", {
                key: 1,
                class: "user__n flex items-center pr-4",
                title: "Assignee"
              }, [
                createVNode(_component_icon, {
                  name: "user-check",
                  class: "flex-shrink-0 h-3 fill-gray-400 pr-1"
                }),
                createTextVNode(" " + toDisplayString(ticket.assigned_to), 1)
              ])) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(ticket.priority)}`);
        } else {
          return [
            createTextVNode(toDisplayString(ticket.priority), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(ticket.status)}`);
        } else {
          return [
            createTextVNode(toDisplayString(ticket.status), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("error") === "error" ? _ctx.moment(ticket.created_at).fromNow() : _ctx.moment(ticket.created_at).locale("zh-tw").fromNow())}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("error") === "error" ? _ctx.moment(ticket.created_at).fromNow() : _ctx.moment(ticket.created_at).locale("zh-tw").fromNow()), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("tickets.edit", ticket.uid || ticket.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("error") === "error" ? _ctx.moment(ticket.updated_at).fromNow() : _ctx.moment(ticket.updated_at).locale("zh-tw").fromNow())}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("error") === "error" ? _ctx.moment(ticket.updated_at).fromNow() : _ctx.moment(ticket.updated_at).locale("zh-tw").fromNow()), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.tickets.data.length === 0) {
    _push(`<tr><td class="border-t px-6 py-4" colspan="9">${ssrInterpolate(_ctx.$t("No ticket found."))}</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-4",
    links: $props.tickets.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
