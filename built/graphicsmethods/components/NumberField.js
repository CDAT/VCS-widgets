'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseNum(v) {
    if (typeof v === "string") {
        if (v.indexOf("e") != -1) {
            var parts = v.split("e");
            var main = parseFloat(parts[0]);
            var exp = parseInt(parts[1]);
            v = Math.pow(10, exp) * main;
        } else {
            v = parseFloat(v);
        }
    }
    return v;
}

function shouldExponentiate(v) {
    if (isNaN(v) || !isFinite(v)) {
        return false;
    }
    var absval = Math.abs(v);
    if (absval >= 1e10) {
        return true;
    }
    if (v === 0) {
        // will break logarithms; also, not needed.
        return false;
    }

    var frac = absval - Math.floor(absval);
    if (frac === 0) {
        return false;
    }
    if (Math.log10(frac) < -10) {
        return true;
    }

    return false;
}

var numregexp = /-?\d*\.\d*(e\d+)?/;

var NumberField = _react2.default.createClass({
    displayName: 'NumberField',

    propTypes: {
        value: _react2.default.PropTypes.number,
        minValue: _react2.default.PropTypes.number,
        maxvalue: _react2.default.PropTypes.number,
        updatedValue: _react2.default.PropTypes.func,
        label: _react2.default.PropTypes.string,
        controlId: _react2.default.PropTypes.string,
        step: _react2.default.PropTypes.number,
        autoround: _react2.default.PropTypes.bool,
        placeholder: _react2.default.PropTypes.string,
        exponential: _react2.default.PropTypes.bool,
        inline: _react2.default.PropTypes.bool
    },
    getDefaultProps: function getDefaultProps() {
        return {
            inline: false,
            minValue: 0,
            maxValue: 100,
            step: 1,
            autoround: false,
            placeholder: "",
            exponential: true
        };
    },
    getInitialState: function getInitialState() {
        return {
            validationState: null,
            value: this.props.value
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ "value": nextProps.value, "validationState": null });
    },
    update: function update(e) {
        var new_val = e.target.value;
        if (this.props.exponential) {
            new_val = parseNum(new_val);
        }
        if (new_val !== this.props.value) {
            if (this.props.autoround) {
                this.props.updatedValue(Math.floor(new_val / this.props.step) * this.props.step);
            } else {
                this.props.updatedValue(new_val);
            }
        }
    },
    validate: function validate(e) {
        var new_val = e.target.value;

        var new_state = {
            "value": e.target.value, //Use the provided value, just make sure it's valid.
            "validationState": "success"
        };

        if (!numregexp.test(new_val)) {
            // Invalid number
            new_state.validationState = "error";
        }

        // Check value limits
        new_val = parseNum(new_val);

        if (this.props.minValue !== null && new_val < this.props.minValue) {
            new_state.validationState = "error";
        }
        if (this.props.maxValue !== null && new_val > this.props.maxValue) {
            new_state.validationState = "error";
        }
        this.setState(new_state);
    },
    render: function render() {
        var _props = this.props,
            minValue = _props.minValue,
            step = _props.step,
            maxValue = _props.maxValue,
            label = _props.label,
            controlId = _props.controlId,
            placeholder = _props.placeholder;


        var value = this.state.value;

        var help = '';
        if (this.state.validationState === "warning" || this.state.validationState === "error") {
            help = _react2.default.createElement(
                _reactBootstrap.HelpBlock,
                null,
                'Value must be between a valid number ',
                minValue === null ? "greater than " + minValue : "",
                ' ',
                minValue !== null && maxValue !== null ? " and " : "",
                ' ',
                maxValue !== null ? " less than " + maxValue : ""
            );
        }
        if (value === null) {
            value = "";
        }
        var numval = parseNum(value);
        if (this.props.exponential && shouldExponentiate(numval)) {
            var unsigned = Math.abs(numval);
            var exp = Math.floor(Math.log10(unsigned));
            var rest = numval / Math.pow(10, exp);
            value = rest + "e" + exp;
        }
        var style = {
            display: this.props.inline ? "inline-block" : "block"
        };
        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { style: style, controlId: controlId },
            label ? _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                label
            ) : '',
            _react2.default.createElement(_reactBootstrap.FormControl, { placeholder: placeholder, onChange: this.validate, onBlur: this.update, value: value }),
            help
        );
    }
});

exports.default = NumberField;
//# sourceMappingURL=NumberField.js.map