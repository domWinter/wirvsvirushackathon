import geopy
from geopy.geocoders import Nominatim


def getGeoLocation(street,streetNumber,city):
    geolocator = Nominatim(user_agent="google-chrome-stable")
    try:
        location = geolocator.geocode(street + " "+ streetNumber + " " + city)
        return location.latitude, location.longitude
    except:
        return 0,0




