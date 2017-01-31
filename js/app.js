document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  // Initialize your app
var myApp = new Framework7({init: false});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');

  
  myApp.init();
  
alert('device ready');  
}
