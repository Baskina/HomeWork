$(function() {

	let buttons = $(".tabset a");
	let currentelem;

	toggleTab();

	function toggleTab() {
		currentelem = $($(".active").attr('href'));
		console.log(currentelem);

		buttons.each(function(){
			let tab_id = $(this).attr('href');
			console.log($(tab_id));
			$(tab_id).css("display", "none");
		});
		$(currentelem).css("display", "block");
	}

	buttons.on("click", function(event){
		let target = $(event.target);
		if(!(target.hasClass("active"))){
			$(buttons).removeClass("active");
			target.addClass("active");

			currentelem.fadeOut(300, function() {
				($(target.attr('href'))).fadeIn(300);
			});

			currentelem = $($(".active").attr('href'));
		}
	});
});