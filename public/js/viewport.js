$(".seeDrinks").on("click", function() {
    console.log("Rerouting to: " + $(this).data("id"));
    var id = $(this).data("id");
    window.location.href = ("/viewdrinks/" + id);
});
