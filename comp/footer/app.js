function hide_footer() {
    $("footer").animate({
        bottom: "-2400px"
    })
}

function show_footer(n) {
    if (n != 1) {
        $("footer").animate({
            bottom: "0px"
        })
    } else {
        var h = $(document).height();
        var h0 = $("#s1_tgt_www").offset().top;
        $("footer").animate({
            bottom: ((h - h0) / 2) - 100 + "px"
        })
    }
}









function go2S0() {
    $.fn.fullpage.moveTo(1, 0);
    $("footer").removeClass("ts-footer-light");
    $("footer").removeClass("ts-footer-show");
}


function go2S1() {
    $.fn.fullpage.moveTo(1, 1);
    $("footer").addClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
}

function go2S2() {
    $.fn.fullpage.moveTo(1, 2);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");

}


function go2S3() {
    $.fn.fullpage.moveTo(1, 4);

    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
}

function go2S4() {
    $.fn.fullpage.moveTo(1, 5);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");

}


function go2S5() {
    $.fn.fullpage.moveTo(1, 6);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");

}
