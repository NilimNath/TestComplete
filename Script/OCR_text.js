function OCRRightClick()
{
  Browsers.Item(btEdge).Run("https://bearstore-testsite.smartbear.com/");
    OCR.Recognize(Aliases.browser.page.header.navBooks.textnodeWatches.linkWatches).BlockByText("Watches").ClickR(600, 5);
}