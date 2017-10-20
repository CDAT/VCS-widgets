"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateLabelSettings = _react2.default.createClass({
    displayName: "TemplateLabelSettings",

    propTypes: {
        label: _react2.default.PropTypes.object,
        update: _react2.default.PropTypes.func
    },
    updateLabelValue: function updateLabelValue(key) {
        var _this = this;

        var self = this;
        var validator = parseFloat;
        if (key === "priority") {
            validator = parseInt;
        }
        return function (e) {
            self.props.update(key, validator(_this.range(e.target.value)));
        };
    },
    range: function range(alt) {
        if (alt < 0) {
            alt = 0;
        } else if (alt > 1) {
            alt = 1;
        }
        return alt;
    },
    render: function render() {
        var x = this.props.label.x;
        var y = this.props.label.y;
        var priority = this.props.label.priority;
        var name = this.props.label.member;
        var styles = { padding: "5px" };

        return _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
                "th",
                { style: styles },
                name
            ),
            _react2.default.createElement(
                "td",
                { style: styles },
                _react2.default.createElement("input", { style: { width: 120 }, type: "number", step: "0.001", value: x, name: "{name}_x", onChange: this.updateLabelValue("x") })
            ),
            _react2.default.createElement(
                "td",
                { style: styles },
                _react2.default.createElement("input", { style: { width: 120 }, type: "number", step: "0.001", value: y, name: "{name}_y", onChange: this.updateLabelValue("y") })
            ),
            _react2.default.createElement(
                "td",
                { style: styles },
                _react2.default.createElement("input", { style: { width: 120 }, type: "number", value: priority, name: "{name}_priority", onChange: this.updateLabelValue("priority") })
            )
        );
    }
});

exports.default = TemplateLabelSettings;
//# sourceMappingURL=TemplateLabelSettings.js.map