'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
            gmEditName: this.props.graphicsMethod,
            xtl1Slider: "0"
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
    addLabel: function addLabel(event) {
        var label_name = event.target.name;
        var slider_value = (0, _jquery2.default)('#' + label_name + '-slider').val();
        if (this.props.gmProps[label_name]) {
            // probably don't want to squash this label
        } else {
                // everything is cool, create a new empty label at slider_value index of gmProps, and updateActiveGM
            }
    },
    updateLabel: function updateLabel(event) {
        var cur_gmProps = Object.assign({}, this.props.gmProps);
        var name = event.target.name;
        cur_gmProps[name] = Number.parseFloat(event.target.value);
        this.props.updateActiveGM(cur_gmProps, this.props.graphicsMethodParent, this.props.graphicsMethod);
    },
    render: function render() {
        var _this = this;

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
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_ColormapField2.default, { handleChange: this.handleChange,
                                    colormap: this.props.gmProps['colormap'],
                                    colormaps: this.props.colormaps })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_Projection2.default, { projection: this.props.gmProps['projection'],
                                    handleChange: this.handleChange })
                            )
                        ),
                        _react2.default.createElement(_DatawcCoordinates2.default, { handleChange: this.changeState,
                            x1: this.props.gmProps['datawc_x1'],
                            x2: this.props.gmProps['datawc_x2'],
                            y1: this.props.gmProps['datawc_y1'],
                            y2: this.props.gmProps['datawc_y2'] })
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
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ticlabels' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'xticlabels1: '
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        Math.abs(Number.parseFloat(this.state.xtl1Slider)),
                        ' \xB0',
                        Number.parseFloat(this.state.xtl1Slider) < 0 ? "W longitude" : Number.parseFloat(this.state.xtl1Slider) === 0 ? "Prime Meridian" : "E longitude"
                    ),
                    _react2.default.createElement('input', { type: 'range',
                        id: 'xticlabels1-slider',
                        step: '0.001',
                        min: '-180',
                        max: '180',
                        value: this.state.xtl1Slider,
                        onChange: function onChange(event) {
                            _this.setState({ xtl1Slider: event.target.value });
                        } }),
                    _react2.default.createElement(
                        'button',
                        { name: 'xticlabels1', onClick: this.addLabel },
                        'Add Label'
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'xtl1-labels' },
                        this.props.xtl1 !== null && _typeof(this.props.xtl1) === 'object' ? Object.keys(this.props.gmProps['xticlabels1']).map(function (value, index) {
                            return _react2.default.createElement(
                                'div',
                                { id: "xtl1-index" + index, key: "xtl1-" + index },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    value
                                ),
                                _react2.default.createElement('input', { type: 'text',
                                    name: 'xticlabels1',
                                    value: _this.state.xtl1,
                                    onChange: function onChange(event) {
                                        _this.setState({ xtl1: event.target.value });
                                    },
                                    onBlur: _this.updateLabel })
                            );
                        }) : ''
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