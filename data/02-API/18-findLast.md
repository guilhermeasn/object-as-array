---
sidebar_position: 18
---

# FindLast

Returns the last element that satisfies the test function or returns null

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectInfo<O>>(dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

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

    return obj.findLast('entrie', v => v < 1000);

    // Result: ['D', 500]

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

 - Example:

```ts
import findLast from "object-as-array/findLast";

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

    return findLast(obj, 'entrie', v => v < 1000);

    // Result: ['D', 500]

}
```
