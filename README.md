<h1>object-as-array</h1>

[![tests](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml/badge.svg)](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/object-as-array.svg)](https://www.npmjs.com/package/object-as-array/v/latest)
[![downloads](https://img.shields.io/npm/dt/object-as-array)](https://www.npmjs.com/package/object-as-array/)

Manipulate a javascript object with some of the most used functions in arrays.

- [Installation](#installation)
- [Methods](#methods)
  - [Filter](#filter)
  - [Some](#some)
  - [Every](#every)
  - [ForEach](#foreach)
  - [Map](#map)
  - [KeysMap](#keysmap)
  - [Sort](#sort)
  - [Reduce](#reduce)
  - [ReduceRight](#reduceright)
  - [Slice](#slice)
  - [Omit](#omit)
  - [Concat](#concat)
  - [Reverse](#reverse)
  - [ToString](#tostring)
  - [ToArray](#toarray)
  - [Join](#join)
  - [Find](#find)
  - [FindLast](#findlast)
  - [KeyOf](#keyof)
  - [LastKeyOf](#lastkeyof)
  - [ValueOf](#valueof)
  - [Data](#data)
  - [Push](#push)
  - [Length](#length)
- [About](#about)
  - [Author](#author)
  - [License](#license)

# Installation

Add the **object-as-array** package to your project with *npm*:

```
npm install object-as-array
```

Or with *yarn*:

```
yarn add object-as-array
```

# Methods

You can use the functions in this package with functional or modular programming.

## Filter

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

## Some

Determines whether one of an object's members satisfies the specified test

<h4>Functional programming</h4>

 - Typing:

```(handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

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

    return obj.some((v, k) => k === 'L');

    // Result: true

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

 - Example:

```
import some from "object-as-array/some";

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

    return some(obj, (v, k) => k === 'L');

    // Result: true

}
```

## Every

Determines whether all the members of an object satisfy the specified test

<h4>Functional programming</h4>

 - Typing:

```(handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

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

    return obj.every(v => v % 2 === 0);

    // Result: false

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => boolean) => boolean```

 - Example:

```
import every from "object-as-array/every";

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

    return every(obj, v => v % 2 === 0);

    // Result: false

}
```

## ForEach

Performs the specified action for each element in an object

<h4>Functional programming</h4>

 - Typing:

```(handler: (value: O[keyof O], key: keyof O) => void) => void```

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

    const square = [];

    obj.forEach(v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, handler: (value: O[keyof O], key: keyof O) => void) => void```

 - Example:

```
import forEach from "object-as-array/forEach";

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

    const square = [];

    forEach(obj, v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```

## Map

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

## KeysMap

Calls a defined callback function on each element of an object, and returns an object with the same keys that contains the results.

<h4>Functional programming</h4>

 - Typing:

```<R>(handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>```

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

    return obj.keysMap((_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R>(object: O, handler: (value: O[keyof O], key: keyof O) => R) => Record<keyof O, R>```

 - Example:

```
import keysMap from "object-as-array/keysMap";

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

    return keysMap(obj, (_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```

## Sort

Sorts the position of the object's elements

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectInfo<O>>(dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O```

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

    return obj.sort('key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number) => O```

 - Example:

```
import sort from "object-as-array/sort";

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

    return sort(obj, 'key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```

## Reduce

Calls the specified callback function for all the elements in an object. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

<h4>Functional programming</h4>

 - Typing:

```<R = O[keyof O]>(handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

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

    return obj.reduce((p, v) => p + v, 334);

    // Result: 2000

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R = O[keyof O]>(object: O, handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

 - Example:

```
import reduce from "object-as-array/reduce";

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

    return reduce(obj, (p, v) => p + v, 334);

    // Result: 2000

}
```

## ReduceRight

Calls the specified callback function for all the elements in an object reversed. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

<h4>Functional programming</h4>

 - Typing:

```<R = O[keyof O]>(handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

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

    return obj.reduceRight((p, v) => p - v);

    // Result: 334

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, R = O[keyof O]>(object: O, handler: (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R, initial?: R | undefined) => R | undefined```

 - Example:

```
import reduceRight from "object-as-array/reduceRight";

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

    return reduceRight(obj, (p, v) => p - v);

    // Result: 334

}
```

## Slice

Returns a section of an object

<h4>Functional programming</h4>

 - Typing:

```<K extends (keyof O)[]>(...keys: K) => Pick<O, ArrayValuesType<K>>```

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

    return obj.slice('V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, K extends (keyof O)[]>(object: O, ...keys: K) => Pick<O, ArrayValuesType<K>>```

 - Example:

```
import slice from "object-as-array/slice";

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

    return slice(obj, 'V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```

## Omit

Returns the elements that did not have their keys specified
    
<h4>Functional programming</h4>

 - Typing:

```<K extends (keyof O)[]>(...keys: K) => Omit<O, ArrayValuesType<K>>```

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

    return obj.omit('I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, K extends (keyof O)[]>(object: O, ...keys: K) => Omit<O, ArrayValuesType<K>>```

 - Example:

```
import omit from "object-as-array/omit";

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

    return omit(obj, 'I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```

## Concat

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

## Reverse

Reverses the position of object elements

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

    return obj.reverse();

    // Result: {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O) => O```

 - Example:

```
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

## ToString

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

## ToArray

Turn object into an array

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectData<O>>(dataType: T) => ObjectData<O>[T]```

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

    return obj.toArray('key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T) => ObjectData<O>[T]```

 - Example:

```
import toArray from "object-as-array/toArray";

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

    return toArray(obj, 'key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```

## Join

Joins all elements of an object separated by the specified separator string

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectData<O>>(dataType: T, separator?: (T extends "entries" ? string | [string, string] : string) | undefined) => string```

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

    return obj.join('value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T, separator?: (T extends "entries" ? string | [string, string] : string) | undefined) => string```

 - Example:

```
import join from "object-as-array/join";

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

    return join(obj, 'value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```

## Find

Returns the first element that satisfies the test function or returns null

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectInfo<O>>(dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

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

    return obj.find('key', v => v > 10);

    // Result: 'L'

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

 - Example:

```
import find from "object-as-array/find";

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

    return find(obj, 'key', v => v > 10);

    // Result: 'L'

}
```

## FindLast

Returns the last element that satisfies the test function or returns null

<h4>Functional programming</h4>

 - Typing:

```<T extends keyof ObjectInfo<O>>(dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

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

    return obj.findLast('entrie', v => v < 1000);

    // Result: ['D', 500]

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: (value: O[keyof O], key: keyof O) => boolean) => ObjectInfo<O>[T] | null```

 - Example:

```
import findLast from "object-as-array/findLast";

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

    return findLast(obj, 'entrie', v => v < 1000);

    // Result: ['D', 500]

}
```

## KeyOf

Returns the key of the first occurrence of a value in an object or null

<h4>Functional programming</h4>

 - Typing:

```(value: O[keyof O]) => keyof O | null```

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

    return obj.keyOf(100);

    // Result: 'C'

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, value: O[keyof O]) => keyof O | null```

 - Example:

```
import keyOf from "object-as-array/keyOf";

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

    return keyOf(obj, 100);

    // Result: 'C'

}
```

## LastKeyOf

Returns the key of the last occurrence of a value in an object or null

<h4>Functional programming</h4>

 - Typing:

```(value: O[keyof O]) => keyof O | null```

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

    return obj.lastKeyOf(300);

    // Result: null

}
```

<h4>Modular programming</h4>

 - Typing:

```<O extends object>(object: O, value: O[keyof O]) => keyof O | null```

 - Example:

```
import lastKeyOf from "object-as-array/lastKeyOf";

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

    return lastKeyOf(obj, 300);

    // Result: null

}
```

## ValueOf

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

## Data

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

## Push

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

## Length

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

# About

## Author

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

## License

This project is under the MIT license - see the [LICENSE](https://github.com/guilhermeasn/mask-hooks/blob/master/LICENSE) file for details.
