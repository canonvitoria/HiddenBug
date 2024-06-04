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


});

let contadorPorcentual = 20; //contador de andamento

let porcenCont = 11.11 ; // porcentagem atual

const addPorcentual = 11.21; // valor de cada porcentagem | valor de soma



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
        fotoPerfil.style.cssText = 'display:block;';      
  
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
    document.querySelector('#logo-principal').src = 'curso-github/img/Logo-Simples.png';
  } else {
    document.documentElement.style.setProperty("--black", "#2e2e2e");
    document.documentElement.style.setProperty("--white", "#f2f2f2");
    document.documentElement.style.setProperty("--gray", "#444");
    document.documentElement.style.setProperty("--black-transparence", "#2e2e2e99");
    document.querySelector('#logo-principal').src = 'curso-github/img/logo.png';
  }
});


//==========================

buttonOpen.addEventListener('click', () => {
  document.querySelector('.nav-bar-javascript').classList.remove('nav-bar-javascript-active');
  buttonClose.style.cssText = 'transform: rotateY(0deg) ;'
  buttonOpen.style.cssText = 'transform: rotateY(90deg);'
  btnDark.style.cssText = 'left:0;'
  gambiarra.style.cssText = 'left:0px;'
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
  conteudo.scrollTop = 0;
    
    if(contadorPorcentual >= 20 && contadorPorcentual < 30){
       contadorPorcentual = 30 ; 
       porcenCont += addPorcentual;    
       modulo2.style.cssText = 'opacity: 100%;' 
    }
  
 
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
   if(contadorPorcentual >= 60 && contadorPorcentual < 70){
       contadorPorcentual = 70 ; 
       porcenCont += addPorcentual;    
       modulo6.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
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
 if(contadorPorcentual >= 70 && contadorPorcentual < 80){
       contadorPorcentual = 80 ; 
       porcenCont += addPorcentual;    
       modulo7.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
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
  if(contadorPorcentual >= 80 && contadorPorcentual < 90){
       contadorPorcentual = 90 ; 
       porcenCont += addPorcentual;    
       modulo8.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
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
  document.querySelector('.mark').style.cssText = 'top: 480px'
 if(contadorPorcentual >= 90 && contadorPorcentual < 100){
       contadorPorcentual = 100 ; 
       porcenCont += addPorcentual;    
       modulo9.style.cssText = 'opacity: 100%;' 
    }
  conteudo.scrollTop = 0;
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

});

const next5 = document.querySelector('#next-4');
next5.addEventListener('click', () => {
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

});

const next6 = document.querySelector('#next-5');
next6.addEventListener('click', () => {
  conteudo.scrollTop = 0;
 if(contadorPorcentual >= 60 && contadorPorcentual < 70){
       contadorPorcentual = 70 ; 
       porcenCont += addPorcentual;    
       modulo6.style.cssText = 'opacity: 100%;' 
    }
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
  
});

const next7 = document.querySelector('#next-6');
next7.addEventListener('click', () => {
  conteudo.scrollTop = 0;
  if(contadorPorcentual >= 70 && contadorPorcentual < 80){
       contadorPorcentual = 80 ; 
       porcenCont += addPorcentual;    
       modulo7.style.cssText = 'opacity: 100%;' 
    }
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

});

const next8 = document.querySelector('#next-7');
next8.addEventListener('click', () => {
  conteudo.scrollTop = 0;
 if(contadorPorcentual >= 80 && contadorPorcentual < 90){
       contadorPorcentual = 90 ; 
       porcenCont += addPorcentual;    
       modulo8.style.cssText = 'opacity: 100%;' 
    }
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

});

const next9 = document.querySelector('#next-8');
next9.addEventListener('click', () => {
  conteudo.scrollTop = 0;
  if(contadorPorcentual >= 90 && contadorPorcentual < 100){
       contadorPorcentual = 100 ; 
       porcenCont += addPorcentual;    
       modulo9.style.cssText = 'opacity: 100%;' 
    }
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
  
});


setInterval(()=>{
      document.documentElement.style.setProperty("--porcentual", `${porcenCont}%`);
      const indicadorElement = document.querySelectorAll('.indicador');

      indicadorElement.forEach((ind)=>{
        ind.innerHTML = parseInt(porcenCont) + "%";
        ind.style.cssText = "transition:1s;"
      });
  
}, 150000)



