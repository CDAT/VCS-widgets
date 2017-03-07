'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorButton = _react2.default.createClass({
    displayName: 'ColorButton',

    propTypes: {
        color: _react2.default.PropTypes.array,
        action: _react2.default.PropTypes.func,
        inline: _react2.default.PropTypes.bool
    },
    render: function render() {
        var color = "rgba(" + this.props.color.join(", ") + ")";
        var style = {
            display: this.props.inline ? "inline-block" : "block"
        };
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactBootstrap.Button, { onClick: this.props.action, style: { "backgroundColor": color } })
        );
    }
});

exports.default = ColorButton;
//# sourceMappingURL=ColorButton.js.map