document.getElementById('btn-registrarse').addEventListener('click', register);
document.getElementById('btn-iniciar__sesion').addEventListener('click', iniciarSesion);
window.addEventListener('resize', anchoPagina);
//Declaracion de variables

var contentLogin = document.querySelector('.content-login');
var formularioLogin = document.querySelector('#login-form');
var formularioRegister = document.querySelector('#register-form');
var backBoxLogin = document.querySelector('.back-box__Login');
var backBoxRegister = document.querySelector('.back-box__register');

function anchoPagina() {
  if(window.innerWidth > 850) {
      backBoxLogin.style.display = 'block';
      backBoxRegister.style.display = 'block';
  }else{
    backBoxRegister.style.display = 'block';
    backBoxRegister.style.opacity = '1';
    backBoxLogin.style.display = 'none';
    formularioLogin.style.display = 'block';
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '0px';
  }

}

anchoPagina();


function iniciarSesion() {

  if (window.innerWidth > 850) {
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '10px';
    formularioLogin.style.display = 'block';
    backBoxRegister.style.opacity = '1';
    backBoxLogin.style.opacity= '0';


  }else {
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '0px';
    formularioLogin.style.display = 'block';
    backBoxRegister.style.display = 'block';
    backBoxLogin.style.display= 'none';

  }
}

function register() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = 'block';
    contentLogin.style.left = '410px';
    formularioLogin.style.display = 'none';
    backBoxRegister.style.opacity = '0';
    backBoxLogin.style.opacity= '1';
  }else{
    formularioRegister.style.display = 'block';
    contentLogin.style.left = '0px';
    formularioLogin.style.display = 'none';
    backBoxRegister.style.display = 'none';
    backBoxLogin.style.display = 'block';
    backBoxLogin.style.opacity = '1';
  }

}