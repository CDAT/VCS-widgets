'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, maximum) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+(\.[0-9]+)?$/)) {
            var new_value = Number.parseFloat(value);
            if (Math.abs(new_value) > absMax) {
                return false;
            } else {
                return new_value;
            }
        } else {
            return false;
        }
    }
}
var DatawcCoordinates = _react2.default.createClass({
    displayName: 'DatawcCoordinates',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        x1: _react2.default.PropTypes.number,
        x2: _react2.default.PropTypes.number,
        y1: _react2.default.PropTypes.number,
        y2: _react2.default.PropTypes.number
    },
    getInitialState: function getInitialState() {
        return {
            x1: '',
            x2: '',
            y1: '',
            y2: ''
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            x1: nextProps.x1,
            x2: nextProps.x2,
            y1: nextProps.y1,
            y2: nextProps.y2
        });
    },
    handleBlur: function handleBlur(event) {
        var name = event.target.name;
        var maximum = name.match(/x/) ? 180 : 90;
        var value = validate(event.target.value, maximum);
        if (value !== false) {
            this.props.handleChange(name, value);
        } else {
            // set usage, reset state
            switch (name) {
                case "datawc_x1":
                    this.setState({ x1: this.props.x1 });
                    break;
                case "datawc_x2":
                    this.setState({ x2: this.props.x2 });
                    break;
                case "datawc_y1":
                    this.setState({ y1: this.props.y1 });
                    break;
                case "datawc_y2":
                    this.setState({ y2: this.props.y2 });
                    break;
            }
        }
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h5',
                null,
                ' datawc_x1: '
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'datawc_x1',
                value: Number.isFloat(this.state.x1) && this.state.x1 > 1e4 ? this.state.x1.toExponential() : this.state.x1,
                onChange: function onChange(event) {
                    return _this.setState({ x1: event.target.value });
                },
                onBlur: this.handleBlur }),
            ' ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Usage2.default, { usage: 'Longitude value representing where the plot\'s x axis should start' }),
            _react2.default.createElement(
                'h5',
                null,
                'datawc_x2: '
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'datawc_x2',
                value: Number.isFloat(this.state.x2) && this.state.x2 > 1e4 ? this.state.x2.toExponential() : this.state.x2,
                onChange: function onChange(event) {
                    return _this.setState({ x2: event.target.value });
                },
                onBlur: this.handleBlur }),
            ' ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Usage2.default, { id: 'x2-usage',
                usage: 'Longitude value representing where the plot\'s x axis should end' }),
            _react2.default.createElement(
                'h5',
                null,
                'datawc_y1: '
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'datawc_y1',
                value: Number.isFloat(this.state.y1) && this.state.y1 > 1e4 ? this.state.y1.toExponential() : this.state.y1,
                onChange: function onChange(event) {
                    return _this.setState({ y1: event.target.value });
                },
                onBlur: this.handleBlur }),
            ' ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Usage2.default, { id: 'y1-usage',
                usage: 'Latitude value representing where the plot\'s y axis should start' }),
            _react2.default.createElement(
                'h5',
                null,
                'datawc_y2: '
            ),
            _react2.default.createElement('input', { type: 'text',
                name: 'datawc_y2',
                value: Number.isFloat(this.state.y2) && this.state.y2 > 1e4 ? this.state.y2.toExponential() : this.state.y2,
                onChange: function onChange(event) {
                    return _this.setState({ y2: event.target.value });
                },
                onBlur: this.handleBlur }),
            ' ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Usage2.default, { id: 'y2-usage',
                usage: 'Latitude value representing where the plot\'s y axis should end' })
        );
    }
});

exports.default = DatawcCoordinates;
module.exports = exports['default'];
//# sourceMappingURL=DatawcCoordinates.js.map