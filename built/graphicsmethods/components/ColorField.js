'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorButton = require('./widgets/ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorPicker = require('./widgets/ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var ColorField = _react2.default.createClass({
    displayName: 'ColorField',

    propTypes: {
        color: _ColorProp2.default,
        colormap: _react2.default.PropTypes.array,
        label: _react2.default.PropTypes.string,
        controlId: _react2.default.PropTypes.string,
        colorChanged: _react2.default.PropTypes.func,
        inline: _react2.default.PropTypes.bool
    },
    getInitialState: function getInitialState() {
        return {
            showModal: false,
            workingColor: getRGBA(this.props.color, this.props.colormap),
            colorValue: this.props.color
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            inline: false
        };
    },
    openColorPicker: function openColorPicker(e) {
        this.setState({ "showModal": true });
    },
    closeColorPicker: function closeColorPicker(e) {
        // Reset the color and hide the modal
        this.setState({
            "workingColor": getRGBA(this.props.color, this.props.colormap),
            "showModal": false
        });
    },
    updateColor: function updateColor(c) {
        var workingColor = c;
        if (typeof c === "number") {
            workingColor = getRGBA(c, this.props.colormap);
        }
        this.setState({ workingColor: workingColor, colorValue: c });
    },
    finalizeColor: function finalizeColor() {
        this.setState({ "showModal": false });
        if (this.state.workingColor === this.state.colorValue) {
            this.props.colorChanged(rgbToVCS.apply(this, this.state.workingColor));
        } else {
            // there's a color index in colorValue
            this.props.colorChanged(this.state.colorValue);
        }
    },
    render: function render() {
        var _this = this;

        var self = this;
        var color = this.state.workingColor;
        var cmap = this.props.colormap.map(function (c) {
            return vcsToRGB.apply(_this, c);
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
                        _this.setState({ "showModal": false });
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
});

exports.default = ColorField;
//# sourceMappingURL=ColorField.js.map