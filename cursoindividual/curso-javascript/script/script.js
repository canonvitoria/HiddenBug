
const buttonClose = document.querySelector('#btn-close-menu');
const buttonOpen = document.querySelector('#btn-open-menu');
const btnDark = document.querySelector('.button-dark-mode');
const gambiarra = document.querySelector('.gambiarra');

const btnPerfil = document.querySelector('#btn-open-point');
btnPerfil.addEventListener('click', () => {
    document.querySelector('.open-menu-perfil').classList.toggle('open-menu-perfil-active')
    if(document.querySelector('.open-menu-perfil').classList.contains('open-menu-perfil-active') ){
        fotoPerfil.style.cssText = 'display:none;';
    }else{
        fotoPerfil.style.cssText = 'display:block;';      
    }

  if(window.screen.width <= 1111){
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});
    
let contadorPorcentual = 20; //contador de andamento

let porcenCont = 6.67 ; // porcentagem atual

const addPorcentual = 6.67; // valor de cada porcentagem | valor de soma




//==========================

const fotoPerfil = document.querySelector('#foto-perfil');
const menuBar = document.querySelector('.nav-bar-javascript');
menuBar.addEventListener('click', ()=>{
  document.querySelector('.open-menu-perfil').classList.remove('open-menu-perfil-active');
    fotoPerfil.style.cssText = 'display:block;';
  
});

const conteudo = document.querySelector('.content-container');
conteudo.addEventListener('click', ()=>{
document.querySelector('.open-menu-perfil').classList.remove('open-menu-perfil-active');   
  fotoPerfil.style.cssText = 'display:block;'
  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');

    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const btnSwitch = document.querySelector('.switch-dark');
btnSwitch.addEventListener('click', () => {
  document.querySelector('.mark-switch').classList.toggle('mark-switch-active');
  if (document.querySelector('.mark-switch').classList.contains('mark-switch-active')) {
    document.documentElement.style.setProperty("--black", "#f2f2f2");
    document.documentElement.style.setProperty("--white", "#2e2e2e");
    document.documentElement.style.setProperty("--gray", "#ccc");
    document.documentElement.style.setProperty("--black-transparence", "#f2f2f299");
    document.querySelector('#logo-principal').src = 'curso-javascript/img/Logo-Simples.png';
  } else {
    document.documentElement.style.setProperty("--black", "#2e2e2e");
    document.documentElement.style.setProperty("--white", "#f2f2f2");
    document.documentElement.style.setProperty("--gray", "#444");
    document.documentElement.style.setProperty("--black-transparence", "#2e2e2e99");
    document.querySelector('#logo-principal').src = 'curso-javascript/img/logo.png';
  }
});


//==========================

buttonOpen.addEventListener('click', () => {
  document.querySelector('.nav-bar-javascript').classList.remove('nav-bar-javascript-active');
  buttonClose.style.cssText = 'transform: rotateY(0deg) ;'
  buttonOpen.style.cssText = 'transform: rotateY(90deg);'
  btnDark.style.cssText = 'left:0;'
  gambiarra.style.cssText = 'left:0px;'  
  document.querySelector('.open-menu-perfil').classList.remove('open-menu-perfil-active')
})

buttonClose.addEventListener('click', () => {
  document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
  buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
  buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
  btnDark.style.cssText = 'left:-350px;'
  gambiarra.style.cssText = 'left:-350px;'

  
})


// ===============================

const modulo1 = document.querySelector('#modulo-1');
modulo1.style.cssText = 'opacity: 100%;'
modulo1.addEventListener('click', () => {
  if(contadorPorcentual >= 0 && contadorPorcentual < 20){
       contadorPorcentual = 20 ;
       porcenCont += addPorcentual;
    
          
  }
  
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 0px;'
  document.querySelector('.aula-1').style.cssText = 'display: flex;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo2 = document.querySelector('#modulo-2');
modulo2.addEventListener('click', () => {
    if(contadorPorcentual >= 20 && contadorPorcentual < 30){
       contadorPorcentual = 30 ; 
       porcenCont += addPorcentual;    
       modulo2.style.cssText = 'opacity: 100%;' 
    }
  
 
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 60px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: flex;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
  
  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo3 = document.querySelector('#modulo-3');
modulo3.addEventListener('click', () => {

  conteudo.scrollTop = 0;
  
    if(contadorPorcentual >= 30 && contadorPorcentual < 40){
       contadorPorcentual = 40 ;
       porcenCont += addPorcentual; 
       modulo3.style.cssText = 'opacity: 100%;'     
    }
  
  document.querySelector('.mark').style.cssText = 'top: 120px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: flex;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo4 = document.querySelector('#modulo-4');
modulo4.addEventListener('click', () => {

    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 40 && contadorPorcentual < 50){
       contadorPorcentual = 50 ;
       porcenCont += addPorcentual;    
       modulo4.style.cssText = 'opacity: 100%;' 
    }
  document.querySelector('.mark').style.cssText = 'top: 180px;'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: flex;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo5 = document.querySelector('#modulo-5');
modulo5.addEventListener('click', () => {

    conteudo.scrollTop = 0;
   if(contadorPorcentual >= 50 && contadorPorcentual < 60){
       contadorPorcentual = 60 ;
       porcenCont += addPorcentual;    
     modulo5.style.cssText = 'opacity: 100%;' 
    }
  document.querySelector('.mark').style.cssText = 'top: 240px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: flex;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo6 = document.querySelector('#modulo-6');
modulo6.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 300px'
  conteudo.scrollTop = 0;
   if(contadorPorcentual >= 60 && contadorPorcentual < 70){
       contadorPorcentual = 70;
       porcenCont += addPorcentual;     
       modulo6.style.cssText = 'opacity: 100%;'
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: flex;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo7 = document.querySelector('#modulo-7');
modulo7.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 360px'
  conteudo.scrollTop = 0;
  if(contadorPorcentual >= 70 && contadorPorcentual < 80){
       contadorPorcentual = 80;
       porcenCont += addPorcentual;   
       modulo7.style.cssText = 'opacity: 100%;'  
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: flex;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo8 = document.querySelector('#modulo-8');
modulo8.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 420px'
    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 80 && contadorPorcentual < 90){
       contadorPorcentual = 90;
       porcenCont += addPorcentual;   
       modulo8.style.cssText = 'opacity: 100%;' 
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: flex;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo9 = document.querySelector('#modulo-9');
modulo9.addEventListener('click', () => {
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 480px'

   if(contadorPorcentual >= 90 && contadorPorcentual < 100){
       contadorPorcentual = 100;
       porcenCont += addPorcentual; 
       modulo9.style.cssText = 'opacity: 100%;'    
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: flex;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo10 = document.querySelector('#modulo-10');
modulo10.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 540px'
    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 100 && contadorPorcentual < 110){
       contadorPorcentual = 110;
       porcenCont += addPorcentual; 
      modulo10.style.cssText = 'opacity: 100%;'   
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: flex;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo11 = document.querySelector('#modulo-11');
modulo11.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 600px'
    conteudo.scrollTop = 0;
  if(contadorPorcentual >= 110 && contadorPorcentual < 120){
       contadorPorcentual = 120;
       porcenCont += addPorcentual;    
      modulo11.style.cssText = 'opacity: 100%;' 
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: flex;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo12 = document.querySelector('#modulo-12');
modulo12.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 660px'

    conteudo.scrollTop = 0;
  if(contadorPorcentual >= 120 && contadorPorcentual < 130){
       contadorPorcentual = 130;
       porcenCont += addPorcentual;       
       modulo12.style.cssText = 'opacity: 100%;'
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: flex;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
      conteudo.scrollTop = 0;
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo13 = document.querySelector('#modulo-13');
modulo13.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 720px';
    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 130 && contadorPorcentual < 140){
       contadorPorcentual = 140;
       porcenCont += addPorcentual;    
       modulo13.style.cssText = 'opacity: 100%;'  
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: flex;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo14 = document.querySelector('#modulo-14');
modulo14.addEventListener('click', () => {
  document.querySelector('.mark').style.cssText = 'top: 780px'
    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 140 && contadorPorcentual < 150){
       contadorPorcentual = 150;
       porcenCont += addPorcentual;   
      modulo14.style.cssText = 'opacity: 100%;' 
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: flex;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

const modulo15 = document.querySelector('#modulo-15');
modulo15.addEventListener('click', () => {
    document.querySelector('.mark').style.cssText = 'top: 840px'
    conteudo.scrollTop = 0;
    if(contadorPorcentual >= 150 && contadorPorcentual < 160){
       contadorPorcentual = 160;
       porcenCont += addPorcentual;      
      modulo15.style.cssText = 'opacity: 100%;'
    }
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: flex;'

  if (window.screen.width <= 1111) {
    document.querySelector('.nav-bar-javascript').classList.add('nav-bar-javascript-active');
    buttonClose.style.cssText = 'transform: rotateY(90deg) ;'
    buttonOpen.style.cssText = 'transform: rotateY(180deg)  ;'
    btnDark.style.cssText = 'left:-350px;'
    gambiarra.style.cssText = 'left:-350px;'
  }
});

// ======================================


const next2 = document.querySelector('#next-1');
next2.addEventListener('click', () => {
   if(contadorPorcentual >= 20 && contadorPorcentual < 30){
       contadorPorcentual = 30 ;
       porcenCont += addPorcentual;    
       modulo2.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 60px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: flex;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next3 = document.querySelector('#next-2');
next3.addEventListener('click', () => {
    if(contadorPorcentual >= 30 && contadorPorcentual < 40){
       contadorPorcentual = 40 ;
       porcenCont += addPorcentual;    
       modulo3.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 120px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: flex;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next4 = document.querySelector('#next-3');
next4.addEventListener('click', () => {
   if(contadorPorcentual >= 40 && contadorPorcentual < 50){
       contadorPorcentual = 50 ;
       porcenCont += addPorcentual;    
       modulo4.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 180px;'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: flex;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next5 = document.querySelector('#next-4');
next5.addEventListener('click', () => {
    if(contadorPorcentual >= 50 && contadorPorcentual < 60){
       contadorPorcentual = 60 ;
       porcenCont += addPorcentual;    
       modulo5.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 240px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: flex;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next6 = document.querySelector('#next-5');
next6.addEventListener('click', () => {
   if(contadorPorcentual >= 60 && contadorPorcentual < 70){
       contadorPorcentual = 70 ;
       porcenCont += addPorcentual;    
       modulo6.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 300px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: flex;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next7 = document.querySelector('#next-6');
next7.addEventListener('click', () => {
   if(contadorPorcentual >= 70 && contadorPorcentual < 80){
       contadorPorcentual = 80 ;
       porcenCont += addPorcentual;    
       modulo7.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 360px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: flex;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next8 = document.querySelector('#next-7');
next8.addEventListener('click', () => {
   if(contadorPorcentual >= 80 && contadorPorcentual < 90){
       contadorPorcentual = 90 ;
       porcenCont += addPorcentual;    
       modulo8.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 420px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: flex;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next9 = document.querySelector('#next-8');
next9.addEventListener('click', () => {
   if(contadorPorcentual >= 90 && contadorPorcentual < 100){
       contadorPorcentual = 100 ;
       porcenCont += addPorcentual;    
       modulo9.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 480px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: flex;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next10 = document.querySelector('#next-9');
next10.addEventListener('click', () => {
   if(contadorPorcentual >= 100 && contadorPorcentual < 110){
       contadorPorcentual = 110 ;
       porcenCont += addPorcentual;    
       modulo10.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 540px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: flex;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next11 = document.querySelector('#next-10');
next11.addEventListener('click', () => {
  if(contadorPorcentual >= 110 && contadorPorcentual < 120){
       contadorPorcentual = 120 ;
       porcenCont += addPorcentual;    
       modulo11.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 600px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: flex;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next12 = document.querySelector('#next-11');
next12.addEventListener('click', () => {
    if(contadorPorcentual >= 120 && contadorPorcentual < 130){
       contadorPorcentual = 130 ;
       porcenCont += addPorcentual;    
       modulo12.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 660px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: flex;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next13 = document.querySelector('#next-12');
next13.addEventListener('click', () => {
    if(contadorPorcentual >= 130 && contadorPorcentual < 140){
       contadorPorcentual = 140 ;
       porcenCont += addPorcentual;    
       modulo13.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 720px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: flex;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'
});

const next14 = document.querySelector('#next-13');
next14.addEventListener('click', () => {
   if(contadorPorcentual >= 140 && contadorPorcentual < 150){
       contadorPorcentual = 150 ;
       porcenCont += addPorcentual;    
       modulo14.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 780px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: flex;'
  document.querySelector('.aula-15').style.cssText = 'display: none;'

});

const next15 = document.querySelector('#next-14');
next15.addEventListener('click', () => {
    if(contadorPorcentual >= 150 && contadorPorcentual < 160){
       contadorPorcentual = 160 ;
       porcenCont += addPorcentual;    
       modulo15.style.cssText = 'opacity: 100%;' 
    }
    conteudo.scrollTop = 0;
  document.querySelector('.mark').style.cssText = 'top: 840px'
  document.querySelector('.aula-1').style.cssText = 'display: none;'
  document.querySelector('.aula-2').style.cssText = 'display: none;'
  document.querySelector('.aula-3').style.cssText = 'display: none;'
  document.querySelector('.aula-4').style.cssText = 'display: none;'
  document.querySelector('.aula-5').style.cssText = 'display: none;'
  document.querySelector('.aula-6').style.cssText = 'display: none;'
  document.querySelector('.aula-7').style.cssText = 'display: none;'
  document.querySelector('.aula-8').style.cssText = 'display: none;'
  document.querySelector('.aula-9').style.cssText = 'display: none;'
  document.querySelector('.aula-10').style.cssText = 'display: none;'
  document.querySelector('.aula-11').style.cssText = 'display: none;'
  document.querySelector('.aula-12').style.cssText = 'display: none;'
  document.querySelector('.aula-13').style.cssText = 'display: none;'
  document.querySelector('.aula-14').style.cssText = 'display: none;'
  document.querySelector('.aula-15').style.cssText = 'display: flex;'
});

setInterval(()=>{
      document.documentElement.style.setProperty("--porcentual", `${porcenCont}%`);
      const indicadorElement = document.querySelectorAll('.indicador');

      indicadorElement.forEach((ind)=>{
        ind.innerHTML = parseInt(porcenCont) + "%";
        ind.style.cssText = "transition:1s;"
      });
  
}, 150000)

// Ajustes

/*

   desparecer perfil ao abrir menu
*/