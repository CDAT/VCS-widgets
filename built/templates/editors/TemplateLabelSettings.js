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

var TemplateLabelSettings = function (_Component) {
    _inherits(TemplateLabelSettings, _Component);

    function TemplateLabelSettings(props) {
        _classCallCheck(this, TemplateLabelSettings);

        var _this = _possibleConstructorReturn(this, (TemplateLabelSettings.__proto__ || Object.getPrototypeOf(TemplateLabelSettings)).call(this, props));

        _this.updateLabelValue = _this.updateLabelValue.bind(_this);
        return _this;
    }

    _createClass(TemplateLabelSettings, [{
        key: 'updateLabelValue',
        value: function updateLabelValue(key) {
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
            var x = this.props.label.x;
            var y = this.props.label.y;
            var priority = this.props.label.priority;
            var name = this.props.label.member;
            var styles = { padding: "5px" };

            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    { style: styles },
                    name
                ),
                _react2.default.createElement(
                    'td',
                    { style: styles },
                    _react2.default.createElement('input', { style: { width: 120 }, type: 'number', step: '0.01', defaultValue: x, name: '{name}_x', onBlur: this.updateLabelValue("x") })
                ),
                _react2.default.createElement(
                    'td',
                    { style: styles },
                    _react2.default.createElement('input', { style: { width: 120 }, type: 'number', step: '0.01', defaultValue: y, name: '{name}_y', onBlur: this.updateLabelValue("y") })
                ),
                _react2.default.createElement(
                    'td',
                    { style: styles },
                    _react2.default.createElement('input', { style: { width: 120 }, type: 'number', defaultValue: priority, name: '{name}_priority', onBlur: this.updateLabelValue("priority") })
                )
            );
        }
    }]);

    return TemplateLabelSettings;
}(_react.Component);

TemplateLabelSettings.propTypes = {
    label: _propTypes2.default.object,
    update: _propTypes2.default.func
};

exports.default = TemplateLabelSettings;
//# sourceMappingURL=TemplateLabelSettings.js.map