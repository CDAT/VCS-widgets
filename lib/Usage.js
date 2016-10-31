'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Usage = _react2.default.createClass({
    displayName: 'Usage',

    propTypes: {
        className: _react2.default.PropTypes.string,
        container: _react2.default.PropTypes.string,
        html: _react2.default.PropTypes.string,
        id: _react2.default.PropTypes.string,
        placement: _react2.default.PropTypes.string,
        usage: _react2.default.PropTypes.string,
        warning: _react2.default.PropTypes.bool
    },
    getDefaultProps: function getDefaultProps() {
        return {
            warning: false,
            placement: 'right',
            id: 'usage',
            className: '',
            usage: '',
            container: 'body'
        };
    },
    handleEvent: function handleEvent(event) {
        $(event.target).popover('toggle');
    },
    render: function render() {
        return _react2.default.createElement(
            'span',
            null,
            '\u2003',
            _react2.default.createElement(
                'a',
                { tabIndex: '0',
                    onFocus: this.handleEvent,
                    onBlur: function onBlur(event) {
                        $(event.target).popover('hide');
                    },
                    'data-content': this.props.usage,
                    'data-toggle': 'popover',
                    role: 'button',
                    className: this.props.className,
                    id: this.props.id,
                    'data-trigger': 'focus',
                    'data-placement': this.props.placement,
                    'data-html': this.props.warning ? true : false,
                    'data-container': this.props.container },
                '?'
            )
        );
    }
});

exports.default = Usage;
module.exports = exports['default'];
//# sourceMappingURL=Usage.js.map