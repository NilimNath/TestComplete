function logs(){

Log.Message(Sys.Desktop.Height);
Log.Message(Sys.Desktop.Width);
Log.Message(Sys.CPU);

//if (!Files.Compare("C:\\Users\\nilim.nath\\OneDrive - SmartBear Software, Inc\\Documents\\sample.txt", "C:\\Users\\nilim.nath\\OneDrive - SmartBear Software, Inc\\Documents\\test.txt"))
  //  Log.Warning("List of orders was changed");
    
Log.SaveResultsAs("C:\\Users\\nilim.nath\\OneDrive - SmartBear Software, Inc\\Documents\\Logs\\Log.mht", lsMHT);

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
    mConfig.Fields.$set("Item", schema + "smtpserver", "ServerName"); // SMTP server
    mConfig.Fields.$set("Item", schema + "smtpserverport", 465); // Port number

    // If you use Gmail --
    // Enable the Allow less secure apps option for your account
    // mConfig.Fields.$set("Item", schema + "smtpserver", "smtp.gmail.com");
    // mConfig.Fields.$set("Item", schema + "smtpserverport", 465);

    // If you use Outlook --
     mConfig.Fields.$set("Item", schema + "smtpserver", "smtp-mail.outlook.com");
     mConfig.Fields.$set("Item", schema + "smtpserverport", 587);

    // If you use Office365 --
    // mConfig.Fields.$set("Item", schema + "smtpserver", "smtp.office365.com");
    // mConfig.Fields.$set("Item", schema + "smtpserverport", 587);

    mConfig.Fields.$set("Item", schema + "smtpauthenticate", 1); // Authentication mechanism

    // User name (if needed)
    // mConfig.Fields.$set("Item", schema + "sendusername", "support@mycompany.com");

    // User password (if needed)
    // mConfig.Fields.$set("Item", schema + "sendpassword", "********");

    mConfig.Fields.Update();

    mMessage = getActiveXObject("CDO.Message");
    mMessage.Configuration = mConfig;
    mMessage.From = mFrom;
    mMessage.To = mTo;
    mMessage.Subject = mSubject;
    mMessage.HTMLBody = mBody;

    aqString.ListSeparator = ",";
    for(let i = 0; i < aqString.GetListLength(mAttach); i++)
      mMessage.AddAttachment(aqString.GetListItem(mAttach, i));
    mMessage.Send();
  }
  catch (exception)
  {
    Log.Error("Email cannot be sent", exception.message);
    return false;
  }
  Log.Message("Message to <" + mTo + "> was successfully sent");
  return true;
}

function MainTest()
{
  if (SendEmail("nath.nilim@outlook.com", "nath.nilim@gmail.com", "Subject",
             "Message body"))
    Log.Message("Email was sent")
  else
    Log.Message("Email was not sent")
}


function EventControl1_OnStopTestCase(Sender, StopTestCaseParams)
{
  Log.Warning("Warning")
}

function EventControl1_OnLogError(Sender, LogParams)
{
  Runner.Stop()
}

function System()
{
  Log.Message(Sys.OSInfo.Version);
  Log.Message(Sys.OSInfo.VirtualPC)
}