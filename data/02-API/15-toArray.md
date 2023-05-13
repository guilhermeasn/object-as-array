---
sidebar_position: 15
---

# ToArray

Turn object into an array

<h4>Functional programming</h4>

 - Typing:

```ts
<T extends keyof ObjectData<O>>(dataType: T) => ObjectData<O>[T]
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

    return obj.toArray('key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T) => ObjectData<O>[T]
```

 - Example:

```ts
import toArray from "object-as-array/toArray";

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

    return toArray(obj, 'key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```
