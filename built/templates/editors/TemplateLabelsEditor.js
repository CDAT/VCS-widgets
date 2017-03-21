'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TemplateLabelSettings = require('./TemplateLabelSettings');

var _TemplateLabelSettings2 = _interopRequireDefault(_TemplateLabelSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labels = ["dataname", "title", "units", "mean", "min", "max", "file", "crdate", "crtime", "zname", "tname", "zvalue", "tvalue", "zunits", "tunits"];

var TemplateLabelsEditor = _react2.default.createClass({
    displayName: 'TemplateLabelsEditor',

    propTypes: {
        template: _react2.default.PropTypes.object,
        updateTemplate: _react2.default.PropTypes.func
    },
    updateTemplateAttribute: function updateTemplateAttribute(attribute) {
        var self = this;
        return function (key, value) {
            self.props.updateTemplate(attribute, key, value);
        };
    },
    getInitialState: function getInitialState() {
        return { workingTemplate: $.extend({}, this.props.template) };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ workingTemplate: $.extend({}, nextProps.template) });
    },
    render: function render() {
        var template = this.state.workingTemplate;
        var self = this;
        return _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
                'tbody',
                null,
                labels.map(function (label_name) {
                    return _react2.default.createElement(_TemplateLabelSettings2.default, { key: label_name, label: template[label_name], update: self.updateTemplateAttribute(label_name) });
                })
            )
        );
    }
});

exports.default = TemplateLabelsEditor;
//# sourceMappingURL=TemplateLabelsEditor.js.map