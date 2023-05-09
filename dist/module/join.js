import toArray from "./toArray";
export default function join(object, dataType, separator) {
    var _a;
    return dataType === 'entries'
        ? toArray(object, 'entries').map(entries => { var _a; return entries.join((_a = separator === null || separator === void 0 ? void 0 : separator[0]) !== null && _a !== void 0 ? _a : separator); }).join((_a = separator === null || separator === void 0 ? void 0 : separator[1]) !== null && _a !== void 0 ? _a : separator)
        : toArray(object, dataType).join(separator);
}
