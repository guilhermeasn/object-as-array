import every from "../src/every";
import { square } from "./data";

describe('Every Func Test', () => {

    test('Every is true', () => {

        expect(every(square, (_, k) => !isNaN(parseInt(k)))).toBe(true);

    });

    test('Anyone is false', () => {

        expect(every(square, v => v === 4)).toBe(false);

    });

});