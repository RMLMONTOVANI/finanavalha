const cortes = document.getElementById('cortes');
const ham2 = document.querySelector('.ham');
const xis2 = document.querySelector('.xis');
const tesoura =  document.getElementById('tesoura');


function mostrarCortes(){
    cortes.style.top = '0';
    cont.style.top ='-60rem'
    home.style.transform = 'rotate(0deg)'
    xis2.style.transform = 'rotate(90deg)';
    ham2.style.transform = 'rotate(0deg)'
    cortes.style.transform = 'rotate(0deg)'
    cont.style.transform = 'rotate(0deg)'
    whats.style.transform = 'rotate(0)'
}


function mostrarMenu2(){
    ham2.style.transform = 'rotate(-90deg)';
    xis2.style.transform = 'rotate(0)';
    cortes.style.transform = 'rotate(-20deg)'
    
    
}

function fecharMenu2(){
    ham2.style.transform = 'rotate(0)';
    xis2.style.transform = 'rotate(90deg)';
    cortes.style.transform = 'rotate(0)'
    
}


tesoura.addEventListener('click', mostrarCortes);
ham2.addEventListener('click', mostrarMenu2);
xis2.addEventListener('click', fecharMenu2);
