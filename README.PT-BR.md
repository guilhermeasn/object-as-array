<h1>object-as-array</h1>

[![tests](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml/badge.svg)](https://github.com/guilhermeasn/object-as-array/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/object-as-array.svg)](https://www.npmjs.com/package/object-as-array/v/latest)
[![downloads](https://img.shields.io/npm/dt/object-as-array)](https://www.npmjs.com/package/object-as-array/)

[Readme in English](README.md)

Manipule um objeto javascript com algumas das funções mais usadas em arrays. É possível utilizar as funções deste pacote com progamação funcional ou modular.

- [Instalação](#instalação)
- [Método Filter](#método-filter)
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

## Método Filter

Retorna apenas os elementos do objeto que satisfazem a função de teste

Exemplo com programação funcional:

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

Exemplo com programação modular:

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

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Every

Determina se todos os membros de um objeto satisfazem o teste especificado

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## ForEach

Executa a ação especificada para cada elemento de um objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Map

Utiliza um callback em cada elemento de um objeto, e retorna um array com os resultados

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## KeysMap

Utiliza um callback em cada elemento de um objeto, e retorna um objeto com as mesmas chaves porém com novos valores

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Sort

Classifica a posição dos elementos do objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Reduce

Utilize um callback para todos os elementos em um objeto. O resultado é o acumulado do processamento de todo o objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## ReduceRight

Utilize um callback para todos os elementos em um objeto de forma invertida. O resultado é o acumulado do processamento de todo o objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Slice

Retorna uma parte de um objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Splice

Retorna os elementos que não foram especificados, além de ser capaz de excluir esses elementos do objeto original

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Concat

Combina dois objetos. Este método retorna um novo objeto sem modificar nenhum dos dois objetos informados

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Reverse

Reverte a posição dos elementos do objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## ToString

Transforme o objeto em uma string

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## ToArray

Transforme o objeto em um array

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Join

Junta todos os elementos de um objeto, separando-os por uma string especifíca

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Find

Retorna o primeiro elemento que satisfaz a função de teste ou retorna nulo

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## FindLast

Retorna o último elemento que satisfaz a função de teste ou retorna nulo

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## KeyOf

Retorna a chave da primeira ocorrência de um valor em um objeto ou nulo

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## LastKeyOf

Retorna a chave da última ocorrência de um valor em um objeto ou nulo

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## ValueOf

Retorna o valor de um elemento em um objeto

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Data

Retorna o objeto original

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Push

Adiciona dados ou modifica o objeto original

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Length

Número de elementos no objeto original

Exemplo com programação funcional:

```

```

Exemplo com programação modular:

```

```

## Informações

...
