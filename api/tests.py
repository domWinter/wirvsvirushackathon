import requests


def testHospitalAdd():
    hospital = { 'name': "München Klinik Bogenhausen",
                'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81925", 'street' : "Englschalkinger Str.", 'streetNumber': "77"},
                'phoneNumber' : '08992700',
                'website' : 'https://www.muenchen-klinik.de/krankenhaus/bogenhausen/',
                'beds': { 'iculc': 600, 'icuhc': 30, 'ecmo': 10}}

    r = requests.post("http://127.0.0.1:5000/hospital/add", json={'data': hospital})
    print(r.status_code, r.reason)

def testHospitals():
    r = requests.get("http://127.0.0.1:5000/hospitals")
    print(r.status_code, r.reason)
    print(r.text)

def testHospital(id):
    r = requests.get("http://127.0.0.1:5000/hospital" + "?id=" + str(id))
    print(r.status_code, r.reason)
    print(r.text)


testHospital(1)