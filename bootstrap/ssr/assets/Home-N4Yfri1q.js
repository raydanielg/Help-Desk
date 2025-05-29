import { Link, Head } from "@inertiajs/vue3";
import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { T as TextInput } from "./TextInput-DD86V4Y6.js";
import { S as SelectInput } from "./SelectInput-D_jW4gfb.js";
import { L as LoadingButton } from "./LoadingButton-C_hDdjdK.js";
import { T as TextareaInput } from "./TextareaInput-CsKB0Ez_.js";
import axios from "axios";
import { resolveComponent, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "moment";
import "laravel-vue-i18n";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Home" },
  components: {
    Icon,
    Link,
    Head,
    Pagination,
    TextInput,
    SelectInput,
    LoadingButton,
    TextareaInput
  },
  layout: Layout,
  props: {
    page: Object
  },
  remember: "form",
  data() {
    return {
      icons: ["apple", "book", "cheveron-down", "cheveron-right", "location", "office", "shopping-cart", "store-front", "trash", "service", "category", "status", "ticket", "contact", "faq", "chat", "knowledge", "home", "clock", "settings", "dashboard", "edit", "up", "down", "tick", "cross", "close", "file", "users", "all_users", "types", "notes", "plus", "dash", "check", "post", "no_image", "to_up", "angle-up", "gear", "phone", "email", "user", "security", "airplay", "compass", "aperture", "camera", "palette", "login", "page", "send", "send_plan", "user_role", "global_setting", "image"],
      tabs: [
        { "name": "Section 1", "active": true },
        { "name": "Section 2", "active": false },
        { "name": "Section 3", "active": false }
      ],
      form: this.$inertia.form({
        title: "Home",
        slug: "home",
        is_active: this.page.is_active,
        html: JSON.parse(this.page.html)
        // html: {'sections' : [
        //         {'title': 'Make your working process easier with <span>HelpDesk</span>', 'details': 'It\'s much easier now to create, assign, manage and resolve tickets with HelpDesk. You just need to host this web application on any hosting server of your choice and use it.', buttons: [
        //                 { 'text': 'Login HelpDesk', 'link': '/login', 'new_tab': 'on' },
        //                 { 'text': 'Submit ticket', 'link': '/ticket/open', 'new_tab': 'on' },
        //             ],
        //             'image' : null
        //         },
        //         {'title': 'How It Work ?', 'details': 'You can create a ticket with logged-in on the Dashboard as an existing user or create a ticket as a new user from this front page.',
        //             'title_2': 'You can do following with this HelpDesk', 'details_2': 'Manage tickets\n' +
        //                 'Chat with customers\n' +
        //                 'Manage your marketing contacts and organizations\n' +
        //                 'Manage your blog posts', buttons: [
        //                 { 'text': 'Login HelpDesk', 'link': '/login', 'new_tab': 'on' },
        //             ],
        //             'image' : null },
        //         {'enable_ticket_section': true},
        //         {'title': 'Have Question ? Get in touch!', 'details': 'Start working with HelpDesk that can provide everything you need to generate awareness, drive traffic, connect.', buttons: [
        //                 { 'text': 'Contact us', 'link': '/contact', 'new_tab': 'on' },
        //             ]},
        //     ]}
      })
    };
  },
  methods: {
    update() {
      this.form.put(this.route("front_pages.update", "home"));
    },
    activeTab(index) {
      for (const tab_item of this.tabs) {
        tab_item.active = false;
      }
      this.tabs[index].active = true;
    },
    newButton(index) {
      if (this.form.html.sections[index] && this.form.html.sections[index].buttons) {
        this.form.html.sections[index].buttons.push({ "name": "", "icon": "", "details": "" });
      }
    },
    newFeature(index) {
      if (this.form.html.sections[index] && this.form.html.sections[index].features) {
        this.form.html.sections[index].features.push({ "icon": "", "title": "", "details": "" });
      }
    },
    removeButton(si, index) {
      if (this.form.html.sections[si] && this.form.html.sections[si].buttons) {
        this.form.html.sections[si].buttons.splice(index, 1);
      }
    },
    removeFeature(si, index) {
      if (this.form.html.sections[si] && this.form.html.sections[si].features) {
        this.form.html.sections[si].features.splice(index, 1);
      }
    },
    fileInputChange(e, index) {
      let selectedFiles = e.target.files;
      this.form.processing = true;
      if (selectedFiles.length) {
        let data = new FormData();
        data.append("image", selectedFiles[0]);
        axios.post(this.route("upload.image"), data).then((response) => {
          if (response.data && response.data.image) {
            this.form.html.sections[index].image = response.data.image;
            this.form.processing = false;
          } else {
            alert("something went wrong!");
            this.form.processing = false;
          }
        }).catch((error) => {
          this.form.processing = false;
          console.log(error);
        });
      }
    },
    fileRemove(index) {
      this.form.html.sections[index].image = null;
    },
    getFileSize(size) {
      const i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    fileBrowse(index) {
      this.$refs["section" + index + "image"].click();
    }
  },
  created() {
    this.form.html.sections.map((section, index) => {
      if (section.buttons && section.buttons.length) {
        for (let i = 0; i < section.buttons.length; i++) {
          section.buttons[i].new_tab = !!section.buttons[i].new_tab;
        }
      }
      section.enable_ticket_section = !!section.enable_ticket_section;
      section.login_require_create_ticket = !!section.login_require_create_ticket;
      return section;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_text_input = resolveComponent("text-input");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_icon = resolveComponent("icon");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Home" }, null, _parent));
  _push(`<div class="bg-white rounded-md shadow overflow-hidden mr-2"><form><div class="p-8 -mr-6 -mb-8 flex flex-wrap"><div class="w-full mx-auto"><div class="border-b border-gray-200 dark:border-gray-700 tab-head"><ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist"><!--[-->`);
  ssrRenderList($data.tabs, (tab, ti) => {
    _push(`<li class="mr-2" role="presentation"><div class="${ssrRenderClass([{ "active": tab.active }, "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"])}">${ssrInterpolate(tab.name)}</div></li>`);
  });
  _push(`<!--]--></ul></div><div class="tab-content"><div class="${ssrRenderClass([{ "active": $data.tabs[0].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.sections[0].title,
    "onUpdate:modelValue": ($event) => $data.form.html.sections[0].title = $event,
    class: "pr-6 pb-8 pt-5 w-full",
    label: _ctx.$t("Title")
  }, null, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    name: "content",
    modelValue: $data.form.html.sections[0].details,
    "onUpdate:modelValue": ($event) => $data.form.html.sections[0].details = $event,
    class: "pr-6 pb-8 w-full",
    label: _ctx.$t("Details")
  }, null, _parent));
  _push(`<div class="flex justify-between"><h2 class="flex text-lg font-bold">Action buttons</h2><span class="btn-indigo border-gray-200 rounded-full mt-1 mb-1 cursor-pointer"> + Add New </span></div><!--[-->`);
  ssrRenderList($data.form.html.sections[0].buttons, (button, si) => {
    _push(`<fieldset class="border border-solid border-gray-200 p-4 w-full mb-3 relative"><legend class="text-sm">Button ${ssrInterpolate(si + 1)}</legend><span class="remove cursor-pointer items-center bg-red-700 rounded-full w-6 h-6 inline-flex justify-center absolute top-[-20px] right-[-10px] fill-white">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "dash",
      class: "w-4 h-5"
    }, null, _parent));
    _push(`</span><div class="flex flex-col md:flex-row">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: button.text,
      "onUpdate:modelValue": ($event) => button.text = $event,
      class: "pr-6 w-full lg:w-1/3",
      label: _ctx.$t("Text")
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: button.link,
      "onUpdate:modelValue": ($event) => button.link = $event,
      class: "w-full lg:w-1/3",
      label: _ctx.$t("Link")
    }, null, _parent));
    _push(`<div class="flex items-center pl-5 pt-5 w-full lg:w-1/3"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(button.new_tab) ? ssrLooseContain(button.new_tab, null) : button.new_tab) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div><div class="ml-3 text-sm"> Open in new tab </div></label></div></div></fieldset>`);
  });
  _push(`<!--]--><div class="flex flex-col"><h2 class="flex text-lg font-bold">Section Image</h2><input type="file" accept="image/*" class="hidden" multiple="multiple"><div class="pb-8 w-full lg:w-full flex-col"><button type="button" class="btn flex justify-center items-center border-0">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "image",
    class: "flex-shrink-0 h-8 fill-gray-400 pr-1"
  }, null, _parent));
  _push(` <h4>${ssrInterpolate(_ctx.$t($data.form.html.sections[0].image ? "Change Image" : "Add Image"))}</h4></button>`);
  if ($data.form.html.sections[0].image) {
    _push(`<div class="flex items-center justify-between w-full lg:w-1/2"><img${ssrRenderAttr("src", $data.form.html.sections[0].image)} alt="Section Image" style="${ssrRenderStyle({ "height": "200px", "width": "auto" })}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="${ssrRenderClass([{ "active": $data.tabs[1].active }, "p-4 t-content"])}">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.sections[1].tagline,
    "onUpdate:modelValue": ($event) => $data.form.html.sections[1].tagline = $event,
    class: "pr-6 pb-8 pt-5 w-full",
    label: _ctx.$t("Tagline")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.html.sections[1].title,
    "onUpdate:modelValue": ($event) => $data.form.html.sections[1].title = $event,
    class: "pr-6 pb-8 pt-5 w-full",
    label: _ctx.$t("Title")
  }, null, _parent));
  _push(ssrRenderComponent(_component_textarea_input, {
    name: "content",
    modelValue: $data.form.html.sections[1].details,
    "onUpdate:modelValue": ($event) => $data.form.html.sections[1].details = $event,
    class: "pr-6 pb-8 w-full",
    label: _ctx.$t("Details")
  }, null, _parent));
  _push(`<div class="flex justify-between"><h2 class="flex text-lg font-bold">Feature List</h2><span class="btn-indigo border-gray-200 rounded-full mt-1 mb-1 cursor-pointer"> + Add New </span></div><!--[-->`);
  ssrRenderList($data.form.html.sections[1].features, (feature, si) => {
    _push(`<fieldset class="border border-solid border-gray-200 p-4 w-full mb-3 relative"><legend class="text-sm">Feature ${ssrInterpolate(si + 1)}</legend><span class="remove cursor-pointer items-center bg-red-700 rounded-full w-6 h-6 inline-flex justify-center absolute top-[-20px] right-[-10px] fill-white">`);
    _push(ssrRenderComponent(_component_icon, {
      name: "dash",
      class: "w-4 h-5"
    }, null, _parent));
    _push(`</span><div class="flex flex-col md:flex-row">`);
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: feature.icon,
      "onUpdate:modelValue": ($event) => feature.icon = $event,
      error: $data.form.errors.icon,
      class: "pr-6 pb-8 w-full lg:w-1/3",
      label: _ctx.$t("Icon")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.icons, (l, li) => {
            _push2(`<option${ssrRenderAttr("value", l)}${_scopeId}>${ssrInterpolate(l)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.icons, (l, li) => {
              return openBlock(), createBlock("option", {
                key: li,
                value: l
              }, toDisplayString(l), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: feature.title,
      "onUpdate:modelValue": ($event) => feature.title = $event,
      class: "pr-6 w-full lg:w-1/3",
      label: _ctx.$t("Title")
    }, null, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      name: "content",
      modelValue: feature.details,
      "onUpdate:modelValue": ($event) => feature.details = $event,
      class: "w-full lg:w-1/3",
      label: _ctx.$t("Details")
    }, null, _parent));
    _push(`</div></fieldset>`);
  });
  _push(`<!--]--></div><div class="${ssrRenderClass([{ "active": $data.tabs[2].active }, "p-4 t-content"])}"><div class="flex flex-col items-start gap-[30px] pl-5 pt-5 w-full lg:w-1/3"><label class="flex toggle_swtich items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray($data.form.html.sections[2].enable_ticket_section) ? ssrLooseContain($data.form.html.sections[2].enable_ticket_section, null) : $data.form.html.sections[2].enable_ticket_section) ? " checked" : ""}><div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div><div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div></div><div class="ml-3 text-sm">${ssrInterpolate("Enable Ticket Section")}</div></label></div></div></div></div></div><div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Save"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/FrontPages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
