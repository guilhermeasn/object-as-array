export default function valueOf<O extends object, K extends keyof O>(object : O, key : K) : O[K] {
    return object?.[key];
}