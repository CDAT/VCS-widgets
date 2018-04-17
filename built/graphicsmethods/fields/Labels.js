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

var LabelCheckbox = function (_Component) {
    _inherits(LabelCheckbox, _Component);

    // This component 
    function LabelCheckbox(props) {
        _classCallCheck(this, LabelCheckbox);

        var _this = _possibleConstructorReturn(this, (LabelCheckbox.__proto__ || Object.getPrototypeOf(LabelCheckbox)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(LabelCheckbox, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var value = event.target.value === "on" ? 'y' : 'n';
            this.props.updateGraphicsMethod("label", value);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    {
                        checked: this.props.label === 'y' || this.props.label == 1 ? true : false,
                        onChange: this.handleChange
                    },
                    'Labels'
                )
            );
        }
    }]);

    return LabelCheckbox;
}(_react.Component);

LabelCheckbox.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    label: _propTypes2.default.oneOfType([// Should be a 'y' or a 1 for true, and an 'n' or 0 for false
    _propTypes2.default.string, _propTypes2.default.number])
};

exports.default = LabelCheckbox;
//# sourceMappingURL=Labels.js.map