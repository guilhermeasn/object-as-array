import keysMap from "../src/keysMap";
import { roman } from "./data";

describe('KeysMap Test', () => {

    test('Square of the square', () => {

        expect(keysMap(roman, (v, k) => `${k} => ${v}`)).toEqual({
            I: 'I => 1',
            V: 'V => 5',
            X: 'X => 10',
            L: 'L => 50',
            C: 'C => 100',
            D: 'D => 500',
            M: 'M => 1000'
        })

    });

});