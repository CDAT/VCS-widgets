'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _BooleansField = require('../components/BooleansField');

var _BooleansField2 = _interopRequireDefault(_BooleansField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Exts = _react2.default.createClass({
    displayName: 'Exts',

    propTypes: {
        updateGraphicsMethod: _react2.default.PropTypes.func,
        ext1: _react2.default.PropTypes.bool,
        ext2: _react2.default.PropTypes.bool
    },
    update: function update(value_dict) {
        var ext_1 = value_dict.ext_1,
            ext_2 = value_dict.ext_2;

        if (ext_1 !== this.props.ext1) {
            this.props.updateGraphicsMethod("ext_1", ext_1);
        } else {
            this.props.updateGraphicsMethod("ext_2", ext_2);
        }
    },
    render: function render() {
        var usage = function usage(side, where) {
            return "Draws an extension arrow on " + side + " side (values " + where + " level)";
        };
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                null,
                'Extensions'
            ),
            _react2.default.createElement(_BooleansField2.default, { updatedValue: this.update, labels: ["Extend before first value", "Extend after last value"], options: ["ext_1", "ext_2"], value: { "ext_1": this.props.ext1, "ext_2": this.props.ext2 }, inline: true })
        );
    }
});

exports.default = Exts;
//# sourceMappingURL=Exts.js.map