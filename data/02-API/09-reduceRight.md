---
sidebar_position: 9
---

# ReduceRight

Calls the specified callback function for all the elements in an object reversed. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

<h4>Functional programming</h4>

 - Typing:

```<R = O[keyof O]>(handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

 - Example:

```ts
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.reduceRight((p, v) => p - v);

    // Result: 334

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R = O[keyof O]>(object: O, handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

 - Example:

```ts
import reduceRight from "object-as-array/reduceRight";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return reduceRight(obj, (p, v) => p - v);

    // Result: 334

}
```
