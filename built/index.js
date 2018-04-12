"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SUPPORTED_GM_EDITORS = undefined;

var _graphicsmethods = require("./graphicsmethods");

var _graphicsmethods2 = _interopRequireDefault(_graphicsmethods);

var _BooleansField = require("./common/BooleansField");

var _BooleansField2 = _interopRequireDefault(_BooleansField);

var _NumberField = require("./common/NumberField");

var _NumberField2 = _interopRequireDefault(_NumberField);

var _templates = require("./templates");

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUPPORTED_GM_EDITORS = ["Gfb", "Gfi"]; // check GraphicsMethodEditForm.jsx for values.

var widgets = {
    GMEdit: _graphicsmethods2.default,
    TemplateEdit: _templates2.default,
    BooleansField: _BooleansField2.default,
    NumberField: _NumberField2.default
};

exports.SUPPORTED_GM_EDITORS = SUPPORTED_GM_EDITORS;
exports.default = widgets;
//# sourceMappingURL=index.js.map