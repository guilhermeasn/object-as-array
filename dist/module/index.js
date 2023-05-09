import every from "./every";
import filter from "./filter";
import forEach from "./forEach";
import map from "./map";
import reduce from "./reduce";
import some from "./some";
import sort from "./sort";
import toArray from "./toArray";
import join from "./join";
import keyOf from "./keyOf";
import lastKeyOf from "./lastKeyOf";
import reverse from "./reverse";
import toString from "./toString";
export default function objectAsArray(object) {
    return {
        filter: handler => filter(object, handler),
        sort: handler => sort(object, handler),
        some: handler => some(object, handler),
        every: handler => every(object, handler),
        forEach: handler => forEach(object, handler),
        map: handler => map(object, handler),
        reduce: (handler, initial) => reduce(object, handler, initial),
        reverse: () => reverse(object),
        toString: () => toString(object),
        toArray: dataType => toArray(object, dataType),
        join: (dataType, separator) => join(object, dataType, separator),
        keyOf: value => keyOf(object, value),
        lastKeyOf: value => lastKeyOf(object, value),
        length: Object.keys(object).length,
        object: object
    };
}
