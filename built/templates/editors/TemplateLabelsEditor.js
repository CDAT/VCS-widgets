'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TemplateLabelSettings = require('./TemplateLabelSettings');

var _TemplateLabelSettings2 = _interopRequireDefault(_TemplateLabelSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var labels = ["dataname", "title", "units", "mean", "min", "max", "file", "crdate", "crtime", "zname", "tname", "zvalue", "tvalue", "zunits", "tunits"];

var TemplateLabelsEditor = function (_Component) {
    _inherits(TemplateLabelsEditor, _Component);

    function TemplateLabelsEditor(props) {
        _classCallCheck(this, TemplateLabelsEditor);

        var _this = _possibleConstructorReturn(this, (TemplateLabelsEditor.__proto__ || Object.getPrototypeOf(TemplateLabelsEditor)).call(this, props));

        _this.state = {
            workingTemplate: $.extend({}, _this.props.template)
        };
        _this.updateTemplateAttribute = _this.updateTemplateAttribute.bind(_this);
        return _this;
    }

    _createClass(TemplateLabelsEditor, [{
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
        key: 'render',
        value: function render() {
            var template = this.state.workingTemplate;
            var self = this;
            return _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement('th', null),
                        _react2.default.createElement(
                            'td',
                            { style: { width: 120 }, className: 'text-center' },
                            'X'
                        ),
                        _react2.default.createElement(
                            'td',
                            { style: { width: 120 }, className: 'text-center' },
                            'Y'
                        ),
                        _react2.default.createElement(
                            'td',
                            { style: { width: 120 }, className: 'text-center' },
                            'Priority'
                        )
                    ),
                    labels.map(function (label_name) {
                        return _react2.default.createElement(_TemplateLabelSettings2.default, { key: label_name, label: template[label_name], update: self.updateTemplateAttribute(label_name) });
                    })
                )
            );
        }
    }]);

    return TemplateLabelsEditor;
}(_react.Component);

TemplateLabelsEditor.propTypes = {
    template: _propTypes2.default.object,
    updateTemplate: _propTypes2.default.func
};

exports.default = TemplateLabelsEditor;
//# sourceMappingURL=TemplateLabelsEditor.js.map