import requests


def testHospitalAdd():
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

    r = requests.post("http://127.0.0.1:5000/hospital/add", json={'data': hospital1})
    print(r.status_code, r.reason)

def testHospitals():
    r = requests.get("http://127.0.0.1:5000/hospitals")
    print(r.status_code, r.reason)
    print(r.text)

def testHospital(id):
    r = requests.get("http://127.0.0.1:5000/hospital" + "?id=" + str(id))
    print(r.status_code, r.reason)
    print(r.text)


testHospitals()