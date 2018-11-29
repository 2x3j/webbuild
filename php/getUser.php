<?php
require_once("conectMYSQL.php");

//if($_POST['user'] == 'admin' && $_POST['pass'] =='admin'){
//    echo 'OK';
//} else {
//    echo 'FAIL';
//}

$usernameInput = $_GET['user'];
$passInput = $_GET['pass'];

//conectamos con la BBDD
$conn = conectMYSQL();

if(!$conn){ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "SELECT username, password FROM users WHERE username = '".$usernameInput."' AND password = '".$passInput."'";
    print_r($sql);
    $result = mysqli_query($conn, $sql);
    print_r($result);
    if(!empty($result)){
      $info = $result->fetch_assoc();
        echo "Usuario encontrado";
    }else{
        echo "Usuario no encontrado";
    }
    
}



?>


