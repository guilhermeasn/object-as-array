export type ReduceHandler<O extends object, R> = (previousValue: R, currentValue: O[keyof O], currentKey : keyof O) => R

export default function reduce<O extends object, R = O[keyof O]>(object : O, handler : ReduceHandler<O, R>, initial ?: R) : R | undefined {

    let r : R | undefined = initial;

    for(let key in object) {
        if(typeof r === 'undefined') r = object[key] as R;
        else r = handler(r as R, object[key], key);
    }

    return r;

}
