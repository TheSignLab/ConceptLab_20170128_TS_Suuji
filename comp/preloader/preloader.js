	$(document).ready(function() {
        
		setTimeout(function(){
			$('.preloader').fadeOut(220);
            $('main').fadeIn(500);
      
            $('nav').animate({top:"0px"});
            /*
			var mySVG = $('#id_preloader_svg').drawsvg();
			mySVG.drawsvg('animate');
            */

		},2500);

});
