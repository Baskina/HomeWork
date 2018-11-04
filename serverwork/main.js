$(function() {



	var request = new XMLHttpRequest();
	var page = 1;

	request.open("GET", "https://reqres.in/api/users" + "?page=" + page);


	var mainBase;

	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {			
			mainBase = JSON.parse(request.responseText).data;



			console.log(mainBase);
			mainBase.forEach( function(element, index) {
				makeCard(element);
			});


			var countLi = JSON.parse(request.responseText).total_pages;
			
			for(var i = 0; i < countLi; i++) {
				$(".pagination").append("<li>" + (i + 1));
			}

			$(".pagination li").on("click", function(event){
				console.log($(event.target)[0].innerHTML);
				request.open("GET", "https://reqres.in/api/users" + "?page=" + $(event.target)[0].innerHTML);
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