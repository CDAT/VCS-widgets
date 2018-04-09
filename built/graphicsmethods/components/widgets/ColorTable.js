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

var ColorTable = function (_Component) {
    _inherits(ColorTable, _Component);

    function ColorTable() {
        _classCallCheck(this, ColorTable);

        return _possibleConstructorReturn(this, (ColorTable.__proto__ || Object.getPrototypeOf(ColorTable)).apply(this, arguments));
    }

    _createClass(ColorTable, [{
        key: 'render',
        value: function render() {
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
    }]);

    return ColorTable;
}(_react.Component);

ColorTable.propTypes = {
    colors: _propTypes2.default.array,
    colorSelected: _propTypes2.default.func
};

exports.default = ColorTable;
//# sourceMappingURL=ColorTable.js.map