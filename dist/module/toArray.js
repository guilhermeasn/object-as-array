export default function toArray(object, dataType) {
    switch (dataType) {
        case 'keys': return Object.keys(object);
        case 'values': return Object.values(object);
        default: return Object.entries(object);
    }
}
