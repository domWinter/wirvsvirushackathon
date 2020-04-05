import requests
import json


def testHospitalAdd():

    hospitals = """{"hospitals":[
                 {"name":  "Hirslanden Klinik Aarau",
                 "address": {"state": "Aargau", "city": "Aarau", "postcode": "5001", "street": "Schänisweg", "streetNumber": "1"},
                 "phoneNumber": "+41 628367000",
                 "website": "http://www.hirslanden.ch/"
                 },
                 {"name": "UniversitätsSpital Zürich",
                 "address": {"state": "Zürich", "city": "Zürich", "postcode": "8091", "street": "Rämistrasse", "streetNumber": "100"},
                 "phoneNumber": "+41 44 255 11 11", "website": "http://www.usz.ch/"
                 },
                 {"name": " Cliniques des Grangettes ",
                 "address": {"state": "Genève", "city": "Genève", "postcode": " 1224", "street": "chemin des Grangettes", "streetNumber": "7"},
                 "phoneNumber": "+41 44 255 11 11", "website": "http://www.grangettes.ch/"
                 }]
                 }"""

    # creates problems in geolocation:
    #    {"name": "Clinique Ste-Anne",
    #             "address": {"state": "Switzerland", "city": "Fribourg", "postcode": "1700", "street": "rue H. Geiler", "streetNumber": "6"},
    #             "phoneNumber": "+41 3500111",
    #             "website": "http://www.ste-anne.ch",
    #             }

    to_python = json.loads(hospitals)
    print(to_python["hospitals"])


    for hospital in to_python["hospitals"]:
       print(hospital)     
       r = requests.post("http://127.0.0.1:5000/hospital/add", json={"data": hospital})
       print(r.status_code, r.reason) 


if __name__ == '__main__':
    testHospitalAdd()