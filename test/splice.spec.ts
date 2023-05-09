import splice from "../src/splice";
import { roman } from "./data";

describe('Splice Func Test', () => {

    test('Splice roman numbers without change the original', () => {

        expect(splice(roman, false, 'V', 'L', 'D')).toStrictEqual({
            I : 1,
            X : 10,
            C : 100,
            M : 1000
        });

        expect(roman).toStrictEqual({
            I : 1,
            V : 5,
            X : 10,
            L : 50,
            C : 100,
            D : 500,
            M : 1000
        });

    });

    test('Splice roman numbers with original changed', () => {

        expect(splice(roman, true, 'V', 'L', 'D')).toStrictEqual({
            I : 1,
            X : 10,
            C : 100,
            M : 1000
        });

        expect(roman).toStrictEqual({
            I : 1,
            X : 10,
            C : 100,
            M : 1000
        });

    });

    test('Splice all', () => {
        expect(splice(roman, false)).toStrictEqual(roman);
    })

});
