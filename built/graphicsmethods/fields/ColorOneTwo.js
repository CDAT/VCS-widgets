'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _ColorButton = require('../components/widgets/ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorTable = require('../components/widgets/ColorTable');

var _ColorTable2 = _interopRequireDefault(_ColorTable);

var _reactBootstrap = require('react-bootstrap');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function usage(name) {
    var html_start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var trailer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var html_end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return html_start + name + " property must be an integer >= 0 and <=255. " + trailer + html_end;
}

var ColorOneTwo = function (_Component) {
    _inherits(ColorOneTwo, _Component);

    function ColorOneTwo(props) {
        _classCallCheck(this, ColorOneTwo);

        var _this = _possibleConstructorReturn(this, (ColorOneTwo.__proto__ || Object.getPrototypeOf(ColorOneTwo)).call(this, props));

        _this.state = {
            showColormap: false
        };
        _this.updateColor1 = _this.updateColor1.bind(_this);
        _this.updateColor2 = _this.updateColor2.bind(_this);
        return _this;
    }

    _createClass(ColorOneTwo, [{
        key: 'updateColor1',
        value: function updateColor1(val) {
            this.props.updateGraphicsMethod("color_1", val);
        }
    }, {
        key: 'updateColor2',
        value: function updateColor2(val) {
            this.props.updateGraphicsMethod("color_2", val);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var colors = this.props.colormap.map(function (c) {
                var red = c[0],
                    green = c[1],
                    blue = c[2],
                    alpha = c[3];
                return [Math.round(red * 2.55), Math.round(green * 2.55), Math.round(blue * 2.55), alpha / 100];
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Overlay,
                    { rootClose: true, show: this.state.showColormap, onHide: function onHide(e) {
                            _this2.setState({ showColormap: false });
                        }, target: function target() {
                            _reactDom2.default.findDOMNode(_this2.state.colorTarget);
                        }, container: this },
                    _react2.default.createElement(
                        _reactBootstrap.Popover,
                        { id: 'color_one_two_colortable', style: { 'minWidth': '512px' } },
                        _react2.default.createElement(_ColorTable2.default, { colors: colors, colorSelected: function colorSelected(v) {
                                if (self.state.colorTarget === _this2.color_1) {
                                    self.updateColor1(v);
                                } else {
                                    self.updateColor2(v);
                                }
                                self.setState({ "showColormap": false });
                            } })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'color1' },
                    _react2.default.createElement(
                        _reactBootstrap.ControlLabel,
                        null,
                        'First Color: '
                    ),
                    _react2.default.createElement(_ColorButton2.default, { ref: function ref(b) {
                            _this2.color_1 = b;
                        },
                        color: colors[this.props.color1],
                        action: function action(e) {
                            if (self.state.colorTarget == self.color_1) {
                                self.setState({ showColormap: !self.state.showColormap });
                            } else {
                                self.setState({ colorTarget: self.color_1, showColormap: true });
                            }
                        } })
                ),
                _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'color2' },
                    _react2.default.createElement(
                        _reactBootstrap.ControlLabel,
                        null,
                        'Last Color: '
                    ),
                    _react2.default.createElement(_ColorButton2.default, { ref: function ref(b) {
                            _this2.color_2 = b;
                        },
                        color: colors[this.props.color2],
                        action: function action(e) {
                            if (self.state.colorTarget == self.color_2) {
                                self.setState({ showColormap: !self.state.showColormap });
                            } else {
                                self.setState({ colorTarget: self.color_2, showColormap: true });
                            }
                        } })
                )
            );
        }
    }]);

    return ColorOneTwo;
}(_react.Component);

ColorOneTwo.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    color1: _propTypes2.default.number,
    color2: _propTypes2.default.number,
    colormap: _propTypes2.default.array
};

exports.default = ColorOneTwo;
//# sourceMappingURL=ColorOneTwo.js.map