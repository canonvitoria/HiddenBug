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
  <link rel="shortcut icon" href="img/Logo-Simples.png" type="image/x-icon">
  <title>Curso PHP</title>

  <style>
    :root {
      --nome:
        <?php echo "'$nome'"; ?>
      ;
    }

    .conteudos .conteudo .titulos .progressos .processo div h3 {
      position: relative;
      top: -25px;
      right: -23px;
    }
  </style>

  <link rel="stylesheet" href="../style/style-php.css">

</head>

<body>

  <main id="main">
    <div class="navegacao">
      <div class="titulo">
        <div>
          <div class="logo-titulo">
            <img src="../img/Logo-Simples-Light.png" alt="Imagem não carregada" id="img-logo">
            <h2>Hidden<span>Bug</span></h2>
          </div>

          <svg id="sair" onclick="sair()" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </div>
        <h1>Módulo</h1>
        <hr>
      </div>

      <nav>
        <li onclick="aula1()" id="titulo-1"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt=""> História</li>

        <li onclick="aula2()" id="titulo-2"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt=""> ........</li>

        <li onclick="aula3()" id="titulo-3"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt=""> ........</li>

        <li onclick="aula4()" id="titulo-4"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt=""> ........</li>

        <li class="fundo"></li>
      </nav>

      <div class="black-mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill"
          viewBox="0 0 16 16">
          <path
            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        </svg>

        <div class="fundo-black" id="mode">
          <div></div>
        </div>

        <svg class="sol" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun"
          viewBox="0 0 16 16">
          <path
            d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>
      </div>
    </div>

    <div class="conteudos">
      <div class="header-conteudo">
        <div class="titulo">
          <svg id="entrar" onclick="entrar()" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
          <h1>PHP</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png"
            alt="Imagem não carregada">
        </div>

        <div class="perfil">
          <label class="foto" for="inputImg">
            <img id="foto-perfil" src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg" alt="">
          </label>
          <input type="file" id="inputImg" style="display:none;">


          <svg id="tres-pontos" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>

          <div class="btns">
            <a href="../index.html"><button>Home</button></a>

            <a href="../cadastro/logout.php"><button>Logout</button></a>
          </div>
        </div>
      </div>

      <div class="container-conteudo">
        <div class="conteudo">
          <div class="titulos">
            <div class="nome">
              <h3 id="conteudo-titulo">História do PHP</h3>
              <hr>
            </div>

            <div class="progressos">
              <div class="processo">
                <?php echo "<div id='progesso-barra' style='width: $progresso%'> <h3 id='progresso-texto'>0%</h3></div>" ?>
              </div>
            </div>
          </div>


          <div class="container-iframe">
            <iframe class="aula" width="560" height="315" src="../preparodeaula.html"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>

            <div class="fundo-iframe"></div>
          </div>

          <div class="btn">
            <div class="img-prof">
              <img src="../img/AndrePerfil.png" alt="">
              <span>André Loewenstein</span>
            </div>

            <button class="aula-1 none" id="proximo">Próximo</button>
          </div>

          <div class="descricao">
            <h2>Descrição</h2>
            <p id="texto-descricao">Nessa aula estudamos sobre a história do PHP, aprendendo um pouco sobre seu fundador e todas as versões que iniciaram essa história. Também fizemos um acordo de como seguir assistindo os vídeos do curso.</p>
          </div>

        </div>
      </div>

    </div>

  </main>

  <script src="../script/script-php.js"></script>
</body>

</html>