let lineX = 2;
let lineY = 4;
translateX = 0;
translateY = 0; 
cordX = 2;
cordY = 4;
let disRotate = 28 ;
let rotate = -8;
let vel = 70;
//Porcentual em largura = 1.166
//Porcentual em  altura = 2.25


 


let valueIndex = 6;
const character = document.querySelector('.eixo');
const cubic = document.querySelector('.container');
const map = document.querySelector('.map');
const audio = document.querySelector('audio');
const keyUp = document.querySelector('.seta-cima .tecla')
const keyDown = document.querySelector('.seta-baixo .tecla')
const keyLeft = document.querySelector('.seta-esquerda .tecla')
const keyRight = document.querySelector('.seta-direita .tecla')
const keyM = document.querySelector('.tecla-m');
const keyN = document.querySelector('.tecla-n');
const keyEnter1 = document.querySelector('.part-2');
const keyEnter2 = document.querySelector('.tecla-enter');
const miniMap = document.querySelector('.mini-map')
document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'n'}));
document.addEventListener('keydown',(e)=>{
    // alert(e.key)
   if(e.key === "Enter"){
   
     keyEnter1.style.cssText = " left: -25px; top:1px;" 
     keyEnter2.style.cssText = " transform: translateY(-2px) translateX(-5px);"
   }

   if(e.key === "m"){
     keyM.style.cssText = " box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-2px) translateX(-5px);"
   }

   if(e.key === "n"){
    
     keyN.style.cssText = " box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-2px) translateX(-5px);"
   }
  
  if(e.key === "ArrowUp"){
      if(lineY * vel > 70){
        lineY -= 1;
       
      }else{
           translateY += 1;
      }

      if(cordY > 1){
        cordY -= 1;
        console.log(cordY)
      }
  

     keyUp.style.cssText = "box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-5px) translateX(-5px);"
    
  }else if(e.key === "ArrowDown"){
     if(lineY * vel < 490){
      lineY += 1;
     }else{
      translateY -= 1;
     }
     if(cordY < 42){
       cordY += 1;
     }

     keyDown.style.cssText = "box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-5px) translateX(-5px);"

    
    
      
  }else if(e.key === "ArrowLeft"){
    if(lineX * vel > 70){
      lineX -= 1;
    }else{
      translateX += 1;
    }

    if(cordX > 1){
      cordX -= 1;
    }

     keyLeft.style.cssText = "box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-5px) translateX(-5px);"
    
    
  }else if(e.key === "ArrowRight"){
    if(lineX * vel < 1260){
      lineX += 1;
    }else{
      translateX -= 1; 
    }

    if(cordX < 84){
      cordX += 1;
    }

     keyRight.style.cssText = "box-shadow: 15px -5px 15px #00000099, inset 0px -15px 12px #aaaaaa22; transform: translateY(-5px) translateX(-5px);"
    

     // window.location = "script/teste.html";
  }


  if(cordY == 7){
    valueIndex = 5;
  }else if(cordY == 8 || cordY == 11){
    valueIndex = 15; 
  }else if(cordY == 12 || cordY == 20){
    valueIndex = 25;
  }else if(cordY == 21 || cordY == 23){
    valueIndex = 35;
  }else if(cordY == 24 || cordY == 28){
    valueIndex = 45;
  }else if(cordY == 29 || cordY == 33){
    valueIndex = 55;
  }else if(cordY == 34 || cordY == 37){
    valueIndex = 65;
  }else if(cordY == 38){
    valueIndex = 75;
  }

});


document.addEventListener('keyup',(e)=>{
 
    if(e.key === "Enter"){
     keyEnter1.style.cssText = " left: -30px; top:-4px;" 
     keyEnter2.style.cssText = " transform: translateY(-7px) translateX(-10px);"
     
     if((cordY >= 7 && cordY <= 8) && (cordX >= 13 && cordX <= 16)){    //==============  HTML    
       window.location.assign("https://hiddenbug.jonatassauer.repl.co/cursoindividual/html.php")
       document.documentElement.style.setProperty("--lados", "#FA1F00");
       document.documentElement.style.setProperty("--sombras-lados", "#7A1F00");
       document.querySelector('.linguagem-1 img').src = 'mapa-mental/img/html.png';
       document.querySelector('.linguagem-1').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 10 && cordY <= 12) && (cordX >= 40 && cordX <= 43)){    //==============  CSS
        window.location.assign("https://hiddenbug.jonatassauer.repl.co/cursoindividual/css.php");
       document.documentElement.style.setProperty("--lados", "#0159F0");
       document.documentElement.style.setProperty("--sombras-lados", "#00235E");
       document.querySelector('.linguagem-2 img').src = 'mapa-mental/img/css.png';
       document.querySelector('.linguagem-2').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 6 && cordY <= 8) && (cordX >= 66 && cordX <= 69)){     //============== JS
       window.location.assign("https://hiddenbug.jonatassauer.repl.co/cursoindividual/cursojs.php")
       document.documentElement.style.setProperty("--lados", "#EFB703");
       document.documentElement.style.setProperty("--sombras-lados", "#614B01");
       document.querySelector('.linguagem-3 img').src = 'mapa-mental/img/javascript.png';
       document.querySelector('.linguagem-3').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 23 && cordY <= 24) && (cordX >= 56 && cordX <= 60)){  //==============  GITHUB
       window.location.assign("https://hiddenbug.jonatassauer.repl.co/cursoindividual/cursogithub.php")
       document.documentElement.style.setProperty("--lados", "#000");
       document.documentElement.style.setProperty("--sombras-lados", "#111");
       document.querySelector('.linguagem-4 img').src = 'mapa-mental/img/github.png';
       document.querySelector('.linguagem-4').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 20 && cordY <= 21) && (cordX >= 27 && cordX <= 30)){  //==============  PHP
       window.location.assign("https://hiddenbug.jonatassauer.repl.co/cursoindividual/cursophp.php")
       document.documentElement.style.setProperty("--lados", "#550FDC");
       document.documentElement.style.setProperty("--sombras-lados", "#220054");
       document.querySelector('.linguagem-5 img').src = 'mapa-mental/img/php.png';
       document.querySelector('.linguagem-5').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 28 && cordY <= 29) && (cordX >= 9 && cordX <= 12)){  //==============  MYSQL
       window.location.assign("https://hidden-bug.loewenstein04.repl.co/cursoindividual/mysql.php");
       document.documentElement.style.setProperty("--lados", "#FF6E00");
       document.documentElement.style.setProperty("--sombras-lados", "#664200");
       document.querySelector('.linguagem-6 img').src = 'mapa-mental/img/mysql.png';
       document.querySelector('.linguagem-6').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 33 && cordY <= 34) && (cordX >= 40 && cordX <= 43)){  //==============  PYTHON
       window.location.assign("https://hidden-bug.loewenstein04.repl.co/cursoindividual/python.php");
       document.documentElement.style.setProperty("--lados", "#19C1FF");
       document.documentElement.style.setProperty("--sombras-lados", "#094459");
       document.querySelector('.linguagem-7 img').src = 'mapa-mental/img/python.png';
       document.querySelector('.linguagem-7').style.cssText = 'filter:blur(0); ';
     }

      else if((cordY >= 37 && cordY <= 38) && (cordX >= 72 && cordX <= 75)){  //==============  JAVA
         window.location.assign("https://hidden-bug.loewenstein04.repl.co/cursoindividual/java.php");
       document.documentElement.style.setProperty("--lados", "#FF403C");
       document.documentElement.style.setProperty("--sombras-lados", "#942523");
       document.querySelector('.linguagem-8 img').src = 'mapa-mental/img/java.png';
       document.querySelector('.linguagem-8').style.cssText = 'filter:blur(0); ';
     }
   }

    if(e.key === "m"){
     miniMap.classList.toggle('open-mapa')
     keyM.style.cssText = "  transform: translateY(-7px) translateX(-10px);"
   }

  if(e.key === "n"){
    miniMap.classList.toggle('off-mapa')
     keyN.style.cssText = "  transform: translateY(-7px) translateX(-10px);"
  }
  
  if(e.key === "ArrowUp"){
      lineY -= 0;
      translateY += 0;
      rotate = 0;
      // audio.play()
    keyUp.style.cssText = "transform: translateY(-10px) translateX(-10px);"
  }else if(e.key === "ArrowDown"){
      lineY += 0;
      translateY -= 0;
      rotate = -180 ; 
     // audio.play()
    keyDown.style.cssText = "transform: translateY(-10px) translateX(-10px);"
    
  }else if(e.key === "ArrowLeft"){
    lineX -= 0;
    translateX += 0;
    rotate = 270;
     // audio.play()

    keyLeft.style.cssText = "transform: translateY(-10px) translateX(-10px);"
    
  }else if(e.key === "ArrowRight"){
    lineX += 0;
    translateX -= 0; 
    rotate = -90;
     // audio.play()
    keyRight.style.cssText = "transform: translateY(-10px) translateX(-10px);"
    
  }

});


(setInterval(()=>{

  
  cubic.style.cssText = `transform: rotateX(-28deg) rotateY(${rotate - disRotate}deg);`;

   character.style.cssText = `left:${lineX * vel}px; top:${lineY * vel}px; z-index: ${valueIndex};`;   
    
  
    document.querySelector(".cord-x").innerText = " " + cordX + " , " + lineX ;
    document.querySelector(".cord-y").innerText = " " + cordY + " , " + lineY;
  
  if(translateX * vel > 0){
    translateX = 0;
  }else if(translateY * vel > 0){
    translateY = 0;
  }else if(translateY * vel < -2450){
    translateY = -35;
  }else if(translateX * vel < -4620){
    translateX = -66;
  }
  

  map.style.cssText = `transform: translate(${translateX * vel}px,${translateY * vel}px)`;

  document.querySelector('.eixo-elements').style.cssText = `top:${translateY * vel}px; left: ${translateX * vel}px;`
  document.querySelector('.marcador-cubo').style.cssText = `top:${cordY * 2.25}%; left: ${cordX * 1.166}%;`

      if((cordY >= 3 && cordY <= 12) && (cordX >= 8 && cordX <= 23)){    //==============  HTML
       document.documentElement.style.setProperty("--lados", "#FA1F00");
       document.documentElement.style.setProperty("--sombras-lados", "#7A1F00");
       document.querySelector('.linguagem-1 img').src = 'mapa-mental/img/html.png';
       document.querySelector('.linguagem-1').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 7 && cordY <= 14) && (cordX >= 33 && cordX <= 50)){    //==============  CSS
       document.documentElement.style.setProperty("--lados", "#0159F0");
       document.documentElement.style.setProperty("--sombras-lados", "#00235E");
       document.querySelector('.linguagem-2 img').src = 'mapa-mental/img/css.png';
       document.querySelector('.linguagem-2').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 3 && cordY <= 11) && (cordX >= 59 && cordX <= 76)){     //============== JS
       document.documentElement.style.setProperty("--lados", "#EFB703");
       document.documentElement.style.setProperty("--sombras-lados", "#614B01");
       document.querySelector('.linguagem-3 img').src = 'mapa-mental/img/javascript.png';
       document.querySelector('.linguagem-3').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 19 && cordY <= 26) && (cordX >= 50 && cordX <= 67)){  //==============  GITHUB
       document.documentElement.style.setProperty("--lados", "#000");
       document.documentElement.style.setProperty("--sombras-lados", "#111");
       document.querySelector('.linguagem-4 img').src = 'mapa-mental/img/github.png';
       document.querySelector('.linguagem-4').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 17 && cordY <= 24) && (cordX >= 21 && cordX <= 38)){  //==============  PHP
       document.documentElement.style.setProperty("--lados", "#550FDC");
       document.documentElement.style.setProperty("--sombras-lados", "#220054");
       document.querySelector('.linguagem-5 img').src = 'mapa-mental/img/php.png';
       document.querySelector('.linguagem-5').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 25 && cordY <= 32) && (cordX >= 5 && cordX <= 22)){  //==============  MYSQL
       document.documentElement.style.setProperty("--lados", "#FF6E00");
       document.documentElement.style.setProperty("--sombras-lados", "#664200");
       document.querySelector('.linguagem-6 img').src = 'mapa-mental/img/mysql.png';
       document.querySelector('.linguagem-6').style.cssText = 'filter:blur(0); ';
     }else if((cordY >= 30 && cordY <= 36) && (cordX >= 34 && cordX <= 51)){  //==============  PYTHON
       document.documentElement.style.setProperty("--lados", "#19C1FF");
       document.documentElement.style.setProperty("--sombras-lados", "#094459");
       document.querySelector('.linguagem-7 img').src = 'mapa-mental/img/python.png';
       document.querySelector('.linguagem-7').style.cssText = 'filter:blur(0); ';
     }

      else if((cordY >= 34 && cordY <= 41) && (cordX >= 65 && cordX <= 82)){  //==============  JAVA
       document.documentElement.style.setProperty("--lados", "#FF403C");
       document.documentElement.style.setProperty("--sombras-lados", "#942523");
       document.querySelector('.linguagem-8 img').src = 'mapa-mental/img/java.png';
       document.querySelector('.linguagem-8').style.cssText = 'filter:blur(0); ';
     }


  // if(lineY < 3 && lineX > 13){
  //   lineX = lineX - 1
  //   cordX -= 1;
    
  // }else if(lineY < 4 && lineX > 13){
  //   lineY = lineY + 1
  //   cordY += 1;
  // }

  

  // if(cordX > 7){
  //   window.location = "https://jonatassauer.github.io/Leading-page---Adidas/";
  // }
  
}, 10))();