import psutil

proc_name = input('Enter a process name (like chrome.exe): ')
for proc in psutil.process_iter():
    if proc.name() == proc_name:
        print(f"Killing process, with pid {proc.pid}")
        proc.kill()