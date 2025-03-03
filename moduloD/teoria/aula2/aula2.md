# Condicionais pt2
## Estrutura condicional aninhada
- Estrutura condicional aninhada é uma estrutura condicional dentro de outra estrutura condicional.
- é feita quando colocamos uma estrutura condicional dentro de outra.
- Exemplo:
```js
if (condicao1) {
    // bloco de código
    if (condicao2) {
        // bloco de código
    }
}
```
## Condicional Multipla
- Condicional multipla é uma estrutura condicional que permite avaliar várias condições.
- O nome desse tipo de condicional é Switch Case
- Exemplo:
```js
switch (expressao) {
    case valor1:
        // se expressao for igual a valor1
        break; // para a execução do código se a condição for verdadeira
    case valor2:
        // se expressao for igual a valor2
        break;
    default:
        // Senão
        break;
}
```

### Dia da semana com getDay()
- O método `getDay()` retorna o dia da semana de uma data como um número entre 0 e 6.
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
Switch case para retornar o dia da semana
```js
let dia = new Date().getDay();
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}
```
# Erros lógicos x Erros de sintaxe
## Erros lógicos
- Erros lógicos são erros que ocorrem quando a lógica do código está errada.
- Exemplo:
```js   
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```
Esse código está correto, mas a lógica está errada, pois a idade 18 é considerada maior de idade, mas o código está considerando menor de idade. Isso continua sendo um erro.

## Erros de sintaxe
- Erros de sintaxe são erros que ocorrem quando a sintaxe do código está errada.
- Exemplo:
```js
if (idade >= 18 {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```
Esse código está com erro de sintaxe, pois está faltando um parêntese na condição do `if`.
Isso retorna um Erro e não executa o código
