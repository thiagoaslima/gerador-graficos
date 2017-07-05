System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var utils_1, arc1, arc2, svg, path1, path2, anchor;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            arc1 = utils_1.describeArc(200, 200, 80, 90, 320);
            arc2 = utils_1.describeArc(200, 200, 80, 320, 90);
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 600 600');
            svg.setAttribute('width', '200px');
            svg.setAttribute('height', '200px');
            path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('d', arc1);
            path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('d', arc2);
            path2.setAttribute('fill', 'red');
            svg.appendChild(path1);
            svg.appendChild(path2);
            anchor = document.createElement('a');
            anchor.href = '';
            utils_1.downloadSVG(svg, anchor);
            document.body.appendChild(svg);
            document.body.appendChild(anchor);
        }
    };
});
//# sourceMappingURL=main.js.map