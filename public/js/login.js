// login will look similar to this on the front end
// login form will work similarly to creating account
// except that we are not adding new values
// simply looking for a pair of values that exists in the database
$(document).ready(function() {
  // login submit will test the user data to ensure it is consistent with the database
  // on click event to start the process
  $("#login").on("submit", function(event){
    event.preventDefault();
    var userLoginData = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim()
    };

    console.log(userLoginData);
    // test to see that the user input any information
    if (!userLoginData.username || !userLoginData.password) {
      // console.log("button works");
      return;
    }

    loginUser(userLoginData.username, userLoginData.password);
    usernameInput.val("");
    userpasswordInput.val("");
    // console.log("login button pressed");
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      }).then(function(data){
        console.log("submitted");
        // window.location.href = "/";
        window.location.replace(data);
      }).catch(function(){
        console.log("error: Name may be taken");
      });
    } 
    // =================== loginSubmit click
  });
// ====================document.on ready
});