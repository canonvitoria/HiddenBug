<?php 
include('../cadastro/protect.php');
$nome = $_SESSION['nome'];
$progresso = $_SESSION['cursophp'];
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>HTML</title>
  <link href="../style/htmlcurso.css" rel="stylesheet" type="text/css" />
  <link rel="shortcut icon" href="../img/Logo-Simples.png" type="image/x-icon">
</head>

<body>


  <section class="secao-principal">
    <nav class="menu-lateral">

      <div class="dark-mode">
        <div class="botao-light-dark">
          <div class="container-switch">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon"
              viewBox="0 0 16 16">
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            </svg>

            <div class="switch" onclick="toggleMode()">
              <div class="bolinha"></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
          </div>
        </div>
      </div>
      
      <div id="logo" class="logo">
        <a href="../index.html"><img src="../img/logo.png" alt="logo" id="img-logo"></a>
        <h2>Hidden <span>Bug</span></h2>

        <svg onclick="fecharMenu()"  id="btn-close-menu" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg>
  
      </div>
      <div class="desc">
        <div class="titulo">
          <h3>- Nível Básico -</h3>
        </div>
        <div class="modulo-n">
          <span class="modulos">Aulas (14)</span>
        </div>
        <hr class="linha">
      </div>

      <ul>
        <li class="li line on" onclick="padrao()"><img src="../img/html-5.png" alt="css"> Conheça o HTML</li>
        <li class="li line1" onclick="line1()"><img src="../img/html-5.png" alt="css"> Introdução ao HTML
        </li>
        <li class="line2" onclick="line2()"><img src="../img/html-5.png" alt="css"> Por que aprender HTML?</li>
        <li class="line3" onclick="line3()"><img src="../img/html-5.png" alt="css"> Primeiros códigos em HTML</li>
        <li class="line4" onclick="line4()"><img src="../img/html-5.png" alt="css"> HTML semântico (Parte 1)</li>
        <li class="line5" onclick="line5()"><img src="../img/html-5.png" alt="css"> HTML semãntico (Parte 2)</li>
        <li class="line6" onclick="line6()"><img src="../img/html-5.png" alt="css"> Hiperlinks </li>
        <li class="line7" onclick="line7()"><img src="../img/html-5.png" alt="css"> Hiperlink ou Link? </li>
        <li class="line8" onclick="line8()"><img src="../img/html-5.png" alt="css"> Cores</li>
        <li class="line9" onclick="line9()"><img src="../img/html-5.png" alt="css"> Tabelas (Parte 1)</li>
        <li class="line10" onclick="line10()"><img src="../img/html-5.png" alt="css"> Tabelas (Parte 2)</li>
        <li class="line11" onclick="line11()"><img src="../img/html-5.png" alt="css"> Tabelas (Parte 3)</li>
        <li class="line12" onclick="line12()"><img src="../img/html-5.png" alt="css"> Tabela de tags</li>
        <li class="line13" onclick="line13()"><img src="../img/html-5.png" alt="css"> Resumo do Curso</li>
      </ul>
    </nav>
    <div class="conteudo">


      <header class="header">

        <div class="cursoNome"> 

          <svg id="btn-abrir" style="margin-right: 20px; scale:0;" onclick="abrirMenu()" 
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
</svg>
            
          <div class="h2-header">
            
            
            <h2>HTML5</h2>
          </div>
          <div class="logo-header">
            <img src="../img/html-5.png" alt="Logo HTML">
          </div>
        </div>

        <div class="menu-perfil" style=" position: absolute; right:20px;">
          <div class="foto-menu">
            <label for="inpimg">
            <div class="menu">
              <input type="file" id="inpimg">
              <img src="../img/17004.png" alt="" id="img-menu-perfil">
              
            </div>
              </label>
          </div>
          <div class="tresPontos">
            <svg onclick="abrirMenus()" class="svg-menu" ondblclick="fechar()" xmlns="http://www.w3.org/2000/svg"
              width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </div>

        <div class="open-menu">
          <label for="inpimg">
            <div class="menu-sl">
              <img src="../img/17004.png" alt="" id="img-menu-grande" style="width: 100%;">
            </div>
              </label>
          <div class="open">
            <li class="especial"><?php echo "$nome" ?></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg><a href="../index.html">Home</a></li>
             <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg><a href="../cadastro/logout.php">Logout</a></li>
          </div>
          
        </div>

         <!-- <div class="menu-abrir">
          <div class="menu aberto"></div>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg> Seu nome</li>
            <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house"
                viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>Home</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-house-x-fill" viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                <path
                  d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.646a.5.5 0 0 1 .708.707l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.707l.647-.647-.647-.646a.5.5 0 0 1 .708-.707Z" />
              </svg>Logout</li>
          </ul>
        </div>  -->
      </header>


      <main>
        <div class="aula1">
          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Conheça o HTML</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2Nh6PErATnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next1()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula2">
          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Introdução ao HTML</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo2">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next2()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula3">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Por que aprender HTML?</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo3">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next3()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula4">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Primeiros códigos em HTML</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo4">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next4()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula5">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>HTML semãntico (Parte 1)</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo5">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next5()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula6">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>HTML semântico (Parte 2)</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo6">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next6()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula7">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Hiperlinks</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo7">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next7()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula8">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Hiperlink ou link?</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo8">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next8()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula9">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Cores</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo9">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next9()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula10">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Tabelas (Parte 1)</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo10">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next10()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula11">
          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Tabelas (Parte 2)</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo11">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next11()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula12">
          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Tabelas (Parte 3)</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo12">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next12()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula13">

          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Tabela de tags</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo13">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

            <div class="next-button">
              <button class="next" onclick="next13()">Próximo</button>
            </div>

          </div>

        </div>

        <div class="aula14">
          <div class="titulo-barra">
            <div class="titulo-aulas">
              <h3>Resumo do Curso</h3>
              <hr class="linhas">
            </div>
            <div class="barra-progresso">
              <div class="progresso">
                <div class="bar">
                </div>
              </div>
              <span class="porcentagem"></span>
            </div>
          </div>

          <div class="conteudos conteudo14">
            <iframe width="560" height="315" src="../preparodeaula.html"
              allowfullscreen></iframe>
          </div>

          <div class="now">

            <div class="perfil">
              <img src="../img/CatiusciaPerfil.png" alt="Catiuscia">
              <h4>Catiuscia <span>Centeno</span></h4>
            </div>

          </div>

        </div>

  </section>
  </main>



  <script src="../script/htmlcurso.js"></script>
</body>

</html>