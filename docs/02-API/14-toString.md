---
sidebar_position: 14
---

# ToString

Turn object into a string

<h4>Functional programming</h4>

 - Typing:

```(expand?: boolean | number) => string```

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

    return obj.toString();

    // Result: '{"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}'

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, expand?: boolean | number) => string```

 - Example:

```
import toString from "object-as-array/toString";

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

    return toString(obj);

    // Result: '{"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}'

}
```
