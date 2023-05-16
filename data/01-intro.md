---
sidebar_position: 1
---

# Getting Started

Manipulate a javascript object with some of the most used functions in arrays.

## Installation

Add the **object-as-array** package to your project with *npm*:

```
npm install object-as-array
```

Or with *yarn*:

```
yarn add object-as-array
```

## Resources

 - **Filter**: Returns only the elements of the object that satisfy the test function
 - **Some**: Determines whether one of an object's members satisfies the specified test
 - **Every**: Determines whether all the members of an object satisfy the specified test
 - **ForEach**: Performs the specified action for each element in an object
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

## Forms of use

You can use the functions in this package with functional or modular programming.
In functional programming, methods are derived from the objectAsArray function, see its typing below:

```<O extends object>(object: O): ObjectAsArray<O>```

Note, the keys of ObjectInfo and ObjectData types are:

```key | value | entrie```
