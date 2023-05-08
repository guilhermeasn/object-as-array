import forEach from "../src/forEach";
import { square } from "./data";

describe('ForEach Test', () => {

    test('Square of the square', () => {

        const s : number[] = [];
        forEach(square, v => s.push(v * v));
        expect(s.sort()).toStrictEqual([0, 1, 16, 256, 65536]);

    });

});