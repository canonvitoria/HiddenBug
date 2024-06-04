/*

1366/100
13.66

*/

const mapa = document.querySelector('#roud-map-box')



 setInterval(()=>{
   let tamanhoTela = (window.screen.width * 80)/100
   mapa.style.scale = tamanhoTela/1366
 },10)
//1092.8