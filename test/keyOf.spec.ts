import keyOf from "../src/keyOf";
import { repeat } from "./data";

describe('KeyOf Func Test', () => {

    test('KeyOf found', () => {

        expect(keyOf(repeat, 'abc')).toBe('a');

    });

    test('KeyOf not found', () => {

        expect(keyOf(repeat, 'def')).toBe(null);

    });

});