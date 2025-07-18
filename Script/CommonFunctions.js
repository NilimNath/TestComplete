function NavigateBack() {
Aliases.browser.BrowserWindow.Keys("~[Left]");
Log.Message("clicked Back button in browser");
}

function scroll() {
Aliases.browser.pageDigitalsolution.buttonDateRange.scrollIntoView();
Log.Message("Scrolled to view DateRange button");
}

function mouseWheelOnCanvas(index) {
Aliases.browser.pageDigitalsolution.FindElement("//canvas").MouseWheel(index);
}

function sendKeys(keyword) {
Sys.Keys(keyword);
}

function main(){
  sendKeys(keyword);
}