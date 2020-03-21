import psycopg2

def connectDB():
    try:
        conn = psycopg2.connect(database = "wirvsvirushackathon", user = "app@postgres-wirvsvirushackathon", password = "", host = "postgres-wirvsvirushackathon.postgres.database.azure.com", port = "5432")
        return conn
    except:
        print("I am unable to connect to the database") 


def addInitialTables(conn):
    try:
        conn.cursor().execute("CREATE TABLE hospitals (id serial PRIMARY KEY, name varchar(255), state varchar(255), city varchar(255), postcode varchar(255), street varchar(255), streetNumber varchar(255), phoneNumber varchar(255) , website varchar(255) , latitude varchar(255) , longitude varchar(255) , inculc integer, incuh integer, ecmo integer);")
    except:
        print("table create failed")


def addHospital(conn,name,state,city,postcode,street,streetNumber,phoneNumber, website, latitude=0,longitude=0,inculc=0,incuh=0,ecmo=0):
    sql  = "INSERT INTO hospitals (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, inculc, incuh, ecmo) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (name, state, city, postcode, street, streetNumber, phoneNumber, website, latitude, longitude, inculc, incuh, ecmo)

    conn.cursor().execute(sql, val)
    conn.commit()

def updateBeds(conn,hospitalID,bedType,amount):
    sql  = "UPDATE hospitals SET %s = %s WHERE id = %s"
    val = (bedType, amount, hospitalID)
    try:    
        conn.cursor.execute(sql, val)
    except:
        print("Update failed")
    conn.commit()

def closeDB(conn): 
    conn.close()


def main():
    conn = connectDB()
    addHospital(conn, "München Klinik Neuperlach", "Bayern" ,"München", "81373", "Oskar-Maria-Graf-Ring", "51", "08967940", 'https://www.muenchen-klinik.de/krankenhaus/neuperlach/', "48.094510", "11.656720", "500", "40", "20")
    closeDB(conn)

main()
