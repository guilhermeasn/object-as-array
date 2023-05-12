---
sidebar_position: 22
---

# Data

Original object elements
     
<h4>Functional programming</h4>

 - Typing:

```() => O```

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

    return obj.data();

    // Result: {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}

}
```
