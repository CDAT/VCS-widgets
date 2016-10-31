'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ColormapField = require('./ColormapField.jsx');

var _ColormapField2 = _interopRequireDefault(_ColormapField);

var _BoxfillType = require('./BoxfillType.jsx');

var _BoxfillType2 = _interopRequireDefault(_BoxfillType);

var _ColorOneTwo = require('./ColorOneTwo.jsx');

var _ColorOneTwo2 = _interopRequireDefault(_ColorOneTwo);

var _DatawcCoordinates = require('./DatawcCoordinates.jsx');

var _DatawcCoordinates2 = _interopRequireDefault(_DatawcCoordinates);

var _Exts = require('./Exts.jsx');

var _Exts2 = _interopRequireDefault(_Exts);

var _TicsAndLabels = require('./TicsAndLabels.jsx');

var _TicsAndLabels2 = _interopRequireDefault(_TicsAndLabels);

var _AxisTransforms = require('./AxisTransforms.jsx');

var _AxisTransforms2 = _interopRequireDefault(_AxisTransforms);

var _Levels = require('./Levels.jsx');

var _Levels2 = _interopRequireDefault(_Levels);

var _FillareaFields = require('./FillareaFields.jsx');

var _FillareaFields2 = _interopRequireDefault(_FillareaFields);

var _LevelOneTwo = require('./LevelOneTwo.jsx');

var _LevelOneTwo2 = _interopRequireDefault(_LevelOneTwo);

var _Missing = require('./Missing.jsx');

var _Missing2 = _interopRequireDefault(_Missing);

var _Projection = require('./Projection.jsx');

var _Projection2 = _interopRequireDefault(_Projection);

var _Legend = require('./Legend.jsx');

var _Legend2 = _interopRequireDefault(_Legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var new_name = function new_name(that, graphicsMethods, gm, parent) {
    // replace this with some sort of call that gets the base gm names for the specific gm
    var base_gms = ['a_boxfill', 'a_lambert_boxfill', 'a_mollweide_boxfill', 'a_polar_boxfill', 'a_robinson_boxfill', 'default', 'polar', 'quick', 'robinson'];
    var name = that.state.gmEditName ? that.state.gmEditName : gm;
    var i = void 0;
    // don't squash the base graphics methods
    if (base_gms.includes(name)) {
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
            console.log(cur_gmProps['levels'][level_index], _typeof(cur_gmProps['levels'][level_index]));
        } else {
            cur_gmProps[property_name] = event.target.value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
        console.log(cur_gmProps[property_name], _typeof(cur_gmProps[property_name]));
    },
    changeState: function changeState(property_name, value) {
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var cur_gmProps = Object.assign({}, this.props.gmProps);
        if (!index) {
            cur_gmProps[property_name] = value;
        } else {
            console.log(index);
            cur_gmProps[property_name][index] = value;
        }
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
        console.log(cur_gmProps[property_name], _typeof(cur_gmProps[property_name]));
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
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    "Name for new GM"
                                ),
                                _react2.default.createElement('input', { type: 'text',
                                    value: this.state.gmEditName,
                                    onChange: this.gmEditNameChange })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Boxfill Settings'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_BoxfillType2.default, { handleChange: this.handleChange,
                                    type: this.props.gmProps['boxfill_type'],
                                    headerClass: 'col-md-4',
                                    radioClass: 'col-md-4' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12' },
                                    _react2.default.createElement(_Missing2.default, { handleChange: this.changeState,
                                        missing: this.props.gmProps['missing'],
                                        className: 'col-md-6' }),
                                    _react2.default.createElement(_Exts2.default, { handleChange: this.handleChange,
                                        ext1: this.props.gmProps['ext_1'],
                                        ext2: this.props.gmProps['ext_2'],
                                        className: this.props.gmProps['boxfill_type'] !== 'custom' ? 'col-md-3' : 'hide' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-12' },
                                    _react2.default.createElement(_Legend2.default, { handleChange: this.handleChange,
                                        legend: this.props.gmProps['legend'],
                                        className: 'col-md-12' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: this.props.gmProps['boxfill_type'] !== 'custom' ? 'col-md-12' : 'hide' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Linear and Log Settings'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement(_LevelOneTwo2.default, { handleChange: this.changeState,
                                    level1: this.props.gmProps['level_1'],
                                    level2: this.props.gmProps['level_2'] })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6' },
                                _react2.default.createElement(_ColorOneTwo2.default, { handleChange: this.changeState,
                                    color1: this.props.gmProps['color_1'],
                                    color2: this.props.gmProps['color_2'] })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: this.props.gmProps['boxfill_type'] === 'custom' ? 'col-md-12' : 'hide' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Custom Settings'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_Levels2.default, { handleChange: this.changeState,
                                    levels: this.props.gmProps['levels'],
                                    addLevel: this.addLevel,
                                    removeLevel: this.removeLevel })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_FillareaFields2.default, { handleChange: this.handleChange,
                                    colors: this.props.gmProps['fillareacolors'],
                                    style: this.props.gmProps['fillareastyle'],
                                    indices: this.props.gmProps['fillareaindices'],
                                    opacity: this.props.gmProps['fillareaopacity'] })
                            )
                        )
                    )
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
                    ' Please select one of the Graphics Methods from the list on the left side bar. '
                )
            );
        }
    }
});

exports.default = GraphicsMethodEditForm;
module.exports = exports['default'];
//# sourceMappingURL=GraphicsMethodEditForm.js.map