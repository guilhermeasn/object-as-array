import { MapHandler } from "./map";

export default function keysMap<O extends object, R>(object : O, handler : MapHandler<O, R>) : Record<keyof O, R> {

    const r = {} as Record<keyof O, R>;

    for(let key in object) {
        r[key] = handler(object[key], key);
    }

    return r;

}
