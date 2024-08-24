function changeText() {
    var eggElement = document.getElementById('egg');
    eggElement.textContent = 'Good Bad Ugly';
}


function changeColor() {
    var eggElement = document.getElementById('egg');
    eggElement.style.color = 'blue';
}

document.getElementById('text').addEventListener('click', changeText);
document.getElementById('kolor').addEventListener('click', changeColor);
