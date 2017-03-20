'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _TemplateLabelsEditor = require('./editors/TemplateLabelsEditor');

var _TemplateLabelsEditor2 = _interopRequireDefault(_TemplateLabelsEditor);

var _TemplateAxisEditor = require('./editors/TemplateAxisEditor');

var _TemplateAxisEditor2 = _interopRequireDefault(_TemplateAxisEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateEditForm = function (_Component) {
    _inherits(TemplateEditForm, _Component);

    function TemplateEditForm(props) {
        _classCallCheck(this, TemplateEditForm);

        var _this = _possibleConstructorReturn(this, (TemplateEditForm.__proto__ || Object.getPrototypeOf(TemplateEditForm)).call(this, props));

        _this.state = {
            key: 1
        };
        return _this;
    }

    _createClass(TemplateEditForm, [{
        key: 'handleSelect',
        value: function handleSelect(key) {
            console.log(this);
            this.setState({ key: key });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log("render");
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { style: { maxWidth: "100%" }, src: this.props.templatePreview }),
                _react2.default.createElement(
                    _reactBootstrap.Tabs,
                    { id: this.props.template.name, activeKey: this.state.key, onSelect: function onSelect(k) {
                            _this2.handleSelect(k);
                        } },
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 1, title: 'Labels' },
                        _react2.default.createElement(_TemplateLabelsEditor2.default, { template: this.props.template, updateTemplate: this.props.updateTemplate })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 2, title: 'Axes' },
                        _react2.default.createElement(_TemplateAxisEditor2.default, { template: this.props.template, updateTemplate: this.props.updateTemplate })
                    )
                )
            );
        }
    }]);

    return TemplateEditForm;
}(_react.Component);

exports.default = TemplateEditForm;
//# sourceMappingURL=TemplateEditForm.js.map