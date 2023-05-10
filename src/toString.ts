export default function toString(object : object, expand : boolean | number = false) : string {
    return JSON.stringify(object, undefined, typeof expand === 'number' ? expand : !!expand ? 2 : undefined);
}