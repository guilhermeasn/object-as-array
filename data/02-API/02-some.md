---
sidebar_position: 2
---

# Some

Determines whether one of an object's members satisfies the specified test

<h4>Functional programming</h4>

 - Typing:

```(handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

 - Example:

```tsts
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

    return obj.some((v, k) => k === 'L');

    // Result: true

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

 - Example:

```ts
import some from "object-as-array/some";

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

    return some(obj, (v, k) => k === 'L');

    // Result: true

}
```
