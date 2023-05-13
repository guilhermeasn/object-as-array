---
sidebar_position: 4
---

# ForEach

Performs the specified action for each element in an object

<h4>Functional programming</h4>

 - Typing:

```ts
(handler: (value: O[keyof O], key: keyof O) => void) => void
```

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

    const square = [];

    obj.forEach(v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => void) => void
```

 - Example:

```ts
import forEach from "object-as-array/forEach";

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

    const square = [];

    forEach(obj, v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```
