---
sidebar_position: 21
---

# ValueOf

Returns the value of an element of an object
     
<h4>Functional programming</h4>

 - Typing:

```<K extends keyof O>(key: K) => O[K]```

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

    return obj.valueOf('X');

    // Result: 10

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, K extends keyof O>(object: O, key: K) => O[K]```

 - Example:

```
import valueOf from "object-as-array/valueOf";

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

    return valueOf(obj, 'X');

    // Result: 10

}
```
