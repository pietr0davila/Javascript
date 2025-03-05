// listener
document.querySelector('input#result').addEventListener('click', generate_table);

let table = document.querySelector("select#table") 
function generate_table() {
    const 
     GET_INPUT = document.querySelector('input#number');
    if (GET_INPUT.value.length == 0) {
        alert('Número inválido!');
        return;
    } else {
        NUMBER = Number(GET_INPUT.value);
        for (let i = 1; i <= 10; i++){
            let option = document.createElement('option');
            table.appendChild(option);
            option.value = `t${i}`;
            option.innerText = `${NUMBER} x ${i} = ${num * i}`;  
        }
    }
}