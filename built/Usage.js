'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Usage = _react2.default.createClass({
    displayName: 'Usage',

    propTypes: {
        placement: _react2.default.PropTypes.string,
        usage: _react2.default.PropTypes.string
    },
    getDefaultProps: function getDefaultProps() {
        return {
            placement: 'right',
            usage: ''
        };
    },
    render: function render() {
        var popover = _react2.default.createElement(
            _reactBootstrap.Popover,
            { id: 'usage-popover', title: 'Usage:' },
            _react2.default.createElement(
                'span',
                null,
                this.props.usage
            )
        );
        return _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { trigger: 'click', placement: this.props.placement, overlay: popover },
            _react2.default.createElement(
                _reactBootstrap.Button,
                null,
                '?'
            )
        );
    }
});

exports.default = Usage;
//# sourceMappingURL=Usage.js.map