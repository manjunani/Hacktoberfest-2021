import tkinter as tk
from tkinter import ttk
from collections import deque


class Timer(ttk.Frame):
    """parent is the frame which contains the timer frame self is the object whose properties are being created
    and controller is the class whose properties are inherited....tk.Frame properties are also inherited"""
    def __init__(self, parent, controller, show_settings):
        super().__init__(parent)

        self['style'] = 'Background.TFrame'

        # setting the object as the controller
        self.controller = controller
        pomodoro_time = int(controller.pomodoro.get())
        # variable to hold the current time with default value
        self.current_time = tk.StringVar(value=f'{pomodoro_time:02d}:00')

        # variable to hold the current phase of the timer_Schedule
        self.current_timer_label = tk.StringVar(value=controller.timer_schedule[0])
        # timer_running variable with boolean value false as timer is initially off
        # it will start after clicking start button
        self.timer_running = False
        # private variable to stop the execution of after method in decrement method
        self._timer_decrement_job = None
        # label showing the current phase
        timer_description = ttk.Label(
            self,
            textvariable=self.current_timer_label,
            style='LightText.TLabel'
        )
        timer_description.grid(row=0, column=0, sticky='W', padx=(10, 0), pady=(10, 0))

        # button to witch frame from timer to settings frame
        settings_button = ttk.Button(
            self,
            text='Settings',
            command=show_settings,
            style='PomodoroButton.TButton',
            cursor='hand2'
        )
        settings_button.grid(row=0, column=1, sticky='E', padx=10, pady=10)

        timer_frame = ttk.Frame(self, height='100', style='Timer.TFrame')
        timer_frame.grid(row=1, column=0, columnspan=2, pady=(10, 0), sticky='NSEW')

        # counter label in timer_frame
        timer_counter = ttk.Label(timer_frame,
                                  textvariable=self.current_time,
                                  style='TimerText.TLabel',
                                  )
        timer_counter.place(relx=0.5, rely=0.5, anchor='center')  # positioning method like grid

        # Button containing frame
        button_container = ttk.Frame(self, padding=100, style='Background.TFrame')
        button_container.grid(row=2, column=0, columnspan=2, sticky='EW')
        button_container.columnconfigure((0, 1, 2), weight=1)

        self.start_button = ttk.Button(
            button_container,
            text='Start',
            command=self.start_timer,
            style='PomodoroButton.TButton',
            cursor='hand2'   # change the appearance of cursor on the button
        )
        self.start_button.grid(row=0, column=0, sticky='EW')

        self.stop_button = ttk.Button(
            button_container,
            text='Stop',
            state='disabled',  # initially off
            command=self.stop_timer,
            style='PomodoroButton.TButton',
            cursor='hand2'

        )
        self.stop_button.grid(row=0, column=1, sticky='EW', padx=5)
        """self not used with reset_button and rest_timer because we don't want to use them out of this class"""
        reset_button = ttk.Button(
            button_container,
            text='Reset',
            command=self.reset_timer,
            style='PomodoroButton.TButton',
            cursor='hand2'
        )
        reset_button.grid(row=0, column=2, sticky='EW')

    def start_timer(self):
        self.timer_running = True    # setting the timer status on after clicking start
        self.start_button['state'] = 'disabled'  # disables the start button after start of timer
        self.stop_button['state'] = 'enabled'  # enable the stop button after start of timer which was initially disable
        self.decrement_time()

    def stop_timer(self):
        self.timer_running = False  # on click of stop ,off the timer
        self.stop_button['state'] = 'disabled'  # disables the stop button after the click
        self.start_button['state'] = 'enabled'  # enables the start button after the start of button
        if self._timer_decrement_job:    # when the _timer_decrement_job found
            self.after_cancel(self._timer_decrement_job)   # cancel the further execution
            self._timer_decrement_job = None  # set the value of the _timer_decrement_job to None

    def reset_timer(self):
        self.stop_timer()
        pomodoro_time = int(self.controller.pomodoro.get())  # getting value of pomodoro time from pomodoro class
        self.current_time.set(f'{pomodoro_time:02d}:00')  # set the current time to 25 after click of button
        self.controller.timer_schedule = deque(self.controller.timer_order)   # change  timer schedule to initial state
        self.current_timer_label.set(self.controller.timer_schedule[0])  # update timer label with first value of queue

    def decrement_time(self):
        """This function reducing or updating the label every second"""
        current_time = self.current_time.get()

        if self.timer_running and current_time != '00:00':  # timer is running
            minutes, seconds = current_time.split(':')  # splitting the string values into two variables

            if int(seconds) > 0:  # never let seconds be negative
                seconds = int(seconds)-1
                minutes = int(minutes)
            else:                 # sets the timer to max after reaching zero
                seconds = 59
                minutes = int(minutes)-1

            # setting the label value
            self.current_time.set(f'{minutes:02d}:{seconds:02d}')
            # calling the decrement function repeatedly after a second
            self._timer_decrement_job = self.after(1000, self.decrement_time)
        elif self.timer_running and current_time == '00:00':
            self.controller.timer_schedule.rotate(-1)  # rotate the list in reverse
            next_up = self.controller.timer_schedule[0]  # put the last element at first
            # variable constantly updating the phase of scheduler after each phase changes
            self.current_timer_label.set(next_up)
            # checking which element is now at first position in task_order
            # setting the current time accordingly
            if next_up == 'Pomodoro':
                pomodoro_time = int(self.controller.pomodoro.get())
                self.current_time.set(f'{pomodoro_time:02d}:00')
            elif next_up == 'Short Break':
                short_break_time = int(self.controller.short_break.get())
                self.current_time.set(f'{short_break_time:02d}:00')
            elif next_up == 'Long Break':
                long_break_time = int(self.controller.long_break.get())
                self.current_time.set(f'{long_break_time:02d}:00')

            self._timer_decrement_job = self.after(1000, self.decrement_time)
