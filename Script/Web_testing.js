function no_Xpath()
{
 let object = Sys.Browser("firefox").Page("https://www.w3schools.com/js/default.asp").Panel("belowtopnav").Panel(0).Panel("main").Panel(2).Panel(0);
 //object.HoverMouse();
 
 let result = object.FindChild("nodeType", 1, 7);
 //result.HoverMouse();
 if (result.Exists == false)
  Log.Message("No object found")
}

function test()
{
  Aliases.browser.pageGoogle2.formSearch.submitbuttonGoogleSearch.Click();
}