export default function reverse<O extends object>(object : O) : O {
    return <O>Object.fromEntries(Object.entries(object).reverse());
}