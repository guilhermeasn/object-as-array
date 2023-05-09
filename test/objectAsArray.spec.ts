import objectAsArray from '../src';
import { roman, square } from "./data";

describe('ObjectAsArray Test', () => {

    const functionalRoman = objectAsArray(roman);
    const functionalSquare = objectAsArray(square);

    test('Basic tests', () => {

        expect(functionalRoman.length).toBe(7);
        expect(functionalSquare.length).toBe(5);

        expect(functionalRoman.data()).toStrictEqual(roman);
        expect(functionalSquare.data()).toStrictEqual(square);

    });

    test('Push test', () => {

        const functionalString = objectAsArray<{ [key in string] : any }>({});

        expect(functionalString.push({ 'a': 1, 'b': 2, 'c' : 3 })).toBe(3);
        expect(functionalString.data()).toStrictEqual({ 'a': 1, 'b': 2, 'c' : 3 });

    })

});