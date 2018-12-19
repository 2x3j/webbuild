$("#btn-signin").off().on("click",function(){
    localStorage.clear();
    var username=$("#inputUsername").val();
    var password=$("#inputPassword").val();
    var parameters = {
        user : username,
        pass : password
    };
    console.log(username);
    console.log(password);
    if(username == '' || username == ' '){
        alert("Por favor, introduce un usuario valido");
    }else{
        if(password == '' || password == ' '){
            alert("Por favor, introduce una password valida");
        }else{
            $.ajax({
                data: parameters,
                url: 'https://localhost/visualstudio/php/getUser.php',
                dataType: "json",
                type: 'POST',
                success: function(response){
                    console.log(response);
                    if(response == 'NO'){ //SI DEVUELVE EL PHP OK ES QUE ESE USUARIO Y ESA CONTRASEÑA EXISTEN
                        alert('Contraseñas erroneas');
                    }else{
                        localStorage.setItem("rol",response.rol);
                        var rol = localStorage.getItem("rol");
                        if(rol == 'alumno'){
                            $("#liCreate").css("display","none");
                            $("#liGetUsers").css("display","none");
                        }
                        $("#inputUsername").val(null);
                        $("#inputPassword").val(null);
                        $("#screen-login").fadeOut(400);
                        $("#screen-menu").fadeIn(400);
                        $.ajax({
                            url: 'https://localhost/visualstudio/php/getListProyect.php',
                            type: 'POST',
                        }).done(function(data){
                            
                            $('#tablaGetProyectos').html('');
                           console.log(data);
                           var count = Object.keys(data).length;
                           console.log(count);
                            $('#tablaGetProyectos').append('<tr id="headertablaGetProyectos" class="info"><th>Author</th><th>Username</th><th>Curse</th><th>Description</th><th>Project</th><th>Actions</th></tr>');
                            for(i=0;i<count;i++){
                                $('#tablaGetProyectos').append('<tr id="tr-'+data[i].project+'"><td>'+data[i].author+'</td><td>'+data[i].username+'</td><td>'+data[i].curso+'</td><td>'+data[i].description+'</td><td>'+data[i].project+'</td><td><button id="btnDown-'+data[i].project+'" style="margin-right: 10px;" type="button" class="btn btn-info downProject">Download</button><button id="btnDelete-'+data[i].project+'" type="button" class="btn btn-danger deleteProject">Delete</button></td></tr>');
                            }
                            if(rol == 'alumno'){
                                $(".deleteProject").css("display","none");
                            }
                            $(".deleteProject").off().on("click", function(){
                                var id = $(this).attr("id");
                                var clave= id.substr(10);
                                console.log(clave);
                                var parameters = {
                                    project : clave
                                }
                                $.ajax({
                                    data: parameters,
                                    url: 'https://localhost/visualstudio/php/deleteProject.php',
                                    type: 'POST',
                                }).done(function(data){
                                    console.log(data);
                                    if(data == 'OK'){
                                        $('#tr-'+clave+'').remove();
                                    }
                                });
                               
                        });
                         $(".downProject").off().on("click", function(){
                            var id = $(this).attr("id");
                            var clave= id.substr(8);
                            console.log(clave);
                            var parameters = {
                                project : clave
                            }
                            $.ajax({
                                data: parameters,
                                url: 'https://localhost/visualstudio/php/download.php',
                                type: 'POST',
                            }).done(function(data){
                                console.log(data);
                                if(data == 'OK'){}
                            });
                        }); 

                        }); 
                    }   
                }
            
            });
        }
    }
});
$("#btn-logout").off().on("click",function(){
    localStorage.clear();
    $("#screen-menu").fadeOut(400);
    $("#screen-login").fadeIn(400);
    $("#liUpload").removeClass("active");
    $("#liCreate").removeClass("active");
    $("#liGetUsers").removeClass("active");
    $("#liProyectos").addClass("active");
    $("#divCreate").fadeOut(400);
    $("#divUpload").fadeOut(400);
    $("#divGetUsers").fadeOut(400);
    $("#divProyectos").fadeIn(400);
    $(".currentDiv").removeClass("currentDiv");
    $("#divProyectos").addClass("currentDiv");
});
$("#liProyectos").off().on("click",function(){
    $(".currentDiv").fadeOut('400',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divProyectos").addClass("currentDiv");
        $("#divProyectos").fadeIn('400');
    });
    $("#liCreate").removeClass("active");
    $("#liGetUsers").removeClass("active");
    $("#liUpload").removeClass("active");
    $("#liProyectos").addClass("active");
    $.ajax({
        url: 'https://localhost/visualstudio/php/getListProyect.php',
        type: 'POST',
    }).done(function(data){
        $('#tablaGetProyectos').html('');

       var count = Object.keys(data).length;

        $('#tablaGetProyectos').append('<tr id="headertablaGetProyectos" class="info"><th>Author</th><th>Username</th><th>Curse</th><th>Description</th><th>Project</th><th>Actions</th></tr>');
        for(i=0;i<count;i++){
            $('#tablaGetProyectos').append('<tr id="tr-'+data[i].project+'"><td>'+data[i].author+'</td><td>'+data[i].username+'</td><td>'+data[i].curso+'</td><td>'+data[i].description+'</td><td>'+data[i].project+'</td><td><button id="btnDown-'+data[i].project+'" style="margin-right: 10px;" type="button" class="btn btn-info downProject">Download</button><button id="btnDelete-'+data[i].project+'" type="button" class="btn btn-danger deleteProject">Delete</button></td></tr>');
        }
        var rol = localStorage.getItem("rol");
                            console.log(rol);
                            if(rol == 'alumno'){
                                $(".deleteProject").css("display","none");
                            }
        
        $(".deleteProject").off().on("click", function(){
            var id = $(this).attr("id");
            var clave= id.substr(10);
            console.log(clave);
            var parameters = {
                project : clave
            }
            $.ajax({
                data: parameters,
                url: 'https://localhost/visualstudio/php/deleteProject.php',
                type: 'POST',
            }).done(function(data){
                console.log(data);
                if(data == 'OK'){
                    $('#tr-'+clave+'').remove();
                }
            });

        });
        $(".downProject").off().on("click", function(){
            var id = $(this).attr("id");
            var clave= id.substr(8);
            console.log(clave);
            var parameters = {
                project : clave
            }

        });
    });
});

$("#liUpload").off().on("click",function(){
    $(".currentDiv").fadeOut('400',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divUpload").addClass("currentDiv");
        $("#divUpload").fadeIn('400');
    });
    $("#liProyectos").removeClass("active");
    $("#liGetUsers").removeClass("active");
    $("#liCreate").removeClass("active");
    $("#liUpload").addClass("active");
});
$("#liCreate").off().on("click",function(){
    $(".currentDiv").fadeOut('400',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divCreate").addClass("currentDiv");
        $("#divCreate").fadeIn('400');
    });
    $("#liProyectos").removeClass("active");
    $("#liGetUsers").removeClass("active");
    $("#liUpload").removeClass("active");
    $("#liCreate").addClass("active");
});
$("#liGetUsers").off().on("click",function(){
    $(".currentDiv").fadeOut('400',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divGetUsers").addClass("currentDiv");
        $("#divGetUsers").fadeIn('400');
    });
    $("#liProyectos").removeClass("active");
    $("#liUpload").removeClass("active");
    $("#liCreate").removeClass("active");
    $("#liGetUsers").addClass("active");
});
$("#btnGetUsers").off().on("click",function(){
    $('#tablaGetUsers').html('');
    var username = $("#inputGetUsers").val();
    var parameters = {
        searchUser : username
    };
    if(!true){
    }else{
        $.ajax({
            data: parameters,
            url: 'https://localhost/visualstudio/php/searchUser.php',
            type: 'POST',
        }).done(function(data){
           console.log(data[0]);
           var count = Object.keys(data).length;
            $('#tablaGetUsers').append('<tr id="headertableGetUsers" class="info"><th>Username</th><th>Email</th><th>Name</th><th>Lastname</th><th>Actions</th></tr>');
            for(i=0;i<count;i++){
                $('#tablaGetUsers').append('<tr id="tr-'+data[i].username+'"><td>'+data[i].username+'</td><td>'+data[i].email+'</td><td>'+data[i].name+'</td><td>'+data[i].lastname+'</td><td><button id="btn-'+data[i].username+'" type="button" class="btn btn-danger deleteUser">Delete</button></td></tr>');
            }
        $(".deleteUser").off().on("click", function(){
                var id = $(this).attr("id");
                var clave= id.substr(4);
                console.log(clave);
                var parameters = {
                    username : clave
                }
                $.ajax({
                    data: parameters,
                    url: 'https://localhost/visualstudio/php/deleteUser.php',
                    type: 'POST',
                }).done(function(data){
                    console.log(data);
                    if(data == 'OK'){
                        $('#tr-'+clave+'').remove();
                    }
                });
        });
        });
    }
});
$("#btn-create").off().on("click",function(){
    var username=$("#inputCreateUsername").val();
    var password=$("#inputCreatePassword").val();
    var email=$("#inputCreateEmail").val();
    var name=$("#inputCreateName").val();
    var lastname=$("#inputCreateLastName").val();
    var curso=$("#inputCreateCurse").val();
    var rol=$("#inputCreateRol").val();
    var parameters = {
        user : username,
        pass : password,
        email : email,
        name : name,
        lastname : lastname,
        curse : curso,
        role : rol
    };
    if(username == '' || username == ' '){
        alert("Por favor, introduce un usuario valido");
    }else{
        if(password == '' || password == ' '){
            alert("Por favor, introduce una password valida");
        }else{
            if(!email.includes("@gmail.com")){
                alert("Por favor, introduce un email valido");
            }else{
                if(name == '' || name == ' '){
                    alert("Por favor, introduce un nombre valido");
                }else{
                    if(lastname == '' || lastname == ' '){
                        alert("Por favor, introduce un apellido valido");
                    }else{
                        if(curso != '1ASIR' && curso != '2ASIR' && curso != '1DAW' && curso != '2DAW'){
                            alert("Por favor, introduce un curso valido");
                        }else{
                            if(rol != 'admin' && rol != 'Admin' && rol != 'alumno' && rol != 'Alumno'){
                                alert("Por favor, introduce un rol valido");
                        }else{
                            $.ajax({
                                data: parameters,
                                url: 'https://localhost/visualstudio/php/createUser.php',
                                type: 'POST',
                                success: function(response){
                                    console.log(response);
                                    if(response == 'OK'){ //SI DEVUELVE EL PHP OK ES QUE ESE USUARIO Y ESA CONTRASEÑA EXISTEN
                                        alert('Usuario Creado Correctamente');
                                    }else{
                                        alert('Problemas');
                                    }   
                                }
                            });
                        }
                    }
                    }
                }
            }
        }
    }

});

/* $("#btn-upload").off().on("click", function(){
    var author=$("#inputProjectAuthor").val();
    var username=$("#inputProjectUsername").val();
    var curse=$("#inputProjectCurse").val();
    var description=$("#inputProjectDescription").val();
    //var url=document.getElementById("inputUploadFile").files[0]; 
    var url=$('#inputUploadFile').val();
    //var formdata= new FormData();
    //formdata.append("inputUploadFile",url);
    var project= $('#inputProjectProject').val();
    var parameters = {
        author : author,
        username : username,
        curso : curse,
        description : description,
        url : url,
        project: project
    }
    console.log(parameters);
    if(author == '' || author == ' '){
        alert("Por favor, introduce un usuario valido");
    }else{
        if(username == '' || username == ' '){
            alert("Por favor, introduce una password valida");
        }else{
            if(description == '' || description == ' '){
                alert("Por favor, introduce un usuario valido");
            }else{
                $.ajax({
                    
                    data: parameters,
                    url: 'https://repositorioiesarcipreste.000webhostapp.com/php/exampleProject.php',
                    type: 'POST',
                    success: function(response){
                        console.log(response);
                    }
                });
                }
            }
        
    }
}); */