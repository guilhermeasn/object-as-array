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

    });

    test('Transformations', () => {

        expect(functionalRoman.toString()).toBe(JSON.stringify(roman));
        expect(functionalSquare.toArray('key')).toEqual(expect.arrayContaining(['00', '01', '02', '04', '16']));

    });

    test('Get value', () => {

        // @ts-ignore
        expect(functionalRoman.valueOf('Z')).toBeUndefined();
        expect(functionalRoman.valueOf('V')).toBe(5);

    });

    test('Concat test', () => {
        expect(functionalRoman.concat(functionalSquare.data())).toEqual({
            I : 1,
            V : 5,
            X : 10,
            L : 50,
            C : 100,
            D : 500,
            M : 1000,
            '00' : 0,
            '01' : 1,
            '02' : 4,
            '04' : 16,
            '16' : 256
        })
    });

    test('Miscelaneous test', () => {

        expect(functionalRoman.every(v => v > 0)).toBeTruthy();
        expect(functionalRoman.reduceRight((p, v, k) => `${p} ${k}<>${v}`, '')?.trim()).toBe('M<>1000 D<>500 C<>100 L<>50 X<>10 V<>5 I<>1');
        
        expect(functionalSquare.keysMap((_, k) => parseInt(k))).toStrictEqual({
            '00' : 0,
            '01' : 1,
            '02' : 2,
            '04' : 4,
            '16' : 16
        });

        expect(functionalRoman.join('value')).toBe('1,5,10,50,100,500,1000');

    });

});