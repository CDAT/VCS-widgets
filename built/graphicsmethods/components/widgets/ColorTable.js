'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorBrightness(red, green, blue) {
    return (299 * red + 587 * green + 114 * blue) / 1000;
}

function compareBrightness(c1, c2) {
    var red1 = c1[0],
        green1 = c1[1],
        blue1 = c1[2];
    var red2 = c2[0],
        green2 = c2[1],
        blue2 = c2[2];
    return Math.abs(colorBrightness(red1, green1, blue1) - colorBrightness(red2, green2, blue2));
}

var ColorTable = _react2.default.createClass({
    displayName: 'ColorTable',

    propTypes: {
        colors: _react2.default.PropTypes.array,
        colorSelected: _react2.default.PropTypes.func
    },
    render: function render() {
        var self = this;
        return _react2.default.createElement(
            'div',
            { style: { 'display': 'flex', 'flexWrap': 'wrap' } },
            this.props.colors.map(function (c, ind) {
                var bgcolor = "rgba(" + c.join(", ") + ")";
                var textColor = [255, 255, 255, 1];
                if (compareBrightness(textColor, c) <= 125) {
                    textColor = [0, 0, 0, 1];
                }

                textColor = "rgba(" + textColor.join(", ") + ")";
                var style = {
                    'backgroundColor': bgcolor,
                    'color': textColor,
                    'height': '30px',
                    'width': '30px',
                    'textAlign': 'center',
                    'lineHeight': '30px'
                };
                return _react2.default.createElement(
                    'div',
                    { key: ind, onClick: function onClick(e) {
                            self.props.colorSelected(ind);
                        }, style: style },
                    ind
                );
            })
        );
    }
});

exports.default = ColorTable;
//# sourceMappingURL=ColorTable.js.map