var flag_init = false;




function init_footer() {

    $('.ts-footer').css({
        backgroundColor: "white",
        color: "black"
    });

setTimeout(function () {

$(".footer-ts-elemen").css({
        borderRightColor: "black"
    });

    $('.ts-footer').animate({
        bottom: "250px"
    }, 500);
    
},200);
    setTimeout(function () {

        $('.footer-ts-elemen').each(function (index) {
            $(this).delay(300 * index).animate({
                opacity: "1"
            }, 300)
        });

    }, 500);


}


function dark_footer() {
    $('.ts-footer').animate({
        bottom: "0px",
        backgroundColor: "black",
        color: "white"
    });
    $(".footer-ts-elemen").css({
        borderRightColor: "white"
    });

}


