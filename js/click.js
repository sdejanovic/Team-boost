$(window).on("load", function () {
	$("#firstClick").one("click", function() {
		var $secondBtn = $("<input type='button' value='second button' class='btn' id='secondBtn' />");
        $("#btnContainer").append($secondBtn);
	});	

	$("body").on("click", "#secondBtn", function() {
		alert("click on the second button!");
	});	
});