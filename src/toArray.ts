import { DataType } from "./types";

export default function toArray<O extends object, T extends keyof DataType<O>>(object : O, dataType : T) : DataType<O>[T] {
    switch(dataType) {
        case 'key'   : return Object.keys(object)    as DataType<O>[T];
        case 'value' : return Object.values(object)  as DataType<O>[T];
        default      : return Object.entries(object) as DataType<O>[T];
    }
}
