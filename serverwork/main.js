$(function() {
  
  var page;
  var mainBase;
  
  renderPage(page);
  
  function renderPage(page) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://reqres.in/api/users" + "?page=" + page);
    console.log('submit');
	request.send();	
    
    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) {	
        mainBase = JSON.parse(request.responseText).data;

        
        mainBase.forEach( function(element, index) {
				   makeCard(element);
			  });
        
        if(page == undefined) {
          var countLi = JSON.parse(request.responseText).total_pages;
			console.log("here");
			    for(var i = 0; i < countLi; i++) {
				    $(".pagination").append("<li>" + (i + 1));
			    }
        }

        $("li").on("click", function(event) {
        	$(".box").empty();
        	page = $(event.target)[0].innerHTML;
        	console.log("start");
        	renderPage(page);
        });
      }
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

});