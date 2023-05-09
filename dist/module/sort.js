export default function sort(object, dataType, handler) {
    return Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(dataType === 'key' ? ka : dataType === 'value' ? va : [ka, va], dataType === 'key' ? kb : dataType === 'value' ? vb : [kb, vb])));
}
