'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleansField = _react2.default.createClass({
    displayName: 'BooleansField',

    propTypes: {
        labels: _react2.default.PropTypes.array,
        value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.string]),
        options: _react2.default.PropTypes.array,
        updatedValue: _react2.default.PropTypes.func,
        inline: _react2.default.PropTypes.bool,
        controlId: _react2.default.PropTypes.string,
        multiple: _react2.default.PropTypes.bool
    },
    getDefaultProps: function getDefaultProps() {
        return {
            inline: false,
            multiple: true
        };
    },
    currentValue: function currentValue() {
        var _this = this;

        var value_dict = {};
        this.props.options.map(function (o) {
            value_dict[o] = false;
            if (o === _this.props.value) {
                value_dict[o] = true;
            } else if (_this.props.value !== null && _this.props.value[o]) {
                value_dict[o] = true;
            }
        });
        return value_dict;
    },
    update: function update(e) {
        var new_value = e.target.checked;
        if (this.props.multiple) {
            var value_dict = this.currentValue();
            value_dict[e.target.value] = new_value;
            this.props.updatedValue(value_dict);
        } else {
            var d = this.props.options.reduce(function (prev, cur) {
                prev[cur] = cur === e.target.value;
                return prev;
            }, {});
            this.props.updatedValue(d);
        }
    },
    render: function render() {
        var _this2 = this;

        var self = this;
        var value_dict = this.currentValue();
        return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: '{this.props.controlId}' },
            this.props.options.map(function (o, ind) {
                if (self.props.multiple) {
                    return _react2.default.createElement(
                        _reactBootstrap.Checkbox,
                        { inline: _this2.props.inline, key: ind, name: self.props.controlId, value: o, checked: value_dict[o], onChange: self.update },
                        ' ',
                        self.props.labels[ind],
                        ' '
                    );
                } else {
                    return _react2.default.createElement(
                        _reactBootstrap.Radio,
                        { inline: _this2.props.inline, key: ind, name: self.props.controlId, value: o, checked: value_dict[o], onChange: self.update },
                        ' ',
                        self.props.labels[ind],
                        ' '
                    );
                }
            })
        );
    }
});

exports.default = BooleansField;
//# sourceMappingURL=BooleansField.js.map