import reduceRight from "../src/reduceRight";
import { roman } from "./data";

describe('ReduceRight Test', () => {

    test('Subtract romam numbers', () => {

        expect(reduceRight(roman, (p, v) => p - v)).toBe(334);

    });

});