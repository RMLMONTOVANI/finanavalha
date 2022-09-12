const ham = document.querySelector('.ham');
const xis = document.querySelector('.xis');
const cont = document.getElementById('container-principal');


const homemenu = document.querySelector('.home');
const whats1 = document.getElementById('whats');
const cortes1 = document.getElementById('cortes');
      
function abrirMenu(){
    ham.style.transform = 'rotate(-90deg)';
    xis.style.transform = 'rotate(0)';
    homemenu.style.transform = 'rotate(-120deg)';
    cortes1.style.transform = 'rotate(-120deg)';
    whats1.style.transform = 'rotate(-120deg)';
    cont.style.transform = 'rotate(-20deg)';
}

function fecharMenu(){
    ham.style.transform = 'rotate(0)';
    xis.style.transform = 'rotate(90deg)';
    cont.style.transform = 'rotate(0)';
    
}





ham.addEventListener('click', abrirMenu);
xis.addEventListener('click', fecharMenu);
