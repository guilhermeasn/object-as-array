export type DataType<O extends object> = {
    keys: Array<keyof O>;
    values: Array<O[keyof O]>;
    entries: Array<[keyof O, O[keyof O]]>;
};
export default function toArray<O extends object, T extends keyof DataType<O>>(object: O, dataType: T): DataType<O>[T];
