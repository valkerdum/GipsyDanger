
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


//  RADIO BUTTONS CUSTOM

// $(document).ready(function(){
// 	  $('input').iCheck({
// 	    checkboxClass: 'icheckbox_minimal-blue',
// 	    radioClass: 'iradio_minimal-blue',
// 	    increaseArea: '20%' // optional
// 	  });
// 	});


//  FANCYBOX

// $(document).ready(function() {
// 			$('.fancybox').fancybox({
//     			helpers : {
//         		title: {
//             		type: 'inside',
//             		position: 'top'
//         			}
//     			}
// 			});
// });


	$(window).scroll(function() {

    if ($(window).width() > 767) {
        // get the amount the window has scrolled
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        // add the 'active' class to the correct li based on the scroll amount
        if (scroll > 120) {

            if (!$(".main-menu-fixed").hasClass("hfix")) {
            	$(".main-menu-fixed").fadeIn(400);
                $(".main-menu-fixed").addClass("hfix");

    
               
				/*$(".content-menu").css("display", "none");*/
            }
        } else {
            if ($(".main-menu-fixed").hasClass("hfix")) {
            	$(".main-menu-fixed").fadeOut(0);
                $(".main-menu-fixed").removeClass("hfix");

				/*$(".content-menu").css("display", "block");*/
            }
        }
    }
});
	