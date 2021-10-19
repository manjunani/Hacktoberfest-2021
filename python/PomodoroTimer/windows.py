# noinspection PyBroadException
def set_dpi_awareness():
    try:
        from ctypes import windll
        windll.shcore.SetDpiAwareness(1)
    except Exception:
        pass
