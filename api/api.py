from flask import Flask, request

app = Flask(__name__)


mockHospitals = [

    { 'id': 0, 'name':  "München Klinik Neuperlach",
      'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81373", 'street' : "Oskar-Maria-Graf-Ring", 'streetNumber': "51"},
      'phoneNumber' : '08967940',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/neuperlach/',
      'location': {'latitude': 48.094510, 'longitude' : 11.656720},
      'beds': { 'iculc': 500, 'icuhc': 40, 'ecmo': 20}},

    { 'id': 1, 'name':  "München Klinik Bogenhausen",
      'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "81925", 'street' : "Englschalkinger Str.", 'streetNumber': "77"},
      'phoneNumber' : '08992700',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/bogenhausen/',
      'location': {'latitude': 48.155404, 'longitude': 11.624846},
      'beds': { 'iculc': 600, 'icuhc': 30, 'ecmo': 10}},


    { 'id': 2, 'name':  "München Klinik Schwabing",
      'address': {'state' : "Bayern" , 'city' : "München", 'postcode': "80804", 'street' : "Kölner Pl.", 'streetNumber': "1"},
      'phoneNumber' : '08930680',
      'website' : 'https://www.muenchen-klinik.de/krankenhaus/schwabing/',
      'location': {'latitude': 48.171982, 'longitude' : 11.578332},
      'beds': { 'iculc': 300, 'icuhc': 20, 'ecmo': 5}}
]

@app.route('/add/hospital', methods=['POST'])
def addHospital():
    return {'success': True}, 200

@app.route('/hospitals', methods=['GET'])
def getHospitals():
    return {'hospitals': mockHospitals}, 200

@app.route('/hospital', methods=['GET'])
def getHospitalByID():
    requestHospitalID = int(request.args.get('id'))
    hospital = {}

    for hospital in mockHospitals:
        if hospital['id'] == requestHospitalID:
            return hospital, 200

    return {'hospital': {}}, 404
