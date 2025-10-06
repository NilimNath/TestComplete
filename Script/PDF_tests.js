function getText()
{
  var text = PDF.ConvertToText("C:\Users\nilim.nath\Downloads\pdfprint_document.pdf");
  
//  Log.Message(text);
  if (text.BlockCount > 0)
        {
          Log.AppendFolder("Recognized text by blocks");
          for (var i = 0; i < text.BlockCount; i++)
          {
            Log.Message(text.Block(i).Text);
          }
          Log.PopLogFolder();
        }
  
  
  var image = OCR.Recognize(Sys.Browser("chrome").Page("file:///C:/Users/nilim.nath/Downloads/pdfprint_document.pdf"));
  
  Log.Message(image.AsTable());
}
