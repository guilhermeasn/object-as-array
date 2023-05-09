export default function keyOf<O extends object>(object: O, value: O[keyof O]): keyof O | null;
