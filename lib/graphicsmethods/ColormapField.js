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
        defaultValue: _react2.default.PropTypes.string,
        handleChange: _react2.default.PropTypes.func
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
                    value: this.props.defaultValue ? this.props.defaultValue : 'rainbow',
                    onChange: this.props.handleChange,
                    className: 'form-control' },
                _react2.default.createElement(
                    'option',
                    { value: 'AMIP' },
                    'AMIP'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'NCAR' },
                    'NCAR'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'bl_to_darkred' },
                    'bl_to_darkred'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'bl_to_drkorang' },
                    'bl_to_drkorang'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'blue_to_grey' },
                    'blue_to_grey'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'blue_to_grn' },
                    'blue_to_grn'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'blue_to_orange' },
                    'blue_to_orange'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'blue_to_orgred' },
                    'blue_to_orgred'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'brown_to_blue' },
                    'brown_to_blue'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'categorical' },
                    'categorical'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'default' },
                    'Default'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'grn_to_magenta' },
                    'grn_to_magenta'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'ltbl_to_drkbl' },
                    'ltbl_to_drkbl'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'rainbow' },
                    'rainbow'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'rainbow_no_grn' },
                    'rainbow_no_grn'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'sequential' },
                    'sequential'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'white_to_blue' },
                    'white_to_blue'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'white_to_green' },
                    'white_to_green'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'white_to_magenta' },
                    'white_to_magenta'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'white_to_red' },
                    'white_to_red'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'white_to_yellow' },
                    'white_to_yellow'
                )
            )
        );
    }
});

exports.default = ColormapField;
module.exports = exports['default'];
//# sourceMappingURL=ColormapField.js.map