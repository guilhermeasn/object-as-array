import some from "../src/some";
import { roman } from "./data";

describe('Some Func Test', () => {

    test('Some is true', () => {

        expect(some(roman, (_, k) => k === 'L')).toBe(true);

    });

    test('All is false', () => {

        expect(some(roman, v => v === 357)).toBe(false);

    });

});