export type ObjectDataType = keyof ObjectData<{}>;

export type ObjectData<O extends Object> = {
    keys: keyof O;
    values: O[keyof O];
    entries: [keyof O, O[keyof O]]
}

export type AsArrayMethods<O extends Object, K extends ObjectDataType> = {
    filter : (predicate : (data : ObjectData<O>[K]) => boolean) => O;
    sort : (compareFn : (a : ObjectData<O>[K], b: ObjectData<O>[K]) => number) => O;
}
