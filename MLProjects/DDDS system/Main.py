from tkinter import *
import FacialDetection as cd
import DrowsinessDetection as dd
root= Tk()
root.geometry('500x570')
frame = Frame(root, relief=RIDGE, borderwidth=2)
frame.pack(fill=BOTH,expand=1)
root.title('Driver Cam')
frame.config(background='#4d64f7')
label = Label(frame, text="Driver Cam",font=('Times 35 bold'), bg="#4d64f7", fg="white")
label.pack(side=TOP)
filename = PhotoImage(file="images/background.png")
background_label = Label(frame,image=filename)
background_label.pack(side=TOP)

facial_button_image= PhotoImage(file="buttons/facial_detection.png")
r_facial_button_image= PhotoImage(file="buttons/r_facial_detection.png")
drowsiness_button_image= PhotoImage(file="buttons/drowsiness_detection.png")
exit_button_image= PhotoImage(file="buttons/exit.png")

but1=Button(frame,padx=5,pady=5,bg='white',fg='black',relief=GROOVE,image=facial_button_image,border=0, command= cd.webdet)
but1.place(x=150,y=176)

but2=Button(frame,padx=5,pady=5,bg='white',fg='black',relief=GROOVE,image=r_facial_button_image,border=0, command= cd.webdetRec)
but2.place(x=150,y=250)

but3=Button(frame,padx=5,pady=5,bg='white',fg='black',relief=GROOVE,image=drowsiness_button_image,border=0, command= dd.detectDrowsiness)
but3.place(x=150,y=322)

but4=Button(frame,padx=5,pady=5,bg='white',fg='black',relief=GROOVE,image=exit_button_image,border=0, command= exit)
but4.place(x=150,y=394)

root.mainloop()
