// this will be a function adding a drink from the brewery
// into the database

// first let's have some variables for the brewery, price, and beer like in the model

// // need to identify the brewery entering the drink
// var brewery = $("#breweryId");
// // next have a variable for the price of the beer
// var beerPrice = $("#beerPrice");
// // last the type of beer this is
// var beerType = $("#beerType");

// now let's put in a function, make sure it's when the document is ready
$(document).ready(function() {
    // set a button to do something

    // this is the front end solution to getting the brewery id
    var url = window.location.toString();
    var result = url.substring(url.lastIndexOf("/") + 1);
    // console.log(result);
    $("#submitdrinks").on("click", handleDrinkSubmit);

    function handleDrinkSubmit(event) {
        event.preventDefault();

        var newDrink = {
            name: $("#drink").val().trim(),
            price: $("#price").val().trim(),
            type: $("#type").val().trim(),
            // will add a breweryId field when I know how to default to it at the top
            BreweryId: result
        }
        console.log(newDrink);
        submitDrink(newDrink);
    }

    function submitDrink(drink) {
        $.post("/api/drinks", drink, function() {
            console.log("submitted");
            window.location.reload();
        });
    }

    // now I need button functions for the other objects
    $(".editDrink").on("click", function() {
        console.log("Edit: " + $(this).data("id"));
        // since it will be on the same page, we should have this be a put request
        // for the drink id
    });

    $(".deleteDrink").on("click", function() {
        console.log("Delete: " + $(this).data("id"));
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/drinks/" + id
        }).then(function() {
            window.location.reload();
        })
    });
    // next let's set a button to do something
    // $("#addBeerButton").on("click", function(event){
    //     // test that the button works
    //     console.log("add beer button works");
    //     // next let's put the beer data in an object
    //     var beerData = {
    //         breweryId: brewery,
    //         type: beerType.val().trim(),
    //         price: beerPrice.val().trim()
    //     };
    //     // test that the inputs are doing what they should
    //     console.log(beerData);
    //     // make sure that all of the data is set, keep in mind at this point ID should already be set somewhere
    //     if (!beerData.type || !beerData.price) {
    //         alert("Please set a price and type for this beer");
    //     }
    //     // call a function to post to the back end, pass through our data
    //     addBeer(beerData.breweryId, beerData.price, beerData.type);
    //     // make sure to empty the values each time this function is called
    //     beerPrice.val("");
    //     beerType.val("");
    // });

    // // now let's define a function that post to the backend for beers
    // // log any errors along the way
    // function addBeer(breweryId, beerprice, beertype) {
    //     // post route from the front end
    //     // check api routes to make sure it's there as well
    //     $.post("", {
    //         // these fields should match the fields passed through
    //         breweryId: breweryId,
    //         type: beertype,
    //         price: beerprice
    //         // promise data
    //     }).then(function(data) {
    //         // let's double-check what we're sending
    //         if (data.errors){
    //             alert("an error has occured adding a drink");
    //         } else {
    //             // let's alert the user that their beet has been added
    //         }
    //     });
    // }     
});