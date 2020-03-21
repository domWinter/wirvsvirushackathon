from geoUtils import getGeoLocation

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

def addHospital(conn,name,state,city,postcode,street,streetNumber,phoneNumber, website,latitude=0,longitude=0,iculc=0,icuhc=0,ecmo=0):
    cur = conn.cursor()
    sql  = "INSERT INTO hospitals (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, iculc, icuhc, ecmo) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, iculc, icuhc, ecmo)
    try:
        cur.execute(sql, val)
        conn.commit()
    except: 
        return False
    return True
    

def updateBeds(conn, hospitalID,bedType,amount):
    sql  = "UPDATE hospitals SET {} = %s WHERE id = %s".format(bedType)
    val = (amount, hospitalID)
    try:    
        conn.cursor().execute(sql, val)
        conn.commit()
    except Exception as inst:
        print("Update beds failed")
        print(inst.args)
