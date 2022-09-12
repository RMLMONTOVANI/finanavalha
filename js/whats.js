const whats = document.getElementById('whats');
const whatsdiv = document.querySelector('.whatsdiv');
const fecharwhats = document.querySelector('.fecharwhats');
const whatsapp =  document.getElementById('whatsapp');
const contplaca2 = document.getElementById('container-principal');

function mostrarWhats(){
    whats.style.transform = 'rotate(0deg)';  
    whatsdiv.style.transform = 'rotate(0)';
    fecharwhats.style.transform = 'rotate(90deg)';
    contplaca2.style.transform = 'rotate(90deg)';
}






whatsapp.addEventListener('click', mostrarWhats);
