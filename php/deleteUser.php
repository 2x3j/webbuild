<?php

require_once('conectMYSQL.php'); 

$username = $_GET['username'];  
//$date = $_POST["date"];

//conectamos con la BBDD
  $conn = conectMYSQL(); 

if(!$conn){ //Si la conexión falla
    print_r('Connection failed: ' . mysqli_connect_error());
}else{ // Si la conexión OK
    $sql = "DELETE FROM 'users' WHERE 'username' = '".$username."'";
    if(mysqli_query($conn, $sql)){
        echo 'El usuario se ha borrado correctamente';
    }else{
        echo 'Error ' .$sql. '<br>' . mysqli_error($conn); 
    }
}
// Cerramos conexión
mysqli_close($conn);

?>
