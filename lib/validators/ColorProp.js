'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function color(props, propName, componentName) {
    componentName = comopnentName || 'ANONYMOUS';

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
                return true;
            }
            image.style.color = "rgb(255, 255, 255)";
            image.style.color = stringToTest;
            return image.style.color !== "rgb(255, 255, 255)";
        } else if (typeof value === 'number') {
            return value >= 0 && value <= 255;
        } else if (Array.isArray(value)) {
            return value.length > 2 && value.length < 5;
        }
        return false;
    }
    // assume all ok
    return null;
}

exports.default = color;
module.exports = exports['default'];
//# sourceMappingURL=ColorProp.js.map