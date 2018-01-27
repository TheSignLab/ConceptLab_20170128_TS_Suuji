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

    }, 200);
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









$(document).ready(function () {

    $('main').fullpage({
        sectionSelector: '.section',
        slideSelector: '.slide',
        css3: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollHorizontally: true,
        scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',

        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {


            if (nextSlideIndex == 1) {
                init_footer();
            } else {
                dark_footer();
            }

        }
    });



});
