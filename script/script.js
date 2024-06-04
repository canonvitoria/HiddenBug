//SPA Paginas principal - demonstrativo ( Jonatas );

const homePage = document.querySelector('.home-page')  //Paginas a serem alteradas
const cursoPage = document.querySelector('.cursos-page')
const sobrePage = document.querySelector('.sobre-page')
const fundo = document.querySelector('.mark-bar')
const fundoFooter = document.querySelector('.line-footer')


function home() {
  homePage.style.cssText =  'display:block;';
  cursoPage.style.cssText = 'display: none;'
  sobrePage.style.cssText = 'display: none;'
  fundo.style.display = 'none'
  fundoFooter.style.cssText = 'left: 3px;'
  document.documentElement.scrollTop = 0;
}

function cursos() {
  homePage.style.cssText =  'display: none;';
  cursoPage.style.cssText = 'display: block;'
  sobrePage.style.cssText = 'display: none;'
  fundo.style.cssText =  `top: 15px; left: 35px; display: block;`
  fundo.style.cssText = 'top: 15px; left: 35px; display: block;'
  fundoFooter.style.cssText = 'left: 75px; width: 60px;'
  document.documentElement.scrollTop = 0;
}

function sobre() { 
  var descontWindow = window.screen.width * 6 / 100;
  homePage.style.cssText =  'display: none;';
  cursoPage.style.cssText = 'display: none;'
  sobrePage.style.cssText = 'display: block;'
  fundo.style.cssText = 'top: 15px; left: 173px; display: block;'
  fundoFooter.style.cssText = 'left: 150px;'
  document.documentElement.scrollTop = 0;
 
  if(window.screen.width < 1024){
     fundo.style.cssText =  `top: 15px; left: ${descontWindow + 153}px; display: block;`

  }
}

function login() {
    var descontWindow = window.screen.width * 7 / 100;
  fundo.style.cssText = 'top: 15px; left: 305px; display: block;'
  fundoFooter.style.cssText = 'left: 218px; width: 110px;'
  document.documentElement.scrollTop = 0;
  
    if(window.screen.width < 1024){

     fundo.style.cssText =  `top: 15px; left: ${ -20 + descontWindow + 305  }px; display: block; `
      

  }

 document.querySelector('.mark').classList.toggle('mark-active')
  document.querySelector('.texto-1').classList.toggle('texto-active')
  document.querySelector('.texto-2').classList.toggle('texto2-active')


  if(document.querySelector('.texto-2').classList.contains('texto2-active')){
    contador = 20
    document.querySelector('.formulario-1').style.cssText = "width:100%; opacity:100%;"
    document.querySelector('.formulario-2').style.cssText = "width:0%; opacity:0%;"
    document.querySelector('.box-1').style.cssText = "left:50%"
    document.querySelector('.box-2').style.cssText = "left:-200%;"
    document.querySelector('.titulo-cadastro strong').style.color = "#d9c359";
  }else{
    contador = 20
    document.querySelector('.formulario-2').style.cssText = "width:100%; opacity:100%;"
    document.querySelector('.formulario-1').style.cssText = "width:0%; opacity:0%;"
    document.querySelector('.box-1').style.cssText = "left: 200%"
    document.querySelector('.box-2').style.cssText = "left:50%;"
    document.querySelector('.titulo-cadastro strong').style.color = "#208db8";
  }
}

