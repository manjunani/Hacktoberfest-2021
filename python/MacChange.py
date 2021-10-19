# MAC Changer Snippet

import random


def GetRand():
    """Generate random sequence from the choices given"""
    return random.choice('abcdef0123456789')


def NewMac():
    """Generate New MAC Address"""
    new_ = ''
    for i in range(0, 5):
        new_ += GetRand() + GetRand() + ':'

    new_ += GetRand() + GetRand()

    return new_


def ChangeLinux():
    """Assign new MAC Address to Linux System"""
    pass


def ChangeWindows():
    """Assign new MAC Address to Window System"""
    pass


if __name__ == '__main__':
    GetRand()
    NewMac()
