$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
			0:{
					items:1
			}
		}
	});


	var modal_bg = $(".modal_bg");

	modal_bg.click(function(e){
		e.preventDefault();
		$(".modal_js").removeClass("active");
		modal_bg.removeClass("active");
	});

	$("[hendler='modal']").click(function(e){
		e.preventDefault();
		var those = $(this);
		var data = those.attr("data");
		var target = 	$(data);
		if(modal_bg.hasClass("active")){
			target.removeClass("active");
			modal_bg.removeClass("active");
		}else{
			target.addClass("active");
			modal_bg.addClass("active");
		}
	});
});
