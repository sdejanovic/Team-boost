$(window).on('load', function () {
	$('.do-tab').on("click", function() {
		var $this = $(this),
			tabName = $this.attr("data-tab");
			
		$(".tab-item").hide().removeClass("active");
		$(".tab-item[data-tab-content='" + tabName + "']").slideDown().addClass("active");
	});
	
	var $acordionHead = $(".accordion-head").find("a");
	$acordionHead.on("click", function (e) {
		var $this = $(this),
			$parent = $this.parent();
		if (!$parent.hasClass("open")) {
			$(".accordion-content").hide("fast");
			$(".accordion-head").removeClass("open");
			$parent.addClass("open").next().slideDown("fast");
		} else {
			$parent.removeClass("open").next().slideUp("fast");
		}
	});
});