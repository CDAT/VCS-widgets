'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOP = function NOP() {};
var TicsAndLabels = _react2.default.createClass({
    displayName: 'TicsAndLabels',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        xmt1: _react2.default.PropTypes.string,
        xmt2: _react2.default.PropTypes.string,
        ymt1: _react2.default.PropTypes.string,
        ymt2: _react2.default.PropTypes.string,
        xtl1: _react2.default.PropTypes.string,
        xtl2: _react2.default.PropTypes.string,
        ytl1: _react2.default.PropTypes.string,
        ytl2: _react2.default.PropTypes.string
    },
    render: function render() {
        var that = this.props.that;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { id: 'mtics' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'xmtics1: '
                ),
                _react2.default.createElement('input', { name: 'xmtics1',
                    type: 'text',
                    defaultValue: this.props.xmt1,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'xmtics2: '
                ),
                _react2.default.createElement('input', { name: 'xmtics2',
                    type: 'text',
                    defaultValue: this.props.xmt2,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'ymtics1: '
                ),
                _react2.default.createElement('input', { name: 'ymtics1',
                    type: 'text',
                    defaultValue: this.props.ymt1,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'ymtics2: '
                ),
                _react2.default.createElement('input', { name: 'ymtics2',
                    type: 'text',
                    defaultValue: this.props.ymt2,
                    onChange: NOP,
                    onBlur: this.props.handleChange })
            ),
            _react2.default.createElement(
                'div',
                { id: 'ticlabels' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'xticlabels1: '
                ),
                _react2.default.createElement('input', { name: 'xticlabels1',
                    type: 'text',
                    defaultValue: this.props.xtl1,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'xticlabels2: '
                ),
                _react2.default.createElement('input', { name: 'xticlabels2',
                    type: 'text',
                    defaultValue: this.props.xtl2,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'yticlabels1: '
                ),
                _react2.default.createElement('input', { name: 'yticlabels1',
                    type: 'text',
                    defaultValue: this.props.ytl1,
                    onChange: NOP,
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'yticlabels2: '
                ),
                _react2.default.createElement('input', { name: 'yticlabels2',
                    type: 'text',
                    defaultValue: this.props.ytl2,
                    onBlur: this.props.handleChange })
            )
        );
    }
});

exports.default = TicsAndLabels;
module.exports = exports['default'];
//# sourceMappingURL=TicsAndLabels.js.map