const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const barraLateral = document.querySelector('.barra-lateral');
menuHamburguesa.addEventListener('click', () => {
  menuHamburguesa.classList.toggle('active');
  barraLateral.classList.toggle('active'); // Sincroniza la clase con el botón
});