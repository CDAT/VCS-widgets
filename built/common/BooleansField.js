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

var BooleansField = function (_Component) {
    _inherits(BooleansField, _Component);

    function BooleansField(props) {
        _classCallCheck(this, BooleansField);

        var _this = _possibleConstructorReturn(this, (BooleansField.__proto__ || Object.getPrototypeOf(BooleansField)).call(this, props));

        _this.currentValue = _this.currentValue.bind(_this);
        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(BooleansField, [{
        key: 'currentValue',
        value: function currentValue() {
            var _this2 = this;

            var value_dict = {};
            this.props.options.map(function (o) {
                value_dict[o] = false;
                if (o === _this2.props.value) {
                    value_dict[o] = true;
                } else if (_this2.props.value !== null && _this2.props.value[o]) {
                    value_dict[o] = true;
                }
            });
            return value_dict;
        }
    }, {
        key: 'update',
        value: function update(e) {
            var new_value = e.target.checked;
            if (this.props.multiple) {
                var value_dict = this.currentValue();
                value_dict[e.target.value] = new_value;
                this.props.updatedValue(value_dict);
            } else {
                var d = this.props.options.reduce(function (prev, cur) {
                    prev[cur] = cur === e.target.value;
                    return prev;
                }, {});
                this.props.updatedValue(d);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var self = this;
            var value_dict = this.currentValue();
            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: '{this.props.controlId}' },
                this.props.options.map(function (o, ind) {
                    if (self.props.multiple) {
                        return _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            { inline: _this3.props.inline, key: ind, name: self.props.controlId, value: o, checked: value_dict[o], onChange: self.update },
                            ' ',
                            self.props.labels[ind],
                            ' '
                        );
                    } else {
                        return _react2.default.createElement(
                            _reactBootstrap.Radio,
                            { inline: _this3.props.inline, key: ind, name: self.props.controlId, value: o, checked: value_dict[o], onChange: self.update },
                            ' ',
                            self.props.labels[ind],
                            ' '
                        );
                    }
                })
            );
        }
    }]);

    return BooleansField;
}(_react.Component);

BooleansField.propTypes = {
    labels: _propTypes2.default.array,
    value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    options: _propTypes2.default.array,
    updatedValue: _propTypes2.default.func,
    inline: _propTypes2.default.bool,
    controlId: _propTypes2.default.string,
    multiple: _propTypes2.default.bool
};

BooleansField.defaultProps = {
    inline: false,
    multiple: true
};

exports.default = BooleansField;
//# sourceMappingURL=BooleansField.js.map