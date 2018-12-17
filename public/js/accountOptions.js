$(document).ready(function() {
    // here there will be some variables that are on the html file
    var brewerName = $("#brewerName");
    var brewerAddress = $("#brewerAddress");
    // this is for the form for adding a brewery
    var brewerySubmit = $("#addBrewery");
    var userSelect = $("#user");

    // ===========================================

    // Here there will be a submit form triggering an action
    $(brewerySubmit).on("submit", handleFormSubmit);
    // Gets to the part of the url that comes after the "?"
    var url = window.location.search;
    var breweryId;
    var userId;
    // set a flag whether it's updating or not, should be false at first
    var updating = false;

    // If we have this in our url, we pull out the post id from the user
    // In '?brewery_id=1', breweryId is 1
    if (url.indexOf("?brewery_id=") !== -1) {
        breweryId = url.split("=")[1];
        getBreweryData(breweryId, "post");
    } 
    // otherwise preselect it to be our brewer
    else if (url.indexOf("?brewery_id=") !== -1){
        userId = url.split("=")[1];
    }

    // get the brewer, and their options
    getBrewers();

    // function for handling what happens when the form creates a new brewery
    function handleFormSubmit(event) {
        event.preventDefault();
        // won't submit the post of we are missing name and address
        if (!brewerName.val().trim() || !brewerAddress.val().trim()){
            return;
        }

        // Construct a new brewery
        var newBrewery = {
            brewer_name: brewerName.val().trim(),
            address: brewerAddress.val().trim(),
            UserId: userSelect.val()
        };

        // in the case that the user is updating their brewery
        if (updating) {
            newBrewery.id = breweryId;
            updateBrewery(newBrewery);
        }
        else {
            submitBrewery(newBrewery);
        }
    }

    //  Submits a new brewery
    function submitBrewery(brewery) {
        $.post("/api/breweries", brewery, function() {
            window.location.reload();
        });
    }

    function getBreweryData(id, type) { 
        var queryUrl;
        switch (type) {
        case "brewery":
            queryUrl = "/api/breweries/" + id;
            break;
        case "user":
            queryUrl = "/api/users/" + id;
            break;
        default:
            return;
        }
        $.get(queryUrl, function(data) {
            if (data) {
                console.log(data.UserId || data.id);
                // If this brewery exists, prefill our forms with this data
                brewerName.val(data.brewer_name);
                brewerAddress.val(data.address);
                userId = data.UserId || data.id;
                // If we have a brewery with this id, set a flag for us to know to update it
                // when we hit submit
                updating = true;
            }   
        });
    }

    function getBrewers() {
        $.get("/api/users", renderBrewerList);
    }

    function renderBrewerList(data) {
        if (!data.length) {
            window.location.href = "/users";
        }
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createBrewerRow(data[i]));
        }
        brewerSelect.empty();
        console.log(rowsToAdd);
        console.log(authorSelect);
        authorSelect.append(rowsToAdd);
        authorSelect.val(userId);
    }

    function createBrewerRow(brewer) {
        var listOption = $("<option>");
        listOption.attr("value", User.id);
        listOption.text(User.name);
        return listOption;
    }
        // Function to either render a list of 
        // given the request an update
        function updateBrewery(brewery) {
            $.ajax({
                method: "PUT",
                url: "/api/breweries",
                data: brewery
            }).then(function() {
                window.location.href = "/breweries";
            });
        }
    }

    // function to
// ================ always on the bottom
});