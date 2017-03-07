'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColormapField = require('../fields/ColormapField');

var _ColormapField2 = _interopRequireDefault(_ColormapField);

var _BoxfillType = require('../fields/BoxfillType');

var _BoxfillType2 = _interopRequireDefault(_BoxfillType);

var _DatawcCoordinates = require('../fields/DatawcCoordinates');

var _DatawcCoordinates2 = _interopRequireDefault(_DatawcCoordinates);

var _Exts = require('../fields/Exts');

var _Exts2 = _interopRequireDefault(_Exts);

var _TicsAndLabels = require('../fields/TicsAndLabels');

var _TicsAndLabels2 = _interopRequireDefault(_TicsAndLabels);

var _FillareaFields = require('../fields/FillareaFields');

var _FillareaFields2 = _interopRequireDefault(_FillareaFields);

var _Missing = require('../fields/Missing');

var _Missing2 = _interopRequireDefault(_Missing);

var _Projection = require('../fields/Projection');

var _Projection2 = _interopRequireDefault(_Projection);

var _EditName = require('../fields/EditName');

var _EditName2 = _interopRequireDefault(_EditName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IsofillEditor = _react2.default.createClass({
    displayName: 'IsofillEditor',

    propTypes: {
        colormaps: _react2.default.PropTypes.object,
        graphicsMethod: _react2.default.PropTypes.object,
        updateGraphicsMethod: _react2.default.PropTypes.func,
        updateField: _react2.default.PropTypes.func
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_EditName2.default, { name: this.props.graphicsMethod.name,
                        updateGraphicsMethod: this.props.updateField })
                )
            ),
            _react2.default.createElement(
                'h4',
                null,
                'Isofill Settings'
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_ColormapField2.default, { updateGraphicsMethod: this.props.updateField,
                        colormap: this.props.graphicsMethod['colormap'] === null ? "default" : this.props.graphicsMethod['colormap'],
                        colormaps: this.props.colormaps })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_Missing2.default, { updateGraphicsMethod: this.props.updateField,
                        missing: this.props.graphicsMethod.missing,
                        colormap: this.props.colormaps[this.props.graphicsMethod.colormap || "default"]
                    }),
                    _react2.default.createElement(_Exts2.default, { updateGraphicsMethod: this.props.updateField,
                        ext1: this.props.graphicsMethod['ext_1'],
                        ext2: this.props.graphicsMethod['ext_2'],
                        className: this.props.graphicsMethod['boxfill_type'] !== 'custom' ? 'col-md-3' : 'hide' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_FillareaFields2.default, { updateGraphicsMethod: this.props.updateField,
                        level: this.props.graphicsMethod.levels, color: this.props.graphicsMethod.fillareacolors,
                        pattern: this.props.fillareaindices, opacity: this.props.graphicsMethod.fillareaopacity,
                        fillStyle: this.props.graphicsMethod.fillareastyle, ext1: this.props.graphicsMethod.ext_1, ext2: this.props.graphicsMethod.ext_2,
                        colormap: this.props.colormaps[this.props.graphicsMethod.colormap || "default"],
                        className: 'col-md-12', bulkUpdate: this.props.updateGraphicsMethod })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_Projection2.default, { projection: this.props.graphicsMethod['projection'],
                        updateGraphicsMethod: this.props.updateField })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(_DatawcCoordinates2.default, { updateGraphicsMethod: this.props.updateField,
                        x1: this.props.graphicsMethod['datawc_x1'],
                        x2: this.props.graphicsMethod['datawc_x2'],
                        y1: this.props.graphicsMethod['datawc_y1'],
                        y2: this.props.graphicsMethod['datawc_y2']
                    })
                )
            )
        );
    }
});

exports.default = IsofillEditor;
//# sourceMappingURL=IsofillEditor.js.map