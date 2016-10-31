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
        console.log("levels is not a string");
    }
} /* global $ */

function focus(node_type, node_name) {
    var selector = node_type + "[name='" + node_name + "']";
    $(selector).focus();
}
function handleChange(event) {
    var i = Number.parseInt(event.target.name.split('_')[1]);
    var cur_value = event.target.value;
    var levels = this.state.levels;
    var first = levels.slice(0, i).concat(cur_value);
    var new_levels = first.concat(levels.slice(i + 1, levels.length));
    this.setState({
        levels: first.concat(levels.slice(i + 1, levels.length))
    });
}
var Levels = _react2.default.createClass({
    displayName: 'Levels',

    propTypes: {
        addLevel: _react2.default.PropTypes.func,
        removeLevel: _react2.default.PropTypes.func,
        handleChange: _react2.default.PropTypes.func,
        levels: _react2.default.PropTypes.array
    },
    getInitialState: function getInitialState() {
        return {
            levels: []
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            levels: nextProps.levels
        });
    },
    handleBlur: function handleBlur(event) {
        var property_name = event.target.name.split('_')[0];
        var index = event.target.name.split('_')[1];
        var value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange(property_name, value, index);
        } else {
            // indicate user entered wrong value
            console.log(property_name + " must be an integer or 1e+20");
            this.setState({
                levels: this.props.levels
            });
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
                'Levels: '
            ),
            this.state.levels && this.state.levels.length > 0 ? this.state.levels.map(function (value, index) {
                return _react2.default.createElement(
                    'div',
                    { key: 'levels_' + index },
                    _react2.default.createElement('input', { name: 'levels_' + index,
                        type: 'text',
                        value: Number.isInteger(value) && Math.abs(value) > 1e4 ? value.toExponential() : value,
                        onChange: handleChange.bind(_this),
                        onBlur: _this.handleBlur }),
                    _react2.default.createElement(
                        'button',
                        { onClick: _this.props.removeLevel,
                            'data-index': index,
                            className: 'btn btn-secondary' },
                        '-'
                    ),
                    _react2.default.createElement('br', null),
                    index === _this.state.levels.length - 1 ? _react2.default.createElement(
                        'button',
                        { onClick: _this.props.addLevel,
                            className: 'btn btn-secondary' },
                        '+'
                    ) : ''
                );
            }) : _react2.default.createElement(
                'button',
                { onClick: this.props.addLevel, className: 'btn btn-secondary' },
                ' + '
            )
        );
    }
});

exports.default = Levels;
module.exports = exports['default'];
//# sourceMappingURL=Levels.js.map