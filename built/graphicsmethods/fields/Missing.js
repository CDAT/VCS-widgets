'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _ColorProp = require('../../validators/ColorProp');

var _ColorProp2 = _interopRequireDefault(_ColorProp);

var _ColorField = require('../components/ColorField');

var _ColorField2 = _interopRequireDefault(_ColorField);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(value) {
    var new_value = void 0;
    if (typeof value === 'string') {
        if (value.match(/[^0-9]+/) || value === '') {
            return false;
        } else {
            new_value = Number.parseInt(value);
            if (new_value < 0 || new_value > 255) {
                return false;
            } else {
                return new_value;
            }
        }
    }
}

var Missing = _react2.default.createClass({
    displayName: 'Missing',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        missing: _ColorProp2.default,
        className: _react2.default.PropTypes.string,
        colormap: _react2.default.PropTypes.array
    },
    render: function render() {
        var update = this.props.updateGraphicsMethod;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ColorField2.default, { inline: true, controlId: 'missing-color', color: this.props.missing, colormap: this.props.colormap, colorChanged: function colorChanged(c) {
                    update("missing", c);
                }, label: 'Missing Data Color:' }),
            _react2.default.createElement(_Usage2.default, { id: 'missing-usage',
                usage: 'Color to use for values masked out of your data.' })
        );
    }
});

exports.default = Missing;
//# sourceMappingURL=Missing.js.map