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
                            url: 'https://repositorioiesarcipreste.000webhostapp.com/php/getListProyect.php',
                            type: 'POST',
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
    var username = $("#inputGetUsers").val();
    var parameters = {
        searchUser : username
    };
    if( username == '' || username == ' '){
        alert('Introduce un usuario');
    }else{
        $.ajax({
            data: parameters,
            url: 'https://repositorioiesarcipreste.000webhostapp.com/php/searchUser.php',
            type: 'POST',
            success: function(response){
                console.log(response);
            
            }
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