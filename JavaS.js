const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const barraLateral = document.querySelector('.barra-lateral');

menuHamburguesa.addEventListener('click', () => {
  menuHamburguesa.classList.toggle('.activo');
  barraLateral.classList.toggle('.activo');
});