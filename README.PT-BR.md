<h1>object-as-array</h1>

[![tests](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml/badge.svg)](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/object-as-array.svg)](https://www.npmjs.com/package/object-as-array/v/latest)
[![downloads](https://img.shields.io/npm/dt/object-as-array)](https://www.npmjs.com/package/object-as-array/)

[Readme in English](README.md)

Manipule um objeto javascript com algumas das funções mais usadas em arrays. É possível utilizar as funções deste pacote com programação funcional ou modular.

- [Instalação](#instalação)
- [Filter](#filter)
- [Some](#some)
- [Every](#every)
- [ForEach](#foreach)
- [Map](#map)
- [KeysMap](#keysmap)
- [Sort](#sort)
- [Reduce](#reduce)
- [ReduceRight](#reduceright)
- [Slice](#slice)
- [Splice](#splice)
- [Concat](#concat)
- [Reverse](#reverse)
- [ToString](#tostring)
- [ToArray](#toarray)
- [Join](#join)
- [Find](#find)
- [FindLast](#findlast)
- [KeyOf](#keyof)
- [LastKeyOf](#lastkeyof)
- [ValueOf](#valueof)
- [Data](#data)
- [Push](#push)
- [Length](#length)
- [Informações](#informações)

## Instalação

Adicione o pacote **object-as-array** no seu projeto com *npm*:

```
npm install object-as-array
```

Ou com *yarn*:

```
yarn add object-as-array
```

## Filter

Retorna apenas os elementos do objeto que satisfazem a função de teste

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.filter(v => v > 10 && v < 1000);

    // Result: {L: 50, C: 100, D: 500}

}
```

 - Exemplo com programação modular:

```
import filter from "object-as-array/filter";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return filter(obj, v => v > 10 && v < 1000);

    // Result: {L: 50, C: 100, D: 500}

}
```

## Some

Determina se um dos membros de um objeto satisfaz o teste especificado

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.some((v, k) => k === 'L');

    // Result: true

}
```

 - Exemplo com programação modular:

```
import some from "object-as-array/some";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return some(obj, (v, k) => k === 'L');

    // Result: true

}
```

## Every

Determina se todos os membros de um objeto satisfazem o teste especificado

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.every(v => v % 2 === 0);

    // Result: false

}
```

 - Exemplo com programação modular:

```
import every from "object-as-array/every";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return every(obj, v => v % 2 === 0);

    // Result: false

}
```

## ForEach

Executa a ação especificada para cada elemento de um objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    const square = [];

    obj.forEach(v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```

 - Exemplo com programação modular:

```
import forEach from "object-as-array/forEach";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    const square = [];

    forEach(obj, v => square.push(v * v));

    return square;

    // Result: [1, 25, 100, 2500, 10000, 250000, 1000000]

}
```

## Map

Utiliza um callback em cada elemento de um objeto, e retorna um array com os resultados

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.map((v, k) => `${k} => ${v}`);

    // Result: ['I => 1', 'V => 5', 'X => 10', 'L => 50', 'C => 100', 'D => 500', 'M => 1000']

}
```

 - Exemplo com programação modular:

```
import map from "object-as-array/map";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return map(obj, (v, k) => `${k} => ${v}`);

    // Result: ['I => 1', 'V => 5', 'X => 10', 'L => 50', 'C => 100', 'D => 500', 'M => 1000']

}
```

## KeysMap

Utiliza um callback em cada elemento de um objeto, e retorna um objeto com as mesmas chaves porém com novos valores

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.keysMap((_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```

 - Exemplo com programação modular:

```
import keysMap from "object-as-array/keysMap";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return keysMap(obj, (_, k) => k.toLowerCase());

    // Result: {I: 'i', V: 'v', X: 'x', L: 'l', C: 'c', D: 'd', M: 'm'}

}
```

## Sort

Classifica a posição dos elementos do objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.sort('key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```

 - Exemplo com programação modular:

```
import sort from "object-as-array/sort";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return sort(obj, 'key', (a, b) => a > b);

    // Result: {C: 100, D: 500, I: 1, L: 50, M: 1000, V: 5, X: 10}

}
```

## Reduce

Utilize um callback para todos os elementos em um objeto. O resultado é o acumulado do processamento de todo o objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.reduce((p, v) => p + v, 334);

    // Result: 2000

}
```

 - Exemplo com programação modular:

```
import reduce from "object-as-array/reduce";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return reduce(obj, (p, v) => p + v, 334);

    // Result: 2000

}
```

## ReduceRight

Utilize um callback para todos os elementos em um objeto de forma invertida. O resultado é o acumulado do processamento de todo o objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.reduceRight((p, v) => p - v);

    // Result: 334

}
```

 - Exemplo com programação modular:

```
import reduceRight from "object-as-array/reduceRight";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return reduceRight(obj, (p, v) => p - v);

    // Result: 334

}
```

## Slice

Retorna uma parte de um objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.slice('V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```

 - Exemplo com programação modular:

```
import slice from "object-as-array/slice";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return slice(obj, 'V', 'L', 'D');

    // Result: {V: 5, L: 50, D: 500}

}
```

## Splice

Retorna os elementos que não foram especificados, além de ser capaz de excluir esses elementos do objeto original

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.splice(false, 'I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```

 - Exemplo com programação modular:

```
import splice from "object-as-array/splice";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return splice(obj, false, 'I', 'V', 'L', 'D');

    // Result: {X: 10, C: 100, M: 1000}

}
```

## Concat

Combina dois objetos. Este método retorna um novo objeto sem modificar nenhum dos dois objetos informados

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.concat({II : 2, III: 3, IV: 4});

    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}

}
```

 - Exemplo com programação modular:

```
import concat from "object-as-array/concat";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return concat(obj, {II : 2, III: 3, IV: 4});

    // Result: {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, II: 2, III: 3, IV: 4}

}
```

## Reverse

Reverte a posição dos elementos do objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.reverse();

    // Result: {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

}
```

 - Exemplo com programação modular:

```
import reverse from "object-as-array/reverse";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return reverse(obj);

    // Result: {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

}
```

## ToString

Transforme o objeto em uma string

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.toString();

    // Result: '{"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}'

}
```

 - Exemplo com programação modular:

```
import toString from "object-as-array/toString";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return toString(obj);

    // Result: '{"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}'

}
```

## ToArray

Transforme o objeto em um array

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.toArray('key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```

 - Exemplo com programação modular:

```
import toArray from "object-as-array/toArray";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return toArray(obj, 'key');

    // Result: ['I', 'V', 'X', 'L', 'C', 'D', 'M']

}
```

## Join

Junta todos os elementos de um objeto, separando-os por uma string especifíca

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.join('value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```

 - Exemplo com programação modular:

```
import join from "object-as-array/join";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return join(obj, 'value', ', ');

    // Result: '1, 5, 10, 50, 100, 500, 1000'

}
```

## Find

Retorna o primeiro elemento que satisfaz a função de teste ou retorna nulo

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.find('key', v => v > 10);

    // Result: 'L'

}
```

 - Exemplo com programação modular:

```
import find from "object-as-array/find";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return find(obj, 'key', v => v > 10);

    // Result: 'L'

}
```

## FindLast

Retorna o último elemento que satisfaz a função de teste ou retorna nulo

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.findLast('entrie', v => v < 1000);

    // Result: ['D', 500]

}
```

 - Exemplo com programação modular:

```
import findLast from "object-as-array/findLast";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return findLast(obj, 'entrie', v => v < 1000);

    // Result: ['D', 500]

}
```

## KeyOf

Retorna a chave da primeira ocorrência de um valor em um objeto ou nulo

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.keyOf(100);

    // Result: 'C'

}
```

 - Exemplo com programação modular:

```
import keyOf from "object-as-array/keyOf";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return keyOf(obj, 100);

    // Result: 'C'

}
```

## LastKeyOf

Retorna a chave da última ocorrência de um valor em um objeto ou nulo

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.lastKeyOf(300);

    // Result: null

}
```

 - Exemplo com programação modular:

```
import lastKeyOf from "object-as-array/lastKeyOf";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return lastKeyOf(obj, 300);

    // Result: null

}
```

## ValueOf

Retorna o valor de um elemento de um objeto

 - Exemplo com programação funcional:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.valueOf('X');

    // Result: 10

}
```

 - Exemplo com programação modular:

```
import valueOf from "object-as-array/valueOf";

export default function example() {
    
    const obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    return valueOf(obj, 'X');

    // Result: 10

}
```

## Data

Retorna o objeto original

Exemplo:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.data();

    // Result: {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}

}
```

## Push

Adiciona dados ou modifica o objeto original

Exemplo:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.push({II: 2, III: 3, IV: 4});

    // Result: 10 (object changed)

}
```

## Length

Número de elementos no objeto original

Exemplo:

```
import objectAsArray from "object-as-array";

export default function example() {
    
    const obj = objectAsArray({
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    });

    return obj.length;

    // Result: 7

}
```

## Informações

**Autor**

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

**Licença**

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/guilhermeasn/mask-hooks/blob/master/LICENSE) para detalhes.
