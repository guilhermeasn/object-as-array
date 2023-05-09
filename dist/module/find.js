export default function find(object, dataType, handler) {
    for (let key in object) {
        if (handler(object[key], key)) {
            return (dataType === 'key' ? key :
                dataType === 'value' ? object[key] :
                    [key, object[key]]);
        }
    }
    return null;
}
