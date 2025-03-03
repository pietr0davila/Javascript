# Convenções em JS

## Variáveis
nomes de identificadores preferencialmente devem ser em inglês, começar com **letras, $ ou _** (regra) porém, por convenção devem começar com letras. E **não podem começar com números** (regra). Podem ser alfanuméricos, acentuados e simbolos, mas não podem conter espaços e palavras reservadas da linguagem. Javascript é case sensitive, então nomes coerentes e claros são importantes.

**Nota:** O uso de $ e _ no início de variáveis é comum em bibliotecas e frameworks, por exemplo, jQuery. O que pode causar conflito.
```js
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

## Espaços entre operadores
Espaços depois de todos os operadores
```js
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];
```

## Identação
Usar 2 ou 4 espaços para identação, não usar tabulação
```js
if (condition1) {
--==Traços e sinais de igual representam a identação
} else {
--==Traços e sinais de igual representam a identação
}
```
Diferentes editores de texto podem ser configurados para converter tabulações em espaços automaticamente.

## Regras de declaração
Declarar uma variável por linha, usar `const` ou `let` para declarar variáveis, não usar `var`, toda linha fora de um bloco deve terminar com ';' (semi-colon).

### Regras de declaração composta
O '{'/'['deve estar na mesma linha que a declaração, deve ser separado do identificador com um espaço. O '}'/']' deve estar sozinho na última linha do bloco alinhado a declaração.
não terminar a condição com ';'

*Função*
```js
function myFunction(p1, p2) {
  return p1 * p2; 
}
```

*Loop*
```js
for (i = 0; i < 5; i++) {
  x += i;
}
```
*condicional*
```js
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## Regras para a definição de objetos
O '{'deve estar na mesma linha que a declaração, deve ser separado do identificador com um espaço. O '}' deve estar sozinho na última linha do bloco alinhado a declaração. dois pontos e um espaço entre a chave e o valor. aspas simples para strings. o último elemento não deve ter vírgula. depois do '}' deve haver um ';' (semi-colon).
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

Objetos curtos podem ser escritos em uma única linha
```js
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

## Convenção para nomes
Mesmo padrão de variáveis, camelCase para funções e variáveis, variáveis globais e constantes escritas em UPPERCASE

hifens são usados em HTML5 e CSS3 mas não em JS

underscore são muito usados por desenvolvedores de BD e são usados na documentação PHP

PascalCase é preferida por desenvolvedores de C

camelCase é preferida por desenvolvedores de Js

## Carregamento de scripts

Para carregar scripts em uma página HTML, você pode usar a tag `<script>`. Existem duas abordagens comuns:

1. **Colocar o `<script>` no final do corpo (`<body>`)**:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <script src="script.js"></script>
  </body>
  </html>
  ```

2. **Usar o atributo `defer` no `<script>` dentro do `<head>`**:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Minha Página</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
  </html>
  ```

O atributo `defer` faz com que o script seja baixado em paralelo ao parsing do HTML, mas só será executado após o documento estar completamente carregado, defer é preferível para carregar a página sem bloquear a renderização.

## Acessar elementos HTML
elementos HTML desorganizados resultam em erros ou dificuldade para acessar elementos
```js
const obj = document.getElementById("demo");

const obj2 = document.getElementById("Demo");
```
Esse código tem 2 variáveis com o mesmo valor, mas com letras maiúsculas e minúsculas diferentes. Isso pode causar erros.

## Extensão de arquivos
Arquivos HTML devem ter a extensão `.html` ou `html`.
arquivos CSS devem ter a extensão `.css`.
Os arquivos de script devem ter a extensão `.js`.

### Convenção para arquivos
Os nomes de arquivos devem ser descritivos e claros, com letras minúsculas e hífens para separar palavras.

## Comentários
Comentários são importantes para tornar o código legível e fácil de entender. Eles também ajudam a explicar o que o código faz e por que ele foi escrito de uma certa maneira e podem ser importantes para sua equipe e até você mesmo no futuro. Existem dois tipos de comentários em JavaScript
// comentário de uma linha
/* comentário de várias linhas */
