'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColormapField = _react2.default.createClass({
    displayName: 'ColormapField',

    propTypes: {
        colormap: _react2.default.PropTypes.string,
        handleChange: _react2.default.PropTypes.func,
        colormaps: _react2.default.PropTypes.array
    },
    getDefaultProps: function getDefaultProps() {
        return {
            colormap: 'default',
            colormaps: ['default']
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h5',
                null,
                'Colormap: '
            ),
            _react2.default.createElement(
                'select',
                { name: 'colormap',
                    value: this.props.colormap ? this.props.colormap : 'default',
                    onChange: this.props.handleChange,
                    className: 'form-control' },
                this.props.colormaps.map(function (value, index) {
                    return _react2.default.createElement(
                        'option',
                        { key: value + index, value: value },
                        value
                    );
                })
            )
        );
    }
});

exports.default = ColormapField;
module.exports = exports['default'];
//# sourceMappingURL=ColormapField.js.map