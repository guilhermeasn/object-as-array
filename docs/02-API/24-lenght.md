---
sidebar_position: 24
---

# Length

Number of elements in the original object

<h4>Functional programming</h4>

 - Typing:

```number```

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

    return obj.length;

    // Result: 7

}
```
