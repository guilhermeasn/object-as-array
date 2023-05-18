import type { ObjectData } from "./index";

/**
 * Turn object into an array
 * @param object Target object
 * @param dataType Data of the object to be used: key, value or entrie
 * @returns Resulting array
 */
export function toArray<O extends object, T extends keyof ObjectData<O>>(object : O, dataType : T) : ObjectData<O>[T] {
    switch(dataType) {
        case 'key'   : return Object.keys(object)    as ObjectData<O>[T];
        case 'value' : return Object.values(object)  as ObjectData<O>[T];
        default      : return Object.entries(object) as ObjectData<O>[T];
    }
}

export default toArray;