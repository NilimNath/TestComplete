function bat_file()
{
// Run one command
//WshShell.Run("powershell -command echo start runHelloWorld.bat");
Aliases.Device.processBitbarTestdroidBitbarIOSSample.textFieldUserName.Click();

}
bat_file();


function GetProcesses()
{
  var oShell = getActiveXObject("WScript.Shell"); // Or oShell = WshShell
  //var oExec = oShell.Exec("powershell -command echo start runHelloWorld.bat");
    var oExec = oShell.Exec("powershell -command cd C:/Users dir");
    
    oExec = oShell.Exec("powershell -command dir");


  //var oExec = oShell.Exec("powershell -command ipconfig");
  
  oExec.StdIn.Close(); // Close standard input before reading output
  
  // Get PowerShell output
  var strOutput = oExec.StdOut.ReadAll();
  // Trim leading and trailing empty lines
  strOutput = aqString.Trim(strOutput, aqString.stAll);

  // Post PowerShell output to the test log line by line
  aqString.ListSeparator = "\r\n";
  for (var i = 0; i < aqString.GetListLength(strOutput); i++)
  {
    Log.Message(aqString.GetListItem(strOutput, i));
  }
}

function turn_off_thing()
{  

  var w3schools = Sys.Browser("chrome").Page("file:///C:/Users/nilim.nath/OneDrive%20-%20SmartBear%20Software,%20Inc/Desktop/index.html");
  
  w3schools.contentDocument.Script.eval("document.getElementById('overlay').style.display = 'block'");  //turns on the overlay effect
  
  Delay(5000);
  
  w3schools.contentDocument.Script.eval("document.getElementById('overlay').style.display = 'none'");   //turns off the overlay effect

}

function ok(){
  
BuiltIn.ShowMessage("Okay")
}