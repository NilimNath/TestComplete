

function Alert_Demo()
{
  var url = "http://secure.smartbearsoftware.com/samples/testcomplete15/dialogs/";
  Browsers.Item(btEdge).Navigate(url);

  var page = Sys.Browser().Page("*smartbear*/samples/testcomplete*/dialogs/");
  var link = page.FindElement("//a[contains(text(),'Show Alert')]");
  link.Click();

  Log.Message("Alert text: " + page.Alert.Message);
  page.Alert.Button("OK").Click();
}

function clear_cache()
{
  Aliases.browser.Page("https://fnz.bitbar.com/#testing/device-session/25/113/2174").cache.delete();
}

function jnlp()
{
  // Add a Java Web Start application to the project
  var ind = TestedApps.AddJavaWebStartApp();
  var app = TestedApps.Items(ind);
  
  var path = "https://docs.oracle.com/javase/tutorialJWS/samples/deployment/dynamictree_webstartJWSProject/dynamictree_webstart.jnlp";
  // Specify Web Start application's launch parameters
  app.JWSLauncher= "C:\\Program Files\\Java\\jre1.8.0\\Bin\\javaws.exe";
  app.Location = path;
//  app.Location = "https://docs.oracle.com/javase/tutorialJWS/samples/deployment/dynamictree_webstartJWSProject/dynamictree_webstart.jnlp";
  // Launches the Web Start application
  app.Run();
  // Test the application
}
