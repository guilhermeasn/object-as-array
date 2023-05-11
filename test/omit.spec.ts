import omit from "../src/omit";
import { roman } from "./data";

describe('Omit Func Test', () => {

    test('Omit roman numbers', () => {

        expect(omit(roman, 'V', 'L', 'D')).toStrictEqual({
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
    
    test('Omit nothing', () => {
        expect(omit(roman)).toStrictEqual(roman);
    })

});
