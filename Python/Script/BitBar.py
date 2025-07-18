def selenium():
  capabilities = {
      "platform": "Windows", 
      "osVersion": "10", 
      "browserName": "Firefox", 
      "version": "126", 
      "resolution": "1920x1080"
  }
  server = "https://us-west-desktop-hub.bitbar.com/wd/hub"
  Browsers.RemoteItem[server, capabilities].Run("https://www.google.com.au")
  
def BitBar():
  # This code is supported by Selenium Python Client up to 4.9.0 version.
  capabilities = {
  	'platformName': 'Windows',
  	'browserName': 'firefox',
  	'browserVersion': '126',
  	'bitbar:options': { 
  		'apiKey': 'iBBfCivPU7EUvYSYdJaExVXrsAk7QJ62',
  		'osVersion': '11',
  		'resolution': '1920x1080',
  		'seleniumVersion': '4',
  	}
  }
  
  server = "https://us-west-desktop-hub.bitbar.com/wd/hub"
  Browsers.RemoteItem[server, capabilities].Run("https://www.google.com.au")
  
