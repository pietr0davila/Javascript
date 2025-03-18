/*
Pegar um valor do input
adicionar a uma array
exibir o maior número da array
exibir o menor número da array
somar os valores
calcular a média dos valores
*/
// dispara a função trigger quando o botão é clicado
document.querySelector('input#add-number').addEventListener('click', trigger);
document.querySelector('input#finish').addEventListener('click', treatment)

// declara as constantes do output e do número coletado
const OUTPUT_ELEMENT = document.querySelector('select#items'),
      INPUT_TXT = document.querySelector('input#txt-number'),
      RESULT_DIV = document.querySelector('div#result-div');
      // Declara o paragrafo de erro e a array
let numberArray = [],
    errorParagraphy = document.querySelector('p#error-paragraphy');
    lengthParagraphy = document.createElement('p'),
    lessParagraphy = document.createElement('p'),
    higherParagraphy = document.createElement('p'),
    sumParagraphy = document.createElement('p'),
    averageParagraphy = document.createElement('p'),
    sum = 0;

RESULT_DIV.appendChild(lengthParagraphy);
RESULT_DIV.appendChild(lessParagraphy);
RESULT_DIV.appendChild(higherParagraphy);
RESULT_DIV.appendChild(sumParagraphy);
RESULT_DIV.appendChild(averageParagraphy);    
    // Função disparada quando o botão é clicado
function trigger() {
    let number = parseInt(INPUT_TXT.value);
    // verifica se o número é válido
    if (number < 1 || number > 100) {
        errorParagraphy.innerHTML = '<strong>Valor fora do limite permitido (1-100)</strong>';
    } else if (isNaN(number)) {
        errorParagraphy.innerHTML = '<strong>O valor precisa ser um número!</strong>';
        
    } else {
        // Se válido, envia o número para a função principal
        errorParagraphy.innerText = '';
        toArray(number);
    }
    // Limpa o buffer de entrada e seleciona depois de tudo
    INPUT_TXT.focus();
    INPUT_TXT.value = '';
}

function toArray(item) {
    // Veirifca se o número digitado já está presente na array
    if (numberArray.indexOf(item) != -1) {
        errorParagraphy.innerHTML = '<strong>Valor encontrado na lista!</strong>';
    } else {
        errorParagraphy.innerText = '';
        // Se não, adiciona o item a array
        numberArray.push(item);
        // Adiciona o número como um texto dentro de um option
        let newOption = document.createElement('option');
        OUTPUT_ELEMENT.appendChild(newOption);
        newOption.innerHTML = `Valor ${item} adicionado!`;
    }

}
function treatment() {
    if (numberArray.length == 0) {
        alert('Erro! A lista deve ter pelo menos 1 número');
    } else {
        // exibir quantos digitos tem na array
        errorParagraphy.innerText = '';
        if (numberArray.length == 1) {
            lengthParagraphy.innerHTML = 'Ao todo temos <strong>1</strong> número cadastrado<br>';
            
        } else {
            lengthParagraphy.innerHTML = `Ao todo temos <strong>${numberArray.length}</strong> \ 
            números cadastrados<br>`;    
        }
        // Exibe o menor e maior digito
        numberArray.sort(function (a, b) {
            // Faz o ordenamento dos inteiros
            return a - b;
        });
        // Menor digito
        lessParagraphy.innerHTML = `O menor digito da lista é \
        <strong>${numberArray[0]}</strong>`;
        // Maior digito
        higherParagraphy.innerHTML = `O maior digito da lista é \
        <strong>${numberArray.length - 1}</strong>`;
        // Somar os valores da array
        for (let i = 0; i < numberArray.length; i++) {
            sum += numberArray[i];
        }
        sumParagraphy.innerHTML = `A soma dos digitos é <strong>${sum}</strong>`;
        // Média dos valores
        averageParagraphy.innerHTML = `A média dos valores é: \
         ${sum / numberArray.length}`;        
    }    
    numberArray = [];
    RESULT_DIV.innerHTML = '';
}

