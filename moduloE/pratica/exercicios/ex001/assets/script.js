// Listener
const LISTENER = document.querySelector('input#button')
.addEventListener('click', clicked); 

let result = document.querySelector('p#result');
function clicked(){
    result.innerText = '';
    // Inputs (text)
    const 
     TXT_START = document.querySelector('input#start');
     TXT_END = document.querySelector('input#end');
     TXT_SKIP = document.querySelector('input#skip');
    // Inputs (conversion)   
    let 
     start = parseInt(TXT_START.value);
     end = parseInt(TXT_END.value);
     step = parseInt(TXT_SKIP.value);
     
    // Non-Defined inputs treatment
    if (TXT_START.value == "") {
        alert('Nenhum valor atribuído para o início. Definido como 1');
        start = 1;
    } 
    if (TXT_END.value == "") {
        alert('Nenhum valor atribuído para o final. Definido como 10');
        end = 10;
    }
    if (TXT_END.value == "") {
        alert('Nenhum valor atribuído aos passos. Definido como 2');
        step = 2;
    }
    if (step <= 0){
       alert('[ERRO] Entrada inválida. Passo não pode ser menor ou igual a zero');
    }
    // Script Logic 
    if (end < start){
        for (let i = start; i >= end; i = i - step){
        
            if (i - step < end){
                result.innerText += ` ${i} 🏁 `;
            } else {
                result.innerHTML += ` ${i} 👉🏼`;
            }
        }
    } else {
        for (let i = start; i <= end; i = i + step){
        
            if (i + step > end){
                result.innerText += ` ${i} 🏁 `;
            } else {
                result.innerHTML += ` ${i} 👉🏼`;
            }
        }    
    }
}