'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NumberField = require('../../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorBars = _react2.default.createClass({
    displayName: 'ColorBars',

    propTypes: {
        color: _react2.default.PropTypes.array,
        colorUpdated: _react2.default.PropTypes.func
    },
    updateRed: function updateRed(v) {
        this.props.colorUpdated([v, this.green.props.value, this.blue.props.value, this.alpha.props.value / 255]);
    },
    updateBlue: function updateBlue(v) {
        this.props.colorUpdated([this.red.props.value, this.green.props.value, v, this.alpha.props.value / 255]);
    },
    updateGreen: function updateGreen(v) {
        this.props.colorUpdated([this.red.props.value, v, this.blue.props.value, this.alpha.props.value / 255]);
    },
    updateAlpha: function updateAlpha(v) {
        this.props.colorUpdated([this.red.props.value, this.green.props.value, this.blue.props.value, v / 255]);
    },
    render: function render() {
        var _this = this;

        var style = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
        };
        return _react2.default.createElement(
            'div',
            { style: style },
            _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateRed, ref: function ref(e) {
                    _this.red = e;
                }, value: this.props.color[0], label: 'Red:', minValue: 0, maxValue: 255, controlId: 'cbred' }),
            _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateGreen, ref: function ref(e) {
                    _this.green = e;
                }, value: this.props.color[1], label: 'Green:', minValue: 0, maxValue: 255, controlId: 'cbgreen' }),
            _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateBlue, ref: function ref(e) {
                    _this.blue = e;
                }, value: this.props.color[2], label: 'Blue:', minValue: 0, maxValue: 255, controlId: 'cbblue' }),
            _react2.default.createElement(_NumberField2.default, { updatedValue: this.updateAlpha, ref: function ref(e) {
                    _this.alpha = e;
                }, value: this.props.color[3] * 255, label: 'Alpha:', minValue: 0, maxValue: 255, controlId: 'cbalpha' })
        );
    }
});

exports.default = ColorBars;
//# sourceMappingURL=ColorBars.js.map