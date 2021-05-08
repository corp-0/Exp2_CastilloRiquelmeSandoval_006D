(function ClassValidator($) {
    var password = $("#password")
    var passwordConfirm = $("#passwordConfirm");

    password.on("input", function () {
        if (password.val() !== passwordConfirm.val()) {
            passwordConfirm.removeClass("valid").addClass("invalid");
        } else {
            passwordConfirm.removeClass("invalid").addClass("valid");
        }
    });

    passwordConfirm.on("input", function () {
        if (passwordConfirm.val() !== password.val()) {
            $(this).removeClass("valid").addClass("invalid");
        } else {
            $(this).removeClass("invalid").addClass("valid");
        }
    });
})(jQuery);

function ComprobarFormularioValido() {
    const validables = document.getElementsByClassName("validate");

    for (var i = 0; i < validables.length; i++) {
        if (validables[i].classList.contains("invalid")) {
            return false;
        }
    }

    return true;
}

function DesactivarSiFormularioInvalido(desactivadoId) {
    const desactivado = document.getElementById(desactivadoId);
    desactivado.disabled = true;

    const validables = document.getElementsByClassName("validate");

    for (var i= 0; i < validables.length; i++) {
        validables[i].addEventListener("input", function (){
            desactivado.disabled = document.getElementsByClassName("invalid").length > 0;
        })
    }

}