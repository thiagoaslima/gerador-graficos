System.register(["jquery"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function setFormHandler() {
        jquery_1.default('form').submit(function (evt) {
            evt.preventDefault();
            var form = document.getElementsByTagName('form')[0];
            jquery_1.default.ajax({
                type: 'POST',
                url: "http://127.0.0.1:3001/csv",
                data: new FormData(form),
                processData: false,
                contentType: false,
                success: function (returnval) {
                    console.log(returnval);
                }
            });
        });
    }
    exports_1("setFormHandler", setFormHandler);
    var jquery_1;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=formulario.js.map