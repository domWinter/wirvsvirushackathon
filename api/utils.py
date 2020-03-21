import geopy
from geopy.geocoders import Nominatim


def getLocation(street,streetNumber,city):

    geolocator = Nominatim(user_agent="google-chrome-stable")
    location = geolocator.geocode(street + " "+ streetNumber + " " + city)
    return location.latitude, location.longitude





