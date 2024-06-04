<?php 
include('../cadastro/protect.php');
$nome = $_SESSION['nome'];
$progresso = $_SESSION['cursophp'];
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso - Python</title>
  <link rel="stylesheet" href="../style/style-python.css">
  <link rel="shortcut icon" href ="../img/Logo-Simples-Light.png" type="image/x-icon">

</head>

<body>
  <main class="container-Python">

    <div class="menu-cursos">

      <div class="div-logo">
        <img src="../img/Logo-Simples.png" id="logo">
        <h2 class="titulo">Hidden</h2>
        <h2 class="titulo-negrito">Bug</h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" viewBox="0 0 16 16"
          onclick="abrirMenu()" class="btn-abrir">
          <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
      </div>

      <div class="navegacao-li">

        <p class="subtitulo">Módulos (3)</p>
        <hr color='d9c359'>

        <nav id="menu">
          <p class="subtitulo-2">-- Módulo 1 --</p>

          <li class="sel" onclick="aula1()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>História do Python</span>
          </li>

          <li onclick="aula2()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula3()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula4()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula5()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula6()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula7()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula8()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula9()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula10()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li onclick="aula11()">
            <img src="../img/Python-logo.png" alt="Logo-Python">
            <span>Em produção</span>
          </li>

          <li class="select"></li>
        </nav>

        <div class="btn-darkMode">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon-darkMode-1"
            viewBox="0 0 16 16" color='black'>
            <path
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
          </svg>
          <div class="borda-darkMode">
            <div class="bola-darkMode"></div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-darkMode-2"
            viewBox="0 0 16 16" color='black'>
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
          </svg>

        </div>

      </div>
    </div>

    <div class="conteudo-curso">

      <header class="cabecalho">

        <div class="cabecalho-introducao">

          <div class="header-titulo">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" viewBox="0 0 16 16"
              onclick="fecharMenu()" class="btn-fechar">
              <path fill-rule="evenodd"
               d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />

              <h3 class="titulo-cabecalho">PYTHON</h3>

              <img src="../img/Python-logo.png" alt="Logo Python">
            </div>
          
            <div class="div-icons">

              <label for="foto" class="label-perfil"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="icon-cabecalho-2" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </label>
      
              <input type="file" name="ifoto" id="foto">
              
            <div class="nome-usuario">
              <p>
                <?php
                  echo "$nome";
                ?>
              </p>  
            </div>
              
            <div class="btn-home">
              <a href="../index.html">Home</a>
            </div>
            <div class="btn-logout">
              <a href="../cadastro/logout.php">Logout</a>
            </div> 
              
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="icon-cabecalho-1" viewBox="0 0 16 16">
                <path
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
                  
            </div>
        </div>
      </header>

      <section class="secao-iframe">
       <div class="container-ajuste">
        <div class="cabecalho-video">
          <div class="titulo-video">
            <h2>História do Python</h2>
            <hr class="hr-tituloVideo" color='d9c359'>
          </div>

          <div class="porcentagem">

            <div class="barra">

              <div class="progresso">
                <div class="indicador"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="iframe">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/K8RqhuVSRiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div class="button-video">

          <div class="conteudo-botao">
            <img src="../img/VitoriaPerfil.png" alt="" class="img-perfil">
            <span>Vitória Canon Martins</span>
          </div>

          <button class="proximo">Próximo</button>

        </div>

        <div class="div-descricao">
          <h2>Descrição</h2>

          <p>Bem-vindo à nossa aula de Python, onde mergulharemos na fascinante história dessa linguagem de programação. Ao aprender Python, é importante entender como ela se desenvolveu e se tornou uma das linguagens mais populares do mundo.<br><br>Nesta aula, começaremos nossa jornada no final dos anos 1980, quando Guido van Rossum, um programador holandês, concebeu a ideia de criar uma linguagem de programação fácil de ler e escrever. Guiado por seus ideais de simplicidade e legibilidade, ele deu início ao desenvolvimento do Python.</p>
        </div>
       </div>
      </section>
    </div>

  </main>

  <script src="../script/script-Python.js"></script>
</body>

</html>