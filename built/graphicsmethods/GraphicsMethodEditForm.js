'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _BoxfillEditor = require('./editors/BoxfillEditor');

var _BoxfillEditor2 = _interopRequireDefault(_BoxfillEditor);

var _IsofillEditor = require('./editors/IsofillEditor');

var _IsofillEditor2 = _interopRequireDefault(_IsofillEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphicsMethodEditForm = function (_Component) {
    _inherits(GraphicsMethodEditForm, _Component);

    function GraphicsMethodEditForm(props) {
        _classCallCheck(this, GraphicsMethodEditForm);

        var _this = _possibleConstructorReturn(this, (GraphicsMethodEditForm.__proto__ || Object.getPrototypeOf(GraphicsMethodEditForm)).call(this, props));

        _this.updateGraphicsMethodField = _this.updateGraphicsMethodField.bind(_this);
        _this.updateGraphicsMethod = _this.updateGraphicsMethod.bind(_this);
        return _this;
    }

    _createClass(GraphicsMethodEditForm, [{
        key: 'updateGraphicsMethodField',
        value: function updateGraphicsMethodField(attr, value) {
            // Used to update a single field
            var gm = _jquery2.default.extend({}, this.props.graphicsMethod);
            gm[attr] = value;
            this.props.updateGraphicsMethod(gm);
        }
    }, {
        key: 'updateGraphicsMethod',
        value: function updateGraphicsMethod(fieldDict) {
            // Used for updating several fields at once
            var new_gm = _jquery2.default.extend({}, this.props.graphicsMethod);
            this.props.updateGraphicsMethod(_jquery2.default.extend(new_gm, fieldDict));
        }
    }, {
        key: 'render',
        value: function render() {
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
                default:
                    return null;
            }
        }
    }]);

    return GraphicsMethodEditForm;
}(_react.Component);

GraphicsMethodEditForm.propTypes = {
    colormaps: _propTypes2.default.object,
    graphicsMethod: _propTypes2.default.object,
    updateGraphicsMethod: _propTypes2.default.func
};

exports.default = GraphicsMethodEditForm;
//# sourceMappingURL=GraphicsMethodEditForm.js.map