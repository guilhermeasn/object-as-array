import { ReduceHandler } from "./reduce";
export default function reduceRight<O extends object, R = O[keyof O]>(object: O, handler: ReduceHandler<O, R>, initial?: R): R;
