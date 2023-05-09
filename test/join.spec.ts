import join from "../src/join";
import { roman } from "./data";

describe('Join Test', () => {

    test('Join keys', () => expect(join(roman, 'keys')).toBe('I,V,X,L,C,D,M'));

    test('Join Values', () => expect(join(roman, 'values', ' ')).toBe('1 5 10 50 100 500 1000'));

    test('Join Entries with one separator', () => expect(join(roman, 'entries', '')).toBe('I1V5X10L50C100D500M1000'));

    test('Join Entries with two separators', () => expect(join(roman, 'entries', ['=', ' '])).toBe('I=1 V=5 X=10 L=50 C=100 D=500 M=1000'));

    test('Join Entries complex data', () => expect(join({o : {}, h: 0xff}, 'entries')).toBe('o,[object Object],h,255'));

});