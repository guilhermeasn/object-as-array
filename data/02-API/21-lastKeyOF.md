---
sidebar_position: 21
---

# LastKeyOf

Returns the key of the last occurrence of a value in an object or null

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

    return obj.lastKeyOf(300);

    // Result: null

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O, value: O[keyof O]) => keyof O | null
```

 - Example:

```ts
import lastKeyOf from "object-as-array/lastKeyOf";

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

    return lastKeyOf(obj, 300);

    // Result: null

}
```
