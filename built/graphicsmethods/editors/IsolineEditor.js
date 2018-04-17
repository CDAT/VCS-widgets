'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatawcCoordinates = require('../fields/DatawcCoordinates');

var _DatawcCoordinates2 = _interopRequireDefault(_DatawcCoordinates);

var _ColormapField = require('../fields/ColormapField');

var _ColormapField2 = _interopRequireDefault(_ColormapField);

var _Projection = require('../fields/Projection');

var _Projection2 = _interopRequireDefault(_Projection);

var _EditName = require('../fields/EditName');

var _EditName2 = _interopRequireDefault(_EditName);

var _LabelOptions = require('../fields/LabelOptions');

var _LabelOptions2 = _interopRequireDefault(_LabelOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsolineEditor = function (_Component) {
    _inherits(IsolineEditor, _Component);

    function IsolineEditor() {
        _classCallCheck(this, IsolineEditor);

        return _possibleConstructorReturn(this, (IsolineEditor.__proto__ || Object.getPrototypeOf(IsolineEditor)).apply(this, arguments));
    }

    _createClass(IsolineEditor, [{
        key: 'render',
        value: function render() {
            console.log(this.props);
            console.log(this.props.graphicsMethod.label);
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_EditName2.default, { name: this.props.graphicsMethod.name,
                            updateGraphicsMethod: this.props.updateField })
                    )
                ),
                _react2.default.createElement(
                    'h4',
                    null,
                    'Isoline Settings'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_ColormapField2.default, {
                            updateGraphicsMethod: this.props.updateField,
                            colormap: this.props.graphicsMethod['colormap'] === null ? "default" : this.props.graphicsMethod['colormap'],
                            colormaps: this.props.colormaps
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_Projection2.default, { projection: this.props.graphicsMethod['projection'],
                            updateGraphicsMethod: this.props.updateField })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_LabelOptions2.default, {
                            updateGraphicsMethod: this.props.updateField,
                            label: this.props.graphicsMethod.label,
                            label_skip_distance: this.props.graphicsMethod.labelskipdistance
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_DatawcCoordinates2.default, {
                            updateGraphicsMethod: this.props.updateField,
                            x1: this.props.graphicsMethod['datawc_x1'],
                            x2: this.props.graphicsMethod['datawc_x2'],
                            y1: this.props.graphicsMethod['datawc_y1'],
                            y2: this.props.graphicsMethod['datawc_y2']
                        })
                    )
                )
            );
        }
    }]);

    return IsolineEditor;
}(_react.Component);

IsolineEditor.propTypes = {
    colormaps: _propTypes2.default.object,
    graphicsMethod: _propTypes2.default.object,
    updateGraphicsMethod: _propTypes2.default.func,
    updateField: _propTypes2.default.func
};

exports.default = IsolineEditor;
//# sourceMappingURL=IsolineEditor.js.map