/*
Pegar um valor do input
adicionar a uma array
exibir o novo item da array
limpar o input e focar
*/
// dispara a função trigger quando o botão é clicado
document.querySelector('input#add-number').addEventListener('click', trigger);
// declara as constantes do output e do número coletado
const OUTPUT_ELEMENT = document.querySelector('select#items'),
      INPUT_TXT = document.querySelector('input#txt-number');

// Declara o paragrafo de erro e a array 
let numberArray = [],
    paragraphy = document.querySelector('p#result-paragraphy');
// Função disparada quando o botão é clicado
function trigger() {
    let number = parseInt(INPUT_TXT.value);
    // verifica se o número é válido
    if (number < 1 || number > 100) {        
        paragraphy.innerHTML = '<strong>Valor fora do limite permitido (1-100)</strong>';
        
    } else {
        // Se válido, envia o número para a função principal 
        toArray(number);
    }
    // Limpa o buffer de entrada e seleciona depois de tudo 
    INPUT_TXT.focus();
    INPUT_TXT.value = '';            

}

function toArray(item) {
    // Veirifca se o número digitado já está presente na array
    if (numberArray.indexOf(item) !== -1) {
        paragraphy.innerHTML = '<strong>Valor encontrado na lista!</strong>';
    } else {
        // Se não, adiciona o item a array
        numberArray.push(item);
        // Adiciona o número como um texto dentro de um option 
        let newOption = document.createElement('option');
        OUTPUT_ELEMENT.appendChild(newOption);
        newOption.innerHTML = `Valor ${item} adicionado!`;
    }
    
}