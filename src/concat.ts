/**
 * Combines two objects
 * This method returns a new object without modifying any existing object
 * @param object Object to be combined
 * @param assign Object to be combined
 * @returns Composed object
 */
export default function concat<O extends object, A extends object>(object : O, assign : A) : O & A {
    return {
        ...object,
        ...assign
    };
}