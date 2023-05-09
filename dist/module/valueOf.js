export default function valueOf(object, key) {
    return object === null || object === void 0 ? void 0 : object[key];
}
