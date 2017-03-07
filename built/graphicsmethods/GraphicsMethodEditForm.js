'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _BoxfillEditor = require('./editors/BoxfillEditor');

var _BoxfillEditor2 = _interopRequireDefault(_BoxfillEditor);

var _IsofillEditor = require('./editors/IsofillEditor');

var _IsofillEditor2 = _interopRequireDefault(_IsofillEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphicsMethodEditForm = _react2.default.createClass({
    displayName: 'GraphicsMethodEditForm',

    propTypes: {
        colormaps: _react2.default.PropTypes.object,
        graphicsMethod: _react2.default.PropTypes.object,
        updateGraphicsMethod: _react2.default.PropTypes.func
    },
    updateGraphicsMethodField: function updateGraphicsMethodField(attr, value) {
        // Used to update a single field
        var gm = _jquery2.default.extend({}, this.props.graphicsMethod);
        gm[attr] = value;
        this.props.updateGraphicsMethod(gm);
    },
    updateGraphicsMethod: function updateGraphicsMethod(fieldDict) {
        // Used for updating several fields at once
        var new_gm = _jquery2.default.extend({}, this.props.graphicsMethod);
        this.props.updateGraphicsMethod(_jquery2.default.extend(new_gm, fieldDict));
    },
    render: function render() {
        var props = {
            colormaps: this.props.colormaps,
            graphicsMethod: this.props.graphicsMethod,
            updateGraphicsMethod: this.updateGraphicsMethod,
            updateField: this.updateGraphicsMethodField
        };
        var editor = null;
        // We'll switch based on GM type here
        switch (this.props.graphicsMethod.g_name) {
            case 'Gfb':
                return _react2.default.createElement(_BoxfillEditor2.default, props);
            case 'Gfi':
                return _react2.default.createElement(_IsofillEditor2.default, props);
        }
    }
});

exports.default = GraphicsMethodEditForm;
//# sourceMappingURL=GraphicsMethodEditForm.js.map