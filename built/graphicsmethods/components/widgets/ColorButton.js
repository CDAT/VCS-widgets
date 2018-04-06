'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorButton = function (_Component) {
    _inherits(ColorButton, _Component);

    function ColorButton() {
        _classCallCheck(this, ColorButton);

        return _possibleConstructorReturn(this, (ColorButton.__proto__ || Object.getPrototypeOf(ColorButton)).apply(this, arguments));
    }

    _createClass(ColorButton, [{
        key: 'render',
        value: function render() {
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
    }]);

    return ColorButton;
}(_react.Component);

ColorButton.propTypes = {
    color: _propTypes2.default.array,
    action: _propTypes2.default.func,
    inline: _propTypes2.default.bool
};

exports.default = ColorButton;
//# sourceMappingURL=ColorButton.js.map