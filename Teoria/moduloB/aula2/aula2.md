# Tratamento de dados

Para armazenar a resposta de um prompt e usar em outro momento você usa:

```js
let nome = prompt("Qual o seu nome?");
alert("É um prazer te conhecer, " + nome);
```



[aula prática 1](../../../pratica/moduloB/script2/index.html)

## Concatenação x adição
na programação o operador "+" é usado para: 

1. Concatenação - junta 2 ou mais strings diferentes
2. Adição - Soma 2 números

No código: 
```js

let n1 = prompt("Digite um número");
let n2 = prompt("Digite outro número");
let s = n1 + n2;
alert("a soma de " + n1 + " e " + n2 + " é igual a " + s) 
```


### Conversão de tipo

1. 
`let s = parseInt(10.5) + parseInt(10.2)`

s = 20 mesmo com um número com casas decimais

2. 
parseFloat(n)


`let s = parseFloat(10.5) + parseFloat(10.2)`

s = 20.7

3.
Em versões atuais do javascript, você pode mandar a linguagem decidir como tratar os dados de acordo com o que ela recebeu:

`let s = Number(10.5) + Number(10.2)`

Com isso, o javascript decide qual o tipo do número digitado.


Existem 2 formas de converter números para strings:

1. String(10) e 20.toString()

Ambas retornam "10"
[aula prática 2](../../../pratica/moduloB/script2/ex002.html)

## Formatação de string

Existem 2 formas de juntar strings em Javascript

1. 
operador de concatenação (+)

É ideal para poucos dados mas gera confusão com mais dados

`alert("a soma de " + n1 + " e " + n2 + " é igual a " + String(s));` 

2. 
Template strings (``)

Presente nas versões mais recentes de ECMAScript e é ideal para juntar strings com mais dados

```
alert(`A soma de ${n1} e ${n2} é igual a ${String(s)}`)
```

Em uma Template String a crase delimita a TS e o ${} é chamado de placeholder (ou espaço reservado)

---
Outras formatações de string:

s.length = retorna quantos caracteres tem a string
s.toUpperCase() = Deixa todos os caracteres em letra maiúscula
s.toLowerCase() = Deixa todos os caracteres em letra minúscula

### Formatação de númeroos

A função toFixed(n) serve para especificar a quantidade de casas decimais depois da ","

No inglês, a separação de casas decimais é feita com ".", e no Português do Brasil é feita com ",", para substituir isso:

n.toFixed(5).replace(".", ",");


N1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

