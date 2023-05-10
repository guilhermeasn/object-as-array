/**
 * Turn object into a string
 * @param object 
 * @param expand 
 * @returns 
 */
export default function toString(object : object, expand : boolean | number = false) : string {
    return JSON.stringify(object, undefined, typeof expand === 'number' ? expand : !!expand ? 2 : undefined);
}