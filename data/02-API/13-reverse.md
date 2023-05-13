---
sidebar_position: 13
---

# Reverse

Reverses the position of object elements

<h4>Functional programming</h4>

 - Typing:

```ts
() => O
```

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

    return obj.reverse();

    // Result: {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O) => O
```

 - Example:

```ts
import reverse from "object-as-array/reverse";

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

    return reverse(obj);

    // Result: {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

}
```
