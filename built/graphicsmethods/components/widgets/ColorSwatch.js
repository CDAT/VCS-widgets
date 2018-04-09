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

var ColorSwatch = function (_Component) {
    _inherits(ColorSwatch, _Component);

    function ColorSwatch() {
        _classCallCheck(this, ColorSwatch);

        return _possibleConstructorReturn(this, (ColorSwatch.__proto__ || Object.getPrototypeOf(ColorSwatch)).apply(this, arguments));
    }

    _createClass(ColorSwatch, [{
        key: 'render',
        value: function render() {
            var color = "rgba(" + this.props.color.join(", ") + ")";
            var style = {
                backgroundColor: color,
                boxShadow: "0 0 0 2px black",
                border: "2px solid white",
                height: "200px"
            };
            return _react2.default.createElement('div', { style: style });
        }
    }]);

    return ColorSwatch;
}(_react.Component);

ColorSwatch.propTypes = {
    color: _propTypes2.default.array
};

exports.default = ColorSwatch;
//# sourceMappingURL=ColorSwatch.js.map