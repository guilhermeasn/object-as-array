/**
 * Reverses the position of object elements
 * @param object Target object
 * @returns Object reversed
 */
export function reverse<O extends object>(object : O) : O {
    return <O>Object.fromEntries(Object.entries(object).reverse());
}

export default reverse;