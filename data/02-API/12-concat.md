---
sidebar_position: 12
---

# Concat

Combines two objects. This method returns a new object without modifying any existing object
   
<h4>Functional programming</h4>

 - Typing:

```<A extends object>(assign: A) => O & A```

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

    return obj.concat({II : 2, III: 3, IV: 4});

    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, A extends object>(object: O, assign: A) => O & A```

 - Example:

```
import concat from "object-as-array/concat";

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

    return concat(obj, {II : 2, III: 3, IV: 4});

    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}

}
```
