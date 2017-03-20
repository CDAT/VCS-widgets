'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorField = require('./ColorField');

var _ColorField2 = _interopRequireDefault(_ColorField);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patterns = ["No Pattern", "Triangle", "Filled Triangle", "Dot", "Filled Dot", "Horizontal Stripe", "Vertical Stripe", "Horizontal Dashes", "Vertical Dashes", "Diagonal Stripe", "Reverse Diagonal Stripe", "Cross", "Filled Cross", "X Cross", "Diamond", "Filled Diamond", "Square", "Filled Square", "Arrow", "Circle Cross", "Edge Arrow"];

exports.default = _react2.default.createClass({
    displayName: 'LegendFill',

    propTypes: {
        colormap: _react2.default.PropTypes.array,
        color: _ColorProp2.default,
        opacity: _react2.default.PropTypes.number,
        pattern: _react2.default.PropTypes.number,
        title: _react2.default.PropTypes.string,
        updateFill: _react2.default.PropTypes.func
    },
    getInitialState: function getInitialState() {
        // Calculate an initial value for opacity if none is given to use as placeholder
        var opacity = this.props.opacity;
        var color = this.props.color;
        var opacityManual = opacity === null;
        if (opacity === null) {
            if (typeof color === "string") {
                opacity = 100;
            } else if (typeof color === "number") {
                opacity = this.props.colormap[color][3];
            } else if (color.length === 4) {
                opacity = color[3];
            } else {
                opacity = 100;
            }
        }

        return {
            opacity: opacity
        };
    },
    colorChanged: function colorChanged(c) {
        this.props.updateFill({
            color: c,
            opacity: this.props.opacity,
            pattern: this.props.pattern
        });
    },
    opacityChanged: function opacityChanged(n) {
        this.props.updateFill({
            color: this.props.color,
            opacity: n,
            pattern: this.props.pattern
        });
    },
    patternChanged: function patternChanged(e) {
        this.props.updateFill({
            color: this.props.color,
            opacity: this.props.opacity,
            pattern: parseInt(e.target.value)
        });
    },
    render: function render() {
        var _this = this;

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
                                { key: k, checked: index == _this.props.pattern, value: index },
                                k
                            );
                        })
                    )
                )
            )
        );
    }
});
//# sourceMappingURL=LegendFill.js.map