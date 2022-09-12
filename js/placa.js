const home = document.getElementById('home');
const ham4 = document.querySelector('.ham');
const xis4 = document.querySelector('.xis');




function mostrarHome(){
    cortes.style.top = '-60rem';
    whats.style.top = '-60rem';
    home.style.top = '0';
    
    xis4.style.transform = 'rotate(90deg)';
    ham4.style.transform = 'rotate(0deg)'
    home.style.transform = 'rotate(0deg)'
}


function mostrarMenu4(){
    ham4.style.transform = 'rotate(-90deg)';
    xis4.style.transform = 'rotate(0)';
    home.style.transform = 'rotate(-20deg)'
    
}

function fecharMenu4(){
    ham4.style.transform = 'rotate(0)';
    xis4.style.transform = 'rotate(90deg)';
    home.style.transform = 'rotate(0)'
    
}


casa.addEventListener('click', mostrarHome);
ham4.addEventListener('click', mostrarMenu4);
xis4.addEventListener('click', fecharMenu4);
