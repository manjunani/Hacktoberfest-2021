import tkinter as tk
from tkinter import ttk
from collections import deque
from windows import set_dpi_awareness
from frames import Timer, Settings  # user defined module
"""actually this means from frames.__init__.py import Timer"""
"""at this place you can also use from frames.timer import Timer"""
set_dpi_awareness()
# setting the colour as an constant variable
# this will make easy to change the colour later if want to do so
COLOUR_PRIMARY = "#2e3f4f"
COLOUR_SECONDARY = "#293846"
COLOUR_LIGHT_BACKGROUND = "#fff"
COLOUR_LIGHT_TEXT = "#eee"
COLOUR_DARK_TEXT = "#8095a8"


class PomodoroTimer(tk.Tk):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        style = ttk.Style(self)
        style.theme_use('clam')
        style.configure('Timer.TFrame', background=COLOUR_LIGHT_BACKGROUND)
        style.configure('Background.TFrame', background=COLOUR_PRIMARY)
        style.configure(        # style for timer element only
            'TimerText.TLabel',
            background=COLOUR_LIGHT_BACKGROUND,
            foreground=COLOUR_DARK_TEXT,
            font='Courier 38'
        )
        style.configure(        # style for general elements
            'LightText.TLabel',
            background=COLOUR_PRIMARY,
            foreground=COLOUR_LIGHT_TEXT
        )
        style.configure(       # style the button without action
            'PomodoroButton.TButton',
            background=COLOUR_SECONDARY,
            foreground=COLOUR_LIGHT_TEXT
        )
        style.map(             # style the button when mouse is over it
            'PomodoroButton.TButton',
            background=[('active', COLOUR_PRIMARY), ('disabled', COLOUR_LIGHT_TEXT)]
        )

        self['background'] = COLOUR_PRIMARY  # as our pomodoro class is tk sub class not ttk sub class

        self.title('Pomodoro Timer')
        self.geometry('500x320')
        self.resizable(False, False)
        self.columnconfigure(0, weight=1)
        self.rowconfigure(1, weight=1)

        # setting the value of the time of the each of the pomodoro
        self.pomodoro = tk.StringVar(value=25)
        self.long_break = tk.StringVar(value=15)
        self.short_break = tk.StringVar(value=5)

        # List containing the phases we want after completing of other phase
        self.timer_order = ['Pomodoro', 'Short Break', 'Pomodoro', 'Long Break']
        """ it puts the first phase of the timer_order sequence at the last
        and puts the second element from front at first...
        basically it makes cycles"""
        self.timer_schedule = deque(self.timer_order)

        # main frame consisting all the other sub frames
        container = ttk.Frame(self)
        container.grid()
        container.columnconfigure(0, weight=1)

        self.frames = dict()  # empty dictionary to store frames

        # settings frame into main frame consisting of the setting widgets
        # lambda function calls the Timer class frame over Setting class
        settings_frame = Settings(container, self, lambda: self.show_frame(Timer))
        settings_frame.grid(row=0, column=0, sticky='NSEW')

        # sub frame into the main frame, timer_frame consist of the widgets
        # lambda function calls the Settings class frame over Timer class
        timer_frame = Timer(container, self, lambda: self.show_frame(Settings))
        timer_frame.grid(row=0, column=0, sticky='NSEW')

        # assigning frames as value to the class as key in the frames dictionary
        self.frames[Settings] = settings_frame
        self.frames[Timer] = timer_frame

        # calling show_frame method to show the default frame
        self.show_frame(Timer)

    def show_frame(self, container):
        frame = self.frames[container]  # assigning the current frame to the frame variable
        frame.tkraise()     # raising the current frame


if __name__ == '__main__':
    app = PomodoroTimer()
    app.mainloop()
