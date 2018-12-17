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
    
    // Gets the part of the url that comes after the "?"
    var url = window.location.search;
    var breweryId;
    var userId;
    
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log("I've been clicked");
        // wont submit the post if there's a missing field
        var newBrewery = {
            brewer_name: brewerName.val().trim(),
            address: brewerAddress.val().trim(),
            // hard coding in this variable until I can figure out what to do with it
            UserId: 1
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
// ===========================================
});
    