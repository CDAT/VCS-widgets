'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateAxisSettings = function (_Component) {
    _inherits(TemplateAxisSettings, _Component);

    function TemplateAxisSettings(props) {
        _classCallCheck(this, TemplateAxisSettings);

        var _this = _possibleConstructorReturn(this, (TemplateAxisSettings.__proto__ || Object.getPrototypeOf(TemplateAxisSettings)).call(this, props));

        _this.updateAxisValue = _this.updateAxisValue.bind(_this);
        return _this;
    }

    _createClass(TemplateAxisSettings, [{
        key: 'updateAxisValue',
        value: function updateAxisValue(key) {
            var _this2 = this;

            var self = this;
            var validator = parseFloat;
            if (key === "priority") {
                validator = parseInt;
            }
            return function (e) {
                self.props.update(key, validator(_this2.range(e.target.value)));
            };
        }
    }, {
        key: 'range',
        value: function range(alt) {
            if (alt < 0) {
                alt = 0;
            } else if (alt > 1) {
                alt = 1;
            }
            return alt;
        }
    }, {
        key: 'render',
        value: function render() {

            var name = this.props.axis.member;
            var priority = this.props.axis.priority;
            var isLabel = false;

            if (name.includes('label')) {
                isLabel = true;
            }

            if (name.includes('y')) {
                var axis = this.props.axis.x;
                var axis1 = this.props.axis.x1;
                var axis2 = this.props.axis.x2;
                var label = "x";
                var label1 = "x1";
                var label2 = "x2";
            } else if (name.includes('x')) {
                var axis = this.props.axis.y;
                var axis1 = this.props.axis.y1;
                var axis2 = this.props.axis.y2;
                var label = "y";
                var label1 = "y1";
                var label2 = "y2";
            }

            return _react2.default.createElement(
                'div',
                null,
                isLabel ? _react2.default.createElement(
                    'div',
                    null,
                    name,
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    label
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { type: 'number', value: axis, name: name + "_" + label,
                                        onChange: this.updateAxisValue(label) })
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Priority'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { type: 'number', value: priority, name: name + "_priority",
                                        onChange: this.updateAxisValue("priority") })
                                )
                            )
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    null,
                    name,
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    label,
                                    '1'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { type: 'number', value: axis1, name: name + "_" + label1,
                                        onChange: this.updateAxisValue(label1) })
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    label,
                                    '2'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { type: 'number', value: axis2, name: name + "_" + label2,
                                        onChange: this.updateAxisValue(label2) })
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Priority'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement('input', { type: 'number', value: priority, name: name + "_priority",
                                        onChange: this.updateAxisValue("priority") })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TemplateAxisSettings;
}(_react.Component);

TemplateAxisSettings.propTypes = {
    axis: _propTypes2.default.object,
    update: _propTypes2.default.func
};

exports.default = TemplateAxisSettings;
//# sourceMappingURL=TemplateAxisSettings.js.map