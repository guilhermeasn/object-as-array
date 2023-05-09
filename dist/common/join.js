"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toArray_1 = __importDefault(require("./toArray"));
function join(object, dataType, separator) {
    var _a;
    return dataType === 'entrie'
        ? (0, toArray_1.default)(object, 'entrie').map(entries => { var _a; return entries.join((_a = separator === null || separator === void 0 ? void 0 : separator[0]) !== null && _a !== void 0 ? _a : separator === null || separator === void 0 ? void 0 : separator.toString()); }).join((_a = separator === null || separator === void 0 ? void 0 : separator[1]) !== null && _a !== void 0 ? _a : separator === null || separator === void 0 ? void 0 : separator.toString())
        : (0, toArray_1.default)(object, dataType).join(separator === null || separator === void 0 ? void 0 : separator.toString());
}
exports.default = join;
