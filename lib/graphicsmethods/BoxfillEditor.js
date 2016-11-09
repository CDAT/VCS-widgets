'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
                _react2.default.createElement(EditName, { name: this.props.gmEditName,
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
                    _react2.default.createElement(BoxfillType, { handleChange: this.handleChange,
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
                        _react2.default.createElement(Missing, { handleChange: this.changeState,
                            missing: this.props.gmProps['missing'],
                            className: 'col-md-6' }),
                        _react2.default.createElement(Exts, { handleChange: this.handleChange,
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
                        _react2.default.createElement(Legend, { handleChange: this.handleChange,
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
                    _react2.default.createElement(LevelOneTwo, { handleChange: this.changeState,
                        level1: this.props.gmProps['level_1'],
                        level2: this.props.gmProps['level_2'] })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(ColorOneTwo, { handleChange: this.changeState,
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
                    _react2.default.createElement(Levels, { handleChange: this.changeState,
                        levels: this.props.gmProps['levels'],
                        addLevel: this.addLevel,
                        removeLevel: this.removeLevel })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(FillareaFields, { handleChange: this.handleChange,
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
                    _react2.default.createElement(ColormapField, { handleChange: this.handleChange,
                        colormap: this.props.gmProps['colormap'],
                        colormaps: this.props.colormaps })
                )
            )
        );
    }
});

exports.default = BoxfillEditor;
module.exports = exports['default'];
//# sourceMappingURL=BoxfillEditor.js.map