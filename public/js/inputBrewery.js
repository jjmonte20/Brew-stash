// nav stuff

function openNav() {
	document.getElementById("mySidenav").style.display = "block";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
}

$(document).ready(function() {

    $(document).on("click", "#submitbrewery", addDrinks);

});


// var drinkInput = $("#drink");
// var priceInput = $("#price");
// var drinkType = $("#type");

function addDrinks(event){
    event.preventDefault();
    var breweryData = {
        brewery: $("#breweryName").val(),
        address: $("#street").val(),
        city: $("#city").val(),
        state:  $("#state").val(),
        zip: $("#zip").val()
    };

    
    $(".list-group").prepend(
        `
        <a href="#" class="list-group-item list-group-item-action" id="drinkInfo"> ` + breweryData.brewery + `<br> `+  breweryData.address + ` ` + breweryData.city + `, ` + breweryData.state + ` ` + breweryData.zip + `
        </a>
        
        `
    );
        

};


// $(document).ready(function(){

//     $("#submitdrinks").on("click", function(event){
//         event.preventDefault();
//         console.log("buttonworks");
//         var drinkData = {
// 			drink: drinkInput.val().trim(),
//             price: priceInput.val().trim(),
//             type: drinkType.val().trim()
//         };

//         console.log(drinkData.drink);
//         console.log(drinkData.price);

//         console.log(drinkData.type);

        
//         $(".list-group").prepend(
//             `
//             <a href="/edit" class="list-group-item list-group-item-action"> Drink: ` + drinkData.drink + `<br> `+ `Price: `+ drinkData.price + `<br> `+`Type: ` +drinkData.type + `
//                 </a>
//             `

//         );

//     });
// });