"""This inforecon gathers the information of an website for further penetration
testing"""


import json
import socket
import sys
import requests


def CheckArgument():
    """Provide message in command line if no arguments provided"""
    if len(sys.argv) < 2:
        print('Usage:' + sys.argv[0] + '<url>')  # sys.argv[0] is name of this script
        sys.exit(1)


def GetBanner():
    """Banner Grabbing of the domain"""

    # Activating Domain Access functionality
    req = requests.get('https://' + sys.argv[1])

    # Printing the headers of the website
    print(f'\n {str(req.headers)}')


def GetHost():
    """Getting the host information"""

    global gethostby_

    # Getting the host name
    gethostby_ = socket.gethostbyname(sys.argv[1])

    # Printing the host name
    print(f'\n IP Address of {sys.argv[1]} is {gethostby_} \n')


def IPLookupPort():
    """Gets the location of the ip using an API"""
    """That API is ipinfo.io"""

    # Generally syntax..... requests.get('url', ip, format)
    req = requests.get('https://ipinfo.io/' + gethostby_ + '/json')

    # Loading the json data in text format
    response = json.loads(req.text)

    # Printing out the information from the json list
    print('Location: ' + response['loc'])
    print('Region: ' + response['region'])
    print('City:' + response['city'])
    print('Country: ' + response['country'])


if __name__ == '__main__':
    """Calling the functions"""
    CheckArgument()
    GetBanner()
    GetHost()
    IPLookupPort()
