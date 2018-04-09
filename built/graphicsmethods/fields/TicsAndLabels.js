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

// TODO: Make a good UI for this feature. For now we're not doing anything with it.


function validate(value) {}

var TicsAndLabels = function (_Component) {
    _inherits(TicsAndLabels, _Component);

    function TicsAndLabels() {
        _classCallCheck(this, TicsAndLabels);

        return _possibleConstructorReturn(this, (TicsAndLabels.__proto__ || Object.getPrototypeOf(TicsAndLabels)).apply(this, arguments));
    }

    _createClass(TicsAndLabels, [{
        key: 'handleBlur',
        value: function handleBlur(event) {
            var name = event.target.name;
            var value = validate(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var that = this.props.that;
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
    }]);

    return TicsAndLabels;
}(_react.Component);

TicsAndLabels.propTypes = {
    handleChange: _propTypes2.default.func,
    xmt1: _propTypes2.default.string,
    xmt2: _propTypes2.default.string,
    ymt1: _propTypes2.default.string,
    ymt2: _propTypes2.default.string,
    xtl1: _propTypes2.default.string,
    xtl2: _propTypes2.default.string,
    ytl1: _propTypes2.default.string,
    ytl2: _propTypes2.default.string
};

exports.default = TicsAndLabels;
//# sourceMappingURL=TicsAndLabels.js.map