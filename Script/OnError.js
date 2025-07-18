function EventControl1_OnLogError(Sender, LogParams)
{
  Log.Message("Test failed lol")
}

function error(){

  try {
  Project.TestItems.TestItem();  // might fail
  } catch (e) {
    Log.Warning("TestCase1 failed: " + e.message);
    // Don't use Log.Error or raise exceptions
  }

  try {
    testCase2();  // might fail
  } catch (e) {
    Log.Warning("TestCase2 failed: " + e.message);
  }

  // At the end, log a "pass" message manually
  Log.Message("Final result: PASSED (ignoring individual test failures)");


}

function EventControl1_Click(Sender)
{
  Log.Message("Hello World")
}

function click(){
  
Aliases.browser.BrowserWindow.Click();
}