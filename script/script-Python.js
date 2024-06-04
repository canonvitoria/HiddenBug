function abrirMenu(){
  document.querySelector(".menu-cursos").style.width = '0px';
  document.querySelector(".btn-fechar").style.display = 'block';
  document.querySelector(".btn-fechar").style.cssText = 'transform: rotateY(180deg); display: block;';
  document.querySelector(".div-logo").style.left = '-350px';
  document.querySelector(".btn-darkMode").style.display = 'none';
}

function fecharMenu(){
  document.querySelector(".menu-cursos").style.width = '250px';
  document.querySelector(".btn-fechar").style.display = 'none';
  document.querySelector(".div-logo").style.left = '0px';
  document.querySelectorAll(".btn-darkMode").style.display = 'block';
}

// DARKMODE

const body = document.body;
const btn = document.querySelector(".borda-darkMode");
const logo = document.querySelector('#logo');
const aulas = document.querySelector('.proximo');
let contador = 0;
const select = document.querySelector(".select");
const aula = document.querySelector(".iframe iframe"); 
const descricao = document.querySelector(".div-descricao p");
const conteudo = document.querySelector(".secao-iframe")

btn.addEventListener("click", function() {
  body.classList.toggle("darkMode");
  if(body.classList.contains("darkMode")){
    logo.src = "../img/Logo-Simples-Light.png";
  } else {
    logo.src = "../img/Logo-Simples.png";
  }
})

aulas.addEventListener('click', () => {
  if (contador == 0) {
    aula2()
  } else if (contador == 10) {
    aula3()
  } else if (contador == 20) {
    aula4()
  } else if (contador == 30) {
    aula5()
  } else if (contador == 40) {
    aula6()
  } else if (contador == 50) {
    aula7()
  } else if (contador == 60) {
    aula8()
  } else if (contador == 70) {
    aula9()
  } else if (contador == 80) {
    aula10()
  } else if (contador == 90) {
    aula11()
  } else if (contador == 100) {
    aula12()
  }
}) 

function aula1(){
  select.style.top = '50px';
  contador = 0;
  aula.src = 'https://www.youtube.com/embed/K8RqhuVSRiw';
  conteudo.scrollTop = 0;
  descricao.innerHTML = '<p>Bem-vindo à nossa aula de Python, onde mergulharemos na fascinante história dessa linguagem de programação. Ao aprender Python, é importante entender como ela se desenvolveu e se tornou uma das linguagens mais populares do mundo.<br><br>Nesta aula, começaremos nossa jornada no final dos anos 1980, quando Guido van Rossum, um programador holandês, concebeu a ideia de criar uma linguagem de programação fácil de ler e escrever. Guiado por seus ideais de simplicidade e legibilidade, ele deu início ao desenvolvimento do Python.</p>';
}

function aula2(){
  select.style.top = '87px';
  contador = 10;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  
  if(contadorProgresso == 8.3) {
    setTimeout(() => {
      contadorProgresso = 16.6;
    }, 1000)
  }
}

function aula3(){
  select.style.top = '127px';
  contador = 20;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 16.6) {
    setTimeout(() => {
      contadorProgresso = 24.9;
    }, 1000)
  }
}

function aula4(){
  select.style.top = '167px';
  contador = 30;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 24.9) {
    setTimeout(() => {
      contadorProgresso = 33.2;
    }, 1000)
  }
}

function aula5(){
  select.style.top = '205px';
  contador = 40;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 33.2) {
    setTimeout(() => {
      contadorProgresso = 41.5;
    })
  }
}

function aula6(){
  select.style.top = '245px';
  contador = 50;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
    conteudo.scrollTop = 0;
  if(contadorProgresso == 41.5) {
    setTimeout(() => {
      contadorProgresso = 49.8;
    }, 1000)
  }
}

function aula7(){
  select.style.top = '285px';
  contador = 60;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 49.8) {
    setTimeout(() => {
     contadorProgresso = 58.1; 
    })
  }
}

function aula8(){
  select.style.top = '325px';
  contador = 70;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 58.1) {
    setTimeout(() => {
      contadorProgresso = 66.4;
    })
  }
}

function aula9(){
  select.style.top = '365px';
  contador = 80;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 66.4) {
    setTimeout(() => {
      contadorProgresso = 74.7;
    })
  }
 
}

function aula10(){
  select.style.top = '405px';
  contador = 90;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 74.7) {
    setTimeout(() => {
      contadorProgresso = 83;
    })
  }
}

function aula11(){
  select.style.top = '445px';
  contador = 100;
  aula.src = '../preparodeaula.html';
  descricao.innerHTML = 'Em produção';
  conteudo.scrollTop = 0;
  if(contadorProgresso == 83) {
    setTimeout(() => {
      contadorProgresso = 91.3;
    })
  }
}

setTimeout(() => {
  if(contadorProgresso == 0) {
    contadorProgresso = 8.3;
  } 
}, 1000)

const pontos = document.querySelector('.icon-cabecalho-1');
const icons = document.querySelector('.div-icons');

pontos.addEventListener('click', () => {
  icons.classList.toggle('ativo')
})

// Porcentagem 

let contadorProgresso = 0;
const barra = document.querySelector('.progresso');
const porcentagem = document.querySelector('.indicador');

setInterval(() => {
  barra.style.width = `${contadorProgresso}%`;
  porcentagem.innerHTML = `${barra.style.width}`;
}, 0)
