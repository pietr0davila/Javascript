const PARAGRAPH = document.querySelector('p#info');
const IMAGE = document.querySelector("img#image"); 
let body = document.querySelector('body#document');
let hour = new Date().getHours();


document.addEventListener('DOMContentLoaded', (event) => {
  
    PARAGRAPH.innerHTML = `Agora são <strong>${hour}</strong> horas`;

    if (hour >= 0 && hour <= 5) {
        IMAGE.setAttribute('src', 'assets\\image\\madrugada.jpg');
        body.style.background = '#cf9757';
    } else if (hour > 5 && hour <= 12) {
        IMAGE.setAttribute('src', 'assets\\image\\manhã.jpg');
        body.style.background = '#d8a465';

    } else if (hour > 12 && hour < 18){
        IMAGE.setAttribute('src', 'assets\\image\\tarde.jpg');
        body.style.background = '#c16521';
    } else {
        IMAGE.setAttribute('src', 'assets\\image\\noite.jpg');
        body.style.background = '#0f2b4d';
    }
});
