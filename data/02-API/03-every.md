---
sidebar_position: 3
---

# Every

Determines whether all the members of an object satisfy the specified test

<h4>Functional programming</h4>

 - Typing:

```ts
(handler: (value: O[keyof O], key: keyof O) => boolean) => boolean
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

    return obj.every(v => v % 2 === 0);

    // Result: false

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => boolean) => boolean
```

 - Example:

```ts
import every from "object-as-array/every";

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

    return every(obj, v => v % 2 === 0);

    // Result: false

}
```
