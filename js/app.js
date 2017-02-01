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

        alert('Received Event: ' + id);
      
      $(document).ready(function () {
var myApp = new Framework7({init: false});
// Export selectors engine
var $$ = Dom7;
// Add views
var view1 = myApp.addView('#view-1');
myApp.init();
});
      
    }
};






var fbLoginSuccess = function (userData) 
{
    alert("UserInfo: " + JSON.stringify(userData));
}
 





function facebookLogin(){
    facebookConnectPlugin.login(["public_profile"],
        fbLoginSuccess,
        function (error) { alert("error" + error); }
    );
  
}
