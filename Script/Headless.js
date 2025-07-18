function Test_Chrome_Headless()
{
  var server = "localhost"
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
    };
  
//  url = "https://bearstore-testsite.smartbear.com/"
  var url = "https://videos.parliament.nz/";

  Browsers.RemoteItem(server, capabilities).Run(url);
}

function BitBar_NZ()
{
var capabilities = {
  "platform": "Windows", 
  "osVersion": "11", 
  "browserName": "Chrome", 
  "version": "126", 
  "resolution": "1920x1080"
  
};
var server = "https://us-west-desktop-hub.bitbar.com/wd/hub";
Browsers.RemoteItem(server, capabilities).Run("https://videos.parliament.nz/");
}