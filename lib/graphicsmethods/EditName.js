'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditName = _react2.default.createClass({
    displayName: 'EditName',
    render: function render() {
        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
                'h5',
                null,
                'Name for new GM'
            ),
            _react2.default.createElement('input', { type: 'text',
                value: this.props.name,
                onChange: this.props.change })
        );
    }
});

exports.default = EditName;
module.exports = exports['default'];
//# sourceMappingURL=EditName.js.map