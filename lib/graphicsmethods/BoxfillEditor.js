'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var BoxfillEditor = _react2.default.createClass({
    displayName: 'BoxfillEditor',

    propTypes: {
        addLevel: _react2.default.PropTypes.func,
        changeState: _react2.default.PropTypes.func,
        colormaps: _react2.default.PropTypes.array,
        gmProps: _react2.default.PropTypes.object,
        gmEditName: _react2.default.PropTypes.string,
        gmEditNameChange: _react2.default.PropTypes.func,
        handleChange: _react2.default.PropTypes.func,
        removeLevel: _react2.default.PropTypes.func
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
                'div',
                { className: 'col-md-12' },
                _react2.default.createElement(_EditName2.default, { name: this.props.gmEditName,
                    change: this.props.gmEditNameChange })
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
                    _react2.default.createElement(_BoxfillType2.default, { handleChange: this.props.handleChange,
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
                        _react2.default.createElement(_Missing2.default, { handleChange: this.props.changeState,
                            missing: this.props.gmProps['missing'],
                            className: 'col-md-6' }),
                        _react2.default.createElement(_Exts2.default, { handleChange: this.props.handleChange,
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
                        _react2.default.createElement(_Legend2.default, { handleChange: this.props.handleChange,
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
                    _react2.default.createElement(_LevelOneTwo2.default, { handleChange: this.props.changeState,
                        level1: this.props.gmProps['level_1'],
                        level2: this.props.gmProps['level_2'] })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(_ColorOneTwo2.default, { handleChange: this.props.changeState,
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
                    _react2.default.createElement(_Levels2.default, { handleChange: this.props.changeState,
                        levels: this.props.gmProps['levels'],
                        addLevel: this.props.addLevel,
                        removeLevel: this.props.removeLevel })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_FillareaFields2.default, { handleChange: this.props.handleChange,
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
                    _react2.default.createElement(_ColormapField2.default, { handleChange: this.props.handleChange,
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
                        handleChange: this.props.handleChange })
                )
            ),
            _react2.default.createElement(_DatawcCoordinates2.default, { handleChange: this.props.changeState,
                x1: this.props.gmProps['datawc_x1'],
                x2: this.props.gmProps['datawc_x2'],
                y1: this.props.gmProps['datawc_y1'],
                y2: this.props.gmProps['datawc_y2']
            })
        );
    }
});

exports.default = BoxfillEditor;
module.exports = exports['default'];
//# sourceMappingURL=BoxfillEditor.js.map