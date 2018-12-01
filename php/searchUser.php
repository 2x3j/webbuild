<?php

require_once('conectMYSQL.php'); 

$seachUser = $_GET['searchUser'];  
//$date = $_POST["date"];

//conectamos con la BBDD
  $conn = conectMYSQL(); 

if(!$conn){ //Si la conexión falla
    print_r('Connection failed: ' . mysqli_connect_error());
}else{ // Si la conexión OK
    /* Se buscan los username que empiecen por $seachUser. Y recogemos la información que mostraremos. */
    
    $sql = "SELECT username email name lastname FROM 'users' WHERE 'username' LIKE '".$seachUser."%'";
    if(mysqli_query($conn, $sql)){
        $result = mysqli_query($conn, $sql);
        if(!empty($result)){
          $info = $result->fetch_assoc();
        }else{
            echo "No existen usuarios con ese nombre";
        }
    }else{
        echo 'Error ' .$sql. '<br>' . mysqli_error($conn); 
    }
}
// Cerramos conexión
mysqli_close($conn);

?>