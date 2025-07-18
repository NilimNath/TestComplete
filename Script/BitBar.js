function bitbar_parallel()
{
var capabilities = {
  "platform": "Windows",
  "osVersion": "10",
  "browserName": "Microsoft Edge",
  "version": "119",
  "resolution": "1920x1080"
};
var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://www.google.com");
}

function SetChromeRunOptions()
{
  // Specify the required command-line key
  Browsers.Item("chrome").RunOptions = "--incognito";
  Browsers.Item("chrome").Run("https://www.google.co.in");
  // Perform the test

}

function SetEdgeRunOptions()
{
  // Specify the required command-line key
  Browsers.Item("edge").RunOptions = "--inprivate";
  Browsers.Item("edge").Run("https://www.google.co.in");
  // Perform the test

}

function scrollbar()
{
  var capabilities = {
  "platform": "Windows", 
  "osVersion": "10", 
  "browserName": "Chrome", 
  "version": "126", 
  "resolution": "1920x1080"
};
var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://the-internet.herokuapp.com/infinite_scroll");

		 
//const {Builder, By, Key, until} = require('selenium-webdriver');
//onst chrome = require('selenium-webdriver/chrome');

(async function verticalScroll() {
    
        // Launch the website
        await driver.get('https://support.smartbear.com/testcomplete/docs/reference/test-objects/members/onscreen/mousewheel-action-onscreen-object.html?sbsearch=mousewheel');

        // Maximize the window to full screen
        await driver.manage().window().maximize();

        // It will wait for a maximum of 10sec for each object
        await driver.manage().setTimeouts({ implicit: 10000 });

        // Vertical scroll
        await driver.executeScript('window.scrollBy(40, 3000)');

    
})();


}

function TestScrollBar()
{

  Sys.Browser("chrome").Page("https://www.google.com/search?q=fosdem+2024&rlz=1C1GCEA_enAU1059AU1059&oq=FOSDEM+202&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIGCAcQRRg9qAIAsAIA&sourceid=chrome&ie=UTF-8")


}

function CampAustralia()
{
var capabilities = {
  "platformName": "ANDROID", 
  "bitbar:target": "android", 
  "bitbar:findDevice": "false",
  "bitbar:device": "Google Pixel 6 Android 12 -US", 
  "deviceName": "Google Pixel 6 Android 12 -US", 
  "automationName": "UiAutomator2", 
  "bitbar:app": "261732481",
  "autoGrantPermissions": true,
  "appium:noReset": false,
//  "appium:fullReset": false,
//  "appium:FullContestList": true,
//  "appium:settings[enableAnimations]": false,
//  "appium:uiautomator2ServerLaunchTimeout": 30000,
//  "appium:uiautomator2ServerInstallTimeout": 30000,
  "newCommandTimeout": 600,
  "apppackage": "au.com.campaustralia.servicekiosk",
  "appactivity": "au.com.campaustralia.servicekiosk.Mainactivity"
};
var server = "https://us-west-mobile-hub.bitbar.com/wd/hub";
Mobile.ConnectDevice(server, capabilities);

}
