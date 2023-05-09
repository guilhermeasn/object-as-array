export default function filter(object, handler) {
    return Object.fromEntries(Object.entries(object).filter(([k, v]) => handler(v, k)));
}
