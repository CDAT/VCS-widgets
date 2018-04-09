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

var _BooleansField = require('../../common/BooleansField');

var _BooleansField2 = _interopRequireDefault(_BooleansField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exts = function (_Component) {
    _inherits(Exts, _Component);

    function Exts(props) {
        _classCallCheck(this, Exts);

        var _this = _possibleConstructorReturn(this, (Exts.__proto__ || Object.getPrototypeOf(Exts)).call(this, props));

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(Exts, [{
        key: 'update',
        value: function update(value_dict) {
            var ext_1 = value_dict.ext_1,
                ext_2 = value_dict.ext_2;

            if (ext_1 !== this.props.ext1) {
                this.props.updateGraphicsMethod("ext_1", ext_1);
            } else {
                this.props.updateGraphicsMethod("ext_2", ext_2);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var usage = function usage(side, where) {
                return "Draws an extension arrow on " + side + " side (values " + where + " level)";
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'Extensions'
                ),
                _react2.default.createElement(_BooleansField2.default, { updatedValue: this.update, labels: ["Extend before first value", "Extend after last value"], options: ["ext_1", "ext_2"], value: { "ext_1": this.props.ext1, "ext_2": this.props.ext2 }, inline: true })
            );
        }
    }]);

    return Exts;
}(_react.Component);

Exts.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    ext1: _propTypes2.default.bool,
    ext2: _propTypes2.default.bool
};

exports.default = Exts;
//# sourceMappingURL=Exts.js.map