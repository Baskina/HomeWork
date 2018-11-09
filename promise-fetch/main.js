$(function() {
	let page;

	renderPage(page);

	function renderPage(page) {

		var getUsers = new Promise(function(resolve, reject) {

			$.getJSON({
				url: "https://reqres.in/api/users" + "?page=" + page,
				success: function(data) {
					resolve(data);
				},

				error: function() {
					reject('false');
				},

				data: {
					page: page
				},
			});
		});

		getUsers
		.then(
			result => {
				result.data.forEach(function(element) {
					makeCard(element);
				});
				if(page == undefined) {
					console.log(result.total_pages);
					var countLi = result.total_pages;
					for(var i = 0; i < countLi; i++) {
						$(".pagination").append("<li>" + (i + 1));
					}
					$("li").on("click", function(event) {
						$(".box").empty();
						page = $(event.target)[0].innerHTML;
						renderPage(page);
					});
				}
			},
			error => {alert(error);}
			);

	}

	function makeCard (user) {

		let card = $("<div class='card'>")

		$(card)
		.append($("<img src=" + user.avatar + ">"))
		.append($("<div>" + user.first_name + "&nbsp;" + "</div>"))
		.append($("<div>" + user.last_name + "</div>"));

		$(".box").append(card);
	};


	$("button").on('click', function(event) {
    //event.prevetDefault();
    var postUser = new Promise(function(resolve, reject) {

    	$.ajax({
    		method: 'POST',
    		url: "https://reqres.in/api/users",
    		dataType: 'json',
    		data: {
    			first_name: 'ss',
    			last_name: 'ss',
    			avatar: 'dd'
    		},
    		success: function(data) {
    			alert("ok");
    			resolve(data);
    		},

    		error: function() {
    			reject('false');
    		},


    	});
    });

    postUser
    .then(
    	result => {
    		alert("ok");
    	},
    	error => {alert(error);}
    	);


    // let first_name = $("input[name='first_name']").val();
    // let last_name = $("input[name='last_name']").val();
    // let avatar = $("input[name='avatar']").val();

    // var param = 'first_name=' + encodeURIComponent(first_name) +
    // '&last_name=' + encodeURIComponent(last_name) + 
    // '&avatar=' + encodeURIComponent(avatar);

    // request.open('POST', "https://reqres.in/api/users", true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // request.send(param);

    // request.onload = function() {
    // 	if(request.readyState == 4) {
    // 		alert('ok post');
    // 	}
    // }
});


	

	/////////////


	// fetch("https://reqres.in/api/users")
	// .then(
	// 	function(response) {
	// 		response.json().then(function(data) {
	// 			console.log(data);
	// 		})
	// 	}
	// 	)
	// .catch(function(err) {
	// 	console.log('error: ', err);
	// })
});