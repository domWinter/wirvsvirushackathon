import json

class Hospital:
    def __init__(self, name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude):
        self.name = name
        self.address = { 'state':state, 'city':city, 'postcode':postcode, 'street':street, 'streetNumber': streetNumber }
        self.phoneNumber = phoneNumber
        self.website = website
        self.location = { 'latitude' : latitude, 'longitude' : longitude }

    def getJson(self):
        return json.dumps({ 'name':  self.name,
                            'address': self.address,
                            'phoneNumber' : self.phoneNumber,
                            'website' : self.website,
                            'location' :  self.location
                         })

    def getDict(self):
        return { 'name':  self.name,
                 'address': self.address,
                 'phoneNumber' : self.phoneNumber,
                 'website' : self.website,
                 'location' :  self.location
               }

    