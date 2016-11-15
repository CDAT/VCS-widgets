'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projection = _react2.default.createClass({
    displayName: 'Projection',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        projection: _react2.default.PropTypes.string
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { id: 'projection-selector' },
            _react2.default.createElement(
                'h5',
                null,
                'Projection: '
            ),
            _react2.default.createElement(
                'select',
                { name: 'projection',
                    value: this.props.projection,
                    onChange: this.props.handleChange,
                    className: 'form-control' },
                _react2.default.createElement(
                    'option',
                    { value: 'default' },
                    'Default'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'lambert' },
                    'Lambert'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'linear' },
                    'Linear'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'mercator' },
                    'Mercator'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'mollweide' },
                    'Mollweide'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'orthographic' },
                    'Orthographic'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'polar' },
                    'Polar'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'polyconic' },
                    'Polyconic'
                ),
                _react2.default.createElement(
                    'option',
                    { value: 'robinson' },
                    'Robinson'
                )
            )
        );
    }
});

exports.default = Projection;
module.exports = exports['default'];
//# sourceMappingURL=Projection.js.map