function scripting_objects()

// This object allows us to convert to various data types by using its methods

{
  str = aqConvert.VarToStr(x);  //
  str = VarToStr(x);

}

function dialog_box()
{
  NameMapping.Sys.Process("CredentialUIBroker").Popup("Windows Security").Button("OK").Click()
}


function setDataDriver(moduleName, sheetname) 
{
  if (!moduleName || !sheetname) 
  {
  throw new Error("Module name and sheet name must be provided.");
  }

  var filePath = Project.ConfigPath + aqFileSystem.IncludeTrailingBackSlash("Data") + moduleName + ".xlsx";
  var driver = DDT.ExcelDriver(filePath, sheetname, false);
  Log.Message("Driver initialized with file: " + filePath);
  return driver;
}

module.exports.setDataDriver = setDataDriver;


function TestProc()
{
  // Create a new Connection object
  var Conn = ADO.CreateConnection();
  Conn.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;" +
  "Data Source=C:\\Users\\Public\\Documents\\TestComplete 15 Samples\\Desktop\\Checkpoints\\XML\\DataGridViewSample\\OrdersDB.mdb";
  Conn.Open();
  // Create a new Recordset object
  var Rs = ADO.CreateRecordset();
  Rs.Open("orders", Conn, adOpenStatic, adLockReadOnly, adCmdTable);
  // Read data from the recordset and post them to the test log
  Log.AppendFolder("Customer names");
  Rs.MoveFirst();
  while(! Rs.EOF)
  {
    Log.Message(Rs.Fields.Item("name").Value);
    Rs.MoveNext();
  }
  // Close the recordset and connection
  Rs.Close();
  Conn.Close();
}

function TestProc_DDT()
{
 // Specify the connection string
  var ConStr = "Provider=Microsoft.Jet.OLEDB.4.0;" +
  "Data Source=C:\\Users\\Public\\Documents\\TestComplete 15 Samples\\Desktop\\Checkpoints\\XML\\DataGridViewSample\\OrdersDB.mdb";
  // Specify the name of the table
  var tName = "orders";
  // Obtain the ADO Command text
  var cText = DDT.ADODriver(ConStr, tName).ADOCommandObject.CommandText;
  // Post this command text to the test log
  Log.Message(cText);
  // Close the connection to the specified database
  DDT.ADODriver(ConStr, cText).ADOConnectionObject.Close();
}
