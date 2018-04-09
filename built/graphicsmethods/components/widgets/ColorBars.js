'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumberField = require('../../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorBars = function (_Component) {
    _inherits(ColorBars, _Component);

    function ColorBars(props) {
        _classCallCheck(this, ColorBars);

        var _this = _possibleConstructorReturn(this, (ColorBars.__proto__ || Object.getPrototypeOf(ColorBars)).call(this, props));

        _this.updateRed = _this.updateRed.bind(_this);
        _this.updateBlue = _this.updateBlue.bind(_this);
        _this.updateGreen = _this.updateGreen.bind(_this);
        _this.updateAlpha = _this.updateAlpha.bind(_this);
        return _this;
    }

    _createClass(ColorBars, [{
        key: 'updateRed',
        value: function updateRed(v) {
            this.props.colorUpdated([v, this.green.props.value, this.blue.props.value, this.alpha.props.value / 255]);
        }
    }, {
        key: 'updateBlue',
        value: function updateBlue(v) {
            this.props.colorUpdated([this.red.props.value, this.green.props.value, v, this.alpha.props.value / 255]);
        }
    }, {
        key: 'updateGreen',
        value: function updateGreen(v) {
            this.props.colorUpdated([this.red.props.value, v, this.blue.props.value, this.alpha.props.value / 255]);
        }
    }, {
        key: 'updateAlpha',
        value: function updateAlpha(v) {
            this.props.colorUpdated([this.red.props.value, this.green.props.value, this.blue.props.value, v / 255]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
            };
            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateRed, ref: function ref(e) {
                        _this2.red = e;
                    }, value: this.props.color[0], label: 'Red:', minValue: 0, maxValue: 255, controlId: 'cbred' }),
                _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateGreen, ref: function ref(e) {
                        _this2.green = e;
                    }, value: this.props.color[1], label: 'Green:', minValue: 0, maxValue: 255, controlId: 'cbgreen' }),
                _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateBlue, ref: function ref(e) {
                        _this2.blue = e;
                    }, value: this.props.color[2], label: 'Blue:', minValue: 0, maxValue: 255, controlId: 'cbblue' }),
                _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateAlpha, ref: function ref(e) {
                        _this2.alpha = e;
                    }, value: this.props.color[3] * 255, label: 'Alpha:', minValue: 0, maxValue: 255, controlId: 'cbalpha' })
            );
        }
    }]);

    return ColorBars;
}(_react.Component);

ColorBars.propTypes = {
    color: _propTypes2.default.array,
    colorUpdated: _propTypes2.default.func
};

exports.default = ColorBars;
//# sourceMappingURL=ColorBars.js.map