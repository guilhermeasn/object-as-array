import { ObjectInfo } from "./types";

export type FindHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

export default function find<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler : FindHandler<O>) : ObjectInfo<O>[T] | null {
    for(let key in object) {
        if(handler(object[key], key)) {
            return (
                dataType === 'key' ? key :
                dataType === 'value' ? object[key] :
                [key, object[key]]
            ) as ObjectInfo<O>[T]
        }
    }
    return null;
}