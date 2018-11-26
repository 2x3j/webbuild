<?php
require_once("conectMYSQL.php");

//if($_POST['user'] == 'admin' && $_POST['pass'] =='admin'){
//    echo 'OK';
//} else {
//    echo 'FAIL';
//}

$usernameInput = $_POST['user'];
$passInput = $_POST['pass'];

//conectamos con la BBDD
$conn = connectMYSQL();

IF (!$conn) = true{ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "SELECT SINGLE username, password FROM users WHERE  username = $userInput AND password = $passInput";
    $result = $conn->query($sql);
    echo "Usuario encontrado";
}



?>