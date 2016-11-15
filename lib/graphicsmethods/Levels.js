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
var NOP = function NOP() {};

function verify(value) {
    if (typeof value === 'string') {
        if (value.match(/^[\+-]?[0-9]+((\.[0-9]+)?e\+?[0-9]+)?$/)) {
            return Number.parseFloat(value);
        } else {
            return false;
        }
    }
}
function handleChange(event) {
    var i = Number.parseInt(event.target.name.split('_')[1]);
    var cur_value = event.target.value;
    var levels = this.state.levels;
    var first = levels.slice(0, i).concat(cur_value);
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
    addLevel: function addLevel() {
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        cur_gmProps['levels'] = cur_gmProps['levels'].concat(1e+20);
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    removeLevel: function removeLevel(event) {
        var index = Number.parseInt(event.target.getAttribute('data-index'));
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        var cur_levels = cur_gmProps['levels'];
        var new_levels = cur_levels.slice(0, index).concat(cur_levels.slice(index + 1, cur_levels.length));
        cur_gmProps['levels'] = new_levels;
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    handleBlur: function handleBlur(event) {
        var property_name = event.target.name.split('_')[0];
        var index = event.target.name.split('_')[1];
        var value = verify(event.target.value);
        if (value === 0 || value) {
            this.props.handleChange(property_name, value, index);
        } else {
            this.setState({
                levels: this.props.levels
            });
            $('#levels-' + index + '-usage').focus();
        }
    },
    render: function render() {
        var _this = this;

        var usage = "Set the level range to use. Must be an integer.\n" + "If set to 1e+20, VCS will auto-allocate level value.";
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
                    _react2.default.createElement(_Usage2.default, { id: 'levels-' + index + '-usage',
                        usage: usage }),
                    _react2.default.createElement('br', null),
                    index === _this.state.levels.length - 1 ? _react2.default.createElement(
                        'button',
                        { onClick: _this.props.addLevel,
                            className: 'btn btn-secondary' },
                        '+'
                    ) : ''
                );
            }) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.addLevel, className: 'btn btn-secondary' },
                    ' + '
                ),
                _react2.default.createElement(_Usage2.default, { id: 'levels-usage',
                    usage: "Add a level" })
            )
        );
    }
});

exports.default = Levels;
module.exports = exports['default'];
//# sourceMappingURL=Levels.js.map