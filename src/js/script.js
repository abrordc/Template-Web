(function ($) {
    const mengetik = new Typed(".type", {
        strings: ["Selamat Datang Di Situs Resmi", "Media Informasi"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });
})(jQuery);
