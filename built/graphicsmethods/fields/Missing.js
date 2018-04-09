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

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorField = require('../components/ColorField');

var _ColorField2 = _interopRequireDefault(_ColorField);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function verify(value) {
    var new_value = void 0;
    if (typeof value === 'string') {
        if (value.match(/[^0-9]+/) || value === '') {
            return false;
        } else {
            new_value = Number.parseInt(value);
            if (new_value < 0 || new_value > 255) {
                return false;
            } else {
                return new_value;
            }
        }
    }
}

var Missing = function (_Component) {
    _inherits(Missing, _Component);

    function Missing() {
        _classCallCheck(this, Missing);

        return _possibleConstructorReturn(this, (Missing.__proto__ || Object.getPrototypeOf(Missing)).apply(this, arguments));
    }

    _createClass(Missing, [{
        key: 'render',
        value: function render() {
            var update = this.props.updateGraphicsMethod;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ColorField2.default, { inline: true, controlId: 'missing-color', color: this.props.missing, colormap: this.props.colormap, colorChanged: function colorChanged(c) {
                        update("missing", c);
                    }, label: 'Missing Data Color:' }),
                _react2.default.createElement(_Usage2.default, { id: 'missing-usage',
                    usage: 'Color to use for values masked out of your data.' })
            );
        }
    }]);

    return Missing;
}(_react.Component);

Missing.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    missing: _ColorProp2.default,
    className: _propTypes2.default.string,
    colormap: _propTypes2.default.array
};

exports.default = Missing;
//# sourceMappingURL=Missing.js.map