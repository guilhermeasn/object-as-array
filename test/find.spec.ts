import find from "../src/find";
import { roman } from "./data";

describe('Find Func Test', () => {

    test('Find key', () => {
        expect(find(roman, 'key', v => v === 50)).toBe('L');
    });

    test('Find value', () => {
        expect(find(roman, 'key', v => v > 50)).toBe('C');
    });

    test('Find entrie', () => {
        expect(find(roman, 'entrie', (v, k) => k > 'L' && v < 1000)).toStrictEqual(['V', 5]);
    });

    test('Find nothing', () => {
        expect(find(roman, 'entrie', (_, k) => k === 'Z' as typeof k)).toStrictEqual(null);
    });

});
