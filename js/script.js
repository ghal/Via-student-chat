/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/************OVERLAY TOGGLE************/
$(document).ready(function() {
    $(".overlay").hide();
    $("#register-click").click(function() {
        $(".overlay").show();
    });

    $("#wrapper > div.overlay > div > form > h1").click(function() {
        $(".overlay").hide();
    });
});

/************LOGIN FUNCTION************/
function login() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var lang = document.getElementById("lang").value;
    if ($.cookie(username)) {
        window.alert("success");
    }
}
/************REGISTER FUNCTION************/
function register() {
    var regUsername = document.getElementsByName("register-username")[0].value;
    var regPass = document.getElementsByName("register-password")[0].value;
    var regEmail = document.getElementsByName("register-email")[0].value;
    $.cookie(regUsername, "asd", {expires: 7, path: '/'});
}
/************READ USERNAME FROM COOKIES AND WRITE IT************/
function getUsername() {
    var cookie = document.cookie;
    var split = document.cookie.split("=");
    var username = split[0];
    return username;
}
/************CHECK IF USER HAS COOKIE************/
function checkUsername() {
    var check = getUsername();
    if (check === "") {
        $(".overlay").fadeIn(normal);
        $("#wrapper > div.overlay > div > form > h1").click(function() {
            $(".overlay").hide();
        });
    }
}
