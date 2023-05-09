"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const every_1 = __importDefault(require("./every"));
const filter_1 = __importDefault(require("./filter"));
const forEach_1 = __importDefault(require("./forEach"));
const map_1 = __importDefault(require("./map"));
const reduce_1 = __importDefault(require("./reduce"));
const some_1 = __importDefault(require("./some"));
const sort_1 = __importDefault(require("./sort"));
const toArray_1 = __importDefault(require("./toArray"));
const join_1 = __importDefault(require("./join"));
const keyOf_1 = __importDefault(require("./keyOf"));
const lastKeyOf_1 = __importDefault(require("./lastKeyOf"));
const reverse_1 = __importDefault(require("./reverse"));
const toString_1 = __importDefault(require("./toString"));
function objectAsArray(object) {
    return {
        filter: handler => (0, filter_1.default)(object, handler),
        sort: handler => (0, sort_1.default)(object, handler),
        some: handler => (0, some_1.default)(object, handler),
        every: handler => (0, every_1.default)(object, handler),
        forEach: handler => (0, forEach_1.default)(object, handler),
        map: handler => (0, map_1.default)(object, handler),
        reduce: (handler, initial) => (0, reduce_1.default)(object, handler, initial),
        reverse: () => (0, reverse_1.default)(object),
        toString: () => (0, toString_1.default)(object),
        toArray: dataType => (0, toArray_1.default)(object, dataType),
        join: (dataType, separator) => (0, join_1.default)(object, dataType, separator),
        keyOf: value => (0, keyOf_1.default)(object, value),
        lastKeyOf: value => (0, lastKeyOf_1.default)(object, value),
        length: Object.keys(object).length,
        object: object
    };
}
exports.default = objectAsArray;
