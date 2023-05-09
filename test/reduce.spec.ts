import reduce from "../src/reduce";
import { roman } from "./data";

describe('Reduce Test', () => {

    test('Some romam numbers without init value', () => {

        expect(reduce(roman, (p, v) => p + v)).toBe(1666);

    });

    test('Some romam numbers with init value', () => {

        expect(reduce(roman, (p, v) => p + v, 334)).toBe(2000);

    });

});