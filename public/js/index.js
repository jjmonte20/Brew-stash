
$("#loginButton").click(function(){ window.location.href="/login";});
$("#createAccountButton").click(function(){ window.location.href="/createaccount";});
$(".homeButton").click(function(){ window.location.href="/logout";});
$("#homeButtonLogin").click(function(){ window.location.href="/";});
$("#homeButtonCreate").click(function(){ window.location.href="/";});
$("#headerLeft").click(function(){ window.location.href="/points";});
$("#headerMiddle").click(function(){ window.location.href="/breweries";});
$("#headerRight").click(function(){ window.location.href="/account";});
$("#breweriesButton").click(function(){ window.location.href="/account";});

$("#backButton").click(function(){ window.location.href="/";});



// $(".homeButton").click(function(){ window.location.href="/";});
// $("#homeButtonLogin").click(function(){ window.location.href="/";});
// $("#homeButtonCreate").click(function(){ window.location.href="/";});	

function openNav() {
	document.getElementById("mySidenav").style.display = "block";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
}
