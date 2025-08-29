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
  let list = Sys.Browser("chrome").Page("https://www.youtube.com/watch?v=m_GiZsR3xAM").FindElement("#watch7-content").classList;
  let name = Sys.Browser("chrome").Page("https://www.youtube.com/watch?v=m_GiZsR3xAM").FindElement("#watch7-content").className;
  Log.Message(list.item(0));
  Log.Message(list);
  Log.Message(name);
  
  Log.Message(Sys.Browser("chrome").Page("https://www.youtube.com/watch?v=m_GiZsR3xAM").FindElement("#watch7-content").classList.item(0));
}