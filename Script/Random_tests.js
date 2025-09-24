function system_tray_icon ()
{
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Windows_UI_Input_InputSite_WindowClass.Show_Hidden_Icons.Click();
  
  Sys.Process("explorer").Window("TopLevelWindowForOverflowXamlIsland", "System tray overflow window.", 1).UIAObject("DesktopWindowXamlSource").UIAObject("Windows.UI.Input.InputSite.WindowClass").UIAObject("Zoom_not_signed_in_Zoom_Workplace").UIAObject("Image").ClickR();
}