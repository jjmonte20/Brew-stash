$(document).ready(function(){

    // function openNav() {
    //     document.getElementById("mySidenav").style.display = "block";
    // }
      
    // function closeNav() {
    //     document.getElementById("mySidenav").style.display = "none";
    // }

    // $("#navbar1").on("click", function() {
    //     if ($("mySidenav"))
    // })

    // here there will be some variables that are on the html file
    var brewerName = $("#breweryName");
    var brewerAddress = $("#street");
    // this is for the form for adding a brewery
    var brewerySubmit = $("#cmsBrewery");
    // need to ask about making it default to the userId
    // var userSelect = $("#user");
    $(brewerySubmit).on("submit", handleFormSubmit);
        
    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log("I've been clicked");
        // wont submit the post if there's a missing field
        var newBrewery = {
            brewer_name: brewerName.val().trim(),
            address: brewerAddress.val().trim(),
        };
        console.log(newBrewery);
        submitBrewery(newBrewery);
    }

    function submitBrewery(brewery) {
        $.post("/api/breweries", brewery, function() {
            console.log("submitted");
            window.location.reload();
        });
    }

    $(".addDrinks").on("click", function() {
        console.log("Rerouting to: " + $(this).data("id"));
    });

    $(".deleteBrewery").on("click", function() {
        console.log("Delete: " + $(this).data("id"));
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/breweries/" + id
        }).then(window.location.reload());
    });
// // ===========================================
});