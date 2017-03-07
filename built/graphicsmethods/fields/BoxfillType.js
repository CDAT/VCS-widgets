'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoxfillType = _react2.default.createClass({
    displayName: 'BoxfillType',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        type: _react2.default.PropTypes.string
    },
    handleChange: function handleChange(event) {
        this.props.updateGraphicsMethod("boxfill_type", event.target.value);
    },
    render: function render() {
        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'boxfill_type' },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Boxfill Type:'
            ),
            _react2.default.createElement(
                _reactBootstrap.Radio,
                { value: 'linear', name: 'boxfill_type', onChange: this.handleChange, checked: this.props.type === "linear", inline: true },
                'Linear'
            ),
            _react2.default.createElement(
                _reactBootstrap.Radio,
                { value: 'custom', name: 'boxfill_type', onChange: this.handleChange, checked: this.props.type === "custom", inline: true },
                'Custom'
            )
        );
    }
});

exports.default = BoxfillType;
//# sourceMappingURL=BoxfillType.js.map