'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

function usage(name) {
    var html_start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var trailer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var html_end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return html_start + name + " property must be an integer >= 0 and <=255. " + trailer + html_end;
}

var ColorOneTwo = _react2.default.createClass({
    displayName: 'ColorOneTwo',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        color1: _react2.default.PropTypes.number,
        color2: _react2.default.PropTypes.number,
        colormap: _react2.default.PropTypes.array
    },
    updateColor1: function updateColor1(val) {
        this.props.updateGraphicsMethod("color_1", val);
    },
    updateColor2: function updateColor2(val) {
        this.props.updateGraphicsMethod("color_2", val);
    },
    getInitialState: function getInitialState() {
        return {
            showColormap: false
        };
    },
    render: function render() {
        var _this = this;

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
                        _this.setState({ showColormap: false });
                    }, target: function target() {
                        _reactDom2.default.findDOMNode(_this.state.colorTarget);
                    }, container: this },
                _react2.default.createElement(
                    _reactBootstrap.Popover,
                    { id: 'color_one_two_colortable', style: { 'minWidth': '512px' } },
                    _react2.default.createElement(_ColorTable2.default, { colors: colors, colorSelected: function colorSelected(v) {
                            if (self.state.colorTarget === _this.color_1) {
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
                        _this.color_1 = b;
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
                        _this.color_2 = b;
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
});

exports.default = ColorOneTwo;
//# sourceMappingURL=ColorOneTwo.js.map