// js native code
// message : capek pakek library jquery full screen makanya pakek js native aja
function toggleFullscreen() {
    const elem = document.documentElement;
    // condition full screen with all browser
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullscreen) {
            elem.mozRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        }
    }

    // swicth icons full screen
    const button = document.getElementById("toggleFullscreen");
    const icon = button.querySelector("i");

    if (document.fullscreenElement) {
        icon.classList.add("bi-fullscreen");
        icon.classList.remove("bi-fullscreen-exit");
    } else {
        icon.classList.add("bi-fullscreen-exit");
        icon.classList.remove("bi-fullscreen");
    }
}

// jquery code
(function ($) {
    // handling text to typing with type.js
    const mengetik = new Typed(".type", {
        strings: ["Selamat Datang Di Situs Resmi", "Media Informasi"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
    // handling button back to top
    // message: add animate css back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top")
                .fadeIn("slow")
                .addClass("animate__bounceInUp")
                .removeClass("animate__bounceOutUp");
        } else {
            $(".back-to-top")
                .fadeOut("slow")
                .addClass("animate__bounceOutUp")
                .removeClass("animate__bounceInUp");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // handling button full screen animate from animated.css
    var isScrolling;
    $(window).scroll(function () {
        $("#toggleFullscreen")
            .removeClass("animate__fadeInTopLeft")
            .addClass("animate__bounceOutLeft")
            .fadeOut(600, function () {
                $(this).removeClass("animate__bounceOutLeft");
            });

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            $("#toggleFullscreen").show().addClass("animate__fadeInTopLeft");
        }, 1000);
    });
})(jQuery);
