from gtts import gTTS 
import os

def speak(str):
	#from win32com.client import Dispatch
	#from toga-win32.client import Dispatch
	language = 'en'
	speech = gTTS(text = str, lang = language, slow = False)
	speech.save('text.mp3')
	os.system('start text.mp3')
	
if __name__ =='__main__':
	b=input("ENTER A STRING:")
	speak(b)