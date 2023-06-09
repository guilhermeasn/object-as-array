import sort from "../src/sort";
import { roman, square } from "./data";

describe('Sort Test', () => {

    test('Testing key sort: Roman numerals in alphabetical order', () => {

        expect(JSON.stringify(sort(roman, 'key', (ka, kb) => ka > kb))).toBe(JSON.stringify({
            C : 100,
            D : 500,
            I : 1,
            L : 50,
            M : 1000,
            V : 5,
            X : 10
        }));

    });

    test('Testing value sort: Roman numerals in descending order', () => {

        expect(JSON.stringify(sort(roman, 'value', (va, vb) => vb - va))).toBe(JSON.stringify({
            M : 1000,
            D : 500,
            C : 100,
            L : 50,
            X : 10,
            V : 5,
            I : 1
        }));

    });

    test('Testing entries sort: Biggest difference between the numbers', () => {

        expect(JSON.stringify(sort(square, 'entrie', ([ka, va], [kb, vb]) => (parseInt(ka) - va) - (parseInt(kb) - vb) || vb - va))).toBe(JSON.stringify({
            '16' : 256,
            '04' : 16,
            '02' : 4,
            '01' : 1,
            '00' : 0
        }));

    });

    test('Testing sort without handler function', () => {

        expect(JSON.stringify(sort(roman, 'key'))).toBe(JSON.stringify({
            C : 100,
            D : 500,
            I : 1,
            L : 50,
            M : 1000,
            V : 5,
            X : 10
        }));

    });

});