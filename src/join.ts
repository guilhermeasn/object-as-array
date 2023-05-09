import toArray, { DataType } from "./toArray";

export default function join<O extends object, T extends keyof DataType<O>>(object : O, dataType : T, separator ?: T extends 'entries' ? [string, string] | string : string) : string {

    return dataType === 'entries'
        ? toArray(object, 'entries').map(entries => entries.join(separator?.[0] ?? separator as string)).join(separator?.[1] ?? separator as string)
        : toArray(object, dataType).join(separator as string);

}
