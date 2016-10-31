'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(value) {
    var new_value = void 0;
    if (typeof value === 'string') {
        if (value.match(/[^0-9]+/) || value === '') {
            return false;
        } else {
            new_value = Number.parseInt(value);
            if (new_value < 0 || new_value > 255) {
                return false;
            } else {
                return new_value;
            }
        }
    } else {
        console.log("color_(1|2) is not a string");
        console.log("color_(1|2) a " + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
    }
}
var ColorOneTwo = _react2.default.createClass({
    displayName: 'ColorOneTwo',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        color1: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        color2: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
    },
    getInitialState: function getInitialState() {
        return {
            color1: this.props.color1,
            color2: this.props.color2
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            color1: nextProps.color1,
            color2: nextProps.color2
        });
    },
    handleBlur: function handleBlur(event) {
        var value = verify(event.target.value);
        var name = event.target.name;
        if (value === 0 || value) {
            this.props.handleChange(name, value);
        } else {
            // indicate user entered wrong value and reset to last valid value
            console.log(name + " property must be an integer >= 0 and <=255." + " Value provided was " + event.target.value + " of type " + _typeof(event.target.value));
        }
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h5',
                null,
                'Color 1:'
            ),
            _react2.default.createElement('input', { type: 'number',
                name: 'color_1',
                value: this.state.color1 === 0 || this.state.color1 ? this.state.color1 : '',
                onChange: function onChange(event) {
                    _this.setState({ color1: event.target.value });
                },
                onBlur: this.handleBlur }),
            _react2.default.createElement(
                'h5',
                null,
                'Color 2:'
            ),
            _react2.default.createElement('input', { type: 'number',
                name: 'color_2',
                value: this.state.color2 === 0 || this.state.color2 ? this.state.color2 : '',
                onChange: function onChange(event) {
                    _this.setState({ color2: event.target.value });
                },
                onBlur: this.handleBlur })
        );
    }
});

exports.default = ColorOneTwo;
module.exports = exports['default'];
//# sourceMappingURL=ColorOneTwo.js.map