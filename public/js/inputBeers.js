//nav stuff

function openNav() {
	document.getElementById("mySidenav").style.display = "block";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
}

//input

var drinkInput = $("#drink");
var priceInput = $("#price");

$(document).ready(function(){

    $("#submitdrinks").on("click", function(event){
        event.preventDefault();
        console.log("buttonworks");
        var drinkData = {
			drink: drinkInput.val().trim(),
			price: priceInput.val().trim()
		};
        console.log(drinkData);
        console.log(drinkData.drink);
        console.log(drinkData.price);


    });
});