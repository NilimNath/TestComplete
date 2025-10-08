function GetPDFText()
{
  // Extract and recognize the PDF file text content
  var path = "C:\\Users\\nilim.nath\\Downloads\\pdfprint_document.pdf"
  var str = PDF.ConvertToText(path);
  if (aqFile.Exists(path))
    Log.Message("View the recognized text in the Details panel of the log", str);
}