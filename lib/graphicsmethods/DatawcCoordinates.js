'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global $ */

function validate(value, maximum) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+(\.[0-9]+)?$/)) {
            var new_value = Number.parseFloat(value);
            if (Math.abs(new_value) > maximum) {
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
            x1: this.props.x1,
            x2: this.props.x2,
            y1: this.props.y1,
            y2: this.props.y2
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
                    $('#x1-usage').focus();
                    this.setState({ x1: this.props.x1 });
                    break;
                case "datawc_x2":
                    $('#x2-usage').focus();
                    this.setState({ x2: this.props.x2 });
                    break;
                case "datawc_y1":
                    $('#y1-usage').focus();
                    this.setState({ y1: this.props.y1 });
                    break;
                case "datawc_y2":
                    $('#y2-usage').focus();
                    this.setState({ y2: this.props.y2 });
                    break;
            }
        }
    },
    render: function render() {
        var _this = this;

        var x1_usage = "Longitude value representing where the plot's x axis should start.\n" + "Values must be numbers from -180 to 180 (degrees of longitude).";
        var x2_usage = "Longitude value representing where the plot's x axis should end.\n" + "Values must be numbers from -180 to 180 (degrees of longitude).";
        var y1_usage = "Latitude value representing where the plot's y axis should start.\n" + "Values must be numbers from -90 to 90 (degrees of latitude).";
        var y2_usage = "Latitude value representing where the plot's y axis should start.\n" + "Values must be numbers from -90 to 90 (degrees of latitude).";
        return _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
                'h4',
                null,
                'World Coordinates'
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        ' datawc_x1: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'datawc_x1',
                        value: typeof this.state.x1 === "number" && this.state.x1 > 1e4 ? this.state.x1.toExponential() : this.state.x1,
                        onChange: function onChange(event) {
                            return _this.setState({ x1: event.target.value });
                        },
                        onBlur: this.handleBlur }),
                    _react2.default.createElement(_Usage2.default, { id: 'x1-usage', usage: x1_usage })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'datawc_x2: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'datawc_x2',
                        value: typeof this.state.x2 === "number" && this.state.x2 > 1e4 ? this.state.x2.toExponential() : this.state.x2,
                        onChange: function onChange(event) {
                            return _this.setState({ x2: event.target.value });
                        },
                        onBlur: this.handleBlur }),
                    _react2.default.createElement(_Usage2.default, { id: 'x2-usage', usage: x2_usage })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'datawc_y1: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'datawc_y1',
                        value: typeof this.state.y1 === "number" && this.state.y1 > 1e4 ? this.state.y1.toExponential() : this.state.y1,
                        onChange: function onChange(event) {
                            return _this.setState({ y1: event.target.value });
                        },
                        onBlur: this.handleBlur }),
                    _react2.default.createElement(_Usage2.default, { id: 'y1-usage', usage: y1_usage })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'datawc_y2: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'datawc_y2',
                        value: typeof this.state.y2 === "number" && this.state.y2 > 1e4 ? this.state.y2.toExponential() : this.state.y2,
                        onChange: function onChange(event) {
                            return _this.setState({ y2: event.target.value });
                        },
                        onBlur: this.handleBlur }),
                    _react2.default.createElement(_Usage2.default, { id: 'y2-usage', usage: y2_usage })
                )
            )
        );
    }
});

exports.default = DatawcCoordinates;
module.exports = exports['default'];
//# sourceMappingURL=DatawcCoordinates.js.map