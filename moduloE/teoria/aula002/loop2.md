# Loops Parte 2
## Estrutura de repetição com variável de controle

é composto por 3 partes:
1. Inicialização
2. Condição
3. Incremento

O loop é iniciado, se a condição for verdadeira, o bloco de código é executado, o código volta e o incremento é feito. O loop é reiniciado e a condição é verificada novamente. O loop continua até que a condição seja falsa.

Pseudo-código:
```js
for (inicio; condição; incremento) {
  // bloco de código
}
```
Código JS
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```