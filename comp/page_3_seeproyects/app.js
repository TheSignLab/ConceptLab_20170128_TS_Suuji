$(document).ready(function () {




    var px = 0;
    $('.slide-full-scroll-wrapper').mousewheel(function (event) {

        px = px + 70 * event.deltaY;

        if (px > 0) {
            px = 0;
        }

        $(this).css({
            "-webkit-transform": "translate(" + px + "px,0px)",
            "-ms-transform": "translate(" + px + "px,0px)",
            "transform": "translate(" + px + "px,0px)"
        })
    });



    $(".slide-full-scroll-wrapper").on("touchstart", function (e) {
        var startingY = e.originalEvent.touches[0].pageX;

        $(".slide-full-scroll-wrapper").on("touchmove", function (e) {
            currentY = e.originalEvent.touches[0].pageX;
            var delta = currentY - startingY;
            px = px + delta / 350;
            if (px > 0) {
                px = 0;
            }

            $(this).css({
                "-webkit-transform": "translate(" + px + "px,0px)",
                "-ms-transform": "translate(" + px + "px,0px)",
                "transform": "translate(" + px + "px,0px)"
            })
        });
    });



    $('.ts-slide-2').mousewheel(function (event) {
        $.fn.fullpage.moveTo(1, 3);
        $("nav").addClass("ts-transparent");
    });

});
