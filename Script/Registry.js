function key_update()
{
  Section = Storages.Registry("SOFTWARE\\Mozilla\\ab", HKEY_LOCAL_MACHINE);
  
  Log.Message(key);
}