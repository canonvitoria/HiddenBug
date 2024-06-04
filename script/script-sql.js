/*=================
    BOTÃO NAVEGAÇÃO
==================*/

const btnSair = document.getElementById('sair')
const btnEntrar = document.getElementById('entrar')
const main = document.getElementById('main')
const navegacao = document.querySelector('div.navegacao')

function sair() {
  btnSair.style.display = 'none'
  btnEntrar.style.display = 'block'
  main.classList.add('ativo')
  setTimeout(() => {
    btnEntrar.style.cssText = "transform: rotateY(180deg); display:block;"
    btnSair.style.cssText = "transform: rotateY(180deg); display:none;"
  }, 50)
}

function entrar() {
  perfil.classList.remove('ativo')
  btnEntrar.style.display = 'none'
  btnSair.style.display = 'block'
  main.classList.remove('ativo')
  setTimeout(() => {
    btnEntrar.style.cssText = "transform: rotateY(0deg);"
    btnSair.style.cssText = "transform: rotateY(0deg);"
  }, 50)
}

/*===================
    NAVEGAÇÃO E TROCA DE VÍDEO
====================*/

const fundoNav = document.querySelector('li.fundo')
const aula = document.querySelector('iframe.aula')
const aulas = document.getElementById('proximo')
let contadorAula = 0
const h1Aula1 = document.getElementById('titulo-1')
const h1Aula2 = document.getElementById('titulo-2')
const h1Aula3 = document.getElementById('titulo-3')
const h1Aula4 = document.getElementById('titulo-4')

aulas.addEventListener('click', () => {
  if (contadorAula == 0) {
    aula2()
  } else if (contadorAula == 10) {
    aula3()
  } else if (contadorAula == 20) {
    aula4()
  }
})

function aula1() {
  if (contadorProgresso >= 25) {
    aulas.classList.remove('none')
  } else {
    aulas.classList.add('none')
  }
  aula.src = '../preparodeaula.html'
  fundoNav.style.top = '20px'
  aulas.classList.remove('none')
  contadorAula = 0
  if (body.classList.contains('modo')) {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "black"
  } else {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "#f2f2f2"
  }
}

function aula2() {
  if (contadorProgresso >= 50) {
    aulas.classList.remove('none')
  } else {
    aulas.classList.add('none')
  }
  aula.src = '../preparodeaula.html'
  fundoNav.style.top = '95px'
  aulas.classList.remove('none')
  contadorAula = 10
  if (body.classList.contains('modo')) {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "black"
  } else {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "#f2f2f2"
  }
  if(contadorProgresso == 25) {
    setTimeout(() => {
      contadorProgresso = 50
      aulas.classList.remove('none')
    }, 150000)
  }
}

function aula3() {
  if (contadorProgresso >= 75) {
    aulas.classList.remove('none')
  } else {
    aulas.classList.add('none')
  }
  aula.src = '../preparodeaula.html'
  fundoNav.style.top = '170px'
  contadorAula = 20
  if (body.classList.contains('modo')) {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "black"
  } else {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "#f2f2f2"
  }
  if(contadorProgresso == 50) {
    setTimeout(() => {
      contadorProgresso = 75
      aulas.classList.remove('none')
    }, 150000)
  }
}

function aula4() {
  if (contadorProgresso == 100) {
    aulas.classList.remove('none')
  } else {
    aulas.classList.add('none')
  }
  aula.src = '../preparodeaula.html'
  fundoNav.style.top = '245px'
  aulas.classList.add('none')
  if (body.classList.contains('modo')) {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "black"
  } else {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "black"
  }
  if(contadorProgresso == 75) {
    setTimeout(() => {
      contadorProgresso = 100
      aulas.classList.remove('none')
    }, 150000)
  }
}

setTimeout(() => {
  contadorProgresso = 25
  aulas.classList.remove('none')
}, 150000)

/*===================
    DARK-MODE
====================*/

const btnMode = document.getElementById('mode')
const body = document.body
const imgLogo = document.getElementById('img-logo')

btnMode.addEventListener('click', () => {
  body.classList.toggle('modo')
  if (body.classList.contains('modo')) {
    imgLogo.src = '../img/Logo-Simples.png'
  } else {
    imgLogo.src = '../img/Logo-Simples-Light.png'
  }
  if (body.classList.contains('modo')) {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "black"
  } else if (fundoNav.style.top == '20px' || fundoNav.style.top == '') {
    h1Aula1.style.color = "black"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "#f2f2f2"
  } else if (fundoNav.style.top == '95px') {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "black"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "#f2f2f2"
  } else if (fundoNav.style.top == '170px') {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "black"
    h1Aula4.style.color = "#f2f2f2"
  } else if (fundoNav.style.top == '245px') {
    h1Aula1.style.color = "#f2f2f2"
    h1Aula2.style.color = "#f2f2f2"
    h1Aula3.style.color = "#f2f2f2"
    h1Aula4.style.color = "black"
  }
})

/*====================
  PERFIL ATIVO
=====================*/

const perfil = document.querySelector('div.perfil')
const tresPontos = document.getElementById('tres-pontos')

tresPontos.addEventListener('click', () => {
  perfil.classList.toggle('ativo')
  sair()
})

let contadorProgresso = 0
const barraPorcentagem = document.getElementById('progesso-barra')
const textoPorcentagem = document.getElementById('progresso-texto')

setInterval(() => {
  barraPorcentagem.style.width = `${contadorProgresso}%`
  textoPorcentagem.innerHTML = `${barraPorcentagem.style.width}`
},0)

/*===================
  IMAGEM
====================*/

function readImage() {
 
    if (this.files && this.files[0]) { 

        console.log(this.files[0])
        var file = new FileReader();
      
        file.onload = function(e) {
            var resulta = e.target.result;
            document.getElementById("foto-perfil").src = resulta;
            console.log(e.target.result)
        };  
      
        file.readAsDataURL(this.files[0]);

    }
}


document.getElementById("inputImg").addEventListener("change", readImage, false);