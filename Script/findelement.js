function run (){
 var element =  Aliases.browser.pageGoogle.formSearch.submitbuttonIMFeelingLucky.FindElements("//div[3]/center/input[@name='btnI']");
 Log.Message(element) 
}

function Test()
{

  var page = Aliases.browser.Page("https://www.google.com/");

  //var textbox = page.FindElement("//form/input[@id='instasearch']");
  var textbox = page.FindElement("//div[4]/center/input[contains(@name, 'btnI')]");
  Aliases.browser.pageGoogle3.FindElement();
  
  Log.Message(textbox);
  
  
}

function mapp()
{
  Aliases.bdcam.wndBandicam2x.dlgOpen.Click();
}
