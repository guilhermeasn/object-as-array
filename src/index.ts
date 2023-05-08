// import type { AsArrayMethods, ObjectData, ObjectDataType } from "./types";

// import filter from "./filter";
// import sort from "./sort";

// export default function asArray<O extends Object>(object : O) {

//     const data = <K extends ObjectDataType>(dataType : K) : Array<ObjectData<O>[K]> => {
//         switch(dataType) {
//             case 'keys': return Object.keys(object) as Array<ObjectData<O>[K]>;
//             case 'values': return Object.values(object) as Array<ObjectData<O>[K]>;
//             default : return Object.entries(object) as Array<ObjectData<O>[K]>;
//         }
//     }
    
//     const methods = <K extends ObjectDataType>(dataType : K) : AsArrayMethods<O, K> => ({
//         filter: handler => filter(object, dataType, handler),
//         sort: handler => sort(object, dataType, handler)
//     });

//     return {
//         object,
//         data,
//         toString : () => JSON.stringify(object),
//         length: data('keys').length,
//         byKeys: methods('keys'),
//         byValues: methods('values'),
//         byEntries: methods('entries')
//     }

// }
