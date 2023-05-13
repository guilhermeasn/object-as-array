---
sidebar_position: 16
---

# Join

Joins all elements of an object separated by the specified separator string

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectData<O>>(dataType: T, separator?: (T extends "entries" ? string | [string, string] : string) | undefined) => string```

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

    return obj.join('value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T, separator?: (T extends "entries" ? string | [string, string] : string) | undefined) => string```

 - Example:

```ts
import join from "object-as-array/join";

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

    return join(obj, 'value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```
