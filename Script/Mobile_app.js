/*
function connect(){
var capabilities = {
  "platformName": "ANDROID", 
  "bitbar_target": "android", 
  "bitbar_findDevice": "false", 
  "bitbar_device": "Google Pixel 6 Pro 5G -US", 
  "deviceName": "Google Pixel 6 Pro 5G -US", 
  "automationName": "UiAutomator2", 
  "bitbar_app": "176294787", 
  "appActivity": "com.mobile.potbelly.LoadingActivity", 
  "appActivity": "com.mobile.potbelly.MainActivity", 
  "appActivity": "androidx.test.core.app.InstrumentationActivityInvoker$BootstrapActivity",
  "appPackage": "com.mobile.potbelly"
};
var server = "https://appium-us.bitbar.com/wd/hub/";
Mobile.ConnectDevice(server, capabilities);
}
*/

function device(){

//Aliases.browser.Page("https://www.google.com");
Mobile.Device().HideVirtualKeyboard();

}

function BitBar()
{
var capabilities = {
  
"appium:automationName": "XCUITest",
"appium:newCommandTimeout": 0,
"bitbar:options": {
"appiumVersion": "2.0",
"device": "Apple iPhone 11 Pro A2215 13.4.1"
},
"browserName": "Safari",
"goog:chromeOptions": {
"w3c": true
},
"pageLoadStrategy": "normal",
"platformName": "iOS"
}

var server = "https://us-west-mobile-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://www.google.com");

}

