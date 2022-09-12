const whats = document.getElementById('whats');
const ham3 = document.querySelector('.ham');
const xis3 = document.querySelector('.xis');
const whatsapp =  document.getElementById('whatsapp');


function mostrarCortes2(){
    whats.style.top = '0';
    cont.style.top ='-60rem'
     cortes.style.zIndex = '-1';
    home.style.zIndex = '-1';
    whats.style.zIndex = '1';
    cortes.style.transform = 'rotate(0deg)'
    xis3.style.transform = 'rotate(90deg)';
    ham3.style.transform = 'rotate(0deg)'
    whats.style.transform = 'rotate(0deg)'
    cont.style.transform = 'rotate(0deg)'
    home.style.transform = 'rotate(0)'
}


function mostrarMenu3(){
    ham3.style.transform = 'rotate(-90deg)';
    xis3.style.transform = 'rotate(0)';
    whats.style.transform = 'rotate(-20deg)'
    
    
}

function fecharMenu3(){
    ham3.style.transform = 'rotate(0)';
    xis3.style.transform = 'rotate(90deg)';
    whats.style.transform = 'rotate(0)'
    
}


whatsapp.addEventListener('click', mostrarCortes2);
ham3.addEventListener('click', mostrarMenu3);
xis3.addEventListener('click', fecharMenu3);
