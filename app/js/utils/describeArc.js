System.register(["."], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function describeArc(x, y, radius, startAngle, endAngle) {
        var start = _1.polarToCartesian(x, y, radius, endAngle);
        var end = _1.polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        var d = [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            'L', x, y,
            'L', start.x, start.y
        ].join(' ');
        return d;
    }
    exports_1("describeArc", describeArc);
    var _1;
    return {
        setters: [
            function (_1_1) {
                _1 = _1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=describeArc.js.map