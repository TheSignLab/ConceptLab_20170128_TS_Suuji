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
            bottom: ((h-h0)/2) - 100 + "px"
        })
    }
}

function dark_footer() {
    $('footer').animate({
        backgroundColor: "black",
        color: "white"
    });
    $("footer .ts-items .ts-item").css({
        borderRightColor: "white"
    });

}

function light_footer() {
    $('footer').animate({
        backgroundColor: "white",
        color: "black"
    });
    $("footer .ts-items .ts-item").css({
        borderRightColor: "black"
    });

}
