var usernameInput = $("input#example-text");
var passwordInput = $("input#password-input");

$(document).ready(function(){
	// testing the ability to add a user into the database
	$(".clearfix").on("submit", function(event){
		event.preventDefault();
		var userData = {
			username: usernameInput.val().trim(),
			password: passwordInput.val().trim()
		};
		console.log(userData);
    
		if (!userData.username || !userData.password) {
			alert ("Please insert both username and password!");
		}

		signUpUser(userData.username, userData.password);
		usernameInput.val("");
		passwordInput.val("");
	});

	// Post to the signup route
	// otherwise log any errors
	function signUpUser(username, password) {
		$.post("/api/signup", {
			username: username,
			password: password
		}).then(function(data) {
			if (data.errors){
				alert("username has already been taken");
			} else {
				window.location.href = "/login";
			}
			// window.location.replace(data);
			console.log(data);
			// If there's an error, handle it by throwing up an error on the alert screen
		}).catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});

