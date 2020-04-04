from geoUtils import getGeoLocation
from datetime import datetime
import psycopg2

def create_connection():
    return psycopg2.connect(database = "",
                            user = "",
                            password = "",
                            host = "localhost",
                            port = "5432")



def getAllHospitals():
    try:
        conn = create_connection()
    except:
        return None
    try:
        cur = conn.cursor()
        query = "SELECT * FROM hospitals;"
        cur.execute(query)
        hospitalsSQL = cur.fetchall()
        conn.close()
        return hospitalsSQL
    except:
        conn.close()
        return None


def getHospitalbyID(hospitalID):
    try:
        conn = create_connection()
    except:
        return None
    cur = conn.cursor()
    try:
        query =  "SELECT * FROM hospitals WHERE id = %s;"
        cur.execute(query, hospitalID)
        hospitalSQL = cur.fetchall()
        conn.close()
        return hospitalSQL
    except:
        conn.close()
        return None

def addHospital(name,state,city,postcode,street,streetNumber,phoneNumber,website,latitude,longitude):
    try:
        conn = create_connection()
    except:
        return False
    cur = conn.cursor()
    sql  = "INSERT INTO hospitals (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude)
    try:
        cur.execute(sql, val)
        conn.commit()
    except:
        conn.close()
        return False
    conn.close()
    return True

def getAllBedavailabilities(hospitalID):
    try:
        conn = create_connection()
    except:
        return None
    cur = conn.cursor()
    sql = "SELECT * FROM bedavailability WHERE hospitalID = %s ORDER BY timestamp desc"
    try:
        cur.execute(sql, hospitalID)
        bedavailabilitesSQL = cur.fetchall()
        conn.close()
        return bedavailabilitesSQL
    except:
        conn.close()
        return None

def getLatestBedavailability(hospitalID):
    try:
        conn = create_connection()
    except:
        return None
    cur = conn.cursor()
    sql = "SELECT * FROM bedavailability WHERE hospitalID = %s ORDER BY timestamp desc LIMIT 1"
    try:
        cur.execute(sql, hospitalID)
        bedavailabilitesSQL = cur.fetchall()
        conn.close()
        return bedavailabilitesSQL
    except:
        conn.close()
        return None

def updateBeds(conn,hospitalID,iculc, icuhc, ecmo,timestamp="current"):
    try:
        conn = create_connection()
    except:
        return None
    if timestamp == "current" :
        dt = datetime.now()
        sql  = "INSERT INTO bedavailability (hospitalID,iculc,icuhc,ecmo,timestamp) VALUES (%s,%s,%s,%s,%s)"
        val = (hospitalID,icuhc,icuhc,ecmo,dt)
    else:
        sql  = "INSERT INTO bedavailability (hospitalID,iculc,icuhc,ecmo,timestamp) VALUES (%s,%s,%s,%s,%s)"
        val = (hospitalID,icuhc,icuhc,ecmo,timestamp)
    try:
        conn.cursor().execute(sql, val)
        conn.commit()
        conn.close()
    except Exception as inst:
        conn.close()
        print("Update beds failed")
        print(inst.args)


def getLatestMapData():
    try:
        conn = create_connection()
    except:
        return None
    cur = conn.cursor()
    try:
        query =  "SELECT hospitals.* , bedTemp.* FROM hospitals INNER JOIN  (SELECT  * , RANK() OVER (PARTITION BY bed1.hospitalID ORDER BY bed1.timestamp DESC ) as rnk FROM bedavailability bed1 ) as bedTemp ON hospitals.id = bedTemp.hospitalID WHERE bedTemp.rnk <2;"
        cur.execute(query)
        joinedDataSQL = cur.fetchall()
        conn.close()
        return joinedDataSQL
    except:
        conn.close()
        return None

def getLatestMapDataBefore(timestamp):
    try:
        conn = create_connection()
    except:
        return None
    cur = conn.cursor()
    try:
        query = "SELECT hospitals.* , bedTemp.* FROM hospitals INNER JOIN  (SELECT  * , RANK() OVER (PARTITION BY bed1.hospitalID ORDER BY bed1.timestamp DESC ) as rnk FROM bedavailability bed1 where bed1.timestamp < timestamp '" + str(timestamp) + "') as bedTemp ON hospitals.id = bedTemp.hospitalID WHERE bedTemp.rnk <2;"
        cur.execute(query)
        joinedDataSQL = cur.fetchall()
        conn.close()
        return joinedDataSQL
    except:
        conn.close()
        return None
