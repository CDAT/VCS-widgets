'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var DatawcCoordinates = _react2.default.createClass({
    displayName: 'DatawcCoordinates',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        x1: _react2.default.PropTypes.number,
        x2: _react2.default.PropTypes.number,
        y1: _react2.default.PropTypes.number,
        y2: _react2.default.PropTypes.number
    },
    handleBlur: function handleBlur(e) {
        this.props.updateGraphicsMethod(e.target.name, parseFloat(e.target.value));
    },
    render: function render() {
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
});

exports.default = DatawcCoordinates;
//# sourceMappingURL=DatawcCoordinates.js.map