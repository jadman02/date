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

    var config = {
    apiKey: "AIzaSyAgU_QQb-dKUM_iPnHSkA_VycnGIMsnKas",
    authDomain: "single-duck.firebaseapp.com",
    databaseURL: "https://single-duck.firebaseio.com",
    storageBucket: "single-duck.appspot.com",
    messagingSenderId: "124927619672"
  };

  var defaultApp = firebase.initializeApp(config);
  var firebaseRef = firebase.database().ref();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();



var database = firebase.database();
alert(defaultApp.name);  // "[DEFAULT]"
    
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
