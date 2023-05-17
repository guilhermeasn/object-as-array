---
sidebar_position: 5
---

# ForEachAsync

Performs the specified async action for each element in an object

<h4>Functional programming</h4>

 - Typing:

```ts
(handler: (value: O[keyof O], key: keyof O) => Promise<void>) => Promise<void>
```

 - Example:

```ts
import objectAsArray from "object-as-array";

export default async function example() {

    const pairs = [];

    const sleep = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), 35);
        });
    }

    const isPair = async n => {
        await sleep();
        return n % 2 === 0;
    }
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    await obj.forEachAsync(async v => { pairs.push(await isPair(v)) });

    return pairs;

    // Result: [ false, false, true, true, true, true, true ]

}
```

<h4>Modular programming</h4>

 - Typing:

```ts
<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => Promise<void>) => Promise<void>
```

 - Example:

```ts
import forEachAsync from "object-as-array/forEachAsync";

export default async function example() {

    const pairs = [];

    const sleep = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), 35);
        });
    }

    const isPair = async n => {
        await sleep();
        return n % 2 === 0;
    }
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    await forEachAsync(obj, async v => { pairs.push(await isPair(v)) });

    return pairs;

    // Result: [ false, false, true, true, true, true, true ]

}
```
