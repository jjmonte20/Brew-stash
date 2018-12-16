// nav stuff

function openNav() {
	document.getElementById("mySidenav").style.display = "block";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
}

$(document).ready(function() {

    $(document).on("click", "#submitdrinks", addDrinks);
    $(document).on("click", "#drinkInfo", editDrinks);

});
//current drinks array
var drinks = [];

// var drinkInput = $("#drink");
// var priceInput = $("#price");
// var drinkType = $("#type");

function addDrinks(event){
    event.preventDefault();
    var drinkData = {
        drink: $("#drink").val().trim(),
        price: $("#price").val().trim(),
        type: $("#type").val().trim()
    };

    drinks.push(drinkData);
    console.log(drinks);
    
    $(".list-group").prepend(
        `
        <a href="#" class="list-group-item list-group-item-action" id="drinkInfo"> Drink: ` + drinkData.drink + `<br> `+ `Price: `+ drinkData.price + `<br> `+`Type: ` +drinkData.type + `
        </a>
        
        `
    );
         console.log(drinkData.drink);
         console.log(drinkData.price);

         console.log(drinkData.type);

};

function editDrinks(event){
    var currentDrink = $(this).data("drinks");
    // send this to an edit url
    console.log(currentDrink);


}

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