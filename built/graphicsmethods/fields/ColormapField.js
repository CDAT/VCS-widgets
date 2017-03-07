'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColormapField = _react2.default.createClass({
    displayName: 'ColormapField',

    propTypes: {
        colormap: _react2.default.PropTypes.string,
        updateGraphicsMethod: _react2.default.PropTypes.func,
        colormaps: _react2.default.PropTypes.object
    },
    handleChange: function handleChange(e) {
        var cmap = e.target.value;
        this.props.updateGraphicsMethod("colormap", cmap);
    },
    render: function render() {
        var cmap = this.props.colormap;
        if (cmap === null) {
            cmap = "default";
        }
        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'colormap' },
            _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'Colormap:'
            ),
            _react2.default.createElement(
                _reactBootstrap.FormControl,
                { onChange: this.handleChange, componentClass: 'select', value: this.props.colormap },
                Object.keys(this.props.colormaps).map(function (cmap, index) {
                    return _react2.default.createElement(
                        'option',
                        { key: index, value: cmap },
                        cmap
                    );
                })
            )
        );
    }
});

exports.default = ColormapField;
//# sourceMappingURL=ColormapField.js.map