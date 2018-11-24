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
             /* FUNCION QUE TODAVIA NO FUNCIONA
            $.ajax({
                data: parameters,
                url: 'php/getUser.php',
                type: 'post',
                success: function(response){
                    console.log(response);
                    if(response == 'OK'){
                        $("#inputUsername").val(null);
                        $("#inputPassword").val(null);
                        $("#screen-login").fadeOut(400);
                        $("#screen-menu").fadeIn(400);
                    }else{
                        alert('FAIL');
                    }
                }
            
            });
            */
            if(username=='admin' && password=='admin'){
                $("#inputUsername").val(null);
                $("#inputPassword").val(null);
                $("#screen-login").fadeOut(400);
                $("#screen-menu").fadeIn(400);
            }
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
                        //MOSTRAMOS POR CONSOLA - BORRAR
                        console.log(username);
                        console.log(password);
                        console.log(email);
                        console.log(name);
                        console.log(lastname);
                        //BORRAMOS CAMPOS
                        $("#inputCreateUsername").val('');
                        $("#inputCreatePassword").val('');
                        $("#inputCreateEmail").val('');
                        $("#inputCreateName").val('');
                        $("#inputCreateLastName").val('');
                        //AJAX POST CREATE USER FUNCTION HERE
                        //FIN AJAX POST CREATE USER FUNCTION HERE

                    }
                }
            }
        }
    }
});