$(window).on("load",function(){
  $(".loader-wrapper").delay(1000).fadeOut("slow");
});

$(document).ready(function(){
	$('.physical_btn').click(function() {
		$('.mental-content').hide();
		$('.physical-content').show();
	})

	$('.mental_btn').click(function() {
		$('.mental-content').show();
		$('.physical-content').hide();
	});
});


  
var rent = $("li:first-child"),
	sell = $("li:last-child");


rent.on("click", function() {
	if ($(this).hasClass("rent")) {
		$(this).removeClass("rent");
		sell.addClass("sell");
	}
	sell.removeClass("sell");
});
sell.on("click", function() {
	if ($(this).hasClass("sell")) {
		$(this).removeClass("sell");
		rent.removeClass("rent");
	} else {
		$(this).addClass("sell");
		rent.addClass("rent");
	}
});


const goToAssessment = (targetPlace) =>{
	window.location.href = `http://localhost:5500/html/${targetPlace}.html`;
}



