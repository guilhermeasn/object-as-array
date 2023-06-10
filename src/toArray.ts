import type { ObjectData } from "./index";

/**
 * Turn object into an array
 * @param object Target object
 * @param dataType Data of the object to be used: key, value or entrie
 * @returns Resulting array
 */
export function toArray<O extends object, T extends keyof ObjectData<O>>(object : O, dataType : T) : ObjectData<O>[T] {

    const keys = [];

    for(let key in object) {
        keys.push(key);
    }

    switch(dataType) {
        case 'key'   : return keys as ObjectData<O>[T];
        case 'value' : return keys.map(key => object[key]) as ObjectData<O>[T];
        default      : return keys.map(key => [key, object[key]]) as ObjectData<O>[T];
    }

}

export default toArray;