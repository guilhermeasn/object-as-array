---
sidebar_position: 10
---

# Slice

Returns a section of an object

<h4>Functional programming</h4>

 - Typing:

```<K extends (keyof O)[]>(...keys: K) => Pick<O, ArrayValuesType<K>>```

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

    return obj.slice('V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, K extends (keyof O)[]>(object: O, ...keys: K) => Pick<O, ArrayValuesType<K>>```

 - Example:

```ts
import slice from "object-as-array/slice";

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

    return slice(obj, 'V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```
