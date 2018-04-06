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

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorButton = require('./widgets/ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorPicker = require('./widgets/ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function rgbToVCS(red, green, blue) {
    var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    return [red / 2.55, green / 2.55, blue / 2.55, alpha * 100];
}

function vcsToRGB(red, green, blue) {
    var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

    return [Math.round(red * 2.55), Math.round(green * 2.55), Math.round(blue * 2.55), alpha / 100];
}

function colornameToRGBA(name) {
    var image = document.createElement("img");
    image.style.color = name;
    var rgb = window.getComputedStyle(image);
    rgb = rgb.substr(4, rgb.length - 5);
    rgb = rgb.split(", ").map(parseInt);
    var red = rgb[0];
    var green = rgb[1];
    var blue = rgb[2];
    var alpha = 1;
    return [red, green, blue, alpha];
}

function getRGBA(vcs_color, colormap) {
    var color = [];

    if (typeof vcs_color === "string") {
        color = colornameToRGBA(vcs_color);
    } else if (typeof vcs_color === "number") {
        color = vcsToRGB.apply(this, colormap[vcs_color]);
    } else if (Array.isArray(vcs_color)) {
        color = vcsToRGB.apply(this, vcs_color);
    }

    return color;
}

// Accepts a VCS color, converts to RGBA for internal manipulation, spits back out a VCS color

var ColorField = function (_Component) {
    _inherits(ColorField, _Component);

    function ColorField(props) {
        _classCallCheck(this, ColorField);

        var _this = _possibleConstructorReturn(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).call(this, props));

        _this.state = {
            showModal: false,
            workingColor: getRGBA(props.color, props.colormap),
            colorValue: props.color
        };
        _this.openColorPicker = _this.openColorPicker.bind(_this);
        _this.closeColorPicker = _this.closeColorPicker.bind(_this);
        _this.updateColor = _this.updateColor.bind(_this);
        _this.finalizeColor = _this.finalizeColor.bind(_this);
        return _this;
    }

    _createClass(ColorField, [{
        key: 'openColorPicker',
        value: function openColorPicker(e) {
            this.setState({ "showModal": true });
        }
    }, {
        key: 'closeColorPicker',
        value: function closeColorPicker(e) {
            // Reset the color and hide the modal
            this.setState({
                "workingColor": getRGBA(this.props.color, this.props.colormap),
                "showModal": false
            });
        }
    }, {
        key: 'updateColor',
        value: function updateColor(c) {
            var workingColor = c;
            if (typeof c === "number") {
                workingColor = getRGBA(c, this.props.colormap);
            }
            this.setState({ workingColor: workingColor, colorValue: c });
        }
    }, {
        key: 'finalizeColor',
        value: function finalizeColor() {
            this.setState({ "showModal": false });
            if (this.state.workingColor === this.state.colorValue) {
                this.props.colorChanged(rgbToVCS.apply(this, this.state.workingColor));
            } else {
                // there's a color index in colorValue
                this.props.colorChanged(this.state.colorValue);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var color = this.state.workingColor;
            var cmap = this.props.colormap.map(function (c) {
                return vcsToRGB.apply(_this2, c);
            });
            var style = {
                display: this.props.inline ? "inline-block" : "block"
            };
            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { style: style, controlId: this.props.controlId },
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    { style: { marginRight: '1em' } },
                    this.props.label
                ),
                _react2.default.createElement(_ColorButton2.default, { color: getRGBA(this.props.color, this.props.colormap), action: this.openColorPicker }),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.showModal, onHide: function onHide(e) {
                            _this2.setState({ "showModal": false });
                        } },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            'Choose Color:'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(_ColorPicker2.default, { color: color, colormap: cmap, updateCurrentColor: this.updateColor })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.ButtonToolbar,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.closeColorPicker },
                                'Cancel'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.finalizeColor, bsStyle: 'primary' },
                                'Select'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ColorField;
}(_react.Component);

ColorField.propTypes = {
    color: _ColorProp2.default,
    colormap: _propTypes2.default.array,
    label: _propTypes2.default.string,
    controlId: _propTypes2.default.string,
    colorChanged: _propTypes2.default.func,
    inline: _propTypes2.default.bool
};

ColorField.defaultProps = {
    inline: false
};

exports.default = ColorField;
//# sourceMappingURL=ColorField.js.map