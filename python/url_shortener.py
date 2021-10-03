import pyshorteners

url=input("Enter URL :\n")

print("URL after Shortening:",pyshorteners.Shortener().tinyurl.short(url))
