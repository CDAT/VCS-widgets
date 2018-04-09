'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var LevelOneTwo = function (_Component) {
    _inherits(LevelOneTwo, _Component);

    function LevelOneTwo() {
        _classCallCheck(this, LevelOneTwo);

        return _possibleConstructorReturn(this, (LevelOneTwo.__proto__ || Object.getPrototypeOf(LevelOneTwo)).apply(this, arguments));
    }

    _createClass(LevelOneTwo, [{
        key: 'render',
        value: function render() {
            var self = this;
            /*
            value: PropTypes.number,
            minValue: PropTypes.number,
            maxvalue: PropTypes.number,
            updatedValue: PropTypes.func,
            label: PropTypes.string,
            controlId: PropTypes.string,
            step: PropTypes.number,
            autoround: PropTypes.bool,
            placeholder: PropTypes.string,
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
    }]);

    return LevelOneTwo;
}(_react.Component);

LevelOneTwo.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    level1: _propTypes2.default.number,
    level2: _propTypes2.default.number
};

exports.default = LevelOneTwo;
//# sourceMappingURL=LevelOneTwo.js.map