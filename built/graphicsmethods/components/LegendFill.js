'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorField = require('./ColorField');

var _ColorField2 = _interopRequireDefault(_ColorField);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var patterns = ["No Pattern", "Triangle", "Filled Triangle", "Dot", "Filled Dot", "Horizontal Stripe", "Vertical Stripe", "Horizontal Dashes", "Vertical Dashes", "Diagonal Stripe", "Reverse Diagonal Stripe", "Cross", "Filled Cross", "X Cross", "Diamond", "Filled Diamond", "Square", "Filled Square", "Arrow", "Circle Cross", "Edge Arrow"];

var LegendFill = function (_Component) {
    _inherits(LegendFill, _Component);

    function LegendFill(props) {
        _classCallCheck(this, LegendFill);

        // Calculate an initial value for opacity if none is given to use as placeholder
        var _this = _possibleConstructorReturn(this, (LegendFill.__proto__ || Object.getPrototypeOf(LegendFill)).call(this, props));

        var opacity = _this.props.opacity;
        var color = _this.props.color;
        var opacityManual = opacity === null;
        if (opacity === null) {
            if (typeof color === "string") {
                opacity = 100;
            } else if (typeof color === "number") {
                opacity = _this.props.colormap[color][3];
            } else if (color.length === 4) {
                opacity = color[3];
            } else {
                opacity = 100;
            }
        }
        _this.state = {
            opacity: opacity
        };

        _this.colorChanged = _this.colorChanged.bind(_this);
        _this.opacityChanged = _this.opacityChanged.bind(_this);
        _this.patternChanged = _this.patternChanged.bind(_this);
        return _this;
    }

    _createClass(LegendFill, [{
        key: 'colorChanged',
        value: function colorChanged(c) {
            this.props.updateFill({
                color: c,
                opacity: this.props.opacity,
                pattern: this.props.pattern
            });
        }
    }, {
        key: 'opacityChanged',
        value: function opacityChanged(n) {
            this.props.updateFill({
                color: this.props.color,
                opacity: n,
                pattern: this.props.pattern
            });
        }
    }, {
        key: 'patternChanged',
        value: function patternChanged(e) {
            this.props.updateFill({
                color: this.props.color,
                opacity: this.props.opacity,
                pattern: parseInt(e.target.value)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-2' },
                    _react2.default.createElement(_ColorField2.default, { label: 'Fill Color: ', colorChanged: this.colorChanged, inline: true, color: this.props.color, colormap: this.props.colormap, controlId: "fillcolor_" + this.props.title })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    _react2.default.createElement(_NumberField2.default, { inline: true, updatedValue: this.opacityChanged, label: 'Opacity: ', controlId: "fillopacity_" + this.props.title,
                        step: .1, value: this.props.opacity, placeholder: "" + this.state.opacity })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-4' },
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { style: { 'display': 'inline-block' }, controlId: "fillpattern_" + this.props.title },
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            null,
                            'Pattern'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormControl,
                            { onChange: this.patternChanged, componentClass: 'select', placeholder: 'Pattern' },
                            patterns.map(function (k, index) {
                                return _react2.default.createElement(
                                    'option',
                                    { key: k, checked: index == _this2.props.pattern, value: index },
                                    k
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return LegendFill;
}(_react.Component);

LegendFill.propTypes = {
    colormap: _propTypes2.default.array,
    color: _ColorProp2.default,
    opacity: _propTypes2.default.number,
    pattern: _propTypes2.default.number,
    title: _propTypes2.default.string,
    updateFill: _propTypes2.default.func
};

exports.default = LegendFill;
//# sourceMappingURL=LegendFill.js.map