"""Importing all the relevant modules"""
import tkinter as tk
from tkinter import ttk
import time

"""Importing the Dpi awareness methods into the try exception block for error handling and making tha app cross platform 
 compatible"""
try:
    from ctypes import windll
    windll.shcore.SetDpiAwareness(1)
except Exception as e:
    pass

"""Making our app class which inherits properties from parent class tk.Tk"""


class App(tk.Tk):
    """def __init__(self) method receives the object whose properties this class describes and it denotes that now
    we are going to define the properties of that object in this class"""
    def __init__(self):
        """super method is used to pass the values to the super class which we have modified for our class fo the properties
        inherited from parent/super class"""
        super().__init__()
        """setting the different properties of our app object which in general is denoted by self by convention to make 
        code reusable"""
        self.title('Digital Clock')
        self.geometry('290x70')
        self.resizable(False, False)

        """creating our clock label and setting its properties and the griding it"""
        clock_label = ttk.Label(self, font=('calibri', 40, 'bold'),
                                background='yellow', foreground='black')
        clock_label.grid(row=0, column=0)

        """making our tick method which will fetch the system time and then convert it into string
        and then set that time into label after every 100 milli second by calling this function again and again 
        using the after method"""
        def tick():
            set_time = time.strftime('%H:%M:%S:%p')
            clock_label.config(text=set_time)
            clock_label.after(100, tick)

        tick() # calling the tick function


"""creating main method to call our classes and make our app"""
if __name__ == '__main__':
    """making our app named digiclock using the App class which inherited some properties from the super class tk.Tk 
    which we modified"""
    digiclock = App()
    """running our app endlessly by attaching it the mainloop method"""
    digiclock.mainloop()
    