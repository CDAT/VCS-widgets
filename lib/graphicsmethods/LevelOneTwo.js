'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(value) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+(e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    } else {
        console.log("level_(1|2) is not a string");
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
            // indicate user entered wrong value
            console.log(property_name + " must be an integer or 1e+20");
            if (property_name === 'level_1') {
                this.setState({
                    level1: this.props.level1
                });
            } else {
                this.setState({
                    level2: this.props.level2
                });
            }
        }
    },
    render: function render() {
        var _this = this;

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
                onBlur: this.handleBlur })
        );
    }
});

exports.default = LevelOneTwo;
module.exports = exports['default'];
//# sourceMappingURL=LevelOneTwo.js.map