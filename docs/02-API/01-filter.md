---
sidebar_position: 1
---

# Filter

Returns only the elements of the object that satisfy the test function

<h4>Functional programming</h4>

 - Typing:

```(handler: (value: O[keyof O], key: keyof O) => boolean) => Partial<O>```

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

    return obj.filter(v => v > 10 && v < 1000);

    // Result: {L: 50, C: 100, D: 500}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => boolean) => Partial<O>```

 - Example:

```
import filter from "object-as-array/filter";

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

    return filter(obj, v => v > 10 && v < 1000);

    // Result: {L: 50, C: 100, D: 500}

}
```
