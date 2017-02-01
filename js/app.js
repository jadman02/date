document.addEventListener("deviceready", onDeviceReady, false);

/*
$(document).ready(function () {

  alert('yo');
  
  


  // Initialize your app
var myApp = new Framework7({init: false});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');

  
  myApp.init();
  
});
*/

function onDeviceReady() {

  
  
alert('device ready');  
}

//facebookConnectPlugin.browserInit(784956164912201);

function facebookLogin(){
alert('facebook');
  facebookConnectPlugin.login(["email"], loginSuccess(), loginFailure());
  
}

function loginSuccess(){

  alert('success');
  
}

function loginFailure(){

  alert('failure');
  
}
