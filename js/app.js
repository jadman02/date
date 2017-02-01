$( document ).ready(function() {
// Initialize your app
var myApp = new Framework7({init: false});
// Export selectors engine
var $$ = Dom7;
// Add views
var view1 = myApp.addView('#view-1');
    var view2 = myApp.addView('#view-2');
myApp.init();
    
    
alert('yo');
        
});        
    
    

function loginFacebook(){

var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithRedirect(provider).then(function(result) {
 // This gives you a Facebook Access Token. You can use it to access theFacebook API.
   alert(result);
   var token = result.credential.accessToken;
   f_token =  token;
// The signed-in user info.
  var user = result.user;
  alert(user);
  

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  alert(errorCode);
  alert(errorMessage);
   alert(email);

  });
    
    
}
