<?php
header('Content-Type: application/json');
function conectMYSQL(){

    $servername = "localhost";
    $database = "repositorio";
    $username = "root";
    $password = "";
    // Creamos la conexión
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Chequeamos la conexión
    if (!$conn){
//        print_r("Connection failed: " . mysqli_connect_error());
        return false;

    }else{
//        echo "Connected successfully";
        return $conn;
    }
}



//    mysqli_close($conn);



?>