'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ColormapField = require('./ColormapField');

var _ColormapField2 = _interopRequireDefault(_ColormapField);

var _BoxfillType = require('./BoxfillType');

var _BoxfillType2 = _interopRequireDefault(_BoxfillType);

var _ColorOneTwo = require('./ColorOneTwo');

var _ColorOneTwo2 = _interopRequireDefault(_ColorOneTwo);

var _DatawcCoordinates = require('./DatawcCoordinates');

var _DatawcCoordinates2 = _interopRequireDefault(_DatawcCoordinates);

var _Exts = require('./Exts');

var _Exts2 = _interopRequireDefault(_Exts);

var _TicsAndLabels = require('./TicsAndLabels');

var _TicsAndLabels2 = _interopRequireDefault(_TicsAndLabels);

var _AxisTransforms = require('./AxisTransforms');

var _AxisTransforms2 = _interopRequireDefault(_AxisTransforms);

var _Levels = require('./Levels');

var _Levels2 = _interopRequireDefault(_Levels);

var _FillareaFields = require('./FillareaFields');

var _FillareaFields2 = _interopRequireDefault(_FillareaFields);

var _LevelOneTwo = require('./LevelOneTwo');

var _LevelOneTwo2 = _interopRequireDefault(_LevelOneTwo);

var _Missing = require('./Missing');

var _Missing2 = _interopRequireDefault(_Missing);

var _Projection = require('./Projection');

var _Projection2 = _interopRequireDefault(_Projection);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _EditName = require('./EditName');

var _EditName2 = _interopRequireDefault(_EditName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var new_name = function new_name(that, graphicsMethods, gm, parent) {
    var name = that.state.gmEditName ? that.state.gmEditName : gm;
    var i = void 0;
    // don't squash the base graphics methods
    if (graphicsMethods['default_method']) {
        i = 0;
        do {
            ++i;
        } while (graphicsMethods[parent][name + '__edit__' + i]);
        return name + '__edit__' + i;
    } else {
        return name;
    }
};
var GraphicsMethodEditForm = _react2.default.createClass({
    displayName: 'GraphicsMethodEditForm',

    propTypes: {
        colormaps: _react2.default.PropTypes.array,
        graphicsMethod: _react2.default.PropTypes.string,
        graphicsMethodParent: _react2.default.PropTypes.string,
        gmProps: _react2.default.PropTypes.object,
        graphicsMethods: _react2.default.PropTypes.object,
        updateGraphicsMethods: _react2.default.PropTypes.func,
        updateActiveGM: _react2.default.PropTypes.func
    },
    getInitialState: function getInitialState() {
        return {
            gmEditName: this.props.graphicsMethod
        };
    },
    componentWillUpdate: function componentWillUpdate() {
        (0, _jquery2.default)("#commit-gm-edits").prop("disabled", true);
    },
    componentDidUpdate: function componentDidUpdate() {
        (0, _jquery2.default)("#commit-gm-edits").prop("disabled", false);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            gmEditName: nextProps.graphicsMethod
        });
    },
    addLevel: function addLevel() {
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        cur_gmProps['levels'] = cur_gmProps['levels'].concat(1e+20);
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    removeLevel: function removeLevel(event) {
        var index = Number.parseInt(event.target.getAttribute('data-index'));
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        var cur_levels = cur_gmProps['levels'];
        var new_levels = cur_levels.slice(0, index).concat(cur_levels.slice(index + 1, cur_levels.length));
        cur_gmProps['levels'] = new_levels;
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },

    handleChange: function handleChange(event) {
        var property_name = event.target.name;
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        if (event.target.type === 'checkbox') {
            cur_gmProps[property_name] = event.target.checked;
        } else if (property_name.match(/levels_[0-9]+/)) {
            var level_index = Number.parseInt(property_name.split('_')[1]);
            cur_gmProps['levels'][level_index] = event.target.value;
        } else {
            cur_gmProps[property_name] = event.target.value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    changeState: function changeState(property_name, value) {
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var cur_gmProps = Object.assign({}, this.props.gmProps);
        if (!index) {
            cur_gmProps[property_name] = value;
        } else {
            cur_gmProps[property_name][index] = value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    commitEdits: function commitEdits() {
        var parent = this.props.graphicsMethodParent;
        var gm = this.props.graphicsMethod;
        var new_props = this.props.gmProps;
        var graphicsMethods = this.props.graphicsMethods;
        var gm_name = new_name(this, graphicsMethods, gm, parent);
        this.props.updateGraphicsMethods(graphicsMethods, new_props, parent, gm, gm_name);
        this.setState({
            gmEditName: ''
        });
    },
    gmEditNameChange: function gmEditNameChange(event) {
        this.setState({
            gmEditName: event.target.value
        });
    },
    render: function render() {
        if (!this.props.gmProps.no_gm_selected) {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'modal-body' },
                    _react2.default.createElement(BoxfillEditor, { addLevel: this.addLevel,
                        changeState: this.changeState,
                        colormaps: this.props.colormaps,
                        gmProps: this.props.gmProps,
                        gmEditName: this.state.gmEditName,
                        gmEditNameChange: this.gmEditNameChange,
                        handleChange: this.handleChange,
                        removeLevel: this.removeLevel })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-footer' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal' },
                        'Close'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button',
                            className: 'btn btn-primary',
                            id: 'commit-gm-edits',
                            onClick: this.commitEdits,
                            'data-dismiss': 'modal' },
                        'Save changes'
                    )
                )
            );
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h5',
                    null,
                    ' Please select a Graphics Method to edit'
                )
            );
        }
    }
});

exports.default = GraphicsMethodEditForm;
module.exports = exports['default'];
//# sourceMappingURL=GraphicsMethodEditForm.js.map