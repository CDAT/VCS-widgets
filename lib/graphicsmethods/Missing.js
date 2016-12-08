'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _ColorProp = require('../validators/ColorProp.js');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global $ */

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
    }
}
var Missing = _react2.default.createClass({
    displayName: 'Missing',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        missing: _ColorProp2.default,
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
            this.setState({
                missing: this.props.missing
            });
            $('#missing-usage').focus();
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
                onBlur: this.handleBlur }),
            _react2.default.createElement(_Usage2.default, { id: 'missing-usage',
                usage: 'Missing property must be an integer >= 0 and <=255.' })
        );
    }
});

exports.default = Missing;
module.exports = exports['default'];
//# sourceMappingURL=Missing.js.map