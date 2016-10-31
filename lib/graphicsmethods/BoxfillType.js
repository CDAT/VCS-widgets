'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxfillType = _react2.default.createClass({
    displayName: 'BoxfillType',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        type: _react2.default.PropTypes.string,
        headerClass: _react2.default.PropTypes.string,
        radioClass: _react2.default.PropTypes.string
    },
    handleChange: function handleChange(event) {
        this.props.handleChange(event);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: this.props.headerClass },
                _react2.default.createElement(
                    'h5',
                    null,
                    'Boxfill type:'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: this.props.radioClass },
                _react2.default.createElement('input', { type: 'radio',
                    name: 'boxfill_type',
                    value: 'linear',
                    id: 'bf-linear',
                    onChange: this.handleChange,
                    checked: this.props.type === 'linear' ? true : false }),
                ' linear'
            ),
            _react2.default.createElement(
                'div',
                { className: this.props.radioClass },
                _react2.default.createElement('input', { type: 'radio',
                    name: 'boxfill_type',
                    value: 'custom',
                    id: 'bf-custom',
                    onChange: this.handleChange,
                    checked: this.props.type === 'custom' ? true : false }),
                ' custom'
            )
        );
    }
});

exports.default = BoxfillType;
module.exports = exports['default'];
//# sourceMappingURL=BoxfillType.js.map