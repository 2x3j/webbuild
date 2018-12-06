<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require_once('conectMYSQL.php'); 

$searchUser = $_POST['searchUser'];  
$i = 0;
$info = array();
$result = array();

//conectamos con la BBDD
$conn = conectMYSQL(); 

if(!$conn){ //Si la conexión falla
    print_r('Connection failed: ' . mysqli_connect_error());
}else{ // Si la conexión OK
    /* Se buscan los username que empiecen por $seachUser. Y recogemos la información que mostraremos. */    
    $sql = "SELECT username, email, name, lastname FROM users WHERE username LIKE '".$searchUser."%'";
    if(mysqli_query($conn, $sql)){
        $result = mysqli_query($conn, $sql);
        while($row = $result->fetch_assoc()){
            $info[$i] = $row;
            $i++;
        }
        echo json_encode($info, JSON_FORCE_OBJECT);
    }else{
        echo 'Error ' .$sql. '<br>' . mysqli_error($conn); 
    }
}
// Cerramos conexión
mysqli_close($conn);

?>