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

// TODO: Add dynamic projections, make configurable.

var Projection = function (_Component) {
    _inherits(Projection, _Component);

    function Projection() {
        _classCallCheck(this, Projection);

        return _possibleConstructorReturn(this, (Projection.__proto__ || Object.getPrototypeOf(Projection)).apply(this, arguments));
    }

    _createClass(Projection, [{
        key: 'render',
        value: function render() {
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
    }]);

    return Projection;
}(_react.Component);

Projection.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    projection: _propTypes2.default.string
};

exports.default = Projection;
//# sourceMappingURL=Projection.js.map