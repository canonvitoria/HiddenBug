<?php 
include('../cadastro/protect.php');
$nome = $_SESSION['nome'];
$progresso = $_SESSION['cursophp'];
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>GitHub</title>
  <link href="curso-github/style/style.css" rel="stylesheet" type="text/css" />
  <link href="curso-github/img/Logo-Simples.png" rel="icon"/>
</head>

<body>

   <main class="page-javascript">
     <div class="nav-bar-javascript ">
       <div class="gambiarra">
        <div class="logo-hb">
          <img id="logo-principal" src="curso-github/img/logo.png" alt=""> 
          <span>Hidden<span class="bug">Bug</span></span>
          <svg id="btn-close-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg>
        </div>    
        </div>
        <div class="menu-js">
          <span class="nivel">- Básico - <br></span>
          <span class="numero-modulos">Aulas (9)</span>
          <hr class="line-module">
            <nav class="modulos-basicos">
              <div class="mark"></div>
              <li id="modulo-1" class="modulos">
                <img src="curso-github/img/github.png" alt="">
                Apresentação
              </li>
              
              <li id="modulo-2" class="modulos">
                
             <img src="curso-github/img/github.png" alt="">
                O que é o GitHub?
              </li>
              
              <li id="modulo-3" class="modulos">
                <img src="curso-github/img/github.png" alt="">
               Evolução do Github</li>
              
              <li id="modulo-4" class="modulos">
               <img src="curso-github/img/github.png" alt="">
                Explorando o GitHub</li>

              
              <li id="modulo-5" class="modulos">
               <img src="curso-github/img/github.png" alt="">
                Personalizando Perfil</li>
              
              <li id="modulo-6" class="modulos">
              <img src="curso-github/img/github.png" alt="">
                Criando Repositório</li>
              
              <li id="modulo-7" class="modulos">
              <img src="curso-github/img/github.png" alt="">
                GitHub Pages</li>
              
              <li id="modulo-8" class="modulos">
                <img src="curso-github/img/github.png" alt="">
                Usando Issues
              </li>

              <li id="modulo-9" class="modulos">
               <img src="curso-github/img/github.png" alt="">
                GitHub Security
              </li>

              
            </nav>
        </div>

        <div class="button-dark-mode">
              <div class="container-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>
                <div class="switch-dark">
                  <div class="mark-switch"></div>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
              </div>
        </div>
     </div>

     <div class="conteudo-javascript">
         <header class="header-javascript">
           
           <div class="title-js">
              <svg id="btn-open-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg>
             <h1>GitHub</h1>
             <img src="curso-github/img/github.png" alt="">
              
           </div>        

           <div class="perfil">
             <div id="foto-perfil" class="foto-perfil">
               <img id="foto-perfil-menu-header" src="https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gratis-vetor.jpg">
             </div>
             <div class="menu-perfil">
               <svg id="btn-open-point" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /></svg>
             </div>
           </div>

            
           <div class="open-menu-perfil">
             <div class="perfil-info">
               <label for="inputImg">
               <div class="imagem-perfil">
                  <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gratis-vetor.jpg" 
id="img-perfil-menu">
               </div>
               </label>

               <input type="file" id="inputImg" style="display:none;">
                <span><?php echo "$nome"?></span>
             </div>
             
             <nav>
               <li> 
                 <a href="../index.html"><svg class=".icon-exit" style="margin-left: -10px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg> Home</a></li>
               <li>
                 <a href="../cadastro/logout.php">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
        </svg>Log out</a>
               </li>
             </nav>
           </div> 
         </header>

         <section class="content-container">
           <div class="aulas aula-1">
             <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                Apresentação
                </h2>

               <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
              <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
                <button id="next-1">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
           
          <div class="aulas aula-2" style="display: none;">
               <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                 O que é GitHub?
                </h2>

                 <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
            
            <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-2">Próximo</button>    
             </div>

            <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
          </div>
           
          <div class="aulas aula-3" style="display: none;">
              <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                   Evolução do GitHub
                  
                </h2>

                <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
             <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-3">Próximo</button>    
             </div>

            <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
       
           <div class="aulas aula-4" style="display: none;">
              <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                Explorando o GitHub
                </h2>

                <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
            <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
               
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-4">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
       
           <div class="aulas aula-5" style="display: none;">
             <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                    Personalizando Perfil
                </h2>

               <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
            <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-5">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
       
           <div class="aulas aula-6" style="display: none;">
             <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                Criando Repositório
                </h2>

               <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
             <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-6">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
          </div>
           
           <div class="aulas aula-7" style="display: none;">
            
                <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                GitHub Pages
                </h2>

                  <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
             <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-7">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
           
           <div class="aulas aula-8" style="display: none;">
                <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                Usando Issues
                </h2>

                  <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
              <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               
               <button id="next-8">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
           
           <div class="aulas aula-9" style="display: none;">
                <div class="title-aulas">
                <h2>  
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor" /><path d="M20 11H12V9H20V11Z" fill="currentColor" /><path d="M12 15H20V13H12V15Z" fill="currentColor" /><path d="M4 15L9 12L4 9V15Z" fill="currentColor" /><path d="M4 17V19H20V17H4Z" fill="currentColor" /></svg>
                 GitHub Security
                </h2>

                  <hr class="line-title">
                
                <div class="porcentual">
                  <div class="bar">
                    <div class="progresso"></div>
                  </div>
                  <span class="indicador">0%</span>
                </div>    
             </div>
             
             <iframe width="560" height="315" src="../preparodeaula.html" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

             <div class="next-buttons">
                 <div class="perfil-professor">
                  <img src="curso-github/img/JonatasPerfil.png" alt="">
                  <span>Jonatas Sauer</span>
                </div>
               <button id="next-9">Próximo</button>    
             </div>

             <div class="describe">
                <h2>Descrição</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi reiciendis rerum assumenda placeat harum, facere, nihil ratione accusantium saepe nostrum maxime, omnis incidunt. Tempore, placeat odio? Sit, ab architecto.</p>
               <span>Slides Utilizados: </span><br>
               <a href="https://www.remove.bg/pt-br" target="_blank" >https://www.remove.bg/pt-br</a>
             </div>
           </div>
           
         
    
         </section>    
     </div>
   </main>
 
  <script src="curso-github/script/script.js"></script>
  <script src="curso-github/script/pocentual.js"></script>

</body>

</html>