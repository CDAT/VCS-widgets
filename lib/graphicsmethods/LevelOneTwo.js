'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOP = function NOP() {};
/* global $ */

function verify(value) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+(\.?e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    }
}
var LevelOneTwo = _react2.default.createClass({
    displayName: 'LevelOneTwo',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        level1: _react2.default.PropTypes.number,
        level2: _react2.default.PropTypes.number
    },
    getInitialState: function getInitialState() {
        return {
            level1: this.props.level1,
            level2: this.props.level2
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            level1: nextProps.level1,
            level2: nextProps.level2
        });
    },
    handleBlur: function handleBlur(event) {
        var property_name = event.target.name;
        var value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange(property_name, value);
        } else {
            if (property_name === 'level_1') {
                this.setState({
                    level1: this.props.level1
                });
                $('#level-1-usage').focus();
            } else {
                this.setState({
                    level2: this.props.level2
                });
                $('#level-2-usage').focus();
            }
        }
    },
    render: function render() {
        var _this = this;

        var usage = function usage(position) {
            return "Integer representing the  " + position + " level. " + "If 1e+20, VCS fills in the value";
        };
        return _react2.default.createElement(
            'div',
            { id: 'level-one-two' },
            _react2.default.createElement(
                'h5',
                null,
                'Level 1:'
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'level_1',
                value: this.state.level1 === 0 || this.state.level1 ? Number.isInteger(this.state.level1) && Math.abs(this.state.level1) > 1e4 ? this.state.level1.toExponential() : this.state.level1 : '',
                onChange: function onChange(event) {
                    _this.setState({ level1: event.target.value });
                },
                onBlur: this.handleBlur }),
            _react2.default.createElement(_Usage2.default, { id: 'level-1-usage',
                usage: usage("first"),
                placement: 'auto top' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'h5',
                null,
                'Level 2:'
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'level_2',
                value: this.state.level2 === 0 || this.state.level2 ? Number.isInteger(this.state.level2) && Math.abs(this.state.level2) > 1e4 ? this.state.level2.toExponential() : this.state.level2 : '',
                onChange: function onChange(event) {
                    _this.setState({ level2: event.target.value });
                },
                onBlur: this.handleBlur }),
            _react2.default.createElement(_Usage2.default, { id: 'level-2-usage',
                usage: usage("end"),
                placement: 'auto bottom' })
        );
    }
});

exports.default = LevelOneTwo;
module.exports = exports['default'];
//# sourceMappingURL=LevelOneTwo.js.map