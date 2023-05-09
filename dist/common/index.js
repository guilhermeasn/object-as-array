"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concat_1 = __importDefault(require("./concat"));
const every_1 = __importDefault(require("./every"));
const filter_1 = __importDefault(require("./filter"));
const find_1 = __importDefault(require("./find"));
const findLast_1 = __importDefault(require("./findLast"));
const forEach_1 = __importDefault(require("./forEach"));
const join_1 = __importDefault(require("./join"));
const keyOf_1 = __importDefault(require("./keyOf"));
const keysMap_1 = __importDefault(require("./keysMap"));
const lastKeyOf_1 = __importDefault(require("./lastKeyOf"));
const map_1 = __importDefault(require("./map"));
const reduce_1 = __importDefault(require("./reduce"));
const reduceRight_1 = __importDefault(require("./reduceRight"));
const reverse_1 = __importDefault(require("./reverse"));
const slice_1 = __importDefault(require("./slice"));
const some_1 = __importDefault(require("./some"));
const sort_1 = __importDefault(require("./sort"));
const splice_1 = __importDefault(require("./splice"));
const toArray_1 = __importDefault(require("./toArray"));
const toString_1 = __importDefault(require("./toString"));
const valueOf_1 = __importDefault(require("./valueOf"));
function objectAsArray(object) {
    let length = Object.keys(object).length;
    function push(assign) {
        object = Object.assign(Object.assign({}, object), assign);
        length = Object.keys(object).length;
        return length;
    }
    return {
        filter: handler => (0, filter_1.default)(object, handler),
        some: handler => (0, some_1.default)(object, handler),
        every: handler => (0, every_1.default)(object, handler),
        forEach: handler => (0, forEach_1.default)(object, handler),
        map: handler => (0, map_1.default)(object, handler),
        keysMap: handler => (0, keysMap_1.default)(object, handler),
        sort: (dataType, handler) => (0, sort_1.default)(object, dataType, handler),
        reduce: (handler, initial) => (0, reduce_1.default)(object, handler, initial),
        reduceRight: (handler, initial) => (0, reduceRight_1.default)(object, handler, initial),
        slice: (...keys) => (0, slice_1.default)(object, ...keys),
        splice: (changeOriginalObject, ...keys) => (0, splice_1.default)(object, changeOriginalObject, ...keys),
        concat: assign => (0, concat_1.default)(object, assign),
        reverse: () => (0, reverse_1.default)(object),
        toString: () => (0, toString_1.default)(object),
        toArray: dataType => (0, toArray_1.default)(object, dataType),
        join: (dataType, separator) => (0, join_1.default)(object, dataType, separator),
        find: (dataType, handler) => (0, find_1.default)(object, dataType, handler),
        findLast: (dataType, handler) => (0, findLast_1.default)(object, dataType, handler),
        keyOf: value => (0, keyOf_1.default)(object, value),
        lastKeyOf: value => (0, lastKeyOf_1.default)(object, value),
        valueOf: key => (0, valueOf_1.default)(object, key),
        data: () => object,
        push,
        length
    };
}
exports.default = objectAsArray;
