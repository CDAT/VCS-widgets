'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateTics(value) {}
function validateLabels(value) {
    // must be a valid JSON with float=>string mappings

}
var TicsAndLabels = _react2.default.createClass({
    displayName: 'TicsAndLabels',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        xmt1: _react2.default.PropTypes.string,
        xmt2: _react2.default.PropTypes.string,
        ymt1: _react2.default.PropTypes.string,
        ymt2: _react2.default.PropTypes.string,
        xtl1: _react2.default.PropTypes.string,
        xtl2: _react2.default.PropTypes.string,
        ytl1: _react2.default.PropTypes.string,
        ytl2: _react2.default.PropTypes.string
    },
    handleBlur: function handleBlur(event) {},
    readSlider: function readSlider(event) {
        var label_name = event.target.name;
        var slider_value = $('#' + label_name).val();
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { id: 'mtics' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'xmtics1: '
                ),
                _react2.default.createElement('input', { name: 'xmtics1',
                    type: 'text',
                    defaultValue: this.props.xmt1,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'xmtics2: '
                ),
                _react2.default.createElement('input', { name: 'xmtics2',
                    type: 'text',
                    defaultValue: this.props.xmt2,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'ymtics1: '
                ),
                _react2.default.createElement('input', { name: 'ymtics1',
                    type: 'text',
                    defaultValue: this.props.ymt1,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'ymtics2: '
                ),
                _react2.default.createElement('input', { name: 'ymtics2',
                    type: 'text',
                    defaultValue: this.props.ymt2,
                    onChange: NOP,
                    onBlur: this.handleBlur })
            ),
            _react2.default.createElement(
                'div',
                { id: 'ticlabels' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'xticlabels1: '
                ),
                _react2.default.createElement('input', { id: 'xtl1',
                    type: 'range',
                    step: '0.001',
                    min: '-180',
                    max: '180',
                    defaultValue: '0',
                    onChange: function onChange(event) {
                        _this.setState({ xtl1Slider: event.target.value });
                    } }),
                _react2.default.createElement(
                    'button',
                    { name: 'xtl1', onClick: this.readSlider },
                    'Add Label ',
                    this.state.xtl1Slider
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'xtl1-labels' },
                    this.props.xtl1 !== null && _typeof(this.props.xtl1) === 'object' ? Object.keys(this.props.xtl1).map(function (value, index) {}) : ''
                ),
                _react2.default.createElement('input', { name: 'xticlabels1',
                    type: 'text',
                    defaultValue: this.props.xtl1,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'xticlabels2: '
                ),
                _react2.default.createElement('input', { name: 'xticlabels2',
                    type: 'text',
                    defaultValue: this.props.xtl2,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'yticlabels1: '
                ),
                _react2.default.createElement('input', { name: 'yticlabels1',
                    type: 'text',
                    defaultValue: this.props.ytl1,
                    onChange: NOP,
                    onBlur: this.handleBlur }),
                _react2.default.createElement(
                    'h5',
                    null,
                    'yticlabels2: '
                ),
                _react2.default.createElement('input', { name: 'yticlabels2',
                    type: 'text',
                    defaultValue: this.props.ytl2,
                    onBlur: this.handleBlur })
            )
        );
    }
});

exports.default = TicsAndLabels;
module.exports = exports['default'];
//# sourceMappingURL=TicsAndLabels.js.map