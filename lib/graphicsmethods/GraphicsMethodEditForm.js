'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _BoxfillEditor = require('./BoxfillEditor');

var _BoxfillEditor2 = _interopRequireDefault(_BoxfillEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var new_name = function new_name(that, graphicsMethods, gm, parent) {
    var name = that.state.gmEditName ? that.state.gmEditName : gm;
    var i = void 0;
    // don't squash the base graphics methods
    if (graphicsMethods[parent][gm]['default_method']) {
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
                    _react2.default.createElement(_BoxfillEditor2.default, { addLevel: this.addLevel,
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