<h1>object-as-array</h1>

[![tests](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml/badge.svg)](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/object-as-array.svg)](https://www.npmjs.com/package/object-as-array/v/latest)
[![downloads](https://img.shields.io/npm/dt/object-as-array)](https://www.npmjs.com/package/object-as-array/)

Manipulate a javascript object with some of the most used functions in arrays.

### [Access the complete documentation](https://guilhermeasn.github.io/object-as-array/)

## Installation

Add the **object-as-array** package to your project with *npm*:

```sh
npm install object-as-array
```

Or with *yarn*:

```sh
yarn add object-as-array
```

## Resources

Available resources:

 - **Filter**: Returns only the elements of the object that satisfy the test function
 - **Some**: Determines whether one of an object's members satisfies the specified test
 - **Every**: Determines whether all the members of an object satisfy the specified test
 - **ForEach**: Performs the specified action for each element in an object
 - **ForEachAsync**: Performs the specified async action for each element in an object
 - **Map**: Calls a defined callback function on each element of an object, and returns an array that contains the results.
 - **KeysMap**: Calls a defined callback function on each element of an object, and returns an object with the same keys that contains the results.
 - **Sort**: Sorts the position of the object's elements
 - **Reduce**: Calls the specified callback function for all the elements in an object. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function
 - **ReduceRight**: Calls the specified callback function for all the elements in an object reversed. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function
 - **Slice**: Returns a section of an object
 - **Omit**: Returns the elements that did not have their keys specified
 - **Concat**: Combines two objects. This method returns a new object without modifying any existing object
 - **Reverse**: Reverses the position of object elements
 - **ToString**: Turn object into a string
 - **ToArray**: Turn object into an array
 - **Join**: Joins all elements of an object separated by the specified separator string
 - **Find**: Returns the first element that satisfies the test function or returns null
 - **FindLast**: Returns the last element that satisfies the test function or returns null
 - **KeyOf**: Returns the key of the first occurrence of a value in an object or null
 - **LastKeyOf**: Returns the key of the last occurrence of a value in an object or null
 - **ValueOf**: Returns the value of an element of an object
 - **Data**: Original object elements
 - **Push**: Adds or modifies the original object
 - **Length**: Number of elements in the original object

## Example with Filter Function

Functional programming:

```js
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

Modular programming:

```js
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

## Author

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

## License

This project is under the MIT license - see the [LICENSE](https://github.com/guilhermeasn/object-as-array/blob/master/LICENSE) file for details.