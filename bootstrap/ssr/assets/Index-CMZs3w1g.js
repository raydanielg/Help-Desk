import { I as Icon } from "./Dropdown-CRPxtfzU.js";
import pickBy from "lodash/pickBy.js";
import { L as Layout } from "./Layout-DjOXHHQT.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { P as Pagination } from "./Pagination-DpE_2fVO.js";
import { S as SearchInput } from "./SearchInput-C-Tjfqoi.js";
import { Link, Head } from "@inertiajs/vue3";
import moment from "moment";
import axios from "axios";
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link as Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import { _ as _sfc_main$1 } from "./UploadAdapter-D1xerzqJ.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "@popperjs/core";
import "laravel-vue-i18n";
const _sfc_main = {
  metaInfo: { title: "Chat" },
  components: {
    SearchInput,
    Icon,
    Pagination,
    Link,
    Head,
    Ckeditor
  },
  layout: Layout,
  props: {
    filters: Object,
    conversations: Object,
    chat: Object,
    title: String
  },
  remember: "form",
  data() {
    return {
      message: "",
      user: this.$page.props.auth.user,
      user_access: this.$page.props.auth.user.access,
      form: {
        search: this.filters.search
      },
      editor: ClassicEditor,
      editorConfig: {
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, Indent, Link$1, Image, Table, List, MediaEmbed, ImageUpload, BlockQuote],
        toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|", "outdent", "indent", "|", "insertTable", "blockQuote", "|", "imageUpload", "mediaEmbed", "|", "undo", "redo"],
        table: {
          toolbar: ["tableColumn", "tableRow", "mergeTableCells"]
        },
        extraPlugins: [function uploader(editor) {
          editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return new _sfc_main$1(loader);
          };
        }]
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(this.route("chat"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    textOnly(txt) {
      return txt.replace(/(<([^>]+)>)/ig, "");
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    sendMessage() {
      var that = this;
      const messageData = {
        message: this.message,
        user_id: this.user.id,
        _token: this.$page.props.csrf_token,
        conversation_id: this.chat.id
      };
      this.message = "";
      axios.post(this.route("chat.message"), messageData).then((response) => {
        if (response.data) {
          that.chat.messages.push(response.data);
        }
        this.$emit("message sent!");
      }).catch((error) => {
        console.log(error);
      });
    },
    navigateTo(id) {
      window.location.href = this.route("chat.current", id);
    },
    destroy(id) {
      let that = this;
      if (confirm("Are you sure you want to delete this conversation?")) {
        this.$inertia.delete(this.route("chat.destroy", id), {
          onSuccess: () => {
            setTimeout(function() {
              that.reset();
            }, 4e3);
          }
        });
      }
    },
    restore(id) {
      if (confirm("Are you sure you want to restore this conversation?")) {
        this.$inertia.put(this.route("chat.restore", id));
      }
    },
    pushMessage(message) {
      let chat = this.conversations.data.find((x) => x.id === message.conversation_id);
      if (typeof chat === "object") {
        chat.title = message.message;
        chat.total_entry = chat.total_entry + 1;
        if (!!this.chat && this.chat.id === message.conversation_id) {
          this.chat.messages.push(message);
          chat.total_entry = 0;
        }
      } else {
        this.conversations.data.unshift({ "id": message.conversation_id, "total_entry": 1, "title": message.message, "creator": message.creator, "updated_at": message.updated_at });
      }
    }
  },
  created() {
    this.moment = moment;
    let that = this;
    if (window.Echo) {
      window.Echo.private("messages").listen("NewChatMessage", function(e) {
        if (typeof e.chatMessage === "object") {
          that.pushMessage(e.chatMessage);
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_input = resolveComponent("search-input");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_ckeditor = resolveComponent("ckeditor");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$t($props.title)
  }, null, _parent));
  _push(`<div class="main flex-1 flex flex-col sec_chat"><div class="flex-1 flex h-full gap-5"><div class="sidebar h-full hidden lg:flex w-1/3 flex-2 flex-col bg-white"><div class="chat-box h-full"><div class="chat-left-aside h-full"><div class="c-top"><div class="media mb-1">`);
  if ($data.user.photo) {
    _push(`<img${ssrRenderAttr("src", $data.user.photo)} alt="" class="rounded-circle rounded-full user-image">`);
  } else {
    _push(`<img src="/images/svg/profile.svg" alt="" class="rounded-circle rounded-full user-image">`);
  }
  _push(`<div class="about"><div class="name f-w-600">${ssrInterpolate($data.user.first_name)} ${ssrInterpolate($data.user.last_name)}</div><div class="status">${ssrInterpolate(_ctx.$t($data.user.role.name))}</div></div></div><div class="search flex-2 py-2">`);
  _push(ssrRenderComponent(_component_search_input, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full",
    onReset: $options.reset
  }, null, _parent));
  _push(`</div></div><div class="c-list"><div class="flex-1 h-full overflow-hidden overflow-y-auto pt-2"><!--[-->`);
  ssrRenderList($props.conversations.data, (conversation) => {
    _push(ssrRenderComponent(_component_Link, {
      key: conversation.id,
      href: _ctx.route("chat.current", conversation.slug || conversation.id),
      class: ["entry cursor-pointer transform hover:scale-105 duration-300 transition-transform mb-4 rounded p-4 mx-5 flex shadow-md", { "border-l-4 border-red-500": $props.chat && conversation.id === $props.chat.id }]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex-2"${_scopeId}><div class="w-12 h-12 relative"${_scopeId}><span class="w-12 h-12 rounded-full mx-auto user_icon" alt="chat-user"${_scopeId}>${ssrInterpolate(Array.from(conversation.creator.first_name)[0])}</span></div></div><div class="flex-1 px-2"${_scopeId}><div class="truncate w-32"${_scopeId}><span class=""${_scopeId}>${ssrInterpolate(conversation.creator.first_name)} ${ssrInterpolate(conversation.creator.last_name)}</span></div>`);
          if (conversation.creator.email) {
            _push2(`<div class="mt-1"${_scopeId}><small class="text-gray-600"${_scopeId}>${ssrInterpolate(conversation.creator.email)}</small></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (conversation.title) {
            _push2(`<div class="mt-1 truncate w-32"${_scopeId}><small class="text-gray-600 text-xs"${_scopeId}>${ssrInterpolate($options.textOnly(conversation.title))}</small></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="flex-2 text-right"${_scopeId}><div${_scopeId}><small class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.moment(conversation.updated_at).format("DD MMM"))}</small></div><div${_scopeId}>`);
          if (conversation.total_entry) {
            _push2(`<small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block"${_scopeId}>${ssrInterpolate(conversation.total_entry)}</small>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          return [
            createVNode("div", { class: "flex-2" }, [
              createVNode("div", { class: "w-12 h-12 relative" }, [
                createVNode("span", {
                  class: "w-12 h-12 rounded-full mx-auto user_icon",
                  alt: "chat-user"
                }, toDisplayString(Array.from(conversation.creator.first_name)[0]), 1)
              ])
            ]),
            createVNode("div", { class: "flex-1 px-2" }, [
              createVNode("div", { class: "truncate w-32" }, [
                createVNode("span", { class: "" }, toDisplayString(conversation.creator.first_name) + " " + toDisplayString(conversation.creator.last_name), 1)
              ]),
              conversation.creator.email ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-1"
              }, [
                createVNode("small", { class: "text-gray-600" }, toDisplayString(conversation.creator.email), 1)
              ])) : createCommentVNode("", true),
              conversation.title ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-1 truncate w-32"
              }, [
                createVNode("small", { class: "text-gray-600 text-xs" }, toDisplayString($options.textOnly(conversation.title)), 1)
              ])) : createCommentVNode("", true)
            ]),
            createVNode("div", { class: "flex-2 text-right" }, [
              createVNode("div", null, [
                createVNode("small", { class: "text-gray-500" }, toDisplayString(_ctx.moment(conversation.updated_at).format("DD MMM")), 1)
              ]),
              createVNode("div", null, [
                conversation.total_entry ? (openBlock(), createBlock("small", {
                  key: 0,
                  class: "text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block"
                }, toDisplayString(conversation.total_entry), 1)) : createCommentVNode("", true)
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
  if (!$props.conversations.data.length) {
    _push(`<div class="flex w-full h-full justify-center items-center text-gray-500">${ssrInterpolate(_ctx.$t("No conversation found."))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div><div class="chat-area h-full w-2/3 flex-1 flex flex-col bg-white"><div class="flex-3">`);
  if ($props.chat) {
    _push(`<div class="chat-header flex pb-3 justify-between"><div class="flex"><div class="w-12 h-12 relative mr-3"><span class="w-12 h-12 rounded-full mx-auto user_icon" title="{{ chat.creator.first_name }} {{ chat.creator.last_name }}">${ssrInterpolate(Array.from($props.chat.creator.first_name)[0])}</span></div><div class="flex flex-col pt-1"><div class="name">${ssrInterpolate($props.chat.creator.first_name)} ${ssrInterpolate($props.chat.creator.last_name)}</div><div class="status digits pt-2">${ssrInterpolate($props.chat.creator.email)}</div></div></div>`);
    if ($data.user_access.chat.delete) {
      _push(`<div class="flex justify-center mr-3 items-center cursor-pointer">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "trash",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="messages flex-1 overflow-auto reverse__order">`);
  if ($props.chat && $props.chat.messages.length) {
    _push(`<!--[-->`);
    ssrRenderList($props.chat.messages.slice().reverse(), (message, index) => {
      _push(`<div class="message mb-4 flex">`);
      if (!message.user_id && message.contact && message.contact.first_name) {
        _push(`<div class="flex-2"><div class="w-12 h-12 relative"><span class="w-12 h-12 rounded-full mx-auto user_icon">${ssrInterpolate(Array.from(message.contact.first_name)[0])}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!message.user_id) {
        _push(`<div class="flex-1 px-2 mt__wrap"><div class="inline-block bg-gray-300 rounded p-2 px-3 text-gray-700 leading-5 ckc">${message.message ?? ""}</div><div class="pl-4"><small class="text-gray-500">${ssrInterpolate(_ctx.moment(message.updated_at).fromNow(true))}</small></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.user_id) {
        _push(`<div class="flex-1 px-2 text-right mt__wrap"><div class="inline-block bg-blue-600 rounded p-2 px-3 text-white leading-5 ckc">${message.message ?? ""}</div><div class="pr-4"><small class="text-gray-500">${ssrInterpolate(_ctx.moment(message.updated_at).fromNow(true))}</small></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else if ($props.chat && !$props.chat.messages.length) {
    _push(`<div class="flex w-full h-full justify-center items-center text-gray-500">${ssrInterpolate(_ctx.$t("No history found for this conversation"))}</div>`);
  } else {
    _push(`<div class="flex w-full h-full justify-center items-center text-gray-500">${ssrInterpolate(_ctx.$t("Click on a conversation from left to see the histories."))}</div>`);
  }
  _push(`</div>`);
  if ($props.chat) {
    _push(`<div class="flex-2 pt-4 pb-3"><div class="write bg-white shadow flex rounded-lg"><div class="flex-1 ticket_comment_edit">`);
    _push(ssrRenderComponent(_component_ckeditor, {
      id: "ticketDiscussion",
      editor: $data.editor,
      modelValue: $data.message,
      "onUpdate:modelValue": ($event) => $data.message = $event,
      name: "comment",
      config: $data.editorConfig,
      autofocus: ""
    }, null, _parent));
    _push(`</div><div class="flex-2 w-35 p-2 flex content-center items-center"><div class="flex-1"><button class="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center">`);
    _push(ssrRenderComponent(_component_icon, {
      class: "w-4 h-4 fill-gray-100",
      name: "send"
    }, null, _parent));
    _push(`</button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chat/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
