'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add dynamic projections, make configurable.

var Projection = _react2.default.createClass({
    displayName: 'Projection',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        projection: _react2.default.PropTypes.string
    },
    render: function render() {
        var self = this;
        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'projection' },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Projection'
            ),
            _react2.default.createElement(
                _reactBootstrap.FormControl,
                { value: this.props.projection, componentClass: 'select', onChange: function onChange(e) {
                        self.props.updateGraphicsMethod("projection", e.target.value);
                    } },
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
//# sourceMappingURL=Projection.js.map