---
sidebar_position: 23
---

# Push

Adds or modifies the original object
    
<h4>Functional programming</h4>

 - Typing:

```(assign: Partial<O>) => number```

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

    return obj.push({II: 2, III: 3, IV: 4});

    // Result: 10 (object changed)

}
```
