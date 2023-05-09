import { MapHandler } from "./map";
export default function keysMap<O extends object, R>(object: O, handler: MapHandler<O, R>): Record<keyof O, R>;
