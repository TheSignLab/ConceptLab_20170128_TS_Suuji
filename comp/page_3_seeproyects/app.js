$(document).ready(function () {
var px = 0;
    $('.slide-full-scroll-wrapper').mousewheel(function (event) {
        console.log(event.deltaY);
         px = px + 60*event.deltaY;
        $(this).css({
            "-webkit-transform": "translate("+px+"px,100px)",
            "-ms-transform": "translate("+px+"px,100px)",
            "transform": "translate("+px+"px,100px)"
        })
    });
    
   


});
