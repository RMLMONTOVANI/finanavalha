const cortes = document.getElementById('cortes');
const cortesdiv = document.querySelector('.cortesdiv');
const fecharcortes = document.querySelector('.fecharcortes');
const tesoura =  document.getElementById('tesoura');
const contplaca1 = document.getElementById('container-principal');

function mostrarHome(){
    cortes.style.transform = 'rotate(0deg)';  
    cortesdiv.style.transform = 'rotate(0)';
    fecharcortes.style.transform = 'rotate(90deg)';
    contplaca1.style.transform = 'rotate(90deg)';
}






tesoura.addEventListener('click', mostrarHome);

