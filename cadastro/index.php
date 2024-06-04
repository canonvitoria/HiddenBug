<!DOCTYPE html>
<html lang="pt-br">

<head>
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Formulário</title>
    <link href="../style/style-login.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="../img/Logo-Simples.png" type="image/x-icon">
  
</head>

<body>

    <main>
        <div class="container">

          
            <div class="formulario-1">
                <div class="box box-1">
                    <div class="form">
                        <form for="form" action="login.php" method="post">
                          <div class = "div-icon-login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon-login" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                          </div>
                            <br>
                            <label class = "label-f2">E-mail:</label>
                            <br>
                            <input type="email" name="emailL" class = "input-f2" required>
                            <br>

                            <label class = "label-f2">Senha:</label>
                            <br>
                            <input type="password" name="senhaL" class = "input-f2" required>
                            <br>

                            <div id="div-entre" class="div-entre">
                            
                            <input type="submit" id="btn-entre" value="Entrar" class="btn-entre">
                            
                           </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="parede-mobile">
              <img src="../img/Logo-Simples-Light.png">
              <h3>Hidden<span >Bug</span></h3>
            </div>
            <div class="menu-mobile">
             <div class="switch-mobile">
               <div class="button-log mobile-login ">
                 <span>Login</span>
               </div>

               <div class="button-log mobile-cadastro mode-log">
                 <span>Cadastro</span>
               </div>
             </div>
              
            </div>

            <div class="menu-bar">

                <img src="../img/Logo-Simples-Light.png" alt="">

                <div class="text">
                    <h2 class = "titulo-cadastro">Hidden <strong>Bug</strong></h2>
                    <span class = "paragrafo-cadastro"><p>HiddenBug é uma plataforma de estudos de tecnologia que foi criada para ajudar estudantes e profissionais da área a aprimorar seus conhecimentos e habilidades em diversas áreas da tecnologia. A plataforma oferece cursos online, tutoriais, exercícios práticos e fóruns de discussão para que os usuários possam aprender e interagir com outros estudantes e profissionais da área.</p></span>
                </div>

                <div class="switch-login">

                    <span class="texto-1 texto-active">Cadastro</span>
                  
                    <div class="button-mode">
                        <div class="mark"></div>
                    </div>
                  
                    <span class="texto-2">Login</span>
                  
                </div>
            </div>

            <div class="formulario-2">
                <div class="box box-2">

                    <div class="form">

                        <form action="config.php" method="post">
                          
                          <div class="nome">
                            <div class="estrutura"> 
                              <label class="label-f2">Nome:</label>
                              <input type="text" name="nome" required class="input-f2">
                            </div>
                            
                            <div class="estrutura">
                              <label class="label-f2" >Sobrenome:</label>
                              <input type="text" name="sobrenome" class="input-f2" id="sobrenome" required>
                            </div>
                            
                          </div>
                            
                            <label class="label-f2">E-mail:</label>
                            <br>
                            <input type="email" name="emailR" class="input-f2" id="email" placeholder="seuemail@gmail.com" required>
                            <br>
                          
                          <div class="senhas"> 
                            
                            <div class="estrutura">
                              
                              <label class="label-f2">Senha:</label>
                            <!-- Campo de senhas -->
                              <input type="password" id="senha1" name="senhaR" required class="input-f2">
                              
                            </div>
                            
                            <div class="estrutura"> 
                              <label class="label-f2">Confirmação:</label>
                              <input type="password" id="senha2" required class="input-f2">
                            </div>
                            
                          </div>

                            <label class="label-f2">Telefone:</label>
                            <br>
                            <input type="tel" name="telefone" class="input-f2" placeholder="(xxx) x xxxx-xxxx">
                          <br>
                          <br>
                          <label class="titulo-opcao"><strong>Curso de maior interesse:</strong></label>
                          <hr class="hr-tituloOpcao">
                          <br>
                          <select name="opcao" id="opcao-curso">
                            <option>Selecione</option>
                            <option>HTML5</option>
                            <option>CSS3</option>
                            <option>JavaScript</option>
                            <option>PHP</option>
                            <option>Python</option>
                            <option>Java</option>
                            <option>MySQL</option>
                            <option>Boostrap</option>
                            <option>React</option>
                            <option>Angular</option>
                            <option>GitHub</option>
                            <option>Git</option>
                          </select> 
                          
                            <!-- <a href="#" onclick="mis()">enviar</a> -->
                          
                           <div id="div-cadastro" class="div-cadastro">
                            
                            <input type="submit" id="btn-cadastro" value="Cadastre-se" class="btn-cadastro">
                            
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="../script/script-login.js"></script>
   <script src="../script/script.js"></script>

</body>

</html>

