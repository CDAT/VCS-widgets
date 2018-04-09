'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _TemplateAxisSettings = require('./TemplateAxisSettings');

var _TemplateAxisSettings2 = _interopRequireDefault(_TemplateAxisSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var x1 = ["xlabel1", "xtic1", "xmintic1"];
var x2 = ["xlabel2", "xtic2", "xmintic2"];
var y1 = ["ylabel1", "ytic1", "ymintic1"];
var y2 = ["ylabel2", "ytic2", "ymintic2"];

var TemplateAxisEditor = function (_Component) {
    _inherits(TemplateAxisEditor, _Component);

    function TemplateAxisEditor(props) {
        _classCallCheck(this, TemplateAxisEditor);

        var _this = _possibleConstructorReturn(this, (TemplateAxisEditor.__proto__ || Object.getPrototypeOf(TemplateAxisEditor)).call(this, props));

        _this.state = {
            workingTemplate: $.extend({}, _this.props.template)
        };
        _this.updateTemplateAttribute = _this.updateTemplateAttribute.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        return _this;
    }

    _createClass(TemplateAxisEditor, [{
        key: 'updateTemplateAttribute',
        value: function updateTemplateAttribute(attribute) {
            var self = this;
            return function (key, value) {
                self.props.updateTemplate(attribute, key, value);
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ workingTemplate: $.extend({}, nextProps.template) });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(key) {
            this.setState({ key: key });
        }
    }, {
        key: 'render',
        value: function render() {
            var template = this.state.workingTemplate;
            var self = this;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Tabs,
                    { activeKey: this.state.key, onSelect: this.handleSelect, id: 'templateAxisEditors' },
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 1, title: 'First Set X' },
                        x1.map(function (axis_name) {
                            return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '1',
                                update: self.updateTemplateAttribute(axis_name) });
                        })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 2, title: 'Second Set X' },
                        x2.map(function (axis_name) {
                            return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '2',
                                update: self.updateTemplateAttribute(axis_name) });
                        })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 3, title: 'First Set Y' },
                        y1.map(function (axis_name) {
                            return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '3',
                                update: self.updateTemplateAttribute(axis_name) });
                        })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 4, title: 'Second Set Y' },
                        y2.map(function (axis_name) {
                            return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '4',
                                update: self.updateTemplateAttribute(axis_name) });
                        })
                    )
                )
            );
        }
    }]);

    return TemplateAxisEditor;
}(_react.Component);

TemplateAxisEditor.propTypes = {
    template: _propTypes2.default.object,
    updateTemplate: _propTypes2.default.func
};

exports.default = TemplateAxisEditor;
//# sourceMappingURL=TemplateAxisEditor.js.map