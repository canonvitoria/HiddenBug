//Funcionamento do carrossel

let cont = 1;

const boxPitch = document.querySelector('#box-pitch');
const boxComunidade = document.querySelector('#box-comunidade');
const boxSuporte = document.querySelector('#box-suporte');
const boxPitchR = document.querySelector('#box-pitch-replica');
const boxComunidadeR = document.querySelector('#box-comunidade-replica');
const boxSuporteR = document.querySelector('#box-suporte-replica');
const btnE = document.getElementById('seta-esquerda');
const btnD = document.getElementById('seta-direita');

btnE.addEventListener('click', () => {
    cont -= 1;

    if(cont < 1){
        cont = 6; 
    }
  
     troca()

});

btnD.addEventListener('click', () => {
   cont += 1;

   if(cont > 6){
    cont = 1;
   }

   troca()
   
});

function troca() {
   if (cont == 1) {
      document.querySelector('.back-1').style.cssText = 'opacity:0%;'
      document.querySelector('.back-2').style.cssText = 'opacity:0%;'
      document.querySelector('.back-3').style.cssText = 'opacity:100%;'



      boxComunidadeR.classList.remove('box-2')
      boxComunidadeR.classList.remove('box-6')
      boxComunidadeR.classList.remove('box-1')
      boxComunidadeR.classList.add('box-1')
  
  
      boxSuporteR.classList.remove('box-1')
      boxSuporteR.classList.remove('box-2')
      boxSuporteR.classList.remove('box-3')
      boxSuporteR.classList.add('box-2')
  
      boxPitch.classList.remove('box-3')
      boxPitch.classList.remove('box-2')
      boxPitch.classList.remove('box-4')
      boxPitch.classList.add('box-3');
  
      boxComunidade.classList.remove('box-3')
      boxComunidade.classList.remove('box-4')
      boxComunidade.classList.remove('box-5')
      boxComunidade.classList.add('box-4')
  
      boxSuporte.classList.remove('box-4')
      boxSuporte.classList.remove('box-5')
      boxSuporte.classList.remove('box-6')
      boxSuporte.classList.add('box-5')
  
      boxPitchR.classList.remove('box-5')
      boxPitchR.classList.remove('box-6')
      boxPitchR.classList.remove('box-1')
      boxPitchR.classList.add('box-6')
  
     } else if (cont == 2) {
        document.querySelector('.back-1').style.cssText = 'opacity:100%;'
        document.querySelector('.back-2').style.cssText = 'opacity:0%;'
        document.querySelector('.back-3').style.cssText = 'opacity:0%;'

        boxComunidadeR.classList.remove('box-5')
        boxComunidadeR.classList.remove('box-6')
        boxComunidadeR.classList.remove('box-1')
        boxComunidadeR.classList.add('box-6')
  
  
        boxSuporteR.classList.remove('box-1')
        boxSuporteR.classList.remove('box-2')
        boxSuporteR.classList.remove('box-6')
        boxSuporteR.classList.add('box-1')
  
        boxPitch.classList.remove('box-2')
        boxPitch.classList.remove('box-3')
        boxPitch.classList.remove('box-1')
        boxPitch.classList.add('box-2');
  
        boxComunidade.classList.remove('box-3')
        boxComunidade.classList.remove('box-2')
        boxComunidade.classList.remove('box-4')
        boxComunidade.classList.add('box-3')
  
        boxSuporte.classList.remove('box-4')
        boxSuporte.classList.remove('box-5')
        boxSuporte.classList.remove('box-3')
        boxSuporte.classList.add('box-4')
  
        boxPitchR.classList.remove('box-5')
        boxPitchR.classList.remove('box-6')
        boxPitchR.classList.remove('box-4')
        boxPitchR.classList.add('box-5')
  
     } else if (cont == 3) {
        document.querySelector('.back-1').style.cssText = 'opacity:0%;'
        document.querySelector('.back-2').style.cssText = 'opacity:100%;'
        document.querySelector('.back-3').style.cssText = 'opacity:0%;'

        boxComunidadeR.classList.remove('box-4')
        boxComunidadeR.classList.remove('box-6')
        boxComunidadeR.classList.remove('box-5')
        boxComunidadeR.classList.add('box-5')
  
        boxSuporteR.classList.remove('box-1')
        boxSuporteR.classList.remove('box-5')
        boxSuporteR.classList.remove('box-6')
        boxSuporteR.classList.add('box-6')
  
        boxPitch.classList.remove('box-1')
        boxPitch.classList.remove('box-2')
        boxPitch.classList.remove('box-6')
        boxPitch.classList.add('box-1')
  
        boxComunidade.classList.remove('box-2')
        boxComunidade.classList.remove('box-3')
        boxComunidade.classList.remove('box-1')
        boxComunidade.classList.add('box-2')
        
        boxSuporte.classList.remove('box-3')
        boxSuporte.classList.remove('box-4')
        boxSuporte.classList.remove('box-2')
        boxSuporte.classList.add('box-3')
  
        boxPitchR.classList.remove('box-4')
        boxPitchR.classList.remove('box-5')
        boxPitchR.classList.remove('box-3')
        boxPitchR.classList.add('box-4')
     } else if (cont == 4) {
        document.querySelector('.back-1').style.cssText = 'opacity:0%;'
        document.querySelector('.back-2').style.cssText = 'opacity:0%;'
        document.querySelector('.back-3').style.cssText = 'opacity:100%;'

        boxComunidadeR.classList.remove('box-3')
        boxComunidadeR.classList.remove('box-5')
        boxComunidadeR.classList.remove('box-4')
        boxComunidadeR.classList.add('box-4')
  
        boxSuporteR.classList.remove('box-6')
        boxSuporteR.classList.remove('box-4')
        boxSuporteR.classList.remove('box-5')
        boxSuporteR.classList.add('box-5')
  
        boxPitch.classList.remove('box-5')
        boxPitch.classList.remove('box-1')
        boxPitch.classList.remove('box-6')
        boxPitch.classList.add('box-6')
  
        boxComunidade.classList.remove('box-6')
        boxComunidade.classList.remove('box-2')
        boxComunidade.classList.remove('box-1')
        boxComunidade.classList.add('box-1')
        
        boxSuporte.classList.remove('box-1')
        boxSuporte.classList.remove('box-3')
        boxSuporte.classList.remove('box-2')
        boxSuporte.classList.add('box-2')
  
        boxPitchR.classList.remove('box-2')
        boxPitchR.classList.remove('box-4')
        boxPitchR.classList.remove('box-3')
        boxPitchR.classList.add('box-3')
     } else if (cont == 5) {
        document.querySelector('.back-1').style.cssText = 'opacity:100%;'
        document.querySelector('.back-2').style.cssText = 'opacity:0%;'
        document.querySelector('.back-3').style.cssText = 'opacity:0%;'

        boxComunidadeR.classList.remove('box-2')
        boxComunidadeR.classList.remove('box-4')
        boxComunidadeR.classList.remove('box-3')
        boxComunidadeR.classList.add('box-3')
  
        boxSuporteR.classList.remove('box-5')
        boxSuporteR.classList.remove('box-3')
        boxSuporteR.classList.remove('box-4')
        boxSuporteR.classList.add('box-4')
  
        boxPitch.classList.remove('box-4')
        boxPitch.classList.remove('box-6')
        boxPitch.classList.remove('box-5')
        boxPitch.classList.add('box-5')
  
        boxComunidade.classList.remove('box-6')
        boxComunidade.classList.remove('box-1')
        boxComunidade.classList.remove('box-5')
        boxComunidade.classList.add('box-6')
        
        boxSuporte.classList.remove('box-1')
        boxSuporte.classList.remove('box-2')
        boxSuporte.classList.remove('box-6')
        boxSuporte.classList.add('box-1')
  
        boxPitchR.classList.remove('box-2')
        boxPitchR.classList.remove('box-3')
        boxPitchR.classList.remove('box-1')
        boxPitchR.classList.add('box-2')
     } else if (cont == 6) {
        document.querySelector('.back-1').style.cssText = 'opacity:0%;'
        document.querySelector('.back-2').style.cssText = 'opacity:100%;'
        document.querySelector('.back-3').style.cssText = 'opacity:0%;'

        boxComunidadeR.classList.remove('box-1')
        boxComunidadeR.classList.remove('box-3')
        boxComunidadeR.classList.remove('box-2')
        boxComunidadeR.classList.add('box-2')
  
        boxSuporteR.classList.remove('box-4')
        boxSuporteR.classList.remove('box-2')
        boxSuporteR.classList.remove('box-3')
        boxSuporteR.classList.add('box-3')
  
        boxPitch.classList.remove('box-4')
        boxPitch.classList.remove('box-5')
        boxPitch.classList.remove('box-3')
        boxPitch.classList.add('box-4')
  
        boxComunidade.classList.remove('box-5')
        boxComunidade.classList.remove('box-6')
        boxComunidade.classList.remove('box-4')
        boxComunidade.classList.add('box-5')
        
        boxSuporte.classList.remove('box-6')
        boxSuporte.classList.remove('box-5')
        boxSuporte.classList.remove('box-1')
        boxSuporte.classList.add('box-6')
  
        boxPitchR.classList.remove('box-1')
        boxPitchR.classList.remove('box-2')
        boxPitchR.classList.remove('box-6')
        boxPitchR.classList.add('box-1')
     } 
}

setInterval(() => {
  cont += 1;

   if(cont > 6){
    cont = 1;
   }
  
  troca()
}, 20000)