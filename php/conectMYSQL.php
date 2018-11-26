<?php

function connectMYSQL{

    $servername = "localhost";
    $database = "repositorio";
    $username = "root";
    $password = "";
    // Creamos la conexión
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Chequeamos la conexión
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        return false.
    }else{
        echo "Connected successfully";
        return $conn.
    }

//    mysqli_close($conn);
}


?>