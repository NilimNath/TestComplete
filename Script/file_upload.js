function w3_schools(){
  
//Browsers.RemoteItem("https://us-west-desktop-hub.bitbar.com/wd/hub", "{\"platform\":\"Windows\",\"osVersion\":\"10\",\"browserName\":\"Chrome\",\"version\":\"132\",\"resolution\":\"1920x1080\"}").Run("https://the-internet.herokuapp.com/upload");

Aliases.browser.Page("https://the-internet.herokuapp.com/upload").FindElement("#file-upload").Keys("C:\\Users\\nilim.nath\\Downloads\\Bitbar session logs.xlsx");

//Aliases.browser.Page("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button").FindElement("#iframeResult").FindElement("#myFile").Keys("C:\Users\nilim.nath\Downloads\Bitbar session logs.xlsx");
//
//Aliases.browser.Page("https://www.w3schools.com/howto/howto_html_file_upload_button.asp").FindElement(By.id("file-upload")).Keys("C:\Users\nilim.nath\Downloads\failed jobs TC (1).png");
//
Aliases.browser.Page("https://the-internet.herokuapp.com/upload").FindElement("#file-submit").Click();






}


function FindEditbuttons()
{
  var p, w, textBoxes;

  // Obtain the Notepad process
  p = Sys.Process("notepad");

  // Open the Font dialog
  p.Window("Notepad", "*").MainMenu.Click("Format|Font...");
  w = p.Window("#32770", "Font");

  // Search for all edit buttons in the Font dialog
  textBoxes = w.FindAllChildren("WndClass", "Edit", 5);

  // Log the search results
  if (textBoxes.length > 0)
  {
    for (let i = 0; i < textBoxes.length; i++)
      Log.Message("FullName: " + textBoxes[i].FullName + "\r\n" +
                  "Text: " + textBoxes[i].wText);
    Log.Message("Total number of found edit buttons: " + textBoxes.length);
  }
  else
    Log.Warning("No edit buttons found.");
}
