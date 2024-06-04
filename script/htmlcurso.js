// PORCENTAGEM 


let contadorPorcentagem = 20; 
let porcentagem = 7.14285714286;
const addPorcentagem = 7.14285714286;

// MENU (FECHAR)
function fecharMenu() {
  document.querySelector("#logo").classList.add("desativado-logo");
  document.querySelector(".menu-lateral").style = "width:0; padding:0;";
  document.querySelector(".conteudo").style = "width:100%";
  // document.querySelector(".retornar-menu").style.display = "block";
  document.querySelector(".dark-mode").classList.add("desativado"); 
  document.querySelector(".dark-mode").classList.remove("ativado");
  document.querySelector('#btn-abrir').style = 'margin-right:20px; scale:1;';
  
}


function abrirMenu() {
  document.querySelector("#logo").classList.remove("desativado-logo");
  document.querySelector(".menu-lateral").style = "width:320px";
  // document.querySelector(".retornar-menu").style.display = "none";
  document.querySelector(".logo").classList.remove("desativado")
  document.querySelector(".logo").classList.add("ativado")
  document.querySelector(".dark-mode").classList.add("ativado");
  document.querySelector(".dark-mode").classList.remove("desativado");
  document.querySelector('#btn-abrir').style = 'margin-right:20px; scale: 0;';
}

// MODULO 1
function padrao() {
  // LINHAS

  document.querySelector(".aula1").style.display = "flex";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula8").style.display = "none";

  document.querySelector(".line").classList.add("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "block";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";

  
  
}

function line1() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula2").style.display = "flex";

  document.querySelector(".line1").classList.add("cor")

  document.querySelector(".line1").classList.add("on")
  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo2").style.display = "block";

  if (contadorPorcentagem >= 20 && contadorPorcentagem < 30) {
    contadorPorcentagem = 30;
    porcentagem += addPorcentagem;
  }
}

// MODULO 2 
function line2() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula3").style.display = "flex";

  document.querySelector(".line2").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line2").classList.add("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo3").style.display = "block";

  if (contadorPorcentagem >= 30 && contadorPorcentagem < 40) {
    contadorPorcentagem = 40
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 3 {
function line3() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula4").style.display = "flex";
  document.querySelector(".line3").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line3").classList.add("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo4").style.display = "block";

    if (contadorPorcentagem >= 40 && contadorPorcentagem < 50) {
    contadorPorcentagem = 50
    porcentagem += addPorcentagem;
  }
  
}

// MÓDULO 4 {
function line4() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula5").style.display = "flex";

  document.querySelector(".line4").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line4").classList.add("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo5").style.display = "block";

  if (contadorPorcentagem >= 50 && contadorPorcentagem < 60) {
    contadorPorcentagem = 60
    porcentagem += addPorcentagem;
  }

}

// MÓDULO 5 {
function line5() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula6").style.display = "flex";

  document.querySelector(".line5").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line5").classList.add("on")

  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo6").style.display = "block";

  if (contadorPorcentagem >= 60 && contadorPorcentagem < 70) {
    contadorPorcentagem = 70
    porcentagem += addPorcentagem;
  }
  
}

// MÓDULO 6 {
function line6() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula7").style.display = "flex";

  document.querySelector(".line6").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line6").classList.add("on")



  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo7").style.display = "block";

  if (contadorPorcentagem >= 70 && contadorPorcentagem < 80) {
    contadorPorcentagem = 80
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 7 {
function line7() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula8").style.display = "flex";

  document.querySelector(".line7").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line7").classList.add("on")


  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo8").style.display = "block";

  if (contadorPorcentagem >= 80 && contadorPorcentagem < 90) {
    contadorPorcentagem = 90
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 8 {
function line8() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula9").style.display = "flex";

  document.querySelector(".line8").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line8").classList.add("on")



  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo9").style.display = "block";

  if (contadorPorcentagem >= 90 && contadorPorcentagem < 100) {
    contadorPorcentagem = 100
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 9 
function line9() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula10").style.display = "flex";

  document.querySelector(".line9").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line9").classList.add("on")



  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo10").style.display = "block";

  if (contadorPorcentagem >= 100 && contadorPorcentagem < 110) {
    contadorPorcentagem = 110
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 10 
function line10() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula11").style.display = "flex";

  document.querySelector(".line10").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line10").classList.add("on")



  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "block";
  document.querySelector(".conteudo12").style.display = "none";

  if (contadorPorcentagem >= 110 && contadorPorcentagem < 120) {
    contadorPorcentagem = 120
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 11
function line11() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula12").style.display = "flex";

  document.querySelector(".line11").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line11").classList.add("on")



  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo12").style.display = "block";

  if (contadorPorcentagem >= 120 && contadorPorcentagem < 130) {
    contadorPorcentagem = 130
    porcentagem += addPorcentagem;
  }
}

// MÓDULO 12
function line12() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula14").style.display = "none";
  document.querySelector(".aula13").style.display = "flex";

  document.querySelector(".line12").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line13").classList.remove("on")
  document.querySelector(".line12").classList.add("on")




  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo12").style.display = "none";
  document.querySelector(".conteudo13").style.display = "block";

  if (contadorPorcentagem >= 130 && contadorPorcentagem < 140) {
    contadorPorcentagem = 140
    porcentagem += addPorcentagem;
  }
}

function line13() {

  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "flex";

  document.querySelector(".line13").classList.add("cor")

  document.querySelector(".line").classList.remove("on")
  document.querySelector(".line1").classList.remove("on")
  document.querySelector(".line2").classList.remove("on")
  document.querySelector(".line3").classList.remove("on")
  document.querySelector(".line4").classList.remove("on")
  document.querySelector(".line5").classList.remove("on")
  document.querySelector(".line6").classList.remove("on")
  document.querySelector(".line7").classList.remove("on")
  document.querySelector(".line8").classList.remove("on")
  document.querySelector(".line9").classList.remove("on")
  document.querySelector(".line10").classList.remove("on")
  document.querySelector(".line11").classList.remove("on")
  document.querySelector(".line12").classList.remove("on")
  document.querySelector(".line13").classList.add("on")




  // PÁGINAS
  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo12").style.display = "none";
  document.querySelector(".conteudo13").style.display = "none";
  document.querySelector(".conteudo14").style.display = "block";

  if (contadorPorcentagem >= 140 && contadorPorcentagem < 150) {
    contadorPorcentagem = 150
    porcentagem += addPorcentagem;
  }

}

// NEXT - botão de passar vídeos

function next1() {
  document.querySelector(".aula1").style.display = "none";
  document.querySelector(".aula2").style.display = "flex";

  document.querySelector(".conteudo1").style.display = "none";
  document.querySelector(".conteudo2").style.display = "block";

  document.querySelector(".line").classList.add("cor");

  document.querySelector(".line").classList.remove("on");
  document.querySelector(".line1").classList.add("on");
}


function next2() {
  document.querySelector(".aula2").style.display = "none";
  document.querySelector(".aula3").style.display = "flex";

  document.querySelector(".conteudo2").style.display = "none";
  document.querySelector(".conteudo3").style.display = "block";

  document.querySelector(".line1").classList.add("cor");

  document.querySelector(".line1").classList.remove("on");
  document.querySelector(".line2").classList.add("on");
}

function next3() {
  document.querySelector(".aula3").style.display = "none";
  document.querySelector(".aula4").style.display = "flex";

  document.querySelector(".conteudo3").style.display = "none";
  document.querySelector(".conteudo4").style.display = "block";

  document.querySelector(".line2").classList.add("cor");

  document.querySelector(".line2").classList.remove("on");
  document.querySelector(".line3").classList.add("on");
}

function next4() {
  document.querySelector(".aula4").style.display = "none";
  document.querySelector(".aula5").style.display = "flex";

  document.querySelector(".conteudo4").style.display = "none";
  document.querySelector(".conteudo5").style.display = "block";

  document.querySelector(".line3").classList.add("cor");

  document.querySelector(".line3").classList.remove("on");
  document.querySelector(".line4").classList.add("on");
}

function next5() {
  document.querySelector(".aula5").style.display = "none";
  document.querySelector(".aula6").style.display = "flex";

  document.querySelector(".conteudo5").style.display = "none";
  document.querySelector(".conteudo6").style.display = "block";

  document.querySelector(".line4").classList.add("cor");

  document.querySelector(".line4").classList.remove("on");
  document.querySelector(".line5").classList.add("on");
}

function next6() {
  document.querySelector(".aula6").style.display = "none";
  document.querySelector(".aula7").style.display = "flex";

  document.querySelector(".conteudo6").style.display = "none";
  document.querySelector(".conteudo7").style.display = "block";

  document.querySelector(".line5").classList.add("cor");

  document.querySelector(".line5").classList.remove("on");
  document.querySelector(".line6").classList.add("on");
}

function next7() {
  document.querySelector(".aula7").style.display = "none";
  document.querySelector(".aula8").style.display = "flex";

  document.querySelector(".conteudo7").style.display = "none";
  document.querySelector(".conteudo8").style.display = "block";

  document.querySelector(".line6").classList.add("cor");

  document.querySelector(".line6").classList.remove("on");
  document.querySelector(".line7").classList.add("on");
}

function next8() {
  document.querySelector(".aula8").style.display = "none";
  document.querySelector(".aula9").style.display = "flex";

  document.querySelector(".conteudo8").style.display = "none";
  document.querySelector(".conteudo9").style.display = "block";

  document.querySelector(".line7").classList.add("cor");

  document.querySelector(".line7").classList.remove("on");
  document.querySelector(".line8").classList.add("on");
}

function next9() {
  document.querySelector(".aula9").style.display = "none";
  document.querySelector(".aula10").style.display = "flex";

  document.querySelector(".conteudo9").style.display = "none";
  document.querySelector(".conteudo10").style.display = "block";

  document.querySelector(".line8").classList.add("cor");

  document.querySelector(".line8").classList.remove("on");
  document.querySelector(".line9").classList.add("on");
}

function next10() {
  document.querySelector(".aula10").style.display = "none";
  document.querySelector(".aula11").style.display = "flex";

  document.querySelector(".conteudo10").style.display = "none";
  document.querySelector(".conteudo11").style.display = "block";

  document.querySelector(".line9").classList.add("cor");

  document.querySelector(".line9").classList.remove("on");
  document.querySelector(".line10").classList.add("on");
}

function next11() {
  document.querySelector(".aula11").style.display = "none";
  document.querySelector(".aula12").style.display = "flex";

  document.querySelector(".conteudo11").style.display = "none";
  document.querySelector(".conteudo12").style.display = "block";

  document.querySelector(".line10").classList.add("cor");

  document.querySelector(".line10").classList.remove("on");
  document.querySelector(".line11").classList.add("on");
}

function next12() {
  document.querySelector(".aula12").style.display = "none";
  document.querySelector(".aula13").style.display = "flex";

  document.querySelector(".conteudo12").style.display = "none";
  document.querySelector(".conteudo13").style.display = "block";

  document.querySelector(".line11").classList.add("cor");

  document.querySelector(".line11").classList.remove("on");
  document.querySelector(".line12").classList.add("on");
}

function next13() {
  document.querySelector(".aula13").style.display = "none";
  document.querySelector(".aula14").style.display = "flex";

  document.querySelector(".conteudo13").style.display = "none";
  document.querySelector(".conteudo14").style.display = "block";

  document.querySelector(".line12").classList.add("cor");

  document.querySelector(".line12").classList.remove("on");
  document.querySelector(".line13").classList.add("on");
}

// MENU 
function abrirMenus() {
  document.querySelector('.open-menu').classList.toggle("on");
  document.querySelector('.menu').classList.toggle("off");
}

//DARK MODE 

function toggleMode() {
  document.body.classList.toggle("dark")
  if (document.body.classList.contains("dark")) {
    document.documentElement.style.setProperty("--textoli", "#2e2e2e")
    document.documentElement.style.setProperty("--black", "#f2f2f2")
    document.documentElement.style.setProperty("--grey", "#a2a2a2")
    document.documentElement.style.setProperty("--white", "#2e2e2e")
    document.documentElement.style.setProperty("--darkgrey", "#ccc")
    document.documentElement.style.setProperty("--logo", "#f2f2f272")
    document.documentElement.style.setProperty("--gold", "#208db8")
    document.documentElement.style.setProperty("--zeroblack", "#f2f2f272")
    document.querySelector("#img-logo").src="../img/logoSimples.png";
  } else {
    document.documentElement.style.setProperty("--textoli", "#f2f2f2")
    document.documentElement.style.setProperty("--black", "#2e2e2e")
    document.documentElement.style.setProperty("--grey", "#888")
    document.documentElement.style.setProperty("--white", "#f2f2f2")
    document.documentElement.style.setProperty("--darkgrey", "#999")
    document.documentElement.style.setProperty("--darkgrey", "#444")
    document.documentElement.style.setProperty("--logo", "#2e2e2e72")
    document.documentElement.style.setProperty("--gold", "#d9c359")
    document.documentElement.style.setProperty("--zeroblack", "#2e2e2e52")
    document.querySelector("#img-logo").src="../img/logo.png"
  }
}

// IMAGEM QUE MUDA

function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();

    file.onload = function(e) {
      document.getElementById("img-menu-perfil").src = e.target.result;
      document.getElementById("img-menu-grande").src = e.target.result;
      console.log(e.target.result)
    }

    file.readAsDataURL(this.files[0]);
  }
}

setInterval(()=>{
   document.documentElement.style.setProperty("--porcent", `${porcentagem}%`)
   let seila = document.querySelectorAll(".porcentagem")
    seila.forEach((por)=>{
      por.innerHTML = parseInt(porcentagem) + "%"
    })
}, 10);

document.getElementById("inpimg").addEventListener("change", readImage, false);