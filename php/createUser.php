<?php

echo 'hola';
require_once('conectMYSQL.php'); 

$username = $_GET['user'];
$password = $_GET['pass'];

/* print_r($user);
print_r($password); */
$name = $_GET['name'];
$lastname = $_GET['lastname']; 
$email = $_GET['email'];   
//$date = $_POST["date"];

//conectamos con la BBDD
  $conn = conectMYSQL(); 

if(!$conn){ //Si la conexión falla
    print_r('Connection failed: ' . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = 'INSERT INTO users (username, password, name, lastname, email) 
                 VALUES ("'.$username.'","'.$password.'","'.$name.'","'.$lastname.'","'. $email.'")';
    if(mysqli_query($conn, $sql)){
        echo json_encode("OK", JSON_FORCE_OBJECT);
    }else{
        //echo 'Error ' .$sql. '<br>' . mysqli_error($conn); 
        echo json_encode("NO", JSON_FORCE_OBJECT);
    }
}
// Cerramos conexión
mysqli_close($conn);

?>


