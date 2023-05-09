export default function lastKeyOf<O extends object>(object: O, value: O[keyof O]): keyof O | null;
