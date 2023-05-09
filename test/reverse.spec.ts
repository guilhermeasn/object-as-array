import reverse from "../src/reverse";
import { roman } from "./data";

describe('Reverse Func Test', () => {

    test('Reverse position of the object', () => {

        expect(JSON.stringify(reverse(roman))).toStrictEqual(JSON.stringify({
            M : 1000,
            D : 500,
            C : 100,
            L : 50,
            X : 10,
            V : 5,
            I : 1
        }));

    });

});