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
$conn = conectMYSQL();

if(!$conn){ //Si la conexión falla
    die("Connection failed: " . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "SELECT username, password FROM users WHERE username = '".$usernameInput."' AND password = '".$passInput."'";
    $result = mysqli_query($conn, $sql);
/*     print_r($sql);
    var_dump($result); */
    $info = $result->fetch_assoc();
/*     var_dump($info); */
    if(($info["username"] != null) && ($info["password"] != null)){
        echo json_encode("OK", JSON_FORCE_OBJECT);
    }else{
        echo json_encode("NO", JSON_FORCE_OBJECT);
    }
    

}
?>


