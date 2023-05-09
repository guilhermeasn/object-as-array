export default function sort(object, handler) {
    return Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(va, vb, ka, kb)));
}
