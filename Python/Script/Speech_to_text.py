import wave
import sys
import pyttsx3
import math
import pyaudio

import whisper

def Test6():
    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1 if sys.platform == 'darwin' else 2
    RATE = 44100
    RECORD_SECONDS = 15
    
    with wave.open('output1.wav', 'wb') as wf:
        p = pyaudio.PyAudio()
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(p.get_sample_size(FORMAT))
        wf.setframerate(RATE)
    
        stream = p.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True)
    
        Log.Message('Recording...')
        for _ in range(0, RATE // CHUNK * RECORD_SECONDS):
            wf.writeframes(stream.read(CHUNK))
        Log.Message('Done')
    
        stream.close()
        p.terminate()
    
    model = whisper.load_model("base")
    result = model.transcribe("C://Users//nilim.nath//Documents//TestComplete 15 Projects//SpeechE2E//SpeechExample//output1.wav")
    Log.Message(result["text"])