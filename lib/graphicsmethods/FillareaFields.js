'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(type, value) {
    switch (type) {
        case 'fillareaindices':
            break;
        case 'fillareaopacity':
            break;
        case 'fillareacolors':
            break;
        case 'fillareafields':
            break;
    }
}
var FillareaFields = _react2.default.createClass({
    displayName: 'FillareaFields',

    propTypes: {
        handleChange: _react2.default.PropTypes.func,
        defaultValue: _react2.default.PropTypes.string,
        className: _react2.default.PropTypes.string,
        colors: _react2.default.PropTypes.array,
        style: _react2.default.PropTypes.string,
        indices: _react2.default.PropTypes.array,
        opacity: _react2.default.PropTypes.array
    },
    getInitialState: function getInitialState() {
        return {
            colors: [],
            style: '',
            indices: [],
            opacity: []
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            colors: nextProps.colors,
            style: nextProps.style,
            indices: nextProps.indices,
            opacity: nextProps.opacity
        });
    },
    handleBlur: function handleBlur(event) {
        this.props.handleChange(event);
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            { id: 'fillarea-fields', className: this.props.className },
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Patterns: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'fillareaindices',
                        value: this.state.indices ? this.state.indices : [],
                        onChange: function onChange(event) {
                            _this.setState({ indices: event.target.value });
                        },
                        onBlur: this.handleBlur })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Type: '
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'fillareastyle',
                            value: this.state.style ? this.state.style : 'solid',
                            onChange: this.handleChange,
                            className: 'form-control' },
                        _react2.default.createElement(
                            'option',
                            { value: 'solid' },
                            'solid'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'hatch' },
                            'hatch'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'pattern' },
                            'pattern'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Colors: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'fillareacolors',
                        value: this.state.colors ? this.state.colors : [],
                        onChange: function onChange(event) {
                            _this.setState({ colors: event.target.value });
                        },
                        onBlur: this.handleBlur })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Fillareaopacity: '
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        name: 'fillareaopacity',
                        value: this.state.opacity ? this.state.opacity : [],
                        onChange: function onChange(event) {
                            _this.setState({ opacity: event.target.value });
                        },
                        onBlur: this.handleBlur })
                )
            )
        );
    }
});

exports.default = FillareaFields;
module.exports = exports['default'];
//# sourceMappingURL=FillareaFields.js.map