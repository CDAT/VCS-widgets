'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global $ */

function validate(value, maximum) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+(\.[0-9]+)?$/)) {
            var new_value = Number.parseFloat(value);
            if (Math.abs(new_value) > maximum) {
                return false;
            } else {
                return new_value;
            }
        } else {
            return false;
        }
    }
}

var DatawcCoordinates = function (_Component) {
    _inherits(DatawcCoordinates, _Component);

    function DatawcCoordinates(props) {
        _classCallCheck(this, DatawcCoordinates);

        var _this = _possibleConstructorReturn(this, (DatawcCoordinates.__proto__ || Object.getPrototypeOf(DatawcCoordinates)).call(this, props));

        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(DatawcCoordinates, [{
        key: 'handleBlur',
        value: function handleBlur(e) {
            this.props.updateGraphicsMethod(e.target.name, parseFloat(e.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(_NumberField2.default, { controlId: 'datawc_x1', label: 'X Axis Start:', minValue: null, maxValue: null, step: null, value: this.props.x1, updatedValue: function updatedValue(v) {
                                self.props.updateGraphicsMethod("datawc_x1", v);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(_NumberField2.default, { controlId: 'datawc_y1', label: 'Y Axis Start:', minValue: null, maxValue: null, step: null, value: this.props.y1, updatedValue: function updatedValue(v) {
                                self.props.updateGraphicsMethod("datawc_y1", v);
                            } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(_NumberField2.default, { controlId: 'datawc_x2', label: 'X Axis End:', minValue: null, maxValue: null, step: null, value: this.props.x2, updatedValue: function updatedValue(v) {
                                self.props.updateGraphicsMethod("datawc_x2", v);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6' },
                        _react2.default.createElement(_NumberField2.default, { controlId: 'datawc_y2', label: 'Y Axis End:', minValue: null, maxValue: null, step: null, value: this.props.y2, updatedValue: function updatedValue(v) {
                                self.props.updateGraphicsMethod("datawc_y2", v);
                            } })
                    )
                )
            );
        }
    }]);

    return DatawcCoordinates;
}(_react.Component);

DatawcCoordinates.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    x1: _propTypes2.default.number,
    x2: _propTypes2.default.number,
    y1: _propTypes2.default.number,
    y2: _propTypes2.default.number
};

exports.default = DatawcCoordinates;
//# sourceMappingURL=DatawcCoordinates.js.map