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





var ftgs0 = true;
var ftgs1 = true;
var ftgs2 = true;
var ftgs3 = true;
var ftgs4 = true;



function go2S0() {
    $.fn.fullpage.moveTo(1, 0);
    $("footer").removeClass("ts-footer-light");
    $("footer").removeClass("ts-footer-show");

    if (ftgs0 == true) {
        setTimeout(function () {
            init_s0_t1();
        }, 500);
        setTimeout(function () {
            init_s0_t2();
        }, 3000);
        setTimeout(function () {
            init_s0_t3();
        }, 12500);
    }

    ftgs0 = false;

}


function go2S1() {

    setName();

    $.fn.fullpage.moveTo(1, 1);
    $("footer").addClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
    if (ftgs1 == true) {
        setTimeout(function () {
            init_s1_t1();
        }, 1500);
        setTimeout(function () {
            init_s1_t2();
        }, 3500);
    }
    ftgs1 = false;

    $("nav").removeClass("ts-transparent");
}

function go2S2() {
    $.fn.fullpage.moveTo(1, 2);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
    $("nav").removeClass("ts-transparent");


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
    $("nav").removeClass("ts-transparent");


}


function go2S5() {
    $.fn.fullpage.moveTo(1, 6);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
    $("nav").removeClass("ts-transparent");

    if (ftgs3 == true) {
        setTimeout(function () {
            init_s5_t1()
        }, 500);

    }
    
    

    ftgs3 = false;
        setTimeout(function () {
            anim_s5_t2()
        }, 1500)




}


function go2S6() {
    $.fn.fullpage.moveTo(1, 7);
    $("footer").removeClass("ts-footer-light");
    $("footer").addClass("ts-footer-show");
    $("nav").removeClass("ts-transparent");

    if (ftgs2 == true) {
        setTimeout(function () {
            init_s6_t1();
        }, 1500);

    }
    ftgs2 = false;
    




}

function go2S7() {
    $.fn.fullpage.moveTo(1, 8);
    $("footer").removeClass("ts-footer-light");
    $("footer").removeClass("ts-footer-show");
    $("nav").removeClass("ts-transparent");


}
