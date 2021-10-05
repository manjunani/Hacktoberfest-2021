import phonenumbers
print('Phone Number\'s Location and Service Provider Finder\n\n')
print('Enter your phone number along with your country code.\ne.g. +911234567890')
number = input('Number : ')
from phonenumbers import geocoder
var = phonenumbers.parse(number, "CH")
print(geocoder.description_for_number(var, "en"))

from phonenumbers import carrier
service_nmber = phonenumbers.parse(number, "RO")
print(carrier.name_for_number(service_nmber, "en"))
