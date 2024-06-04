

const btnMode = document.querySelector('.button-mode');
btnMode.addEventListener('click',()=>{
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
});



// Verificação prosseguir

  const inputFocus = document.querySelector('#senha1')
  const inputFocusConfirm = document.querySelector('#senha2')
  const btnCadastro = document.querySelector('#btn-cadastro');

     const divCadastro = document.querySelector('#div-cadastro')

    divCadastro.addEventListener('click', ()=>{
       
    });
 
   setInterval(()=>{   
      let senha = document.querySelector('#senha1').value;
      let senhaConfirmacao = document.querySelector('#senha2').value;
      
      if(senha == senhaConfirmacao){
          divCadastro.style.cssText = 'opacity:100%;'
          btnCadastro.style.cssText = 'cursor: pointer;'
          btnCadastro.disabled = false;  
          divCadastro.classList.remove('div-cadastro-close');
          divCadastro.classList.add('div-cadastro');
        
       }
    
       if(senha != senhaConfirmacao){
          divCadastro.style.cssText = 'opacity:70%;'
          btnCadastro.style.cssText = 'cursor: default;'
          btnCadastro.disabled = true;  
          divCadastro.classList.remove('div-cadastro');
          divCadastro.classList.add('div-cadastro-close');
       }
    
   }, 10) 

// Menu mobile function

  const btnCadastroM = document.querySelector('.mobile-cadastro');
  btnCadastroM.addEventListener('click', ()=>{
     btnCadastroM.classList.add('mode-log');
     btnLoginM.classList.remove('mode-log');

     if( btnCadastroM.classList.contains('mode-log')){
      contador = 20
      document.querySelector('.parede-mobile').style.cssText = 'left:-100%;'
      document.querySelector('.formulario-2').style.cssText = "width:100%; opacity:100%;"
      document.querySelector('.formulario-1').style.cssText = "width:0%; opacity:0%;"
      document.querySelector('.box-1').style.cssText = "left: 200%"
      document.querySelector('.box-2').style.cssText = "left:50%;"
      document.querySelector('.titulo-cadastro strong').style.color = "#208db8";
     }
  });

  const btnLoginM = document.querySelector('.mobile-login');
  btnLoginM.addEventListener('click', ()=>{
     btnCadastroM.classList.remove('mode-log');
     btnLoginM.classList.add('mode-log');

    if(btnLoginM.classList.contains('mode-log')){
      contador = 20
      document.querySelector('.parede-mobile').style.cssText = 'left:100%;'
      document.querySelector('.formulario-1').style.cssText = "width:100%; opacity:100%;"
      document.querySelector('.formulario-2').style.cssText = "width:0%; opacity:0%;"
      document.querySelector('.box-1').style.cssText = "left:50%"
      document.querySelector('.box-2').style.cssText = "left:-200%;"
      document.querySelector('.titulo-cadastro strong').style.color = "#d9c359";
    }
  });
    

// btnCadastro.addEventListener('click', ()=>{
  
//        if(senha != senhaConfirmacao){
//          inputFocus.focus();
//          inputFocusConfirm.focus();
//        }
  
//   });

    // setInterval(()=>{ 
     
     
    // }, 10)

   