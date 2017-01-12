$(document).ready(function(){    

	var scroll_start = 0;
	var startchange = $('#navchange');
	var offset = startchange.offset();

	if (startchange.length){
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$(".navbar-default").css('background-color', 'white');
			} else {
				$('.navbar-default').css('background-color', 'transparent');
			}
		});
	}
});