'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ColorTable = require('./ColorTable');

var _ColorTable2 = _interopRequireDefault(_ColorTable);

var _ColorSwatch = require('./ColorSwatch');

var _ColorSwatch2 = _interopRequireDefault(_ColorSwatch);

var _ColorBars = require('./ColorBars');

var _ColorBars2 = _interopRequireDefault(_ColorBars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Component) {
    _inherits(ColorPicker, _Component);

    function ColorPicker() {
        _classCallCheck(this, ColorPicker);

        return _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).apply(this, arguments));
    }

    _createClass(ColorPicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var mainStyle = {
                display: "flex",
                alignItems: "stretch"
            };
            var subStyle = {
                display: "flex",
                alignItems: "space-between",
                flexDirection: "column"
            };
            var curColor = this.props.color;
            return _react2.default.createElement(
                'div',
                { style: mainStyle, className: 'row' },
                _react2.default.createElement(
                    'div',
                    { style: subStyle, className: 'col-sm-4' },
                    _react2.default.createElement(_ColorSwatch2.default, { color: curColor }),
                    _react2.default.createElement(_ColorBars2.default, { color: curColor, colorUpdated: this.props.updateCurrentColor })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-8' },
                    _react2.default.createElement(_ColorTable2.default, { colors: this.props.colormap, colorSelected: function colorSelected(ind) {
                            _this2.props.updateCurrentColor(ind);
                        } })
                )
            );
        }
    }]);

    return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
    colormap: _propTypes2.default.array,
    color: _propTypes2.default.array,
    updateCurrentColor: _propTypes2.default.func
};

exports.default = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map