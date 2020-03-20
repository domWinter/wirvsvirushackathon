from flask import Flask, request

app = Flask(__name__)

mockBedlists = [ { 'id' : 0,
                  'beds' : [ { 'id' : 0, 'ventilator': True, 'intensive': True, 'free': True },
                             { 'id' : 1, 'ventilator': False, 'intensive': False, 'free': False },
                             { 'id' : 2, 'ventilator': True, 'intensive': False, 'free': False },
                             { 'id' : 3, 'ventilator': True, 'intensive': True, 'free': False }]
                },
                { 'id' : 1,
                  'beds' : [ { 'id' : 0, 'ventilator': True, 'intensive': True, 'free': True },
                             { 'id' : 1, 'ventilator': True, 'intensive': False, 'free': True },
                             { 'id' : 2, 'ventilator': True, 'intensive': False, 'free': True },
                             { 'id' : 3, 'ventilator': True, 'intensive': False, 'free': False }]
                },
                { 'id' : 2,
                  'beds' : [ { 'id' : 0, 'ventilator': True, 'intensive': True, 'free': False },
                             { 'id' : 1, 'ventilator': False, 'intensive': True, 'free': False },
                             { 'id' : 2, 'ventilator': True, 'intensive': True, 'free': False },
                             { 'id' : 3, 'ventilator': True, 'intensive': True, 'free': False }]
                }]


mockHospitals = [

    { 'id': 0, 'name':  "München Klinik Neuperlach", 
      'address': {'state' : "Bayern" , 'city' : "München", 'plz': 81373, 'street' : "Oskar-Maria-Graf-Ring", 'streetNumber': "51"},
      'phoneNumber' : '08967940',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/neuperlach/',
      'location': {'latitude': 48.094510, 'longitude' : 11.656720},
      'bedListID': 0},

    { 'id': 1, 'name':  "München Klinik Bogenhausen", 
      'address': {'state' : "Bayern" , 'city' : "München", 'plz': 81925, 'street' : "Englschalkinger Str.", 'streetNumber': "77"},
      'phoneNumber' : '08992700',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/bogenhausen/',
      'location': {'latitude': 48.155404, 'longitude': 11.624846},
      'bedListID': 1},


    { 'id': 2, 'name':  "München Klinik Schwabing", 
      'address': {'state' : "Bayern" , 'city' : "München", 'plz': 80804, 'street' : "Kölner Pl.", 'streetNumber': "1"},
      'phoneNumber' : '08930680',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/schwabing/',
      'location': {'latitude': 48.171982, 'longitude' : 11.578332},
      'bedListID': 2}
]

@app.route('/hospitals', methods=['GET'])

def getHospitals():
    
    return {'hospitals': mockHospitals}, 200

@app.route('/hospital/beds', methods=['GET'])
def getBedsByHospital():
    data = request.get_json()
    requestHospitalID = data['id']

    bedList = {}
    bedListID = ''

    for hospital in mockHospitals:
        if hospital['id'] == requestHospitalID:
            bedListID = hospital['bedListID']
            break

    for bedlist in mockBedlists:
        if bedlist['id'] == bedListID:
            bedList = bedlist
            break

    return {'bedList' : bedList}
