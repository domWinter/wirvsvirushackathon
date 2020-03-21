import psycopg2
from utils import getLocation





def connectDB():
    
    try:
        conn = psycopg2.connect(database = "wirvsvirushackathon", user = "app@postgres-wirvsvirushackathon", password = "dvDKQDP2t4g5Mso7P8", host = "postgres-wirvsvirushackathon.postgres.database.azure.com", port = "5432")
        return conn
    except:
        print("I am unable to connect to the database") 

    
    


def addInitialTables(conn):
    try:
        conn.cursor().execute("CREATE TABLE hospitals (id serial PRIMARY KEY, name varchar(255), state varchar(255), city varchar(255), postcode varchar(255), street varchar(255), streetNumber varchar(255), phoneNumber varchar(255) , website varchar(255) , latitude varchar(255) , longitude varchar(255) , inculc integer, incuh integer, ecmo integer);")
        conn.commit()
    except:
        print("table create failed")
    



def addHospital(conn,name,state,city,postcode,street,streetNumber,phoneNumber, website,latitude=0,longitude=0,inculc=0,incuh=0,ecmo=0):

    if longitude==0 or latitude ==0 :
        latitude,longitude = getLocation(street,streetNumber,city)
    
    sql  = "INSERT INTO hospitals (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, inculc, incuh, ecmo) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, inculc, incuh, ecmo)
    try:
        conn.cursor().execute(sql, val)
        conn.commit()
    except: 
        print("Insert failed")
    

def updateBeds(conn,hospitalID,bedType,amount):
    
    sql  = "UPDATE hospitals SET {} = %s WHERE id = %s".format(bedType)
    val = (amount, hospitalID)
    try:    
        conn.cursor().execute(sql, val)
        conn.commit()
    except Exception as inst:
        print("Update beds failed")
        print(inst.args)
    

def closeDB(conn): 
    try: 
        conn.close()
    except:
        print("Unable to close db connection")


def main():
    conn = connectDB()
    #addHospital(conn,"BigHospital","Bavaria","Munich","80809","Test-Straße","1","555-1234","großer-test.de")
    
    updateBeds(conn,1,"inculc",333)
    closeDB(conn)

main()