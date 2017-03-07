'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NumberField = require('../components/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global $ */

function verify(value) {
    if (typeof value === 'string') {
        if (value.match(/^-?[0-9]+((\.[0-9]+)?e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    }
}

var LevelOneTwo = _react2.default.createClass({
    displayName: 'LevelOneTwo',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        level1: _react2.default.PropTypes.number,
        level2: _react2.default.PropTypes.number
    },
    render: function render() {
        var self = this;
        /*
        value: React.PropTypes.number,
        minValue: React.PropTypes.number,
        maxvalue: React.PropTypes.number,
        updatedValue: React.PropTypes.func,
        label: React.PropTypes.string,
        controlId: React.PropTypes.string,
        step: React.PropTypes.number,
        autoround: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        */
        return _react2.default.createElement(
            'div',
            { id: 'level-one-two' },
            _react2.default.createElement(_NumberField2.default, { controlId: 'level_1', label: 'Starting Level', minValue: null, maxValue: null, step: null, value: this.props.level1, updatedValue: function updatedValue(v) {
                    self.props.updateGraphicsMethod("level_1", v);
                } }),
            _react2.default.createElement(_NumberField2.default, { controlId: 'level_2', label: 'Ending Level', minValue: null, maxValue: null, step: null, value: this.props.level2, updatedValue: function updatedValue(v) {
                    self.props.updateGraphicsMethod("level_2", v);
                } })
        );
    }
});

exports.default = LevelOneTwo;
//# sourceMappingURL=LevelOneTwo.js.map