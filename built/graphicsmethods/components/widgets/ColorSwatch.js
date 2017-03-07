"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorSwatch = _react2.default.createClass({
    displayName: "ColorSwatch",

    propTypes: {
        color: _react2.default.PropTypes.array
    },
    render: function render() {
        var color = "rgba(" + this.props.color.join(", ") + ")";
        var style = {
            backgroundColor: color,
            boxShadow: "0 0 0 2px black",
            border: "2px solid white",
            height: "200px"
        };
        return _react2.default.createElement("div", { style: style });
    }
});

exports.default = ColorSwatch;
//# sourceMappingURL=ColorSwatch.js.map