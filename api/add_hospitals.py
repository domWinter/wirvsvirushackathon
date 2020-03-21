import requests

def testHospitalAdd():
        '''
        hospital1 = { 'name': "München Klinik Bogenhausen",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81925", 'street' : "Englschalkinger Str.", 'streetNumber': "77"},
                    'phoneNumber' : '08992700',
                    'website' : 'https://www.muenchen-klinik.de/krankenhaus/bogenhausen/',
                }

        hospital2 = { 'name':  "München Klinik Neuperlach",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81373", 'street' : "Oskar-Maria-Graf-Ring", 'streetNumber': "51"},
                    'phoneNumber' : '08967940',
                    'website' : 'https://www.muenchen-klinik.de/krankenhaus/neuperlach/',
                }

        hospital3 = { 'name':  "München Klinik Schwabing",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "80804", 'street' : "Kölner Pl.", 'streetNumber': "1"},
                    'phoneNumber' : '08930680',
                    'website' : 'https://www.muenchen-klinik.de/krankenhaus/schwabing/'
                    }
        hospital5 = { 'name':  "Klinikum rechts der Isar",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81675", 'street' : "Ismaninger Str.", 'streetNumber': "22"},
                    'phoneNumber' : '08941400',
                    'website' : 'https://https://www.mri.tum.de/'
                    }
        hospital6 = { 'name':  "Krankenhaus Neuwittelsbach",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "80639", 'street' : "Renatastraße", 'streetNumber': "71A"},
                    'phoneNumber' : '08913040',
                    'website' : 'https://www.krankenhaus-neuwittelsbach.de/'
                    }
                    '''
        hospital4 = { 'name':  "Rotkreuzklinikum München",
                    'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "80634", 'street' : "Nymphenburger Str.", 'streetNumber': "163"},
                    'phoneNumber' : '08913030',
                    'website' : 'https://www.rotkreuzklinikum-muenchen.de/'
                    }

        

        r = requests.post("http://127.0.0.1:5000/hospital/add", json={'data': hospital4})
        print(r.status_code, r.reason)



if __name__ == '__main__':
    testHospitalAdd()
