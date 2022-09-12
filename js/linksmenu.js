const cortes = document.getElementById('cortes');
const ham2 = document.querySelector('.ham');
const xis2 = document.querySelector('.xis');




function mostrarCortes(){
    cortes.style.top = '0';
    whats.style.top = '-60rem';
    
    xis2.style.transform = 'rotate(90deg)';
    ham2.style.transform = 'rotate(0deg)'
    cortes.style.transform = 'rotate(0deg)'
}


function mostrarMenu2(){
    ham.style.transform = 'rotate(-90deg)';
    xis.style.transform = 'rotate(0)';
    cortes.style.transform = 'rotate(-20deg)'
    
}

function fecharMenu2(){
    ham.style.transform = 'rotate(0)';
    xis.style.transform = 'rotate(90deg)';
    cortes.style.transform = 'rotate(0)'
    
}


tesoura.addEventListener('click', mostrarCortes);
ham2.addEventListener('click', mostrarMenu2);
xis2.addEventListener('click', fecharMenu2);
