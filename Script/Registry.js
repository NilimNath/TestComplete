function key_update() //does not work lol
{
  let key, i, valueName; 
  key = Storages.Registry("\\SOFTWARE\\Mozilla\\Firefox\\TaskBarIDs", HKEY_LOCAL_MACHINE, AQRT_32_BIT, false);
  
  valueName =key.OptionExists("test");
  
  Log.Message(valueName);
  let name = key.GetOption("test","60"); //works
  
  let section_names = key.GetSectionNames();
  
  Log.Message(key.SubSectionExists("TaskBarIDs"));
  let value = key.GetOptionNames(); //works

//  let value = key.OptionExists("test");
  
  Log.Message(value);
  Log.Message(name);
   
  Log.Message("Section names are: " + section_names);
  Log.Message("Option names are: " + value);
  
}

function Test()
{

  var Key, Name, SubKeys, Count;
  // Gets an object for the Windows system registry key
  Key = Storages.Registry("\\SOFTWARE\\Mozilla", HKEY_CURRENT_USER, AQRT_32_BIT, false)
  Name = Key.Name;
  // Determines how many keys the current key contains
  Count = Key.SectionCount;
  if (Count > 0)

    {
    // Gets the names of the keys and posts them to the Details panel
    SubKeys = Key.GetSectionNames();
    Log.Message("The " + Name + " registry key contains the following subkeys:", SubKeys);
    }

}