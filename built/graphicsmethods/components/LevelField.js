'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelField = function (_Component) {
    _inherits(LevelField, _Component);

    function LevelField() {
        _classCallCheck(this, LevelField);

        return _possibleConstructorReturn(this, (LevelField.__proto__ || Object.getPrototypeOf(LevelField)).apply(this, arguments));
    }

    _createClass(LevelField, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var editor = null;
            if (typeof this.props.value === "number") {
                editor = _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-12' },
                            _react2.default.createElement(
                                _reactBootstrap.ControlLabel,
                                null,
                                'Level: '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-1' },
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: function onClick(e) {
                                        _this2.props.onRemove();
                                    } },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-11' },
                            _react2.default.createElement(_NumberField2.default, { controlId: "level_" + this.props.ind, maxValue: null, minValue: null, updatedValue: this.props.onChange, step: null, value: this.props.value })
                        )
                    )
                );
            } else if (typeof this.props.value === "string") {
                editor = _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: "level_" + this.props.ind },
                    _react2.default.createElement(
                        _reactBootstrap.ControlLabel,
                        null,
                        'Level (legend extension):'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, value: this.props.value.charAt(0) === "-" ? "-Infinity" : "Infinity" })
                );
            } else if (Array.isArray(this.props.value)) {
                // It's a discontinuous level
                console.log("No support for discontinuous levels at this point.");
            }
            return editor;
        }
    }]);

    return LevelField;
}(_react.Component);

exports.default = LevelField;
//# sourceMappingURL=LevelField.js.map