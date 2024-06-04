<?php
// include('conexao.php');

// $email = filter_input(INPUT_POST, 'emailL', FILTER_SANITIZE_EMAIL);
// $senha = filter_input(INPUT_POST, 'senhaL', FILTER_SANITIZE_STRING);

// $sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
// $sql_query = mysqli_query($conn, $sql_code);

// $quantidade = $sql_query->num_rows;

//         if ($quantidade == 1) {

//             $usuario = $sql_query->fetch_assoc();

//             if (!isset($_SESSION)) {
//                 session_start();
//             }

//             $_SESSION['user'] = $usuario['email'];
//             $_SESSION['nome'] = $usuario['nome'];
//             $_SESSION['cursophp'] = $usuario['cursophp'];

//             header('Location: ../index.html');

//         } else {
//             echo " E-mail ou senha incorretos";
//         }

// temporário
session_start();
$email = $_POST['emailL'];
$senha = $_POST['senhaL'];

if (isset($_SESSION['user'])) {
  header("Location: ../index.html");
} else {
  echo 
    "<script>

      alert('Senha ou E-mail incorretos')
      window.location.href = 'https://hidden-bug.loewenstein04.repl.co/cadastro/index.php'
  
    </script>";
}

?>