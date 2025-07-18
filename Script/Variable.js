function PackResults()
{
  var WorkDir, FileName, FileList, ArchivePath;
  WorkDir = Project.ConfigPath + "Log\\ExportedResults\\";
  FileName = WorkDir + "MyFile.mht";
  Log.SaveResultsAs(FileName, 0);
  FileList = slPacker.GetFileListFromFolder(WorkDir);
  ArchivePath = WorkDir + "CompressedResults";
  if (slPacker.Pack(FileList, WorkDir, ArchivePath))
    Log.Message("Files compressed successfully.");
}


function SendEmail(mFrom, mTo, mSubject, mBody, mAttach)
{
  var schema, mConfig, mMessage;

  try
  {
    schema = "http://schemas.microsoft.com/cdo/configuration/";
    mConfig = getActiveXObject("CDO.Configuration");
    mConfig.Fields.$set("Item", schema + "sendusing", 2); // cdoSendUsingPort
    mConfig.Fields.$set("Item", schema + "smtpusessl", 1); // Use SSL
    mConfig.Fields.$set("Item", schema + "smtpserver", "smtp-mail.outlook.com"); // SMTP server
    mConfig.Fields.$set("Item", schema + "smtpserverport", 25); // Port number

    // If you use Gmail --
    // Enable the Allow less secure apps option for your account
    // mConfig.Fields.$set("Item", schema + "smtpserver", "smtp.gmail.com");
    // mConfig.Fields.$set("Item", schema + "smtpserverport", 465);

    // If you use Outlook --
    // mConfig.Fields.$set("Item", schema + "smtpserver", "smtp-mail.outlook.com");
    // mConfig.Fields.$set("Item", schema + "smtpserverport", 587);

    // If you use Office365 --
    // mConfig.Fields.$set("Item", schema + "smtpserver", "smtp.office365.com");
    // mConfig.Fields.$set("Item", schema + "smtpserverport", 587);

    mConfig.Fields.$set("Item", schema + "smtpauthenticate", 1); // Authentication mechanism

    // User name (if needed)
     mConfig.Fields.$set("Item", schema + "sendusername", "nath.nilim@outlook.com");

    // User password (if needed)
     mConfig.Fields.$set("Item", schema + "sendpassword", "LIONELmessi");

    mConfig.Fields.Update();

    mMessage = getActiveXObject("CDO.Message");
    mMessage.Configuration = mConfig;
    mMessage.From = mFrom;
    mMessage.To = mTo;
    mMessage.Subject = mSubject;
    mMessage.HTMLBody = mBody;   
    
    mMessage.AddAttachment(mAttach);
        
   // aqString.ListSeparator = ",";
   // for(let i = 0; i < aqString.GetListLength(mAttach); i++)
     // mMessage.AddAttachment(aqString.GetListItem(mAttach, i));

    mMessage.Send();

  }
  catch (exception)
  {
    Log.Error("Email cannot be sent", exception.message);
    return false;
  }
  Log.Message("Message to " + mTo + " was successfully sent");
  return true;
}

function MainTest()
{
  /* var file_path = "C:\Users\nilim.nath\OneDrive - SmartBear Software, Inc\Documents\MyHTMLCode.txt";
  if (SendEmail("nath.nilim@outlook.com", "nath.nilim@gmail.com", "Subject", "Testing sendmail functionality", "C:\\Users\\nilim.nath\\OneDrive - SmartBear Software, Inc\\Documents\\TestComplete 15 Projects\\Google Search\\Google Seach\\Log\\ExportedResults\\CompressedResults.ZIP"))
  Log.Message("Message sent");  
//   Message was sent
  else
    Log.Message("Error sending message");// Message was not sent */

  let CurrentDate = aqDateTime.Today();
  
  Log.Message("Today is " + aqDateTime.Today());
  
  
  Log.Message(aqDateTime.AddDays(CurrentDate, -5));
  

}

function Test1()
{
  let browserWindow = Aliases.browser.BrowserWindow;
  OCR.Recognize(browserWindow).BlockByText("Manageme...").Click();
  Browsers.Item(btChrome).Navigate("https://manage.smartbear.com/");
  browserWindow.Maximize();
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(2018, 40);
  Aliases.Zoom.wndZPFloatToolbarClass.Activate();
}

function Orders_close()
{
  Runner.CallObjectMethodAsync(WshShell, "Run", "powershell -file C:\\Users\\nilim.nath\\Downloads\\close.ps1")  

 //Sys.Process("Orders.").Close()
}

function create_cookies()
{
//  Aliases.browser.pageGoogle2.contentDocument.cookie = "name = Jingoo";
  
  Log.Message(Aliases.browser.pageGoogle2.contentDocument.cookie)

}

function find_all_children()
{
  var result = Aliases.browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/").FindElement("//article[contains(., 'Mobile phone')]").FindAllChildren("nodeType", 1, 3);
  Log.Message(result[1])
}