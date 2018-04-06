'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Usage = require('../../Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _LegendFill = require('../components/LegendFill');

var _LegendFill2 = _interopRequireDefault(_LegendFill);

var _LevelField = require('../components/LevelField');

var _LevelField2 = _interopRequireDefault(_LevelField);

var _NumberField = require('../../common/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _BooleansField = require('../../common/BooleansField');

var _BooleansField2 = _interopRequireDefault(_BooleansField);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillareaFields = function (_Component) {
    _inherits(FillareaFields, _Component);

    function FillareaFields(props) {
        _classCallCheck(this, FillareaFields);

        var _this = _possibleConstructorReturn(this, (FillareaFields.__proto__ || Object.getPrototypeOf(FillareaFields)).call(this, props));

        _this.normalizedArrays = _this.normalizedArrays.bind(_this);
        _this.sync = _this.sync.bind(_this);
        _this.updateFill = _this.updateFill.bind(_this);
        _this.updateLevel = _this.updateLevel.bind(_this);
        _this.addLevel = _this.addLevel.bind(_this);
        _this.removeLevel = _this.removeLevel.bind(_this);
        _this.setFillStyle = _this.setFillStyle.bind(_this);

        _this.state = _this.normalizedArrays(props);
        return _this;
    }

    _createClass(FillareaFields, [{
        key: 'normalizedArrays',
        value: function normalizedArrays(arrays) {
            // Normalizes the length of each array
            var level = arrays.level,
                opacity = arrays.opacity,
                color = arrays.color,
                pattern = arrays.pattern;

            if (level === null) {
                level = [];
            }
            if (opacity === null) {
                opacity = [100];
            }
            if (color === null) {
                color = [0];
            }
            if (pattern == null) {
                pattern = [0];
            }
            // Make sure we're using new arrays in the state
            level = level.slice();
            opacity = opacity.slice();
            color = color.slice();
            pattern = pattern.slice();

            var ext1 = arrays.ext1,
                ext2 = arrays.ext2;

            if (ext1) {
                level.unshift("-1e20");
            }

            if (ext2) {
                level.push("1e20");
            }

            // Pad opacity, colors, and indices out to appropriate length
            if (color.length < level.length - 1) {
                var last_color = color[color.length - 1];
                if (typeof last_color === "number") {
                    // Stretch between last_color and 255
                    var step = Math.floor((255 - last_color) / (level.length - 1 - color.length));
                    while (color.length < level.length - 1) {
                        last_color += step;
                        color.push(last_color);
                    }
                } else {
                    // Just duplicate the last color, there's no way to know what they want.
                    while (color.length < level.length - 1) {
                        color.push(last_color);
                    }
                }
            }

            while (opacity.length < level.length - 1) {
                // We'll just default to using the opacity value of the color
                opacity.push(null);
            }

            while (pattern.length < level.length - 1) {
                pattern.push(0);
            }

            return {
                color: color,
                pattern: pattern,
                level: level,
                opacity: opacity
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(this.normalizedArrays(nextProps));
        }
    }, {
        key: 'sync',
        value: function sync(arrays) {
            var color = arrays.color,
                pattern = arrays.pattern,
                opacity = arrays.opacity,
                level = arrays.level;

            this.props.bulkUpdate({
                'fillareacolors': color,
                'fillareaindices': pattern,
                'fillareaopacity': opacity,
                'levels': level
            });
        }
    }, {
        key: 'updateFill',
        value: function updateFill(index, fillSettings) {
            var _state = this.state,
                color = _state.color,
                pattern = _state.pattern,
                opacity = _state.opacity;

            color = color.slice();
            pattern = pattern.slice();
            opacity = opacity.slice();
            color[index] = fillSettings.color;
            pattern[index] = fillSettings.pattern;
            opacity[index] = fillSettings.opacity;
            var start = 0;
            var end = this.state.level.length;
            if (this.props.ext1) {
                start += 1;
            }
            if (this.props.ext2) {
                end -= 1;
            }
            var levs = this.state.level.slice(start, end);
            this.sync({
                color: color, pattern: pattern, opacity: opacity, 'level': levs
            });
        }
    }, {
        key: 'updateLevel',
        value: function updateLevel(index, level) {
            var levs = this.state.level.slice();
            // Update the value
            levs[index] = level;
            // Now slice off extensions as needed
            var start = 0;
            var end = this.state.level.length;
            if (this.props.ext1) {
                start = 1;
            }
            if (this.props.ext2) {
                end -= 1;
            }
            levs = levs.slice(start, end);
            this.props.updateGraphicsMethod("levels", levs);
        }
    }, {
        key: 'addLevel',
        value: function addLevel(index) {
            var levs = this.state.level.slice();
            var val = levs[index];
            var start = 0;
            var end = levs.length + 1;
            if (this.props.ext1) {
                val = levs[index + 1];
                start += 1;
                index = Math.max(start, index);
            }
            if (this.props.ext2) {
                end -= 1;
            }
            levs.splice(index, 0, val);
            levs = levs.slice(start, end);

            var base_arrays = $.extend({}, this.state);
            base_arrays.level = levs;
            var normalized = this.normalizedArrays(base_arrays);
            normalized.level = levs;
            this.sync(normalized);
        }
    }, {
        key: 'removeLevel',
        value: function removeLevel(index) {
            var levs = this.state.level.slice();
            // Prevent them from deleting all of the levels
            var no_ext_len = levs.length;
            if (this.props.ext1) {
                no_ext_len -= 1;
            }
            if (this.props.ext2) {
                no_ext_len -= 1;
            }
            if (no_ext_len == 1) {
                return;
            }
            var start = 0;
            levs.splice(index, 1);
            var end = levs.length; // it would be +1, but we're removing an element.
            // Remove the target
            if (this.props.ext1) {
                start += 1;
            }
            if (this.props.ext2) {
                end -= 1;
            }
            levs = levs.slice(start, end);
            var base_arrays = $.extend({}, this.state);
            base_arrays.level = levs;
            var normalized = this.normalizedArrays(base_arrays);
            normalized.level = levs;
            this.sync(normalized);
        }
    }, {
        key: 'setFillStyle',
        value: function setFillStyle(s) {
            var style = null;
            if (s.hatch) {
                style = "hatch";
            } else if (s.pattern) {
                style = "pattern";
            } else {
                style = "solid";
            }
            this.props.updateGraphicsMethod('fillareastyle', style);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var levels = this.state.level.map(function (v, i) {
                return _react2.default.createElement(_LevelField2.default, { value: v, onRemove: function onRemove() {
                        self.removeLevel(i);
                    }, onChange: function onChange(l) {
                        self.updateLevel(i, l);
                    }, key: "lev_" + i, ind: i });
            });
            var fills = [];

            var _loop = function _loop(i) {
                fills.push(_react2.default.createElement(_LegendFill2.default, { key: "fill_" + i, title: i + "", updateFill: function updateFill(fill) {
                        self.updateFill(i, fill);
                    }, colormap: _this2.props.colormap, color: _this2.state.color[i], opacity: _this2.state.opacity[i], pattern: _this2.state.pattern[i] }));
            };

            for (var i = 0; i < this.state.color.length; i++) {
                _loop(i);
            }

            var components = [];

            var _loop2 = function _loop2(i) {
                components.push(levels[i]);
                if (i <= levels.length - 1) {
                    components.push(fills[i]);
                }
                if (i < levels.length) {
                    if (i == levels.length - 1 && _this2.props.ext2) {
                        return 'continue';
                    }
                    var addLevel = function addLevel() {
                        self.addLevel(i);
                    };
                    components.push(_react2.default.createElement(
                        _reactBootstrap.Button,
                        { key: "add_" + i, onClick: function onClick(e) {
                                addLevel();
                            } },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
                    ));
                }
            };

            for (var i = 0; i < levels.length; i++) {
                var _ret2 = _loop2(i);

                if (_ret2 === 'continue') continue;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.ControlLabel,
                        null,
                        'Fill Style:'
                    ),
                    _react2.default.createElement(_BooleansField2.default, { controlId: 'fill_style', updatedValue: this.setFillStyle, labels: ["Solid", "Patterned", "Hatched"], options: ["solid", "pattern", "hatch"], value: this.props.fillStyle, inline: true, multiple: false })
                ),
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    'Levels:'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { "border": "1px solid #ccc", "padding": ".5em", "borderRadius": "5px" } },
                    components
                )
            );
        }
    }]);

    return FillareaFields;
}(_react.Component);

FillareaFields.propTypes = {
    updateGraphicsMethod: _propTypes2.default.func,
    bulkUpdate: _propTypes2.default.func,
    colormap: _propTypes2.default.array,
    level: _propTypes2.default.array,
    color: _propTypes2.default.array,
    opacity: _propTypes2.default.array,
    pattern: _propTypes2.default.array,
    fillStyle: _propTypes2.default.string,
    ext1: _propTypes2.default.bool,
    ext2: _propTypes2.default.bool
};

exports.default = FillareaFields;
//# sourceMappingURL=FillareaFields.js.map