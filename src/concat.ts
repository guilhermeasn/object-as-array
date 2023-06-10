/**
 * Combines two objects
 * This method returns a new object without modifying any existing object
 * @param object Object to be combined
 * @param assign Object to be combined
 * @returns Composed object
 */
export function concat<O extends object, A extends object>(object : O, assign : A) : O & A {
    
    let concat : any = {};
    
    for(let key in object) concat[key] = object[key];
    for(let key in assign) concat[key] = assign[key];

    return concat;

}

export default concat;