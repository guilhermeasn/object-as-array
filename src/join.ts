import toArray from "./toArray";
import { ObjectData } from "./types";

/**
 * Joins all elements of an object separated by the specified separator string
 * @param object Object to be joined
 * @param dataType Object data to be joined: key, value or entrie
 * @param separator String that joins the data (optional)
 * @returns Resulting string
 */
export default function join<O extends object, T extends keyof ObjectData<O>>(object : O, dataType : T, separator ?: T extends 'entrie' ? [string, string] | string : string) : string {

    return dataType === 'entrie'
        ? toArray(object, 'entrie').map(entries => entries.join(separator?.[0] ?? separator?.toString())).join(separator?.[1] ?? separator?.toString())
        : toArray(object, dataType).join(separator?.toString());

}
