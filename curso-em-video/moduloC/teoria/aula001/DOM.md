# Entendendo DOM

DOM, ou Document Object Model, é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como um conjunto de objetos e permite que você manipule a estrutura, estilo e conteúdo de um documento.

## árvore DOM
Os principais elementos do DOM são:
- Window = Tudo dentro do navegador (Todo o front-end)
    - Document = Tudo dentro da página
        - HTML = A linguagem de marcação de HyperTexto
            - Body = tudo exibido ao usuário
                - Div = Divisão de conteúdo
                - h1, h2, h3, h4, h5, h6 = Títulos
                - p = Parágrafo
                    - strong = negrito
            - Head = Cabeçalho da página
                - Title = Título da página
                - meta = Metadados
    - location = URL da página
    - history = Histórico de navegação
E muitos outros
**Nota: Um objeto dentro do outro é chamado de objeto filho (child object). E o objeto que armazena esse child é chamado de objeto pai (parent object). Exemplo: Body é um objeto child de HTML e HTML é um objeto parent de Body**

Elemento é tudo que está dentro de uma tag. Exemplo: `<h1>Elemento</h1>`
Atributo é tudo que está dentro de uma tag, mas não exibido. Exemplo: `<h1 class="titulo">Atributo</h1>`

## Manipulando o DOM
### Selecionando elementos
1. Por tag = getElementByTagName('tag');
2. Por id = getElementById('id');
3. Por nome = getElementByName('name');
4. Por classe = getElementByClassName('class');