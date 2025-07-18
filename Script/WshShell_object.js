function GetProcesses()
{
  var oShell = getActiveXObject("WScript.Shell"); // Or oShell = WshShell
  var oExec = oShell.Exec("powershell -command Get-Process");
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