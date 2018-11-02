$(function() {

	var request = new XMLHttpRequest();

	request.open("GET", "https://reqres.in/api/users");

	var mainBase;

	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			mainBase = JSON.parse(request.responseText).data;



			console.log(mainBase);
			mainBase.forEach( function(element, index) {
				makeCard(element);
			});
		}
	}

	function makeCard (user) {

		let card = $("<div class='card'>")

		$(card)
			.append($("<img src=" + user.avatar + ">"))
			.append($("<div>" + user.first_name + "&nbsp;" + "</div>"))
			.append($("<div>" + user.last_name + "</div>"));

		$(".box").append(card);
	}

	request.send();

});