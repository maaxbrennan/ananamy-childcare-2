$(document).ready(function ($) {

    $('a[rel="fancybox"]').fancybox();
    $('a[rel="fancyboxa"]').fancybox();
    $('a.contactFormFancy').fancybox({
        'onComplete': function() {
            $("#fancybox-right").hide();
            $('#fancybox-title').hide();
        }
    });

    $('#mapRow').addClass('scrolloff');
    $('#mapRow').on('click', function () {
        $('#mapRow').removeClass('scrolloff');
    });

    $("#mapRow").mouseleave(function () {
        $('#mapRow').addClass('scrolloff');
    });

    /*$('#showTextarea').on('click', function (){
        alert('a');
        $('#contact_type').animate({
            height: "toggle"
        }, 5000, function() {
            alert('b');
        });
    }); */

    $window = $(window).on('resize', function(){
       allWidth = $( document ).width();
       if(allWidth > 1300){
            rightColumn = allWidth - 270;
            $('#rightColumn').width( rightColumn );
            $('#slideLogo').width( rightColumn );
       }
       if(allWidth > 1100 && allWidth < 1299){
            rightColumn = allWidth - 220;
            $('#rightColumn').width( rightColumn );
            $('#slideLogo').width( rightColumn );
       }
    }).trigger('resize');

    /*$(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.homepage-link').children('img').addClass('short-logo');
            $('#menu-row').addClass('menu-row-slide');
        }else{
            $('.homepage-link').children('img').removeClass('short-logo');
            $('#menu-row').removeClass('menu-row-slide');
        }
    });*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*$('#carousel-1').carousel({ interval: 2000, cycle: true });
    $('#carousel-2').carousel({ interval: 2500, cycle: true });
    $('#carousel-3').carousel({ interval: 3000, cycle: true });*/

});

$('.carousel[data-type="multi"]').carousel({
  interval: 4000
});

$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    next.children(':first-child').clone().appendTo($(this));
  }
});

$(function() {

	// IE detect
	function iedetect(v) {

	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);

	}

	// For mobile screens, just show an image called 'poster.jpg'. Mobile
	// screens don't support autoplaying videos, or for IE.
	if($('#markText').width < 800 || iedetect(8) || iedetect(7) || 'ontouchstart' in window) {

		(adjSize = function() { // Create function called adjSize

			$width = $(window).width(); // Width of the screen
			$height = $(window).height(); // Height of the screen

			// Resize image accordingly
			$('#animation').css({
				'background-image' : 'url(/img/poster.jpg)',
				'background-size' : 'cover',
				'width' : $width+'px',
				'height' : $height+'px'
			});

			// Hide video
			$('video').hide();

		})(); // Run instantly

		// Run on resize too
		$(window).resize(adjSize);
	}
	else {

		// Wait until the video meta data has loaded
		$('#animation video').on('loadedmetadata', function() {

			var $width, $height, // Width and height of screen
				$vidwidth = this.videoWidth, // Width of video (actual width)
				$vidheight = this.videoHeight, // Height of video (actual height)
				$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in

			(adjSize = function() { // Create function called adjSize

				$width = $('#markText').width(); // Width of the screen
				$height = $('#markText').height(); // Height of the screen

				$boxRatio = $width / $height; // The ratio the screen is in

				$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size

				// Set the container to be the width and height of the screen
				$('#animation').css({'width' : $width+'px', 'height' : $height+'px'});

				if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
					// Set the width of the video to the screen size multiplied by $adjRatio
					$vid = $('#animation video').css({'width' : $width*$adjRatio+'px'});
				} else {
					// Else just set the video to the width of the screen/container
					$vid = $('#animation video').css({'width' : $width+'px'});
				}

			})(); // Run function immediately

			// Run function also on window resize.
			$(window).resize(adjSize);

		});
	}

});

// do formularza
function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}

// do menu mobilnego
$(document).ready(function(){
  $('#menu-button').click(function(){
    $('#menu-top').stop().slideToggle(300);
  });
});

// do mapy z javascript
if($('#map_canvas').length === 1){
    initialize();
}

