'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global $ */
function validate(value) {
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
    }
}
function usage(name) {
    var html_start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var trailer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var html_end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return html_start + name + " property must be an integer >= 0 and <=255. " + trailer + html_end;
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
        var value = validate(event.target.value);
        var name = event.target.name;
        if (value === 0 || value) {
            this.props.handleChange(name, value);
        } else {
            // indicate user entered wrong value and reset to last valid value
            if (name === 'color_1') {
                this.setState({
                    color1: this.props.color1
                });
                $('#color-1-usage').focus();
            } else {
                this.setState({
                    color2: this.props.color2
                });
                $('#color-2-usage').focus();
            }
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
            _react2.default.createElement(_Usage2.default, { id: 'color-1-usage',
                usage: usage("Color 1") }),
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
                onBlur: this.handleBlur }),
            _react2.default.createElement(_Usage2.default, { id: 'color-2-usage',
                usage: usage("Color 2") })
        );
    }
});

exports.default = ColorOneTwo;
module.exports = exports['default'];
//# sourceMappingURL=ColorOneTwo.js.map