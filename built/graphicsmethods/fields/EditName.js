'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditName = _react2.default.createClass({
    displayName: 'EditName',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        name: _react2.default.PropTypes.string
    },
    update: function update(e) {
        this.props.updateGraphicsMethod("name", e.target.value);
    },
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
                onChange: this.update })
        );
    }
});

exports.default = EditName;
//# sourceMappingURL=EditName.js.map