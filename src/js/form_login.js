(function ($) {
        "use strict";
    $(document).ready(function () {

        function checkInputs() {
            const input1 = $(".input1").val();
            const input2 = $(".input2").val();
            if (input1 && input2) {
                $(".btn").removeAttr("disabled");
            } else {
                $(".btn").attr("disabled", "disabled");
            }
        }

        $(".input1, .input2").on("input", function () {
            checkInputs();
        });
        //  checkInputs();
        $("#eyes-pass").on("click", function () {
            const passwordField = $(".input2");
            const type =
                passwordField.attr("type") === "password" ? "text" : "password";
            passwordField.attr("type", type);

            // Toggle the eye slash icon
            $(this).toggleClass("bi-eye-fill");
            $(this).toggleClass("bi-eye-slash-fill");
        });
        var input = $(".validate-input .input100");
        $(".validate-form").on("submit", function () {
            var check = true;
            for (var i = 0; i < input.length; i++) {
                if (validate(input[i]) == false) {
                    showValidate(input[i]);
                    check = false;
                }
            }
            return check;
        });
        $(".validate-form .input100").each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });
        function validate(input) {
            if (
                $(input).attr("type") == "text" ||
                $(input).attr("name") == "username"
            ) {
                if ($(input).val() != "abrordc") {
                    return false;
                }
            } else {
                if ($(input).val().trim() == "") {
                    return false;
                }
            }
        }
        function showValidate(input) {
            var thisAlert = $(input).parent();
            $(thisAlert).addClass("alert-validate");
        }
        function hideValidate(input) {
            var thisAlert = $(input).parent();
            $(thisAlert).removeClass("alert-validate");
        }
    });
})(jQuery);
