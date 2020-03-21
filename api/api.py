import psycopg2
import os
from flask import Flask, request

app = Flask(__name__)

PASSWORD = os.getenv('PASSWORD')

try:
    conn = psycopg2.connect(database = "wirvsvirushackathon", user = "app@postgres-wirvsvirushackathon", password = PASSWORD , host = "postgres-wirvsvirushackathon.postgres.database.azure.com", port = "5432")
except:
    print("I am unable to connect to the database")

cur = conn.cursor()

@app.route('/add/hospital', methods=['POST'])
def addHospital():
    return {'success': True}, 200

@app.route('/hospitals', methods=['GET'])
def getHospitals():
    query =  "SELECT * FROM hospitals;"
    cur.execute(query)
    hospitalsSQL = cur.fetchall()

    hospitals = []

    try:
        for row in hospitalsSQL:
            hospitals.append({'id' : int(row[0]), 'name': str(row[1]),
                              'address' : {'state' : str(row[2]), 'city' : str(row[3]), 'postcode': str(row[4]), 'street' : str(row[5]), 'streetNumber': str(row[6])},
                              'phoneNumber' : str(row[7]),
                              'website' : str(row[8]),
                              'location' : { 'latitude' : str(row[9]), 'longitude' : str(row[10]) },
                              'beds' : { 'iculc' : int(row[11]), 'icuhc' : int(row[12]), 'ecmo' : int(row[13])}
                            })
    except:
        return {{}}, 500

    return {"data" : hospitals}, 200

@app.route('/hospital', methods=['GET'])
def getHospitalByID():
    requestHospitalID = request.args.get('id')
    query =  "SELECT * FROM hospitals WHERE id = %s;"
    cur.execute(query, requestHospitalID)
    hospitalSQL = cur.fetchall()[0]

    hospital = {'id' : int(hospitalSQL[0]), 'name': str(hospitalSQL[1]),
                'address' : {'state' : str(hospitalSQL[2]), 'city' : str(hospitalSQL[3]), 'postcode': str(hospitalSQL[4]), 'street' : str(hospitalSQL[5]), 'streetNumber': str(hospitalSQL[6])},
                'phoneNumber' : str(hospitalSQL[7]),
                'website' : str(hospitalSQL[8]),
                'location' : { 'latitude' : str(hospitalSQL[9]), 'longitude' : str(hospitalSQL[10]) },
                'beds' : { 'iculc' : int(hospitalSQL[11]), 'icuhc' : int(hospitalSQL[12]), 'ecmo' : int(hospitalSQL[13])}
                }

    return {"data": hospital}, 200
