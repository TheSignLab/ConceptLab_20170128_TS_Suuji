$(document).ready(function () {




    var px = 0;
    $('.slide-full-scroll-wrapper').mousewheel(function (event) {

        px = px + 70 * event.deltaY;

        if (px > 0) {
            px = 0;
        }

        if (px < -7500) {
            px = -7500;
        }

        $(this).css({
            "-webkit-transform": "translate(" + px + "px,0px)",
            "-ms-transform": "translate(" + px + "px,0px)",
            "transform": "translate(" + px + "px,0px)"
        });


        update_scroll_animation(-px);
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
        $("footer").addClass("ts-transparent");

    });









    function update_scroll_animation(px) {

        console.log(px)

        if (px > 0 && px < 1050) {
            var bn_px = 0 + 0.1 * (px);
            var h1_px = 0 + 0.07 * (px);
            var p_px = 0.055 * (px);
            var img1_px = 800 + 0.07 * px;
            var img3_px = 900 + 0.06 * px;


            $("#img_p0_e1").css({
                left: img1_px + "px",
                top: '+=' + px / 1500 + "px",
                transform: "rotate(" + (0.020 * (px)) + "deg)"

            })
            $("#img_p0_e3").css({
                left: img3_px + "px",
                transform: "rotate(-" + (0.007 * (px)) + "deg)"
            })
            $("#img_p0_e2").css({
                left: (1300 - 0.075 * px) + "px",
                transform: "rotate(" + (0.005 * (px)) + "deg)"
            })
            $("#img_p0_e4").css({
                transform: "rotate(" + (0.015 * (px)) + "deg)",
            })


        }

        if (px > 2350 && px < 3050) {

            var bn_px = 1300 - 0.25 * (px - 2350);
            var h1_px = 500 + 0.10 * (px - 2350);
            var p_px = 0.085 * (px - 1550);


            $("#img_p1_e1").css({
                left: bn_px + "px",
                transform: "rotate(" + (0.005 * (px)) + "deg)"
            })
            $("#img_p1_e2").css({
                left: h1_px + "px"
            })



        }

        if (px > 3050 && px < 4550) {

            var bn_px = 200 - 0.1 * (px - 3050);
            var h1_px = 200 - 0.15 * (px - 3050);
            var p_px = 0.085 * (px - 3050);


        }

        if (px > 5550 && px < 6550) {

            var bn_px = 200 - 0.1 * (px - 5550);
            var h1_px = 200 - 0.15 * (px - 5550);
            var p_px = 0.085 * (px - 5550);

        }


    }









});






function fnChangeBgP0(p, n) {

    if (n == 0) {

        $('.p0').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Uwa_Img_1A.jpg)');
        }).fadeTo('slow', 1);

        $("#img_p0_e1").fadeIn();
        $("#img_p0_e2").fadeIn();
        $("#img_p0_e3").fadeIn();
        $("#img_p0_e4").fadeIn();

        $("#bn_p0_e1 .btns i").removeClass("btn-active");
        $($("#bn_p0_e1 .btns i")[0]).addClass("btn-active");


    }
    if (n == 1) {

        $('.p0').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Uwa_Img_2.png)');
        }).fadeTo('slow', 1);

        $("#img_p0_e1").fadeOut();
        $("#img_p0_e2").fadeOut();
        $("#img_p0_e3").fadeOut();
        $("#img_p0_e4").fadeOut();

        $("#bn_p0_e1 .btns i").removeClass("btn-active");
        $($("#bn_p0_e1 .btns i")[1]).addClass("btn-active");

    }
    if (n == 2) {

        $('.p0').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Uwa_Img_3.png)');
        }).fadeTo('slow', 1);

        $("#img_p0_e1").fadeOut();
        $("#img_p0_e2").fadeOut();
        $("#img_p0_e3").fadeOut();
        $("#img_p0_e4").fadeOut();

        $("#bn_p0_e1 .btns i").removeClass("btn-active");
        $($("#bn_p0_e1 .btns i")[2]).addClass("btn-active");

    }


}

function fnChangeBgP1(p, n) {

    if (n == 0) {

        $('.p1').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/CTS_Img_1A.jpg)');
        }).fadeTo('slow', 1);

        $("#img_p1_e1").fadeIn();
        $("#img_p1_e2").fadeIn();
        $("#img_p1_e3").fadeIn();


        $("#bn_p1_e1 .btns i").removeClass("btn-active");
        $($("##bn_p1_e1 .btns i")[0]).addClass("btn-active");


    }
    if (n == 1) {

        $('.p1').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/CTS_Img_2.png)');
        }).fadeTo('slow', 1);

        $("#img_p1_e1").fadeOut();
        $("#img_p1_e2").fadeOut();
        $("#img_p1_e3").fadeOut();


        $("#bn_p1_e1 .btns i").removeClass("btn-active");
        $($("#bn_p1_e1 .btns i")[1]).addClass("btn-active");

    }
    if (n == 2) {

        $('.p1').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/CTS_Img_3.png)');
        }).fadeTo('slow', 1);

        $("#img_p1_e1").fadeOut();
        $("#img_p1_e2").fadeOut();
        $("#img_p1_e3").fadeOut();


        $("#bn_p1_e1 .btns i").removeClass("btn-active");
        $($("#bn_p1_e1 .btns i")[2]).addClass("btn-active");

    }


}



function fnChangeBgP2(p, n) {

    if (n == 0) {

        $('.p2').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Santi_Img_1A.jpg)');
        }).fadeTo('slow', 1);

        $("#img_p2_e1").fadeIn();
        $("#img_p2_e2").fadeIn();
        $("#img_p2_e3").fadeIn();


        $("#bn_p2_e1 .btns i").removeClass("btn-active");
        $($("##bn_p2_e1 .btns i")[0]).addClass("btn-active");


    }
    if (n == 1) {

        $('.p2').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Santi_Img_2.png)');
        }).fadeTo('slow', 1);

        $("#img_p2_e1").fadeOut();
        $("#img_p2_e2").fadeOut();
        $("#img_p2_e3").fadeOut();


        $("#bn_p2_e1 .btns i").removeClass("btn-active");
        $($("#bn_p2_e1 .btns i")[1]).addClass("btn-active");

    }
    if (n == 2) {

        $('.p2').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/Santi_Img_3.png)');
        }).fadeTo('slow', 1);

        $("#img_p2_e1").fadeOut();
        $("#img_p2_e2").fadeOut();
        $("#img_p2_e3").fadeOut();


        $("#bn_p2_e1 .btns i").removeClass("btn-active");
        $($("#bn_p2_e1 .btns i")[2]).addClass("btn-active");

    }


}


function fnChangeBgP3(p, n) {

    if (n == 0) {

        $('.p3').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/TmLiso_Img_1A.jpg)');
        }).fadeTo('slow', 1);

        $("#img_p3_e1").fadeIn();
        $("#img_p3_e2").fadeIn();
        $("#img_p3_e3").fadeIn();


        $("#bn_p3_e1 .btns i").removeClass("btn-active");
        $($("##bn_p3_e1 .btns i")[0]).addClass("btn-active");


    }
    if (n == 1) {

        $('.p3').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/TmLiso_Img_2.png)');
        }).fadeTo('slow', 1);

        $("#img_p3_e1").fadeOut();
        $("#img_p3_e2").fadeOut();
        $("#img_p3_e3").fadeOut();


        $("#bn_p3_e1 .btns i").removeClass("btn-active");
        $($("#bn_p3_e1 .btns i")[1]).addClass("btn-active");

    }
    if (n == 2) {

        $('.p3').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(comp/page_3_seeproyects/images/TmLiso_Img_3.png)');
        }).fadeTo('slow', 1);

        $("#img_p3_e1").fadeOut();
        $("#img_p3_e2").fadeOut();
        $("#img_p3_e3").fadeOut();


        $("#bn_p3_e1 .btns i").removeClass("btn-active");
        $($("#bn_p3_e1 .btns i")[2]).addClass("btn-active");

    }


}
