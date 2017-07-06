System.register(["."], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function positionText(x, y, radius, startAngle, endAngle) {
        var angle = (endAngle - startAngle) / 2 + startAngle;
        var multiplier = 1.1;
        if ((angle >= 0 && angle < 15) ||
            (angle > 165 && angle < 195) ||
            (angle > 345 && angle <= 360)) {
            multiplier = 1.15;
        }
        return _1.polarToCartesian(x, y, radius * multiplier, angle);
    }
    exports_1("positionText", positionText);
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
//# sourceMappingURL=positionText.js.map