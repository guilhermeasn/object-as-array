export type SomeHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

export default function some<O extends object>(object : O, handler : SomeHandler<O>) : boolean {
    for(let key in object) {
        if(handler(object[key], key)) {
            return true;
        }
    }
    return false;
}
