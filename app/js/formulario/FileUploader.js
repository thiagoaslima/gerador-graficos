System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FileUploader;
    return {
        setters: [],
        execute: function () {
            FileUploader = (function () {
                function FileUploader(formEl) {
                    this._nomeArquivo = 'file';
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    this._el = input;
                    this._form;
                    formEl;
                }
                Object.defineProperty(FileUploader.prototype, "nomeArquivo", {
                    get: function () {
                        return this._nomeArquivo;
                    },
                    set: function (nome) {
                        this._nomeArquivo = nome;
                        this._el.setAttribute('name', nome);
                    },
                    enumerable: true,
                    configurable: true
                });
                FileUploader.prototype.render = function () {
                    this._form.appendChild(this._el);
                };
                return FileUploader;
            }());
            exports_1("FileUploader", FileUploader);
        }
    };
});
//# sourceMappingURL=FileUploader.js.map