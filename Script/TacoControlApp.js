function navigate_to_devices()
{
  //let element = Mobile.Device("Apple iPhone 13 Pro A2483 15.1.1 -US").Process("com.tacocomfort.control").FindElementByXPath('(//*[@name=\"Saved Devices\"])[2]');
  let element = Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]")
  let element_name = element.Name;
  let element_picture = element.Picture();
  Log.Message("element_name = " + element_name);
  Log.Picture(element_picture, "Element picture for desired element");
}

function click()
{
 
 Log.Message(Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]").Name);  // Standard Name property

 
// Log.Message(Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]").Attributes.name)   // Appium Name property
 
// Log.Message(Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]").Height)
 
// Log.Message(Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]").getSize().height);
 

   
//  Log.Message(Aliases.Device.Process("com.tacocomfort.control").FindElementByXPath("(//*[@name=\"Saved Devices\"])[2]").Attributes.height)

  Project.Variables.Pwd.DecryptedValue
}