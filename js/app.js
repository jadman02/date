var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      initappDateDuck();
    }
};

function initappDateDuck(){

// Initialize your app
var myApp = new Framework7({init: false});
// Export selectors engine
var $$ = Dom7;
// Add views
var view1 = myApp.addView('#view-1');
    var view2 = myApp.addView('#view-2');
myApp.init();
    
    $( document ).ready(function() {

firebase.auth().onAuthStateChanged(function(user) {
  

  
  if (user) {
      
       alert(user);
      alert('yes user');// User is signed in.
  }
});
});        
    
    
}

function loginFacebook(){

var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
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
