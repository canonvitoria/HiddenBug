<?php

$nome_convidado = $_GET['name'];
$progresso_convidado = $_GET['progresso-convidado'];

session_start();

$_SESSION['user'] = "convidado@gmail.com";
$_SESSION['nome'] = $nome_convidado;
$_SESSION['cursophp'] = $progresso_convidado;

header('Location: ../index.html');

?>