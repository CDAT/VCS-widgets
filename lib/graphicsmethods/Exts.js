"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Exts = _react2.default.createClass({
    displayName: "Exts",

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        ext1: _react2.default.PropTypes.bool,
        ext2: _react2.default.PropTypes.bool,
        className: _react2.default.PropTypes.string
    },
    getInitialState: function getInitialState() {
        return {
            ext1: this.props.ext1,
            ext2: this.props.ext2
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            ext1: nextProps.ext1,
            ext2: nextProps.ext2
        });
    },
    handleChange: function handleChange(event) {
        this.setState({
            ext1: event.target.checked,
            ext2: event.target.checked
        });
        this.props.handleChange(event);
    },
    render: function render() {
        return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
                "div",
                { className: this.props.className },
                "Ext 1:",
                _react2.default.createElement("input", { type: "checkbox",
                    name: "ext_1",
                    onChange: this.props.handleChange,
                    checked: this.state.ext1 ? true : false })
            ),
            _react2.default.createElement(
                "div",
                { className: this.props.className },
                "Ext 2:",
                _react2.default.createElement("input", { type: "checkbox",
                    name: "ext_2",
                    onChange: this.props.handleChange,
                    checked: this.state.ext2 ? true : false })
            )
        );
    }
});

exports.default = Exts;
module.exports = exports["default"];
//# sourceMappingURL=Exts.js.map