---
sidebar_position: 7
---

# Sort

Sorts the position of the object's elements

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectInfo<O>>(dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O```

 - Example:

```
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

    return obj.sort('key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O```

 - Example:

```
import sort from "object-as-array/sort";

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

    return sort(obj, 'key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```
