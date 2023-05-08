export type EveryHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

export default function every<O extends object>(object : O, handler : EveryHandler<O>) : boolean {
    for(let key in object) {
        if(!handler(object[key], key)) {
            return false;
        }
    }
    return true;
}
