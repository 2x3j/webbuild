<?php
/* header("Access-Control-Allow-Origin: *"); */
header('Content-type: application/json; charset=utf-8');  
function conectMYSQL(){

    $servername = "localhost";
    $database = "repositorio";
    $username = "root";
    $password = "";
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

function getArraySQL($sql){
    echo " Entra " ;
    //Creamos la conexión con la función anterior
    $conn = conectMYSQL();
    //generamos la consulta
        mysqli_set_charset($conn, "utf8"); //formato de datos utf8
    if(!$result = mysqli_query($conn, $sql)){
        return "NO";
    }else{ 
    $info = array(); //creamos un array
    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;
    while($row = $result->fetch_assoc()){
        $info[$i] = $row;
        $i++;
    }
        disconnectDB($conn); //desconectamos la base de datos
        return $info; //devolvemos el array
    }
}

function setSQL($sql){

}



//    mysqli_close($conn);



?>