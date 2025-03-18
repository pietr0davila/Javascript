const TEXT_INPUT = document.querySelector('input#year'); 
const GENDERS = document.querySelectorAll('input[type="radio"]');
const SUBMIT = document.querySelector('input#submit-form').addEventListener('click', calc);
const CONTENT = document.querySelector('div#result')
let resultParagraph = document.querySelector('p#result-txt')
function calc(){
    const CURRENT_YEAR = new Date().getFullYear();
    const AGE = CURRENT_YEAR - Number(TEXT_INPUT.value);
    CONTENT.innerText = '';    
    resultParagraph.innerText = '';
    if (TEXT_INPUT.value == "" || AGE <= 0) {
        alert('[ERRO] Insira os valores corretamente e tente novamente');
    } else {
        let newImage = document.createElement('img');
        CONTENT.appendChild(newImage);
        if (AGE <= 0) {
            newImage.setAttribute('src', 'assets/image/died.jpg');
            resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> anos e <strong>já faleceu</strong>`;
        } else if (AGE <= 6) {
            newImage.setAttribute('src', 'assets/image/baby.jpg');
            resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> anos, <strong>é homem e um bebê</strong>`;

        } else if (GENDERS[0].checked == true) {
                if (AGE < 15) {
                    newImage.setAttribute('src', 'assets/image/man/kid.jpg');
                    resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \
                    anos, <strong>é homem e uma criança</strong>`;
                } else if (AGE <= 34) {
                    newImage.setAttribute('src', 'assets/image/man/young.jpg');
                    resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                    anos, <strong>é homem e um jovem</strong>`;
                } else if (AGE <= 60) {
                    newImage.setAttribute('src', 'assets/image/man/adult.jpg');
                    resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                    anos e é um <strong>homem adulto</strong>`;
                } else {
                    newImage.setAttribute('src', 'assets/image/man/elderly.jpg');
                    resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                    anos e é um <strong>homem idoso</strong>`;
                }
        } else {
            if (AGE < 15) {
                newImage.setAttribute('src', 'assets/image/woman/kid.jpg');
                resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \
                anos, <strong>é mulher e uma criança</strong>`;
            } else if (AGE <= 34) {
                newImage.setAttribute('src', 'assets/image/woman/young.jpg');
                resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                anos, <strong>é mulher e uma jovem</strong>`;
            } else if (AGE <= 60) {
                newImage.setAttribute('src', 'assets/image/woman/adult.jpg');
                resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                anos e é uma <strong>mulher adulta</strong>`;
            } else {
                newImage.setAttribute('src', 'assets/image/woman/elderly.jpg');
                resultParagraph.innerHTML = `Você tem <strong>${AGE}</strong> \ 
                anos e é um <strong>mulher idosa</strong>`;
            }
        
        }
    }
}