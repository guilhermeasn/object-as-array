---
sidebar_position: 6
---

# KeysMap

Calls a defined callback function on each element of an object, and returns an object with the same keys that contains the results.

<h4>Functional programming</h4>

 - Typing:

```<R>(handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>```

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

    return obj.keysMap((_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R>(object: O, handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>```

 - Example:

```ts
import keysMap from "object-as-array/keysMap";

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

    return keysMap(obj, (_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```
