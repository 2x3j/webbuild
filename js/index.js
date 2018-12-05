$("#btn-signin").off().on("click",function(){
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
                url: 'https://repositorioiesarcipreste.000webhostapp.com/php/getUser.php',
                type: 'POST',
                success: function(response){
                    console.log(response);
                    if(response == 'OK'){ //SI DEVUELVE EL PHP OK ES QUE ESE USUARIO Y ESA CONTRASEÑA EXISTEN
                        $("#inputUsername").val(null);
                        $("#inputPassword").val(null);
                        $("#screen-login").fadeOut(400);
                        $("#screen-menu").fadeIn(400);
                        $.ajax({
                            url: 'php/todoslosproyectos.php', //AQUÏ LA URL QUE TU TENGAS APUNTANDO AL PHP QUE TU QUIERAS
                            type: 'post',
                            success: function(response){
                                console.log(response); 
                            }
                        });
                    }else{
                        alert('Contraseñas erroneas');
                    }   
                }
            
            });
        }
    }
});
$("#btn-logout").off().on("click",function(){
    $("#screen-menu").fadeOut(400);
    $("#screen-login").fadeIn(400);
    $("#liUpload").removeClass("active");
    $("#liCreate").removeClass("active");
    $("#liProyectos").addClass("active");
    $("#divCreate").fadeOut(400);
    $("#divUpload").fadeOut(400);
    $("#divProyectos").fadeIn(400);
    $(".currentDiv").removeClass("currentDiv");
    $("#divProyectos").addClass("currentDiv");
});
$("#liProyectos").off().on("click",function(){
    $(".currentDiv").fadeOut('slow',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divProyectos").addClass("currentDiv");
        $("#divProyectos").fadeIn('slow');
    });
    $("#liCreate").removeClass("active");
    $("#liUpload").removeClass("active");
    $("#liProyectos").addClass("active");
});

$("#liUpload").off().on("click",function(){
    $(".currentDiv").fadeOut('slow',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divUpload").addClass("currentDiv");
        $("#divUpload").fadeIn('slow');
    });
    $("#liProyectos").removeClass("active");
    $("#liCreate").removeClass("active");
    $("#liUpload").addClass("active");
});
$("#liCreate").off().on("click",function(){
    $(".currentDiv").fadeOut('slow',function(){
        $(".currentDiv").removeClass("currentDiv");
        $("#divCreate").addClass("currentDiv");
        $("#divCreate").fadeIn('slow');
    });
    $("#liProyectos").removeClass("active");
    $("#liUpload").removeClass("active");
    $("#liCreate").addClass("active");
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
            if(email == '' || email == ' '){
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
                                url: 'https://repositorioiesarcipreste.000webhostapp.com/php/createUser.php',
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