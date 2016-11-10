'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Legend = _react2.default.createClass({
    displayName: 'Legend',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        legend: _react2.default.PropTypes.string,
        className: _react2.default.PropTypes.string
    },
    getInitialState: function getInitialState() {
        return {
            legend: this.props.legend
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            legend: nextProps.legend
        });
    },
    render: function render() {
        var _this = this;

        var usage = "Specify the desired legend labels () or [] or {} or None to let VCS handle";
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
                    _this.setState({ legend: event.target.value });
                },
                onBlur: this.props.handleChange }),
            _react2.default.createElement(_Usage2.default, { usage: usage })
        );
    }
});

exports.default = Legend;
module.exports = exports['default'];
//# sourceMappingURL=Legend.js.map