
// // MOSTRAR MENU MOBILE
// $(document).ready(function() {
// 	var n = '#nav'
// 	$('#nav-menu').click(function() {
// 		if ($(n).hasClass('nav-open')) {
// 			$(n).removeClass('nav-open');
// 		}
// 		else {
// 			$(n).addClass('nav-open');
// 		}
// 	});
// });


// RADIO BUTTONS CUSTOM

$(document).ready(function(){
	  $('input').iCheck({
	    checkboxClass: 'icheckbox_minimal-blue',
	    radioClass: 'iradio_minimal-blue',
	    increaseArea: '20%' // optional
	  });
	});


// FANCYBOX

$(document).ready(function() {
			$('.fancybox').fancybox({
    			helpers : {
        		title: {
            		type: 'inside',
            		position: 'top'
        			}
    			}
			});
});



// MOSTRAR MAS GANADORES

$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);

};


$("#slideToggle").click(function(event) {
 	event.preventDefault();

  	$('.slideTogglebox').slideFadeToggle();

    $("#flecha").toggleClass('exp');

});


// TOOLTIP

jQuery(function ($) {
	$('#trigger2').popover({
		my: 'center bottom',
		at: 'center top',
		offset: '0 -12px'
	});
});

