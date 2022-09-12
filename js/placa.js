const home = document.getElementById('home');
const ham1 = document.querySelector('.ham');
const xis1 = document.querySelector('.xis');
const casa =  document.getElementById('casa');


function mostrarHome(){
    home.style.top = '0';
    home.style.zIndex = '1';
    cortes.style.zIndex = '-1';
    whats.style.zIndex = '-1';
    cont.style.top ='-60rem'
    cortes.style.transform = 'rotate(0deg)'
    xis1.style.transform = 'rotate(90deg)';
    ham1.style.transform = 'rotate(0deg)'
    home.style.transform = 'rotate(0deg)'
    cont.style.transform = 'rotate(0deg)'
    whats.style.transform = 'rotate(0)'
}


function mostrarMenu1(){
    ham1.style.transform = 'rotate(-90deg)';
    xis1.style.transform = 'rotate(0)';
    home.style.transform = 'rotate(-20deg)'
    
    
}

function fecharMenu1(){
    ham1.style.transform = 'rotate(0)';
    xis1.style.transform = 'rotate(90deg)';
    home.style.transform = 'rotate(0)'
    
}


casa.addEventListener('click', mostrarHome);
ham1.addEventListener('click', mostrarMenu1);
xis1.addEventListener('click', fecharMenu1);
