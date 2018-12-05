<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
function conectMYSQL(){

    $servername = "localhost";
    $database = "id8093074_repositorio";
    $username = "id8093074_root";
    $password = "azuqueca19200";
    // Creamos la conexión
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Chequeamos la conexión
    if (!$conn){
        print_r("Connection failed: " . mysqli_connect_error());
        return false;

    }else{
//        echo "Connected successfully";
        return $conn;
    }
}



//    mysqli_close($conn);



?>