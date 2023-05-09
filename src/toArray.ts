import { ObjectData } from "./types";

export default function toArray<O extends object, T extends keyof ObjectData<O>>(object : O, dataType : T) : ObjectData<O>[T] {
    switch(dataType) {
        case 'key'   : return Object.keys(object)    as ObjectData<O>[T];
        case 'value' : return Object.values(object)  as ObjectData<O>[T];
        default      : return Object.entries(object) as ObjectData<O>[T];
    }
}
