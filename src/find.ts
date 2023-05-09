import { ObjectInfo } from "./types";

export type FindHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

export default function find<O extends object, T extends keyof ObjectInfo<O>>(object : O, infoType : T, handler : FindHandler<O>) : ObjectInfo<O>[T] | null {
    for(let key in object) {
        if(handler(object[key], key)) {
            return (infoType === 'key' ? key :
                   infoType === 'value' ? object[key] :
                   [key, object[key]]) as ObjectInfo<O>[T]
        }
    }
    return null;
}