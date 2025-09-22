function bitbar_parallel()
{
var capabilities = {
  "platform": "Windows",
  "osVersion": "11",
  "browserName": "Microsoft Edge",
  "version": "138",
  "resolution": "1920x1080"
};
var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://www.google.com");
Log.Message(Browsers.RemoteItem(server, capabilities).Version);
//Log.Message("Current browser version is: "+Browsers.RemoteItem(server, ).Version);
Log.Message("Browser version is " +capabilities.version)


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


function browser_info()
{
  Log.Message(Browsers.CurrentBrowser.Version);
}

function Browser_version()
{
 Log.Message("The browser version is: " +Sys.Browser("chrome").FileVersionInfo)
}



function BB_mobile()
{
 
var capabilities = {
  "bitbar:device": "Samsung Galaxy S23 Ultra -US", 
  "deviceName": "Samsung Galaxy S23 Ultra -US", 
  "platformName": "Android", 
  "bitbar:findDevice": "false", 
  "automationName": "UiAutomator2", 
  "browserName": "Chrome"
};
var server = "https://us-west-mobile-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://www.google.com");
Log.Message(Aliases.browser.FileVersionInfo);
Log.Message(Sys.Browser("Remote").FileVersionInfo);


//Aliases.Device.processAndroidChrome.webView.Page("chrome://version/").FindElement("#copy-to-clipboard-icon").Click();




}