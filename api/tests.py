import requests
import unittest


class TestApiRoutes(unittest.TestCase):
    def testHospitals(self):
        r = requests.get("http://127.0.0.1:5000/hospitals")
        self.assertEqual(str(r.status_code), '200')

    def testHospital(self):
        id = 1
        r = requests.get("http://127.0.0.1:5000/hospital" + "?id=" + str(id))
        self.assertEqual(str(r.status_code), '200')

    def testBedavailability(self):
        id = 1
        r = requests.get("http://127.0.0.1:5000/bedavailability" + "?id=" + str(id))
        self.assertEqual(str(r.status_code), '200')

    def testLatestBedavailability(self):
        id = 1
        r = requests.get("http://127.0.0.1:5000/bedavailability/latest" + "?id=" + str(id))
        self.assertEqual(str(r.status_code), '200')

    def testGetMapData(self):
        r = requests.get("http://127.0.0.1:5000/mapdata")
        self.assertEqual(str(r.status_code), '200')

    def testGetMapDataBefore(self):
        timestamp = 1684874464
        r = requests.get("http://127.0.0.1:5000/mapdata"+"?date="+str(timestamp))
        print(r.text)
        self.assertEqual(str(r.status_code), '200')

if __name__ == '__main__':
    unittest.main()
