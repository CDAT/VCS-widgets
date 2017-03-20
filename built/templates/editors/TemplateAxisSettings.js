'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateAxisSettings = _react2.default.createClass({
    displayName: 'TemplateAxisSettings',

    propTypes: {
        axis: _react2.default.PropTypes.object,
        update: _react2.default.PropTypes.func
    },
    updateAxisValue: function updateAxisValue(key) {
        var _this = this;

        var self = this;
        var validator = parseFloat;
        if (key === "priority") {
            validator = parseInt;
        }
        return function (e) {
            self.props.update(key, validator(_this.range(e.target.value)));
        };
    },
    range: function range(alt) {
        if (alt < 0) {
            alt = 0;
        } else if (alt > 1) {
            alt = 1;
        }
        return alt;
    },
    render: function render() {

        var name = this.props.axis.member;
        var priority = this.props.axis.priority;
        var isLabel = false;

        if (name.includes('label')) {
            isLabel = true;
        }

        if (name.includes('y')) {
            var axis = this.props.axis.x;
            var axis1 = this.props.axis.x1;
            var axis2 = this.props.axis.x2;
            var label = "x";
            var label1 = "x1";
            var label2 = "x2";
        } else if (name.includes('x')) {
            var axis = this.props.axis.y;
            var axis1 = this.props.axis.y1;
            var axis2 = this.props.axis.y2;
            var label = "y";
            var label1 = "y1";
            var label2 = "y2";
        }

        return _react2.default.createElement(
            'div',
            null,
            isLabel ? _react2.default.createElement(
                'div',
                null,
                name,
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                label
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('input', { type: 'number', value: axis, name: name + "_" + label,
                                    onChange: this.updateAxisValue(label) })
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Priority'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('input', { type: 'number', value: priority, name: name + "_priority",
                                    onChange: this.updateAxisValue("priority") })
                            )
                        )
                    )
                )
            ) : _react2.default.createElement(
                'div',
                null,
                name,
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                label,
                                '1'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('input', { type: 'number', value: axis1, name: name + "_" + label1,
                                    onChange: this.updateAxisValue(label1) })
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                label,
                                '2'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('input', { type: 'number', value: axis2, name: name + "_" + label2,
                                    onChange: this.updateAxisValue(label2) })
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                'Priority'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('input', { type: 'number', value: priority, name: name + "_priority",
                                    onChange: this.updateAxisValue("priority") })
                            )
                        )
                    )
                )
            )
        );
    }
});

exports.default = TemplateAxisSettings;
//# sourceMappingURL=TemplateAxisSettings.js.map