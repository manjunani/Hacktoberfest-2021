import pyautogui, time

time.sleep(10)
f = open("svm.txt", 'r')
for word in f:
    pyautogui.typewrite(word)
    pyautogui.press("enter")
    time.sleep(1)
