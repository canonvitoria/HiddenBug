<?php

session_start();
// include_once("conexao.php");

// $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$nome = $_POST['nome'];
// $sobrenome = filter_input(INPUT_POST, 'sobrenome', FILTER_SANITIZE_STRING);
$sobrenome = $_POST['sobrenome'];
$nomecompleto = "$nome $sobrenome";

$email  = filter_input(INPUT_POST, 'emailR', FILTER_SANITIZE_EMAIL);

// $senha = filter_input(INPUT_POST, 'senhaR', FILTER_SANITIZE_STRING);
$senha = $_POST['senhaR'];

// $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);

// filtrar os dados e garantir que o campo seja limpo após a submissão

// $result = "INSERT INTO usuarios (nome, email, senha, telefone) values ('$nomecompleto', '$email', '$senha', '$telefone')";

// $rasultado = mysqli_query($conn, $result);

// if (mysqli_insert_id($conn)) {
//     $_SESSION['msg'] = "<script> alert('Seu usuário foi registrado com sucesso')";
//     header("Location: index.php");
// } else {
//     header("Location: index.php");
// }


// temporário
$_SESSION['user'] = "admin@gmail.com";
$_SESSION['senha'] = "admin";
$_SESSION['nome'] = $nomecompleto;
$_SESSION['cursophp'] = 0;
header('Location: index.php');

?>