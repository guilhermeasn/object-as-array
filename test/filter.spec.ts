import filter from "../src/filter";
import { roman, square } from "./data";

describe('Filter Test', () => {

    test('Testing value filter: Roman numerals up to 50', () =>
        expect(filter(roman, 'values', n => n <= 50)).toStrictEqual({
            I : 1,
            V : 5,
            X : 10,
            L : 50
        })
    );

    test('Testing key filter: roman numerals up to the letter L', () =>
        expect(filter(roman, 'keys', n => n <= 'L')).toStrictEqual({
            I : 1,
            L : 50,
            C : 100,
            D : 500
        })
    );

    test('Testing entries filter: square that equals the original number', () => 
        expect(filter(square, 'entries', ([k, v]) => parseInt(k) === v)).toStrictEqual({
            '00' : 0,
            '01' : 1
        })
    );

    test('Testing entries filter: square that is different from the original number', () => 
        expect(filter(square, 'entries', ([k, v]) => parseInt(k) !== v)).toStrictEqual({
            '02' : 4,
            '04' : 16,
            '16' : 256
        })
    );

});
