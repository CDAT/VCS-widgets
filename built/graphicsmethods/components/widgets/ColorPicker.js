'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColorTable = require('./ColorTable');

var _ColorTable2 = _interopRequireDefault(_ColorTable);

var _ColorSwatch = require('./ColorSwatch');

var _ColorSwatch2 = _interopRequireDefault(_ColorSwatch);

var _ColorBars = require('./ColorBars');

var _ColorBars2 = _interopRequireDefault(_ColorBars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorPicker = _react2.default.createClass({
    displayName: 'ColorPicker',

    propTypes: {
        colormap: _react2.default.PropTypes.array,
        color: _react2.default.PropTypes.array,
        updateCurrentColor: _react2.default.PropTypes.func
    },
    render: function render() {
        var _this = this;

        var mainStyle = {
            display: "flex",
            alignItems: "stretch"
        };
        var subStyle = {
            display: "flex",
            alignItems: "space-between",
            flexDirection: "column"
        };
        var curColor = this.props.color;
        return _react2.default.createElement(
            'div',
            { style: mainStyle, className: 'row' },
            _react2.default.createElement(
                'div',
                { style: subStyle, className: 'col-sm-4' },
                _react2.default.createElement(_ColorSwatch2.default, { color: curColor }),
                _react2.default.createElement(_ColorBars2.default, { color: curColor, colorUpdated: this.props.updateCurrentColor })
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-sm-8' },
                _react2.default.createElement(_ColorTable2.default, { colors: this.props.colormap, colorSelected: function colorSelected(ind) {
                        _this.props.updateCurrentColor(ind);
                    } })
            )
        );
    }
});

exports.default = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map