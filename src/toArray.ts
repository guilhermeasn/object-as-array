export type dataType<O extends object> = {
    keys    : Array<keyof O>,
    values  : Array<O[keyof O]>,
    entries : Array<[keyof O, O[keyof O]]>
}

export default function toArray<O extends object, T extends keyof dataType<O>>(object : O, dataType : T) : dataType<O>[T] {
    switch(dataType) {
        case 'keys'   : return Object.keys(object)    as dataType<O>[T];
        case 'values' : return Object.values(object)  as dataType<O>[T];
        default       : return Object.entries(object) as dataType<O>[T];
    }
}
