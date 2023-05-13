---
sidebar_position: 19
---

# KeyOf

Returns the key of the first occurrence of a value in an object or null

<h4>Functional programming</h4>

 - Typing:

```ts
(value: O[keyof O]) => keyof O | null
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

    return obj.keyOf(100);

    // Result: 'C'

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O, value: O[keyof O]) => keyof O | null
```

 - Example:

```ts
import keyOf from "object-as-array/keyOf";

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

    return keyOf(obj, 100);

    // Result: 'C'

}
```
