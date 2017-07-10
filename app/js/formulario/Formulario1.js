System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Formulario;
    return {
        setters: [],
        execute: function () {
            Formulario = (function () {
                function Formulario(_formEl, opts) {
                    this._formEl = _formEl;
                    this._fileUploader = (opts && opts.fileUploader) || null;
                    this.order.forEach(function (key) {
                        opts[key].render();
                    });
                }
                Formulario.prototype.appendInput = function (inputs) {
                    if (inputs.fileUploader) {
                        this._fileUploader = inputs.fileUploader;
                        ;
                    }
                    if (inputs.order) {
                        inputs.order.forEach(function (key) {
                            inputs[key]['render']();
                        });
                    }
                };
                return Formulario;
            }());
            exports_1("Formulario", Formulario);
        }
    };
});
//# sourceMappingURL=Formulario1.js.map