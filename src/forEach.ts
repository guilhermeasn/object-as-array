export type ForEachHandler<O extends object> = (value : O[keyof O], key : keyof O) => void;

export default function forEach<O extends object>(object : O, handler : ForEachHandler<O>) : void {
    for(let key in object) {
        handler(object[key], key);
    }
}
