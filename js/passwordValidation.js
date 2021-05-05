(function ClassValidator($) {

    $("#password").on("focusout", function (e) {
        if ($(this).val() != $("#passwordConfirm").val()) {
            $("#passwordConfirm").removeClass("valid").addClass("invalid");
        } else {
            $("#passwordConfirm").removeClass("invalid").addClass("valid");
        }
    });

    $("#passwordConfirm").on("keyup", function (e) {
        if ($("#password").val() != $(this).val()) {
            $(this).removeClass("valid").addClass("invalid");
            $("#submit").prop('disabled', true);
        } else {
            $(this).removeClass("invalid").addClass("valid");
            $("#submit").prop('disabled', false);
        }
    });
})(jQuery);