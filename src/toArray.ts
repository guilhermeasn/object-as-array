import { DataType } from "./types";

export default function toArray<O extends object, T extends keyof DataType<O>>(object : O, dataType : T) : DataType<O>[T] {
    switch(dataType) {
        case 'keys'   : return Object.keys(object)    as DataType<O>[T];
        case 'values' : return Object.values(object)  as DataType<O>[T];
        default       : return Object.entries(object) as DataType<O>[T];
    }
}
