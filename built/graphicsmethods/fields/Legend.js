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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_Component) {
    _inherits(Legend, _Component);

    function Legend(props) {
        _classCallCheck(this, Legend);

        var _this = _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));

        _this.state = {
            legend: _this.props.legend
        };
        return _this;
    }

    _createClass(Legend, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                legend: nextProps.legend
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                _react2.default.createElement(
                    'h5',
                    null,
                    'Legend Labels: '
                ),
                _react2.default.createElement('input', { type: 'text',
                    name: 'legend',
                    value: this.state.legend ? this.state.legend : '',
                    onChange: function onChange(event) {
                        _this2.setState({ legend: event.target.value });
                    },
                    onBlur: this.props.handleChange }),
                _react2.default.createElement(_Usage2.default, { usage: 'Specify the desired legend labels () or [] or {} or None to let VCS handle' })
            );
        }
    }]);

    return Legend;
}(_react.Component);

Legend.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    labels: _propTypes2.default.object,
    levels: _propTypes2.default.array,
    colors: _propTypes2.default.array,
    opacities: _propTypes2.default.array,
    patterns: _propTypes2.default.array,
    fillStyle: _propTypes2.default.string,
    showFill: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

exports.default = Legend;
//# sourceMappingURL=Legend.js.map