---
sidebar_position: 5
---

# Map

 - Typing:

```<R>(handler: (value: O[keyof O], key: keyof O) => R) => R[]```

 - Example:

Calls a defined callback function on each element of an object, and returns an array that contains the results.

<h4>Functional programming</h4>

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

    return obj.map((v, k) => `${k} => ${v}`);

    // Result: ['I => 1', 'V => 5', 'X => 10', 'L => 50', 'C => 100', 'D => 500', 'M => 1000']

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R>(object: O, handler: (value: O[keyof O], key: keyof O) => R) => R[]```

 - Example:

```
import map from "object-as-array/map";

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

    return map(obj, (v, k) => `${k} => ${v}`);

    // Result: ['I => 1', 'V => 5', 'X => 10', 'L => 50', 'C => 100', 'D => 500', 'M => 1000']

}
```