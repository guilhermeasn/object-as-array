import map from "../src/map";
import { roman } from "./data";

describe('Map Test', () => {

    test('Square of the square', () => {

        expect(map(roman, (v, k) => `${k} => ${v}`)).toEqual([
            'I => 1',
            'V => 5',
            'X => 10',
            'L => 50',
            'C => 100',
            'D => 500',
            'M => 1000'
        ])

    });

});