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

var NumberField = function (_Component) {
    _inherits(NumberField, _Component);

    function NumberField(props) {
        _classCallCheck(this, NumberField);

        var _this = _possibleConstructorReturn(this, (NumberField.__proto__ || Object.getPrototypeOf(NumberField)).call(this, props));

        _this.state = {
            validationState: null,
            value: props.value
        };
        _this.update = _this.update.bind(_this);
        _this.validate = _this.validate.bind(_this);
        return _this;
    }

    _createClass(NumberField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ "value": nextProps.value, "validationState": null });
        }
    }, {
        key: 'update',
        value: function update(e) {
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
        }
    }, {
        key: 'validate',
        value: function validate(e) {
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
        }
    }, {
        key: 'render',
        value: function render() {
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
    }]);

    return NumberField;
}(_react.Component);

NumberField.propTypes = {
    value: _propTypes2.default.number,
    minValue: _propTypes2.default.number,
    maxvalue: _propTypes2.default.number,
    updatedValue: _propTypes2.default.func,
    label: _propTypes2.default.string,
    controlId: _propTypes2.default.string,
    step: _propTypes2.default.number,
    autoround: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    exponential: _propTypes2.default.bool,
    inline: _propTypes2.default.bool
};

NumberField.defaultProps = {
    inline: false,
    minValue: 0,
    maxValue: 100,
    step: 1,
    autoround: false,
    placeholder: "",
    exponential: true
};

exports.default = NumberField;
//# sourceMappingURL=NumberField.js.map