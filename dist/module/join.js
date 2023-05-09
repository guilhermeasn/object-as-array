import toArray from "./toArray";
export default function join(object, dataType, separator) {
    var _a;
    return dataType === 'entrie'
        ? toArray(object, 'entrie').map(entries => { var _a; return entries.join((_a = separator === null || separator === void 0 ? void 0 : separator[0]) !== null && _a !== void 0 ? _a : separator === null || separator === void 0 ? void 0 : separator.toString()); }).join((_a = separator === null || separator === void 0 ? void 0 : separator[1]) !== null && _a !== void 0 ? _a : separator === null || separator === void 0 ? void 0 : separator.toString())
        : toArray(object, dataType).join(separator === null || separator === void 0 ? void 0 : separator.toString());
}
