$(window).on("load", function () {
	
	$(".btn").click(function() {
		alert("click on the button!");
	});	
	
	$(".grid").on("click", ".btn", function() {
		alert("click on the button!");
	});	
});

/*
var $secondBtn = $("<input type='button' value='second button' class='btn' id='secondBtn' />");
$("#btnContainer").append($secondBtn);
*/