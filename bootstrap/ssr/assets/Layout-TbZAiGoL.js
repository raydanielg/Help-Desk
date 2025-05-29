import { I as Icon, D as Dropdown } from "./Dropdown-CRPxtfzU.js";
import { _ as _export_sfc, L as Logo, F as FlashMessages } from "./FlashMessages-BlPv0OK4.js";
import { Link } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import moment from "moment";
import axios from "axios";
const _sfc_main$3 = {
  components: {
    Logo,
    Icon,
    Dropdown,
    Link
  },
  data() {
    return {
      active_menu: "home",
      enable_option: {}
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
    toggleMenu() {
      document.getElementById("isToggle").classList.toggle("open");
      var isOpen = document.getElementById("navigation");
      if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
      } else {
        isOpen.style.display = "block";
      }
    },
    windowScroll() {
      const navbar = document.getElementById("topnav");
      if (navbar != null) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    }
  },
  mounted() {
    this.active_menu = this.$page.url.substr(1) || "home";
  },
  created() {
    if (this.$page.props.enable_options) {
      let options = JSON.parse(this.$page.props.enable_options.value);
      options.forEach((option) => {
        this.enable_option[option.slug] = !!option.value;
      });
    }
    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      this.windowScroll();
    });
    window.onload = function() {
      const navbarToggler = document.getElementById("navbarToggler");
      const navbarCollapse = document.getElementById("navbarCollapse");
      navbarToggler.onclick = function() {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
      };
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_icon = resolveComponent("icon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "topnav",
    class: "ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
  }, _attrs))}><div id="dropdown"></div><div class="container"><div class="relative -mx-4 flex items-center justify-between"><div class="w-60 max-w-full px-4">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "logo pl-0 mt-2 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, { class: "help-desk-logo" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_logo, {
          name: "white",
          class: "help-desk-logo white"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, { class: "help-desk-logo" }),
          createVNode(_component_logo, {
            name: "white",
            class: "help-desk-logo white"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex w-full items-center justify-between px-4"><div><button id="navbarToggler" class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary lg:hidden"><span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span><span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span><span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span></button><nav id="navbarCollapse" class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"><ul class="blcok lg:flex"><li class="${ssrRenderClass([{ "active": $data.active_menu === "home" }, "group relative"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li>`);
  if (!!this.enable_option && this.enable_option.service) {
    _push(`<li class="${ssrRenderClass([{ "active": $data.active_menu === "services" }, "group relative"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("services"),
      class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Services"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Services")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.kb) {
    _push(`<li class="${ssrRenderClass([{ "active": $data.active_menu === "kb" }, "group relative"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("kb"),
      class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Knowledge"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Knowledge")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.faq) {
    _push(`<li class="${ssrRenderClass([{ "active": $data.active_menu === "faq" }, "group relative"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("faq"),
      class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("FAQs"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("FAQs")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.blog) {
    _push(`<li class="${ssrRenderClass([{ "active": $data.active_menu === "blog" }, "group relative"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("blog"),
      class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Blog"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Blog")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.contact) {
    _push(`<li class="${ssrRenderClass([{ "active": $data.active_menu === "contact" }, "group relative"])}">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("contact"),
      class: "ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Contact"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Contact")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></nav></div>`);
  if (_ctx.$page.props.auth && _ctx.$page.props.auth.user) {
    _push(`<div class="justify-end pr-16 flex lg:pr-0"><div class="dd__wrapper">`);
    _push(ssrRenderComponent(_component_dropdown, {
      class: "mt-1 select_user",
      placement: "bottom-end"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex items-center cursor-pointer group"${_scopeId}><div class="mr-1 whitespace-nowrap text-white"${_scopeId}>`);
          if (_ctx.$page.props.auth.user.photo) {
            _push2(`<img class="user_photo w-8 h-8"${ssrRenderAttr("alt", _ctx.$page.props.auth.user.first_name)}${ssrRenderAttr("src", _ctx.$page.props.auth.user.photo)}${_scopeId}>`);
          } else {
            _push2(`<img src="/images/svg/profile.svg" class="w-8 h-8" alt="user profile"${_scopeId}>`);
          }
          _push2(`<span class="hidden"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</span><span class="hidden"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.last_name)}</span></div>`);
          _push2(ssrRenderComponent(_component_icon, {
            class: "w-5 h-5 drop-down-caret-icon",
            name: "cheveron-down"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "flex items-center cursor-pointer group" }, [
              createVNode("div", { class: "mr-1 whitespace-nowrap text-white" }, [
                _ctx.$page.props.auth.user.photo ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "user_photo w-8 h-8",
                  alt: _ctx.$page.props.auth.user.first_name,
                  src: _ctx.$page.props.auth.user.photo
                }, null, 8, ["alt", "src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: "/images/svg/profile.svg",
                  class: "w-8 h-8",
                  alt: "user profile"
                })),
                createVNode("span", { class: "hidden" }, toDisplayString(_ctx.$page.props.auth.user.first_name), 1),
                createVNode("span", { class: "hidden" }, toDisplayString(_ctx.$page.props.auth.user.last_name), 1)
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
            href: _ctx.route("dashboard")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("Dashboard"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Dashboard")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_Link, {
            class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white",
            href: _ctx.route("tickets")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$t("Tickets"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Tickets")), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
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
                href: _ctx.route("dashboard")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Dashboard")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_Link, {
                class: "block px-6 py-2 hover:bg-indigo-500 hover:text-white",
                href: _ctx.route("tickets")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Tickets")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
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
    _push(`</div></div>`);
  } else {
    _push(`<div class="hidden justify-end pr-16 sm:flex lg:pr-0"><a${ssrRenderAttr("href", _ctx.route("login"))} class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">${ssrInterpolate(_ctx.$t("Login"))}</a></div>`);
  }
  _push(`</div></div></div></nav>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Landing/TopNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TopNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    Logo,
    LoadingButton,
    Link,
    Icon
  },
  props: {
    footer: Object
  },
  data() {
    return {
      footer_content: this.footer ? JSON.parse(this.footer.html) : [],
      footer_text: this.footer ? JSON.parse(this.footer.html).text : "Start working with HelpDesk that can provide everything you need to generate awareness, drive traffic, connect.",
      form: this.$inertia.form({
        email: ""
      }),
      enable_option: {}
    };
  },
  methods: {
    subscribe() {
      this.form.post(this.route("subscribe.news"));
      this.form.email = "";
    }
  },
  created() {
    if (this.$page.props.enable_options) {
      let options = JSON.parse(this.$page.props.enable_options.value);
      options.forEach((option) => {
        this.enable_option[option.slug] = !!option.value;
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_icon = resolveComponent("icon");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "wow fadeInUp relative z-10 bg-footer-black pt-20 lg:pt-[80px]",
    "data-wow-delay": ".15s"
  }, _attrs))}><div class="container"><div class="-mx-4 flex flex-wrap"><div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12"><div class="mb-10 w-full">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "mb-6 inline-block max-w-[160px]"
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
  _push(`<p class="mb-7 text-base text-[#f3f4fe]">${_ctx.$t($data.footer_text) ?? ""}</p></div></div><div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12"><div class="mb-10 w-full"><h4 class="mb-9 text-lg font-semibold text-white">${ssrInterpolate(_ctx.$t("Company"))}</h4><ul>`);
  if (!!this.enable_option && this.enable_option.show_login) {
    _push(`<li><a${ssrRenderAttr("href", _ctx.route("login"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Login"))}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.show_login) {
    _push(`<li><a${ssrRenderAttr("href", _ctx.route("register"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Register"))}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (!!this.enable_option && this.enable_option.blog) {
    _push(`<li><a${ssrRenderAttr("href", _ctx.route("blog"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Blog"))}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div></div><div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12"><div class="mb-10 w-full"><h4 class="mb-9 text-lg font-semibold text-white">${ssrInterpolate(_ctx.$t("Useful Links"))}</h4><ul><li><a${ssrRenderAttr("href", _ctx.route("terms_service"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Terms of Services"))}</a></li><li><a${ssrRenderAttr("href", _ctx.route("privacy"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Privacy Policy"))}</a></li>`);
  if (!!this.enable_option && this.enable_option.kb) {
    _push(`<li><a${ssrRenderAttr("href", _ctx.route("kb"))} class="mb-2 inline-block text-base leading-loose text-[#f3f4fe] hover:text-primary">${ssrInterpolate(_ctx.$t("Knowledge Base"))}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div></div><div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12"><div class="mb-10 w-full"><h4 class="mb-9 text-lg font-semibold text-white">${ssrInterpolate(_ctx.$t("Newsletter"))}</h4><p class="mt-5 text-white">${ssrInterpolate(_ctx.$t("Join our newsletter service."))}</p><form><div class="grid grid-cols-1"><div class="foot-subscribe my-3"><label class="form-label text-white">${ssrInterpolate(_ctx.$t("Your email address"))} <span class="text-red-600">*</span></label><div class="form-icon relative mt-2 text-white">`);
  _push(ssrRenderComponent(_component_icon, {
    class: "w-4 absolute top-3 left-4 z-1 fill-gray-800",
    name: "send_plan"
  }, null, _parent));
  _push(`<input type="email"${ssrRenderAttr("value", $data.form.email)} class="form-input bg-gray-800 border border-white pl-12 focus:shadow-none" placeholder="Email" name="email" required=""></div></div>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "rounded-lg bg-primary py-3 px-6 text-base font-medium justify-center text-white duration-300 ease-in-out hover:bg-opacity-80",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Submit"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Submit")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div><div class="mt-12 border-t border-opacity-40 py-8 lg:mt-[60px]"><div class="container"><div class="-mx-4 flex flex-wrap justify-center"><div class="my-1 flex justify-center"><p class="text-base text-center text-[#f3f4fe]">${_ctx.$t($data.footer_content.copyright) ?? ""}</p></div></div></div></div><div><span class="absolute left-0 top-0 z-[-1]"><img src="/landing/images/footer/shape-1.svg" alt=""></span><span class="absolute bottom-0 right-0 z-[-1]"><img src="/landing/images/footer/shape-3.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/footer/shape-2.svg" alt=""></span></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Landing/FooterSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-1/4 -right-1 z-3" }, _attrs))}><span class="relative inline-block rotate-90"><input type="checkbox" class="checkbox opacity-0 absolute" id="chk"><label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk"><i class="uil uil-moon text-[20px] text-yellow-500"></i><i class="uil uil-sun text-[20px] text-yellow-500"></i><span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span></label></span></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Landing/Switcher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Switcher = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Icon,
    Logo,
    Link,
    TopNav,
    FooterSection,
    Switcher,
    FlashMessages
  },
  props: {
    title: String,
    footer: Object
  },
  data() {
    return {
      current_mode: "light",
      current_dir: "ltr",
      current_chat: null,
      open_chat: false,
      unread_count: 0,
      chat_id: 0,
      contact_id: 0,
      message: null,
      enable_option: { color_picker: false },
      init_user: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },
  mounted() {
    if (localStorage.getItem("chat_id")) {
      this.chat_id = localStorage.getItem("chat_id");
      this.contact_id = localStorage.getItem("contact_id");
      axios.get(this.route("chat.conversation", { id: this.chat_id, contact_id: this.contact_id })).then((res) => {
        if (res.data && Object.keys(res.data).length) {
          this.current_chat = res.data;
          this.watchMessage();
        }
      });
    }
  },
  methods: {
    toggleChat() {
      this.open_chat = !this.open_chat;
    },
    startChat() {
      if (!!this.init_user.email && !!this.init_user.firstName && !!this.init_user.lastName) {
        axios.post(this.route("chat.init"), this.init_user).then((response) => {
          if (!!response.data && !!response.data.contact_id) {
            this.current_chat = response.data;
            this.chat_id = this.current_chat.id;
            this.contact_id = this.current_chat.contact_id;
            localStorage.setItem("chat_id", this.chat_id);
            localStorage.setItem("contact_id", this.contact_id);
            this.watchMessage();
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    sendMessage() {
      var vm = this;
      const messageData = {
        message: this.message,
        contact_id: this.current_chat.contact_id,
        conversation_id: this.current_chat.id
      };
      this.message = "";
      axios.post(this.route("chat.send_message"), messageData).then((response) => {
        if (response.data) {
          vm.current_chat.messages.push(response.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    watchMessage() {
      var vm = this;
      if (window.Echo) {
        window.Echo.channel(`chat.${vm.chat_id}`).listen("NewPublicChatMessage", function(e) {
          console.log(e);
          if (typeof e.chatMessage === "object") {
            vm.current_chat.messages.push(e.chatMessage);
          }
        });
      }
    },
    scrollFunction() {
      const mybutton = document.getElementById("back-to-top");
      if (mybutton != null) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          mybutton.classList.add("block");
          mybutton.classList.remove("hidden");
        } else {
          mybutton.classList.add("hidden");
          mybutton.classList.remove("block");
        }
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    switchMode() {
      this.current_mode = this.current_mode === "light" ? "dark" : "light";
      localStorage.setItem("current_mode", this.current_mode);
      this.changeTheme();
    },
    changeTheme() {
      const htmlTag = document.getElementsByTagName("html")[0];
      htmlTag.className = this.current_mode;
    },
    changeDir() {
      const htmlTag = document.getElementsByTagName("html")[0];
      htmlTag.dir = this.current_dir;
    },
    actionColorScheme(e) {
      e.preventDefault();
      const that = e.currentTarget;
      const dataExpend = that.getAttribute("data-expend");
      if (dataExpend !== "yes") {
        that.setAttribute("style", "right:-10px !important");
        that.setAttribute("data-expend", "yes");
      } else {
        that.setAttribute("style", "right:-154px !important");
        that.setAttribute("data-expend", "no");
      }
    },
    setColorScheme(e) {
      e.preventDefault();
      const color = e.currentTarget.getAttribute("data-scheme");
      const colors = ["scheme-indigo", "scheme-orange", "scheme-amber", "scheme-yellow", "scheme-lime", "scheme-green", "scheme-cyan", "scheme-sky", "scheme-violet", "scheme-purple", "scheme-fuchsia", "scheme-pink", "scheme-rose"];
      document.getElementsByTagName("body")[0].classList.remove(...colors);
      document.getElementsByTagName("body")[0].classList.add(color);
      localStorage.setItem("scheme", color);
    },
    setColorSchemeFromStorage() {
      if (!!localStorage.getItem("scheme")) {
        const colors = ["scheme-indigo", "scheme-orange", "scheme-amber", "scheme-yellow", "scheme-lime", "scheme-green", "scheme-cyan", "scheme-sky", "scheme-violet", "scheme-purple", "scheme-fuchsia", "scheme-pink", "scheme-rose"];
        document.getElementsByTagName("body")[0].classList.remove(...colors);
        document.getElementsByTagName("body")[0].classList.add(localStorage.getItem("scheme"));
      }
    }
  },
  updated() {
    this.setColorSchemeFromStorage();
  },
  created() {
    this.setColorSchemeFromStorage();
    this.moment = moment;
    const vm = this;
    window.onscroll = function() {
      vm.scrollFunction();
    };
    if (localStorage.getItem("current_dir")) {
      this.current_dir = localStorage.getItem("current_dir");
      this.changeDir();
    }
    if (this.$page.props.enable_options) {
      let options = JSON.parse(this.$page.props.enable_options.value);
      options.forEach((option) => {
        this.enable_option[option.slug] = !!option.value;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_top_nav = resolveComponent("top-nav");
  const _component_flash_messages = resolveComponent("flash-messages");
  const _component_footer_section = resolveComponent("footer-section");
  const _component_Logo = resolveComponent("Logo");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["text-base text-black dark:text-white dark:bg-slate-900 layout_landing", $data.current_mode],
    dir: _ctx.$page.props.dir
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_top_nav, null, null, _parent));
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_footer_section, { footer: $props.footer }, null, _parent));
  _push(`<a id="back-to-top" href="javascript:void(0)" class="back-to-top flex fixed hidden bottom-5 right-5 left-auto z-[999] h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"><span class="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span></a>`);
  if (!!this.enable_option && this.enable_option.chat) {
    _push(`<div class="chat_public">`);
    if (!!$data.open_chat && !!$data.current_chat) {
      _push(`<div class="chat__box"><div class="flex justify-center items-center"><div class="w-80 h-96 bg-white rounded shadow-2xl"><nav class="w-full bg-gray-900 rounded-tr rounded-tl flex justify-between items-center"><div class="flex justify-center items-center w-full">`);
      _push(ssrRenderComponent(_component_Logo, {
        class: "block h-10 fill-white",
        height: "40"
      }, null, _parent));
      _push(`</div><div class="flex items-center"><i class="mdi mdi-video text-gray-300 mr-4"></i> <i class="mdi mdi-phone text-gray-300 mr-2"></i> <i class="mdi mdi-dots-vertical text-gray-300 mr-2"></i></div></nav><div class="overflow-auto px-1 py-1 reverse__order" style="${ssrRenderStyle({ "height": "19rem" })}" id="journal-scroll">`);
      if ($data.current_chat.messages && $data.current_chat.messages.length) {
        _push(`<!--[-->`);
        ssrRenderList($data.current_chat.messages.slice().reverse(), (message, index) => {
          _push(`<div class="${ssrRenderClass([{ "pt-3 pl-10 justify-end": !!message.contact_id }, "flex items-end pr-4 mt-4"])}">`);
          if (message.user_id && $data.current_chat.participant.user) {
            _push(`<img src="/images/svg/profile.svg" class="rounded-full shadow-xl object-cover w-12 h-12">`);
          } else {
            _push(`<!---->`);
          }
          if (message.contact_id) {
            _push(`<span class="text-gray-400 pr-1 f-time pb-1">${ssrInterpolate(_ctx.moment(message.updated_at).format("h:mma"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="${ssrRenderClass([{ "ml-1 bg-gray-900 dark:bg-slate-800": !!message.user_id, "bg-green-900": !!message.contact_id }, "flex h-auto text-gray-200 text-md font-normal rounded-sm px-1 p-1 items-end agent_text ckc"])}">${message.message ?? ""}</div>`);
          if (message.user_id) {
            _push(`<span class="text-gray-400 pl-1 f-time pb-1">${ssrInterpolate(_ctx.moment(message.updated_at).format("h:mma"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between items-center p-1 bg-white chat_b_footer"><div class="relative t__area"><input${ssrRenderAttr("value", $data.message)} type="text" class="pl-3 pr-3 py-2 focus:outline-none h-12 border-gray-100" placeholder="Type and press [enter].." id="typemsg"><i class="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i></div><div class="w-8 h-8 rounded-full text-center items-center flex justify-center"><button class="w-8 h-8 rounded-full text-center items-center flex justify-center focus:outline-none bg-gray-700 text-white p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.07 169.78" fill="currentcolor"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="0 0 0 69.91 142.84 84.89 0 99.88 0 169.78 252.07 84.89 0 0"></polygon></g></g></svg></button></div></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (!!$data.open_chat && !$data.current_chat) {
      _push(`<div class="init_chat"><div class="flex justify-center items-center"><div class="w-80 h-auto bg-white rounded shadow-2xl"><nav class="w-full bg-gray-900 rounded-t flex flex-col items-center pt-3">`);
      _push(ssrRenderComponent(_component_Logo, {
        class: "block mx-auto max-w-xs fill-white",
        height: "40"
      }, null, _parent));
      _push(`<p class="text-md font-medium text-gray-300 text-center p-3 mb-3 t_h_text">Let us know who you are, and let&#39;s get talking.</p></nav><div class="overflow-auto"><div class="flex items-center"><div class="w-full"><form class="bg-white rounded px-8 pt-6 pb-8"><div class="flex justify-center mb-4"><div class="flex flex-col pr-2"><label class="block text-gray-700 text-xs font-bold mb-2" for="firstName">${ssrInterpolate(_ctx.$t("First name"))}</label><input${ssrRenderAttr("value", $data.init_user.firstName)} class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="firstName" type="text"${ssrRenderAttr("placeholder", _ctx.$t("First name"))}></div><div class="flex flex-col pl-2"><label class="block text-gray-700 text-xs font-bold mb-2" for="lastName">${ssrInterpolate(_ctx.$t("Last name"))}</label><input${ssrRenderAttr("value", $data.init_user.lastName)} class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="lastName" type="text"${ssrRenderAttr("placeholder", _ctx.$t("Last name"))}></div></div><div class="mb-6"><label class="block text-gray-700 text-xs font-bold mb-2" for="emailAddress">${ssrInterpolate(_ctx.$t("Email Address"))}</label><input${ssrRenderAttr("value", $data.init_user.email)} class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="emailAddress" type="text"${ssrRenderAttr("placeholder", _ctx.$t("Email address"))}></div><div class="flex items-center"><button class="flex text-gray-300 bg-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn_start_chat" type="button">${ssrInterpolate(_ctx.$t("Start Chat"))}</button></div></form></div></div></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<button class="chat_bubble">`);
    if ($data.unread_count) {
      _push(`<span class="notification_badge">1</span>`);
    } else {
      _push(`<!---->`);
    }
    if (!$data.open_chat) {
      _push(`<span class="chat__icn hover:scale-125 duration-300"><img src="/images/svg/chat-logo-v2.svg" alt="Live Chat"></span>`);
    } else {
      _push(`<!---->`);
    }
    if (!!$data.open_chat) {
      _push(`<span class="chat__close hover:scale-125 duration-300"><img src="/images/svg/close.svg" alt="Close Chat"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="bottom_text">Let&#39;s talk</span></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="disabled_button"></span>`);
  if (!!this.enable_option && this.enable_option.color_picker) {
    _push(`<div id="color-switcher" data-expend="no" class="ease-in duration-300 shadow-sm fixed z-[999] top-[40%] right-[-154px] py-3 px-4 bg-white"><div class="shadow-sm absolute rounded-l-lg top-0 left-[-40px] w-10 h-10 bg-[#64748b] flex justify-center items-center scheme-button cursor-pointer">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-5 w-5 z-1 fill-white text-[24px]",
      name: "gear"
    }, null, _parent));
    _push(`</div><h4 class="text-lg pb-1 border-b font-normal dark:text-black">Color Scheme</h4><div class="pt-3 grid grid-cols-4 gap-x-1 gap-y-2"><div class="s_switch w-6 h-6 rounded-full bg-[#4f46e5] cursor-pointer border border-transparent hover:border-indigo-600" data-scheme="scheme-indigo"></div><div class="s_switch w-6 h-6 rounded-full bg-[#ea580c] cursor-pointer border border-transparent" data-scheme="scheme-orange"></div><div class="s_switch w-6 h-6 rounded-full bg-[#d97706] cursor-pointer border border-transparent" data-scheme="scheme-amber"></div><div class="s_switch w-6 h-6 rounded-full bg-[#ca8a04] cursor-pointer border border-transparent" data-scheme="scheme-yellow"></div><div class="s_switch w-6 h-6 rounded-full bg-[#65a30d] cursor-pointer border border-transparent" data-scheme="scheme-lime"></div><div class="s_switch w-6 h-6 rounded-full bg-[#0891b2] cursor-pointer border border-transparent" data-scheme="scheme-cyan"></div><div class="s_switch w-6 h-6 rounded-full bg-[#0284c7] cursor-pointer border border-transparent" data-scheme="scheme-sky"></div><div class="s_switch w-6 h-6 rounded-full bg-[#7c3aed] cursor-pointer border border-transparent" data-scheme="scheme-violet"></div><div class="s_switch w-6 h-6 rounded-full bg-[#9333ea] cursor-pointer border border-transparent" data-scheme="scheme-purple"></div><div class="s_switch w-6 h-6 rounded-full bg-[#c026d3] cursor-pointer border border-transparent" data-scheme="scheme-fuchsia"></div><div class="s_switch w-6 h-6 rounded-full bg-[#db2777] cursor-pointer border border-transparent" data-scheme="scheme-pink"></div><div class="s_switch w-6 h-6 rounded-full bg-[#e11d48] cursor-pointer border border-transparent" data-scheme="scheme-rose"></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Landing/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L
};
