# Operadores em Javascript

1. aritméticos

    operadores Binários:

        - 5 + 2 = 7 
        - 5 - 2 = 3
        - 5 * 2 = 10
        - 5 / 2 = 2.5
        - 5 % 2 = 1 (resto da divisão/módulo)
        - 5 ** 2 =  25

## Ordem de precedência
    1. ()
    2. **
    3. *, / e %
    4. + e -

2. atribuição   

    Atribuição simples:
        Na programação, o sinal de *=* igual significa recebe
        var a =*recebe* 5 + 3;
        saida: 8

        var b =*recebe* a % 5;
        saida: 3 

        var c *recebe*= 5 * b ** 2;
        saida: 45 

        var d =*recebe* 10 - a / 2
        saida: 6
        
        var e =*recebe* 6 * 2 / d
        saida: 2

        var f =*recebe* b % e + 4 / e 
        saida: 3

    Auto-atribuição: 
    ```js
        var n = 3;
        n = n + 4;
        or
        n += 4;
    ```
    n = 7

    Incremento:
        Outra forma de simplificar a auto-atribuição é usando os operadores de incremneto(++) e decremento(--), esses operadores são equivalentes a n = n + 1 ou n += 1:
        ```js
        let n = 2;
        n++;
        ``` 
        n = 3
        ```js
        let n = 10;
        n--;
        ```
        n = 9

        Incremento é muito usado em loops for ou while

3. relacionais

- 5 *>* 2  maior que
    Saída: true
- 7 *<* 4 menor que
    Saída: false
- 8 *>=* 8 maior ou igual a
    Saída: true
- 9 *<=* 7 menor ou igual a
    Saída: false
- 5 *==* 5 igual a
    Saída: true
- 4 *!=* 4 diferente de
    Saída: false

    São operadores muito usados em condicionais

    ## Identidade
    ```js
    5 == 5
    5 == "5"
    ```
    saida: true
    saida: true

    em javascript, o operador de igualdade compara os valores e não o tipo de dado

    Para diferenciar se um valor é idêntico a outro (mesmo valor e mesmo tipo) usamos o operador de identidade/igualdade restrita é utilizado:
    ```js
    5 === 5
    5 === "5"
    ```
    saida: true
    saída: false

4. lógicos

    - *!*
        Negação
        ```js
        !true
        !false
        ```
        saída: false
        saída: true
    - *&&*
        conjunção (e)
        ```js
        true && true
        true && false
        false && true
        false && false
        ```
        saída: true
        saída: false
        saída: false
        saída: false
    - *||*
        dijunção (ou)
        ```js
        true || true
        true || false
        false || true
        false || false
        ```
        saída: true
        saída: true
        saída: true
        saída: false

5. ternário

    é composto por ? e :

    ``teste ? true : false``

    é chamado de ternário por ter 3 blocos 

    1. teste = algum teste lógico 
    2. o que fazer se o resultado for true
    3. o que fazer se for falso

    `media >= 7 ? "aprovado : reprovado`
# Precedência geral 

1. aritméticos ("()", **, /...)
2. relacionais (>, <, >=...)
3. lógicos (!, &&, ||)