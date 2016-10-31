"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOP = function NOP() {};
var DatawcCoordinates = _react2.default.createClass({
    displayName: "DatawcCoordinates",

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        x1: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        x2: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        y1: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        y2: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
    },
    render: function render() {
        var that = this.props.that;
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "h5",
                null,
                " datawc_x1: "
            ),
            _react2.default.createElement("input", { type: "text",
                name: "datawc_x1",
                defaultValue: Number.isInteger(this.props.x1) && this.props.x1 > 1e4 ? this.props.x1.toExponential() : this.props.x1,
                onChange: NOP,
                onBlur: this.props.handleChange }),
            " ",
            _react2.default.createElement("br", null),
            _react2.default.createElement(
                "h5",
                null,
                "datawc_x2: "
            ),
            _react2.default.createElement("input", { type: "text",
                name: "datawc_x2",
                defaultValue: Number.isInteger(this.props.x2) && this.props.x2 > 1e4 ? this.props.x2.toExponential() : this.props.x2,
                onChange: NOP,
                onBlur: this.props.handleChange }),
            " ",
            _react2.default.createElement("br", null),
            _react2.default.createElement(
                "h5",
                null,
                "datawc_y1: "
            ),
            _react2.default.createElement("input", { type: "text",
                name: "datawc_y1",
                defaultValue: Number.isInteger(this.props.y1) && this.props.y1 > 1e4 ? this.props.y1.toExponential() : this.props.y1,
                onChange: NOP,
                onBlur: this.props.handleChange }),
            " ",
            _react2.default.createElement("br", null),
            _react2.default.createElement(
                "h5",
                null,
                "datawc_y2: "
            ),
            _react2.default.createElement("input", { type: "text",
                name: "datawc_y2",
                defaultValue: Number.isInteger(this.props.y2) && this.props.y2 > 1e4 ? this.props.y2.toExponential() : this.props.y2,
                onChange: NOP,
                onBlur: this.props.handleChange }),
            " ",
            _react2.default.createElement("br", null)
        );
    }
});

exports.default = DatawcCoordinates;
module.exports = exports["default"];
//# sourceMappingURL=DatawcCoordinates.js.map