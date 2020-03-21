import os
import json
import psycopg2
import databaseUtils
from flask import Flask, request, jsonify
from geoUtils import getGeoLocation

app = Flask(__name__)

PASSWORD = os.getenv('PASSWORD') 

try:
    conn = psycopg2.connect(database = "wirvsvirushackathon", 
                            user = "app@postgres-wirvsvirushackathon", 
                            password = PASSWORD, 
                            host = "postgres-wirvsvirushackathon.postgres.database.azure.com", 
                            port = "5432")
except:
    print("Unable to connect to the database") 
    os._exit(0)

cur = conn.cursor()


@app.route('/hospitals', methods=['GET'])
def getHospitals():

    hospitalsSQL = databaseUtils.getAllHospitals(conn)
    if hospitalsSQL is None:
        return json.dumps({"data" : []}), 500, {'ContentType':'application/json'}

    hospitals = []

    try:
        for row in hospitalsSQL:
            hospitals.append({'id' : int(row[0]), 
                              'name': str(row[1]),
                              'address' : {'state' : str(row[2]), 
                                           'city' : str(row[3]), 
                                           'postcode': str(row[4]), 
                                           'street' : str(row[5]), 
                                           'streetNumber': str(row[6])
                                           },
                              'phoneNumber' : str(row[7]),
                              'website' : str(row[8]),
                              'location' : { 'latitude' : str(row[9]), 
                                             'longitude' : str(row[10]) 
                                           }
                            }) 
    except:
        return json.dumps({"data" : []}), 500, {'ContentType':'application/json'}

    return json.dumps({"data" : hospitals}), 200, {'ContentType':'application/json'}

@app.route('/hospital', methods=['GET'])
def getHospitalByID():
    requestHospitalID = request.args.get('id')
    hospitalSQL = databaseUtils.getHospitalbyID(conn, requestHospitalID)[0]
    if hospitalSQL is None:
        return json.dumps({"data": {} }), 500, {'ContentType':'application/json'}

    hospital = {'id' : int(hospitalSQL[0]), 
                'name': str(hospitalSQL[1]), 
                'address' : {'state' : str(hospitalSQL[2]), 
                             'city' : str(hospitalSQL[3]), 
                             'postcode': str(hospitalSQL[4]), 
                             'street' : str(hospitalSQL[5]), 
                             'streetNumber': str(hospitalSQL[6])
                            },
                'phoneNumber' : str(hospitalSQL[7]),
                'website' : str(hospitalSQL[8]),
                'location' : { 'latitude' : str(hospitalSQL[9]), 
                               'longitude' : str(hospitalSQL[10]) 
                             }
                }

    return json.dumps({"data": hospital}), 200, {'ContentType':'application/json'}


@app.route('/hospital/add', methods=['POST'])
def addHospital():
    jsonData = request.get_json()

    if 'data' not in jsonData:
        return json.dumps({"data": {'success' : False} }), 400, {'ContentType':'application/json'}

    hospital = request.get_json()['data']

    if not all(k in hospital for k in ("name","address","phoneNumber","website")):
        return json.dumps({"data": {'success' : False} }), 400, {'ContentType':'application/json'}


    if not all(k in hospital['address'] for k in ("state","city","postcode","street","streetNumber")):
        return json.dumps({"data": {'success' : False} }), 400, {'ContentType':'application/json'}

    try:
        latitude, longitude = getGeoLocation(hospital['address']['street'], 
                                             hospital['address']['streetNumber'], 
                                             hospital['address']['city'])
    except:
        return json.dumps({"data": {'success' : False} }), 500, {'ContentType':'application/json'}

    print(latitude, longitude)

    if latitude == 0 or longitude == 0:
        return json.dumps({"data": {'success' : False} }), 404, {'ContentType':'application/json'}

    ok = databaseUtils.addHospital(conn, 
                                        hospital['name'],
                                        hospital['address']['state'],
                                        hospital['address']['city'],
                                        hospital['address']['postcode'],
                                        hospital['address']['street'],
                                        hospital['address']['streetNumber'],
                                        hospital['phoneNumber'], 
                                        hospital['website'], 
                                        latitude, 
                                        longitude)
    if not ok:
        return json.dumps({"data": {'success' : False} }), 400, {'ContentType':'application/json'}

    return json.dumps({"data": {'success' : True} }), 200, {'ContentType':'application/json'}


@app.route('/bedavailability', methods=['GET'])
def getBedavailability():
    requestHospitalID = request.args.get('id')

    bedavailabilitesSQL = databaseUtils.getAllBedavailabilities(conn, requestHospitalID)

    if bedavailabilitesSQL is None:
        return json.dumps({"data" : []}), 404, {'ContentType':'application/json'}

    bedavailabilites = []

    try:
        for row in bedavailabilitesSQL:
            bedavailabilites.append({'id' : int(row[0]),
                                     'hospitalID': int(row[1]),
                                     'iculc' : int(row[2]),
                                     'icuhc' : int(row[3]),
                                     'ecmo': int(row[4]),
                                     'iculcmax' : int(row[5]),
                                     'icuhcmax' : int(row[6]),
                                     'ecmomax': int(row[7]),
                                     'timestamp' : str(row[8])
                                    }) 
    except:
        return json.dumps({"data" : []}), 500, {'ContentType':'application/json'}

    return json.dumps({"data" :  bedavailabilites}), 200, {'ContentType':'application/json'}

@app.route('/bedavailability/latest', methods=['GET'])
def getLatestBedavailability():
    requestHospitalID = request.args.get('id')

    bedavailabilitySQL = databaseUtils.getLatestBedavailability(conn, requestHospitalID)[0]

    if bedavailabilitySQL is None:
        return json.dumps({"data" : {}}), 404, {'ContentType':'application/json'}

    bedavailability = {'id' : int(bedavailabilitySQL[0]),
                       'hospitalID': int(bedavailabilitySQL[1]),
                       'iculc' : int(bedavailabilitySQL[2]),
                       'icuhc' : int(bedavailabilitySQL[3]),
                       'ecmo': int(bedavailabilitySQL[4]),
                       'iculcmax' : int(bedavailabilitySQL[5]),
                       'icuhcmax' : int(bedavailabilitySQL[6]),
                       'ecmomax': int(bedavailabilitySQL[7]),
                       'timestamp' : str(bedavailabilitySQL[8])
                      }

    return json.dumps({"data" : bedavailability}), 200, {'ContentType':'application/json'}


@app.route('/mapdata', methods=['GET'])
def getmapdata():

    joinedDataSQL = databaseUtils.getMapData(conn)

    if joinedDataSQL is None:
        return json.dumps({"data" : {}}), 404, {'ContentType':'application/json'}

    return json.dumps({"data" : joinedDataSQL}), 200, {'ContentType':'application/json'}