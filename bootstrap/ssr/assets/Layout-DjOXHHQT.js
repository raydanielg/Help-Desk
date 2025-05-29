import { I as Icon, D as Dropdown } from "./Dropdown-CRPxtfzU.js";
import { _ as _export_sfc, F as FlashMessages, L as Logo } from "./FlashMessages-BlPv0OK4.js";
import { Link } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, mergeProps, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import moment from "moment";
import { getActiveLanguage, loadLanguageAsync } from "laravel-vue-i18n";
import axios from "axios";
const _sfc_main$1 = {
  components: {
    Icon,
    Link
  },
  data() {
    return {
      user: null,
      menu_items: [
        { "name": "Dashboard", "route": "dashboard", "url": "dashboard", "icon": "dashboard" },
        { "name": "Tickets", "route": "tickets", "url": "tickets", "icon": "ticket" }
      ],
      enable_option: {}
    };
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      currentUrl = currentUrl.replace("dashboard/", "");
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    },
    addActiveClass(e) {
      e.currentTarget.classList.toggle("hover");
    }
  },
  created() {
    this.user = this.$page.props.auth.user;
    const user_access = this.user.access;
    let enable_option = {};
    if (this.$page.props.enable_options) {
      let options = JSON.parse(this.$page.props.enable_options.value);
      options.forEach((option) => {
        enable_option[option.slug] = !!option.value;
      });
    }
    if (enable_option.chat && (user_access.chat.read || user_access.chat.update || user_access.chat.create || user_access.chat.delete)) {
      this.menu_items.push({ "name": "Chat", "route": "chat", "url": "chat", "icon": "chat" });
    }
    if (enable_option.faq && (user_access.faq.read || user_access.faq.update || user_access.faq.create || user_access.faq.delete)) {
      this.menu_items.push({ "name": "FAQs", "route": "faqs", "url": "faqs", "icon": "faq" });
    }
    if (enable_option.blog && (user_access.blog.read || user_access.blog.update || user_access.blog.create || user_access.blog.delete)) {
      this.menu_items.push({ "name": "Blog", "route": "posts", "url": "posts", "icon": "post" });
    }
    if (enable_option.kb && (user_access.knowledge_base.read || user_access.knowledge_base.update || user_access.knowledge_base.create || user_access.knowledge_base.delete)) {
      this.menu_items.push({ "name": "Knowledge Base", "route": "knowledge_base", "url": "knowledge_base", "icon": "knowledge" });
    }
    if (user_access.customer.read || user_access.customer.update || user_access.customer.create || user_access.customer.delete) {
      this.menu_items.push({ "name": "Customers", "route": "customers", "url": "customers", "icon": "all_users" });
    }
    if (enable_option.note) {
      this.menu_items.push({ "name": "Notes", "route": "notes", "url": "notes", "icon": "notes" });
    }
    if (enable_option.contact && (user_access.contact.read || user_access.contact.update || user_access.contact.create || user_access.contact.delete)) {
      this.menu_items.push({ "name": "Contacts", "route": "contacts", "url": "contacts", "icon": "contact" });
    }
    if (enable_option.organization && (user_access.organization.read || user_access.organization.update || user_access.organization.create || user_access.organization.delete)) {
      this.menu_items.push({ "name": "Organizations", "route": "organizations", "url": "organizations", "icon": "office" });
    }
    if (user_access.user.read || user_access.user.update || user_access.user.create || user_access.user.delete) {
      this.menu_items.push({ "name": "Manage Users", "route": "users", "url": "users", "icon": "users" });
    }
    const settingSubmenus = [];
    if (this.user.role.slug === "admin") {
      settingSubmenus.push({ "name": "User Roles", "route": "roles", "url": "settings/roles", "icon": "user_role" });
    }
    if (user_access.global.read || user_access.global.update || user_access.global.create || user_access.global.delete) {
      settingSubmenus.push({ "name": "Global", "route": "global", "url": "settings/global", "icon": "global_setting" });
    }
    if (user_access.global.read || user_access.global.update || user_access.global.create || user_access.global.delete) {
      settingSubmenus.push({ "name": "Custom fields", "route": "tickets.builder", "url": "settings/custom-form", "icon": "form-builder" });
    }
    if (user_access.department.read || user_access.department.update || user_access.department.create || user_access.department.delete) {
      settingSubmenus.push({ "name": "Departments", "route": "departments", "url": "settings/departments", "icon": "departments" });
    }
    if (user_access.category.read || user_access.category.update || user_access.category.create || user_access.category.delete) {
      settingSubmenus.push({ "name": "Categories", "route": "categories", "url": "settings/categories", "icon": "category" });
    }
    if (user_access.status.read || user_access.status.update || user_access.status.create || user_access.status.delete) {
      settingSubmenus.push({ "name": "Status", "route": "statuses", "url": "settings/statuses", "icon": "status" });
    }
    if (user_access.priority.read || user_access.priority.update || user_access.priority.create || user_access.priority.delete) {
      settingSubmenus.push({ "name": "Priorities", "route": "priorities", "url": "settings/priorities", "icon": "priorities" });
    }
    if (user_access.type.read || user_access.type.update || user_access.type.create || user_access.type.delete) {
      settingSubmenus.push({ "name": "Types", "route": "types", "url": "settings/types", "icon": "types" });
    }
    if (user_access.language.read || user_access.language.update || user_access.language.create || user_access.language.delete) {
      settingSubmenus.push({ "name": "Languages", "route": "languages", "url": "settings/languages", "icon": "edit" });
    }
    if (user_access.email_template.read || user_access.email_template.update || user_access.email_template.create || user_access.email_template.delete) {
      settingSubmenus.push({ "name": "Email Templates", "route": "templates", "url": "settings/templates", "icon": "email" });
    }
    if (user_access.smtp.read || user_access.smtp.update || user_access.smtp.create || user_access.smtp.delete) {
      settingSubmenus.push({ "name": "SMTP Mail", "route": "settings.smtp", "url": "settings/smtp", "icon": "email_template" });
    }
    if (user_access.pusher.read || user_access.pusher.update || user_access.pusher.create || user_access.pusher.delete) {
      settingSubmenus.push({ "name": "Pusher Chat", "route": "settings.pusher", "url": "settings/pusher", "icon": "chat" });
    }
    if (this.user.role.slug === "admin") {
      settingSubmenus.push({ "name": "Email to ticket", "route": "settings.piping", "url": "settings/piping", "icon": "ticket" });
    }
    if (settingSubmenus.length) {
      this.menu_items.push({ "name": "Settings", "route": "", "url": "settings", "icon": "settings", "submenu": settingSubmenus });
    }
    if (user_access.front_page.read || user_access.front_page.update || user_access.front_page.create || user_access.front_page.delete) {
      this.menu_items.push(
        {
          "name": "Front Pages",
          "route": "",
          "url": "front_pages",
          "icon": "gear",
          "submenu": [
            { "name": "Home", "route": "front_pages.page", "url": "front_pages/home", "icon": "page", "param": "home" },
            { "name": "Contact", "route": "front_pages.page", "url": "front_pages/contact", "icon": "page", "param": "contact" },
            { "name": "Services", "route": "front_pages.page", "url": "front_pages/services", "icon": "page", "param": "services" },
            { "name": "Privacy Policy", "route": "front_pages.page", "url": "front_pages/privacy", "icon": "page", "param": "privacy" },
            { "name": "Terms of services", "route": "front_pages.page", "url": "front_pages/terms", "icon": "page", "param": "terms" },
            { "name": "Footer", "route": "front_pages.page", "url": "front_pages/footer", "icon": "page", "param": "footer" }
          ]
        }
      );
    }
    if (this.user.role.slug === "admin") {
      this.menu_items.push({ "name": "System Update", "route": "settings.update", "url": "settings/update", "icon": "archive" });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
  ssrRenderList($data.menu_items, (menu_item, m_index) => {
    _push(`<div class="${ssrRenderClass([$options.isUrl(menu_item.url) ? " active" : "", "menu-item"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      class: ["flex items-center group py-3 menu-link", { "have-sub-menu": menu_item.submenu }],
      href: menu_item.route ? _ctx.route(menu_item.route) : "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: menu_item.icon,
            class: "w-5 h-5 mr-3 rtl:ml-3 menu__icon"
          }, null, _parent2, _scopeId));
          _push2(`<div class="menu__name"${_scopeId}>${ssrInterpolate(_ctx.$t(menu_item.name))}</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: menu_item.icon,
              class: "w-5 h-5 mr-3 rtl:ml-3 menu__icon"
            }, null, 8, ["name"]),
            createVNode("div", { class: "menu__name" }, toDisplayString(_ctx.$t(menu_item.name)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    if (menu_item.submenu) {
      _push(`<div class="sub-menu-items"><!--[-->`);
      ssrRenderList(menu_item.submenu, (sub_menu_item, s_m_index) => {
        _push(ssrRenderComponent(_component_Link, {
          class: ["sub-menu-item", this.isUrl(sub_menu_item.url) ? " active" : ""],
          key: s_m_index,
          href: sub_menu_item.param ? _ctx.route(sub_menu_item.route, sub_menu_item.param) : _ctx.route(sub_menu_item.route)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (sub_menu_item.icon) {
                _push2(ssrRenderComponent(_component_icon, {
                  name: sub_menu_item.icon,
                  class: "w-4 h-4 mr-1 rtl:ml-1 menu__icon"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_icon, {
                  name: "dash",
                  class: "w-4 h-4 mr-1 rtl:mr-1 menu__icon"
                }, null, _parent2, _scopeId));
              }
              _push2(`<div class="menu__name"${_scopeId}>${ssrInterpolate(_ctx.$t(sub_menu_item.name))}</div>`);
            } else {
              return [
                sub_menu_item.icon ? (openBlock(), createBlock(_component_icon, {
                  key: 0,
                  name: sub_menu_item.icon,
                  class: "w-4 h-4 mr-1 rtl:ml-1 menu__icon"
                }, null, 8, ["name"])) : (openBlock(), createBlock(_component_icon, {
                  key: 1,
                  name: "dash",
                  class: "w-4 h-4 mr-1 rtl:mr-1 menu__icon"
                })),
                createVNode("div", { class: "menu__name" }, toDisplayString(_ctx.$t(sub_menu_item.name)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/MainMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Dropdown,
    FlashMessages,
    Icon,
    Logo,
    Link,
    MainMenu
  },
  props: {
    title: String
  },
  data() {
    return {
      time: "",
      current_mode: "light",
      modes: ["dark", "light"],
      edit_route: "",
      locale: this.$page.props.auth.user.locale || this.$page.props.settings.default_language
    };
  },
  computed: {
    selected_language() {
      return this.$page.props.languages.find((language) => language.code === this.$page.props.locale);
    },
    languages_except_selected() {
      return this.$page.props.languages.filter((language) => language.code !== this.$page.props.locale);
    }
  },
  methods: {
    updateLanguage(code) {
      axios.post(this.route("language", code), {}).then((response) => {
        if (response.data) {
          window.location.reload();
        }
      });
    },
    generateGreetings() {
      const currentHour = this.moment().format("HH");
      if (currentHour >= 3 && currentHour < 12) {
        return "Good Morning";
      } else if (currentHour >= 12 && currentHour < 15) {
        return "Good Noon";
      } else if (currentHour >= 15 && currentHour < 18) {
        return "Good Afternoon";
      } else if (currentHour >= 18 && currentHour < 20) {
        return "Good Evening";
      } else {
        return "Hello";
      }
    },
    switchMode() {
      this.current_mode = this.current_mode === "light" ? "dark" : "light";
      localStorage.setItem("current_mode", this.current_mode);
    },
    detectCurrentUrl() {
      const url = this.$page.url;
      const splitUrl = url.split("/");
      let editString = ["edit", "create"].includes(url.substring(url.lastIndexOf("/") + 1));
      if (!editString) {
        editString = splitUrl[splitUrl.length - 2] === "tickets";
      }
      let editRoute = url.split("/")[2];
      if (["settings", "front_pages"].includes(editRoute)) {
        editRoute = url.split("/")[3];
      }
      this.edit_route = editString ? editRoute : "";
    }
  },
  updated() {
    this.detectCurrentUrl();
  },
  created() {
    console.log("hello");
    this.moment = moment;
    let vm = this;
    if (localStorage.getItem("current_mode")) {
      this.current_mode = localStorage.getItem("current_mode");
    }
    vm.time = vm.moment().format("MMMM Do YYYY, h:mm A");
    window.setInterval(function() {
      vm.time = vm.moment().format("MMMM Do YYYY, h:mm A");
    }, 1e3);
    this.detectCurrentUrl();
    console.log(this.locale, getActiveLanguage());
    if (getActiveLanguage() !== this.locale) {
      console.log(this.locale);
      loadLanguageAsync(this.locale);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["layout-app", $data.current_mode],
    dir: _ctx.$page.props.dir
  }, _attrs))}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:h-screen md:flex md:flex-col"><div class="md:flex md:shrink-0"><div class="md:shrink-0 md:py-2 md:w-60 flex items-center justify-between md:justify-center sidebar-left-top">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, { class: "help-desk-logo" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, { class: "help-desk-logo" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    className: "small-menu",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 mobile-menu-selector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 mobile-menu-selector",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-8 py-4 bg-hd-sidebar rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, { auth: _ctx.auth }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 px-8 py-4 bg-hd-sidebar rounded shadow-lg" }, [
            createVNode(_component_main_menu, { auth: _ctx.auth }, null, 8, ["auth"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white w-full p-4 md:py-2 md:pr-12 md:pl-8 text-sm flex justify-first items-center top_bar"><div class="placement-top-left"><div class="mt-1 welcome_text">${ssrInterpolate(_ctx.$t($options.generateGreetings()))} <span>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}!</span></div><div class="display-time"><span class="time">${ssrInterpolate($data.time)}</span></div></div><div class="placement-top-right">`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1 rtl:ml-2 language_menu_wrapper",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer group language_menu"${_scopeId}><div class="font-bold mr-1 rtl:mr-0 whitespace-nowrap w-[7rem]"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5",
          name: $options.selected_language.code
        }, null, _parent2, _scopeId));
        _push2(` <span class="rtl:mr-[6px]"${_scopeId}>${ssrInterpolate($options.selected_language.name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 drop-down-caret-icon",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer group language_menu" }, [
            createVNode("div", { class: "font-bold mr-1 rtl:mr-0 whitespace-nowrap w-[7rem]" }, [
              createVNode(_component_icon, {
                class: "w-5 h-5",
                name: $options.selected_language.code
              }, null, 8, ["name"]),
              createTextVNode(),
              createVNode("span", { class: "rtl:mr-[6px]" }, toDisplayString($options.selected_language.name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 drop-down-caret-icon",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-0 shadow-xl rounded text-sm language_menu_list"${_scopeId}><!--[-->`);
        ssrRenderList($options.languages_except_selected, (language) => {
          _push2(`<div class="flex gap-2 cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_icon, {
            class: "w-5 h-5",
            name: language.code
          }, null, _parent2, _scopeId));
          _push2(` <span class="lang_name rtl:mr-[6px]"${_scopeId}>${ssrInterpolate(language.name)}</span></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "py-0 shadow-xl rounded text-sm language_menu_list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($options.languages_except_selected, (language) => {
              return openBlock(), createBlock("div", {
                key: language.code,
                class: "flex gap-2 cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white",
                onClick: ($event) => $options.updateLanguage(language.code)
              }, [
                createVNode(_component_icon, {
                  class: "w-5 h-5",
                  name: language.code
                }, null, 8, ["name"]),
                createTextVNode(),
                createVNode("span", { class: "lang_name rtl:mr-[6px]" }, toDisplayString(language.name), 1)
              ], 8, ["onClick"]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1 select_user",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer group"${_scopeId}><div class="mr-1 whitespace-nowrap"${_scopeId}>`);
        if (_ctx.$page.props.auth.user.photo) {
          _push2(`<img class="user_photo"${ssrRenderAttr("alt", _ctx.$page.props.auth.user.first_name)}${ssrRenderAttr("src", _ctx.$page.props.auth.user.photo)}${_scopeId}>`);
        } else {
          _push2(`<img src="/images/svg/profile.svg" class="w-5 h-5" alt="user profile"${_scopeId}>`);
        }
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 drop-down-caret-icon",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer group" }, [
            createVNode("div", { class: "mr-1 whitespace-nowrap" }, [
              _ctx.$page.props.auth.user.photo ? (openBlock(), createBlock("img", {
                key: 0,
                class: "user_photo",
                alt: _ctx.$page.props.auth.user.first_name,
                src: _ctx.$page.props.auth.user.photo
              }, null, 8, ["alt", "src"])) : (openBlock(), createBlock("img", {
                key: 1,
                src: "/images/svg/profile.svg",
                class: "w-5 h-5",
                alt: "user profile"
              })),
              createVNode("span", null, toDisplayString(_ctx.$page.props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, toDisplayString(_ctx.$page.props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 drop-down-caret-icon",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="shadow-xl bg-white rounded text-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white",
          href: _ctx.route("users.edit.profile")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("Edit Profile"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Edit Profile")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white w-full text-left",
          href: _ctx.route("logout"),
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("Logout"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Logout")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "shadow-xl bg-white rounded text-sm" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white",
              href: _ctx.route("users.edit.profile")
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Edit Profile")), 1)
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white w-full text-left",
              href: _ctx.route("logout"),
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("Logout")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="md:flex md:flex-grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden md:block sidebar shrink-0 md:w-60 overflow-y-auto" }, null, _parent));
  _push(`<div class="md:flex-1 md:overflow-y-auto" scroll-region><div class="container-head"><div class="ch-left"><h1 class="page-title">${ssrInterpolate(_ctx.$t($props.title))}</h1><div class="breadcrumb text-sm">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("dashboard")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-3 h-3",
          name: "home"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_icon, {
            class: "w-3 h-3",
            name: "home"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="b-item">/</span>`);
  if ($data.edit_route) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route($data.edit_route),
      class: "capitalize"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($data.edit_route)}`);
        } else {
          return [
            createTextVNode(toDisplayString($data.edit_route), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.edit_route) {
    _push(`<span class="b-item">/</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="b-item">${ssrInterpolate(_ctx.$t($props.title))}</span></div></div><div class="ch-right cursor-pointer"><button class="theme-toggle" id="theme-toggle" title="Toggles light &amp; dark"${ssrRenderAttr("aria-label", $data.current_mode)} aria-live="polite"><svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><mask class="moon" id="moon-mask"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle cx="24" cy="10" r="6" fill="black"></circle></mask><circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle><g class="sun-beams" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g></svg></button></div></div>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  _push(`<div class="sec-cont">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L
};
