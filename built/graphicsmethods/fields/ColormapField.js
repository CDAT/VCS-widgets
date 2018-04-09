'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColormapField = function (_Component) {
    _inherits(ColormapField, _Component);

    function ColormapField(props) {
        _classCallCheck(this, ColormapField);

        var _this = _possibleConstructorReturn(this, (ColormapField.__proto__ || Object.getPrototypeOf(ColormapField)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(ColormapField, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var cmap = e.target.value;
            this.props.updateGraphicsMethod("colormap", cmap);
        }
    }, {
        key: 'render',
        value: function render() {
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
    }]);

    return ColormapField;
}(_react.Component);

ColormapField.propTypes = {
    colormap: _propTypes2.default.string,
    updateGraphicsMethod: _propTypes2.default.func,
    colormaps: _propTypes2.default.object
};

exports.default = ColormapField;
//# sourceMappingURL=ColormapField.js.map