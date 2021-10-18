import onetimepad
from tkinter import *

root=Tk()
root.title("Cryptography App")

def encrypt_message():
    a=var.get()
    et=onetimepad.encrypt(a,"Kolkata")
    e2.delete(0,END)
    e2.insert(END,et)

def decrypt_message():
    a=var2.get()
    dt=onetimepad.decrypt(a,"Kolkata")
    e4.delete(0,END)
    e4.insert(END,dt)

l1=Label(root,text="Plain Text")
l1.grid(row=0, column=0)

var=StringVar()
e1=Entry(root,textvariable=var)
e1.grid(row=0, column=1)

l2=Label(root,text="Encrypted Text")
l2.grid(row=1, column=0)

e2=Entry(root)
e2.grid(row=1, column=1)

b=Button(root,text="Encrypt",command=encrypt_message)
b.grid(row=0,column=2)

l3=Label(root,text="Encrypted Text")
l3.grid(row=0, column=3)

var2=StringVar()
e3=Entry(root,textvariable=var2)
e3.grid(row=0, column=4)

l4=Label(root,text="Plain Text")
l4.grid(row=1, column=3)

e4=Entry(root)
e4.grid(row=1, column=4)

b2=Button(root,text="Decrypt",command=decrypt_message)
b2.grid(row=0,column=5)

root.mainloop()
