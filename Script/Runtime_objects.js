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