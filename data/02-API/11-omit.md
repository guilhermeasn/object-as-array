---
sidebar_position: 11
---

# Omit

Returns the elements that did not have their keys specified
    
<h4>Functional programming</h4>

 - Typing:

```<K extends (keyof O)[]>(...keys: K) => Omit<O, ArrayValuesType<K>>```

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

    return obj.omit('I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, K extends (keyof O)[]>(object: O, ...keys: K) => Omit<O, ArrayValuesType<K>>```

 - Example:

```ts
import omit from "object-as-array/omit";

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

    return omit(obj, 'I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```
