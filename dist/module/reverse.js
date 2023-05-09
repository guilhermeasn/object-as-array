export default function reverse(object) {
    return Object.fromEntries(Object.entries(object).reverse());
}
