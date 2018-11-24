$("#btn-signin").off().on("click",function(){
    var username=$("#inputUsername").val();
    var password=$("#inputPassword").val();
    console.log(username);
    console.log(password);
    if(username == '' || username == ' '){
        alert("Por favor, introduce un usuario valido");
    }else{
        if(password == '' || password == ' '){
            alert("Por favor, introduce una password valida");
        }else{
            //AJAX POST FUNCTION HERE
            //FIN AJAX POST FUNCTION HERE
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
});