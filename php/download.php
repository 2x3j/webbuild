<?php
 require_once('conectMYSQL.php'); 

 header("Content-type: MIME");
 $project= $_POST['project'];
 

 $conn = conectMYSQL(); 
 $result = array();
 if (!$conn){
    print_r("Connection failed: " . mysqli_connect_error());
}else{
    $sql = 'SELECT * FROM projects WHERE project = "'.$project.'"';
    // Si hemos introducido el nombre correctamente a la BBDD guardaremos el proyecto en nuestra carpeta
    /*  move_uploaded_file($source,"projects/".$filename); */
        $result = mysqli_query($conn, $sql);
        $info = $result->fetch_assoc();
        
        $archivo = $info["file"];
        $ruta = '../projects/'.$archivo;
        print_r($ruta);
        header('Content-Description: File Transfer');
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename='.basename($archivo));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($ruta));
        
        

        readfile($ruta);
        json_encode("OK");
        
    }

?>