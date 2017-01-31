$(document).ready(function () {

document.addEventListener("deviceready", onDeviceReady, false);

  // Initialize your app
var myApp = new Framework7({init: false});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');

  
  myApp.init();
  
});


function onDeviceReady() {

  
  
alert('device ready');  
}

 function loginFacebook(){

var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Facebook Access Token. You can use it to access theFacebook API.
   console.log(result);
   var token = result.credential.accessToken;
   f_token =  token;
// The signed-in user info.
  var user = result.user;
  console.log(user);
  

  

// Set the access token here


  
// ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(errorCode);
  console.log(errorMessage);
   console.log(email);

  });
    
    
}
