System.register(["./utils", "./dados/exemplo1"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function createSVGCircle(radius, dados) {
        var colors = ['red', 'blue', 'green', 'gray', 'orange'];
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', "0 0 " + radius * 10 + " " + radius * 10);
        svg.setAttribute('width', radius * 10 + 'px');
        svg.setAttribute('height', radius * 10 + 'px');
        var startAngle;
        dados.forEach(function (_a, idx) {
            var label = _a.label, value = _a.value;
            var endAngle;
            var perc = convertValueToPercentage(value);
            if (startAngle === undefined) {
                var arc_1 = 360 * perc;
                endAngle = (arc_1 - 180) / 2;
                startAngle = endAngle - 360 * perc;
            }
            else {
                endAngle = 360 * perc + startAngle;
            }
            var arc = utils_1.describeArc(radius * 5, radius * 5, radius, startAngle, endAngle);
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', arc);
            path.setAttribute('fill', colors[idx]);
            svg.appendChild(path);
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            var span = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            var position = utils_1.positionText(radius * 5, radius * 5, radius, startAngle, endAngle);
            span.textContent = label + ' ' + perc + '%';
            span.setAttribute('text-anchor', position.x >= radius * 5 ? 'start' : 'end');
            text.appendChild(span);
            text.setAttribute('x', position.x.toString(10));
            text.setAttribute('y', position.y.toString(10));
            text.setAttribute('fill', colors[idx]);
            svg.appendChild(text);
            startAngle = endAngle;
        });
        return svg;
    }
    function convertValueToPercentage(value) {
        return parseFloat(parseFloat(value).toFixed(1)) / 100;
    }
    var utils_1, exemplo1_1, svg, anchor;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (exemplo1_1_1) {
                exemplo1_1 = exemplo1_1_1;
            }
        ],
        execute: function () {
            svg = createSVGCircle(200, exemplo1_1.dados);
            anchor = document.createElement('a');
            anchor.textContent = 'Download';
            anchor.href = '';
            utils_1.downloadSVG(svg, anchor);
            document.body.appendChild(svg);
            document.body.appendChild(anchor);
        }
    };
});
//# sourceMappingURL=main.js.map