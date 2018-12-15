// login will look similar to this on the front end
// login form will work similarly to creating account
// except that we are not adding new values
// simply looking for a pair of values that exists in the database
$("#loginSubmit").click(function(event){
    event.preventDefault();
    // console.log("login button pressed");
    $.post("/api/login", {
      username: $("#username").val(),
      password: $("#password").val()
    }).then(function(){
      console.log("submitted");
      // window.location.href = "/";
    }).catch(function(){
      console.log("error: Name may be taken");
    })
  })