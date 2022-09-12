const ham = document.querySelector('.ham');
const xis = document.querySelector('.xis');
const cont = document.getElementById('container-principal');
const circulo = document.getElementById('circulo');
const teste = document.getElementById('teste');


function abrirMenu(){
    ham.style.transform = 'rotate(-90deg)';
    xis.style.transform = 'rotate(0)';
    cont.style.transform = 'rotate(-20deg)'
    
    
}

function fecharMenu(){
    ham.style.transform = 'rotate(0)';
    xis.style.transform = 'rotate(90deg)';
    cont.style.transform = 'rotate(0)'
    
}





ham.addEventListener('click', abrirMenu);
xis.addEventListener('click', fecharMenu);
