import { useSSRContext } from "vue";
class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  // Starts the upload process.
  upload() {
    return this.loader.file.then((file) => new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject, file);
      this._sendRequest(file);
    }));
  }
  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();
    xhr.open("POST", "/cke/image", true);
    xhr.responseType = "json";
  }
  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;
    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      if (!response || response.error) {
        return reject(response && response.error ? response.error.message : genericErrorText);
      }
      resolve({
        default: response.url
      });
    });
    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }
  // Prepares the data and sends the request.
  _sendRequest(file) {
    const data = new FormData();
    data.append("upload", file);
    this.xhr.send(data);
  }
}
const _sfc_main = UploadAdapter;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/UploadAdapter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
