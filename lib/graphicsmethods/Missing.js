'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        console.log("Missing is not a string");
    }
}
var Missing = _react2.default.createClass({
    displayName: 'Missing',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        missing: _react2.default.PropTypes.number,
        className: _react2.default.PropTypes.string
    },
    getInitialState: function getInitialState() {
        return {
            missing: this.props.missing
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            missing: nextProps.missing
        });
    },
    handleBlur: function handleBlur(event) {
        var value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange('missing', value);
        } else {
            // indicate user entered wrong value
            console.log("Missing property must be an integer >= 0 and <=255. Value provided was " + event.target.value);
            this.setState({
                missing: this.props.missing
            });
        }
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            { className: this.props.className },
            _react2.default.createElement(
                'h5',
                null,
                'Missing: '
            ),
            _react2.default.createElement('input', { type: 'number',
                name: 'missing',
                value: this.state.missing === 0 || this.state.missing ? this.state.missing : '',
                onChange: function onChange(event) {
                    _this.setState({ missing: event.target.value });
                },
                onBlur: this.handleBlur })
        );
    }
});

exports.default = Missing;
module.exports = exports['default'];
//# sourceMappingURL=Missing.js.map