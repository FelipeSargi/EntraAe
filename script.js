const display = document.querySelector('#display');
const botoes = document.querySelectorAll('botoes');

botoes.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'limpar') {
            display.innerText = '';
        } else if (item.id == 'apagar') {
            display.innerHTML("Jamal");
            
        } else if (display.innerText != '' && item.id == 'igual'){
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'igual'){
            display.innerText = 'Vazio!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.inerText += item.id;
        }
    };
});