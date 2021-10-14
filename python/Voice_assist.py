from Package import *                                                                         # importing packages from Package.py file
from Speak import *                                                                           # importing speak() function from Speak.py
from CPU import *                                                                             # importing cpu() function from CPU.py
from DateTime import *                                                                        # importing date() and time() from DateTime.py
from Jokes import *                                                                           # importing jokes() from Jokes.py
from ScreenShot import *                                                                      # importing screenshot() from Screenshot.py
from SendMail import *                                                                        # importing sendMail() from SendMail.py
from TakeCommand import *                                                                     # importing takeCommand() from TakeCommand.py
from Hour import *                                                                            # importing hour() from Hour.py 


# If you need complete code in a single file then go to "Assistant.py" in this directory.
# If you want to run the code in your machine, then install all the packages from Package.py file and cross-check whether all the packages are installed correctly.

if __name__ == "__main__":                                                                    # main function of the project.                                               
    while True:
        query = takeCommand().lower()

        if 'time' in query:                                                                   # if there is a word 'time' in the query, then it will call the time().
            time()

        elif 'date' in query:                                                                 # It will call date() when there is a word 'date' in your query.
            date()

        elif 'wikipedia' in query:                                                            # it will search on wikipedia without any opening of browser.
            speak("Searching..")
            query = query.replace("wikipedia", "")
            result = wikipedia.summary(query, sentences=2)
            print(result)
            query(result)

        elif 'send mail' in query:                                                            # sendMail() excutes from the SendMail.py file
            try:
                speak("What should I say? ")
                content = takeCommand()
                to = 'mahendrasaikumargandham@gmail.com'
                # sendEmail(to, content)
                speak(content)
                speak("E mail has been sent!")
            except Exception as e:
                print(e)
                speak("Unable to send Email, Please Check your internet connection")

        elif 'search in chrome' in query:                                                      # It will opens the chrome and search for the results.
            speak("What should I search?")
            chromepath = 'C:/Programming Files (x86)/Google/Chrome/Application/chrome.exe %s'  # if it does not opens, then check the path and recorrect with your own path.
            search = takeCommand().lower()
            wb.get(chromepath).open_new_tab(search)

        elif 'logout' in query:                                                                # It will logout if you give logout as a word input
            os.system("Shutdown -l")

        elif 'shutdown' in query:                                                              # It will shutdown the system. Make sure that all the data is saved in your computer if you want to shutdown the computer.
            os.system("Shutdown /s /t 1")                                                      # try at your own risk, because some data may not come back after the shutdown process.

            elif 'restart' in query:                                                           # It will restart the computer if you give restart as the command.
            os.system("Shutdown /r /t 1")

        elif 'play songs' in query:
            songs_dir = 'D:\\Music'                                                            # in songs_dir variable you can add your own path of music.
            songs = os.listdir(songs_dir)
            os.startfile(os.path.join(songs_dir, songs[0]))
            
                                                                                               # create a new file named "data.txt" and place the file in the same directory.
        elif 'remember that' in query:
            speak("What should I remember? ")
            data = takeCommand()
            speak("you said me to remember "+data)
            remember = open('data.txt', 'w')
            remember.wriet(data)
            remember.close()                                                                    

        elif 'do you know' in query:                                                           # If there is a command 'do you know', then it will check if there is anything saved in the data.txt file
            remember = open('data.txt', 'r')                                                   # If there is anything in the file, then it will speak out the saved ones.
            speak("You said me to remember that"+remember.read())                                   

        elif 'screenshot' in query:                                                             # It will take the screenshot and saves the screenshot in the same directory.
            screenshot()
            speak("Screenhot taken")

        elif 'cpu' in query:                                                                    # speaks the state of CPU in your computer.
            cpu()

        elif 'joke' in query:                                                                   # speaks a random joke from pyjokes package in Package.py file
            jokes()

        elif 'offline' in query:                                                                # quits the program when there is a word 'offline' in your query.
            quit()
