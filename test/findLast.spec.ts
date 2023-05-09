import findLast from "../src/findLast";
import { roman } from "./data";

describe('Find Func Test', () => {

    test('Find last value less than 1000', () => {
        expect(findLast(roman, 'key', v => v < 1000)).toBe('D');
    });

});
