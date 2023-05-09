export type InfoType<O extends object> = {
    key    : keyof O,
    value  : O[keyof O],
    entrie : [keyof O, O[keyof O]]
}

export type DataType<O extends object> = {
    keys    : Array<keyof O>,
    values  : Array<O[keyof O]>,
    entries : Array<[keyof O, O[keyof O]]>
}