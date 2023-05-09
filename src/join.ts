import toArray from "./toArray";
import { ObjectData } from "./types";

export default function join<O extends object, T extends keyof ObjectData<O>>(object : O, dataType : T, separator ?: T extends 'entrie' ? [string, string] | string : string) : string {

    return dataType === 'entrie'
        ? toArray(object, 'entrie').map(entries => entries.join(separator?.[0] ?? separator?.toString())).join(separator?.[1] ?? separator?.toString())
        : toArray(object, dataType).join(separator?.toString());

}
