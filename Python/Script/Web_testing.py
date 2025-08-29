def web_test():
  
  Browsers.Item[btEdge].Run("https://smartbearstore.smartbear.com/samples/TestComplete15/smartstore/")    #Opens MS Edge and navigates to the SmartBear store
  
  Delay(1000)
  
  object = Sys.Browser().Page("https://smartbearstore.smartbear.com/samples/TestComplete15/smartstore/").FindElement("//article[contains(., 'Gaming')]")    #fetches the object name
  
  class_name = object.className   #stores the class name
  
  Log.Picture(object.picture(), "Check the image of the object in the picture panel below")   #logs the image of the object
  
  Log.Message("Class name of 'Gaming' is: " + class_name)   #logs the class name
  
  Sys.Browser("edge").Close()    #Closes the browser
