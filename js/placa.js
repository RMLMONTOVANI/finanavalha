const home = document.getElementById('home');
const placa = document.querySelector('.placa');
const fecharplaca = document.querySelector('.fecharplaca');
const casa =  document.getElementById('casa');
const contplaca = document.getElementById('container-principal');

function mostrarHome(){
    home.style.transform = 'rotate(0deg)';  
    placa.style.transform = 'rotate(0)';
    home.style.overflow = 'auto';
    fecharplaca.style.transform = 'rotate(90deg)';
    contplaca.style.transform = 'rotate(90deg)';
}






casa.addEventListener('click', mostrarHome);

