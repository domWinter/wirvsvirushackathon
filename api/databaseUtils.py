from geoUtils import getGeoLocation
from datetime import datetime


def getAllHospitals(conn):
    cur = conn.cursor()
    try:
        query =  "SELECT * FROM hospitals;"
        cur.execute(query)
        hospitalsSQL = cur.fetchall()
        return hospitalsSQL
    except:
        return None


def getHospitalbyID(conn, hospitalID):
    cur = conn.cursor()
    try:
        query =  "SELECT * FROM hospitals WHERE id = %s;"
        cur.execute(query, hospitalID)
        hospitalSQL = cur.fetchall()
        return hospitalSQL
    except:
        return None

def addHospital(conn,name,state,city,postcode,street,streetNumber,phoneNumber,website,latitude,longitude):
    cur = conn.cursor()
    sql  = "INSERT INTO hospitals (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude)
    try:
        cur.execute(sql, val)
        conn.commit()
    except: 
        return False
    return True

def getAllBedavailabilities(conn, hospitalID):
    cur = conn.cursor()
    sql = "SELECT * FROM bedavailability WHERE hospitalID = %s ORDER BY timestamp desc"
    try:
        cur.execute(sql, hospitalID)
        bedavailabilitesSQL = cur.fetchall()
        return bedavailabilitesSQL
    except: 
        return None

def getLatestBedavailability(conn, hospitalID):
    cur = conn.cursor()
    sql = "SELECT * FROM bedavailability WHERE hospitalID = %s ORDER BY timestamp desc LIMIT 1"
    try:
        cur.execute(sql, hospitalID)
        bedavailabilitesSQL = cur.fetchall()
        return bedavailabilitesSQL
    except: 
        return None

def updateBeds(conn,hospitalID,iculc, icuhc, ecmo,timestamp="current"):
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
    except Exception as inst:
        print("Update beds failed")
        print(inst.args)


def getMapData(conn):
    cur = conn.cursor()
    try:
        query =  "SELECT hospitals.* , bedTemp.* FROM hospitals INNER JOIN  (SELECT  * , RANK() OVER (PARTITION BY bed1.hospitalID ORDER BY bed1.timestamp DESC ) as rnk FROM bedavailability bed1 ) as bedTemp ON hospitals.id = bedTemp.hospitalID WHERE bedTemp.rnk <2;"
        cur.execute(query)
        joinedDataSQL = cur.fetchall()
        return joinedDataSQL
    except:
        return None

