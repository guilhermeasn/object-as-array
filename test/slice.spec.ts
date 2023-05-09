import slice from "../src/slice";
import { roman } from "./data";

describe('Slice Func Test', () => {

    test('Slice roman numbers', () => {

        expect(slice(roman, 'V', 'L', 'D')).toStrictEqual({
            V : 5,
            L : 50,
            D : 500
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


});