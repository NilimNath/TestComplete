function main() {

var d = Mobile.Device();
d.HideVirtualKeyboard();

}

function maximise()
{
  //Aliases.browser.BrowserWindow.Maximize();
  Sys.Browser().BrowserWindow(0).Maximize();
  //Sys.browser.Keys("fb[Enter]");
  //Sys.Browser("Remote").Keys("fb[Enter]");
  
}

function upload_remote()
{
  //const { Builder, By } = require("selenium-webdriver");
  
  //Browsers.RemoteItem("https://us-west-desktop-hub.bitbar.com/wd/hub", "{\"platform\":\"Windows\",\"osVersion\":\"10\",\"browserName\":\"Chrome\",\"version\":\"112\",\"resolution\":\"1920x1080\"}").Run("https://www.w3schools.com/howto/howto_html_file_upload_button.asp");
  //Delays the test execution for the specified time period.
  Delay(5000);
  Aliases.browser.BrowserWindow.Maximize();
  
  //Clicks the 'fileMyfile' control.
  //Aliases.browser.Page("https://www.w3schools.com/howto/howto_html_file_upload_button.asp").FindElement("#myFile").Click();
  
  Aliases.browser.Page("https://www.w3schools.com/howto/howto_html_file_upload_button.asp").FindElement("#myFile").Keys("C:\Users\nilim.nath\Downloads\failed jobs TC (1).png");
  //Aliases.browser.Page("https://www.w3schools.com/howto/howto_html_file_upload_button.asp").FindElement("#myFile").Keys("C:\Users\nilim.nath\Downloads\failed jobs TC (1).png");

  //Aliases.browser.Page("https://www.w3schools.com/howto/howto_html_file_upload_button.asp").FindElement(By.id("file-submit")).Click();
  
  //Clicks the 'btnCancel' button.
  Aliases.browser.Window("#32770", "Open", 1).Window("Button", "Cancel", 2).Click()
}


// Capture a screenshot and save it with a unique name
function CaptureScreenshot() {
    Log.Picture(Sys.Desktop);
   
}

  function GetObjectCoordinates() {
  // Obtain the object (replace Sys.Process().Window() with your actual object)
//  var obj = Sys.Process("YourApplication").Window("YourWindow", "", 1);
  var obj = Sys.Process("Microsoft.WindowsCalculator").Window("Windows.UI.Core.CoreWindow", "Calculator", 1);

  // Get the object's coordinates
  
  var x = obj.Left;
  var y = obj.Top;
  
  
  Log.Message("The object is located at: X = " + x + ", Y = " + y);
}
