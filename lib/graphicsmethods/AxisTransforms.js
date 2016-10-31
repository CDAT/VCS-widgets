'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AxisTransforms = _react2.default.createClass({
    displayName: 'AxisTransforms',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        converts: _react2.default.PropTypes.array,
        defaultX: _react2.default.PropTypes.string,
        defaultY: _react2.default.PropTypes.string
    },
    render: function render() {
        var _this = this;

        var that = this.props.that;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h5',
                null,
                'X axis transform: '
            ),
            this.props.converts.map(function (convert) {
                return _react2.default.createElement(
                    'span',
                    { key: 'xconvert' + Date.now() / Math.random() },
                    convert === _this.props.defaultX ? _react2.default.createElement('input', { name: 'xaxisconvert',
                        type: 'radio',
                        value: convert,
                        onChange: _this.props.handleChange,
                        defaultChecked: true }) : _react2.default.createElement('input', { name: 'xaxisconvert',
                        type: 'radio',
                        value: convert,
                        onChange: _this.props.handleChange }),
                    convert
                );
            }),
            _react2.default.createElement(
                'h5',
                null,
                'Y axis transform: '
            ),
            this.props.converts.map(function (convert) {
                return _react2.default.createElement(
                    'span',
                    { key: 'yconvert' + Date.now() / Math.random() },
                    convert === _this.props.defaultY ? _react2.default.createElement('input', { name: 'yaxisconvert',
                        type: 'radio',
                        value: convert,
                        onChange: _this.props.handleChange,
                        defaultChecked: true }) : _react2.default.createElement('input', { name: 'yaxisconvert',
                        type: 'radio',
                        value: convert,
                        onChange: _this.props.handleChange }),
                    convert
                );
            })
        );
    }
});

exports.default = AxisTransforms;
module.exports = exports['default'];
//# sourceMappingURL=AxisTransforms.js.map