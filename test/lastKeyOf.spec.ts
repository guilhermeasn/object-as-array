import lastKeyOf from "../src/lastKeyOf";
import { repeat } from "./data";

describe('LastKeyOf Func Test', () => {

    test('LastKeyOf found', () => {

        expect(lastKeyOf(repeat, 'abc')).toBe('c');

    });

    test('LastKeyOf not found', () => {

        expect(lastKeyOf(repeat, 'def')).toBe(null);

    });

});