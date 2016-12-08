'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function color(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (props[propName]) {
        var value = props[propName];
        if (typeof value === 'string') {
            // make sure it's a valid CSS string by setting
            // a style and seeing if it changes the color
            // CSS color names are the same as the ones we use in VCS
            var image = document.createElement("img");
            image.style.color = "rgb(0, 0, 0)";
            image.style.color = stringToTest;
            if (image.style.color !== "rgb(0, 0, 0)") {
                return null;
            }
            image.style.color = "rgb(255, 255, 255)";
            image.style.color = stringToTest;
            if (image.style.color !== "rgb(255, 255, 255)") {
                return null;
            }
            return Error("Invalid color name. Must be a valid X11 Color Name.");
        } else if (typeof value === 'number') {
            if (value >= 0 && value <= 255) {
                return null;
            } else {
                return Error("Invalid color index. Must be between 0 and 255, inclusive.");
            }
        } else if (Array.isArray(value)) {
            if (value.length > 2 && value.length < 5 && value.reduce(function (prev, cur) {
                return prev && cur >= 0 && cur <= 100;
            }, true)) {
                return null;
            } else {
                return Error("Invalid color array. Must have 3 or 4 values between 0 and 100.");
            }
        }
        return Error("Invalid color. Must be one of: X11 Color Name String, 256 > number >= 0, or list of numbers 0-100 (RGB or RGBA).");
    }
    // assume all ok
    return null;
}

exports.default = color;
module.exports = exports['default'];
//# sourceMappingURL=ColorProp.js.map