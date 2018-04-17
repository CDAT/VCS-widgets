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

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelOptions = function (_Component) {
    _inherits(LabelOptions, _Component);

    // This component 
    function LabelOptions(props) {
        _classCallCheck(this, LabelOptions);

        var _this = _possibleConstructorReturn(this, (LabelOptions.__proto__ || Object.getPrototypeOf(LabelOptions)).call(this, props));

        _this.handleLabelToggle = _this.handleLabelToggle.bind(_this);
        return _this;
    }

    _createClass(LabelOptions, [{
        key: 'handleLabelToggle',
        value: function handleLabelToggle(event) {
            var value = event.target.checked === true ? 'y' : 'n';
            this.props.updateGraphicsMethod("label", value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.labeled = this.props.label === 'y' || this.props.label === 1 || this.props.label === true ? true : false;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Form,
                    { inline: true },
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'label-toggle' },
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            null,
                            'Labels: '
                        ),
                        ' ',
                        _react2.default.createElement(_reactBootstrap.Checkbox, {
                            checked: this.labeled,
                            onChange: this.handleLabelToggle
                        })
                    )
                ),
                this.labeled ? _react2.default.createElement(
                    'div',
                    { className: 'row', style: { border: "1px solid #ccc", padding: ".5em", borderRadius: "5px", marginLeft: "auto" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(_NumberField2.default, {
                            controlId: 'labelskipdistance',
                            label: 'Label Skip Distance:',
                            minValue: 1,
                            maxValue: null,
                            step: .1,
                            value: this.props.label_skip_distance,
                            updatedValue: function updatedValue(v) {
                                _this2.props.updateGraphicsMethod("labelskipdistance", v);
                            }
                        })
                    )
                ) : null
            );
        }
    }]);

    return LabelOptions;
}(_react.Component);

LabelOptions.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    label: _propTypes2.default.oneOfType([// Should be a 'y' or a 1 for true, and an 'n' or 0 for false
    _propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    label_skip_distance: _propTypes2.default.number,
    label_background_colors: _propTypes2.default.arrayOf(_propTypes2.default.number),
    label_background_opacities: _propTypes2.default.number
};

exports.default = LabelOptions;
//# sourceMappingURL=LabelOptions.js.map