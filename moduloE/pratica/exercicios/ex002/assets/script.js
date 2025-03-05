// listener
document.querySelector('input#result').addEventListener('click', generate_table);

let result = document.querySelector("section#result-sec") 
function generate_table() {
    const 
     GET_INPUT = document.querySelector('input#number');
     NUMBER = Number(GET_INPUT.value);
    if (NUMBER.length == 0) {
        alert('Número inválido!');
        return;
    } else {
        for (let i = 1; i <= 10; i++){
            let sum = NUMBER * i;
            let newParagraphy = document.createElement('p');
            result.appendChild(newParagraphy);
            newParagraphy.innerText = `${NUMBER} x ${i} = ${sum}`;
        }
    }
}