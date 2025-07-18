
 

def Test1():
 import pyttsx3
 import math
# import win32api
# import pywintypes
 
 Log.Message('Hello, world!')
 pie = math.pi
 Log.Message("The value of pi is : ")
 Log.Message(pie)
 Log.Message("paths are")
# Log.Message(sys.path)
 engine = pyttsx3.init()
 engine.say("Avengers!!!!!! Assemble")
 engine.runAndWait()