from pprint import pprint
from pymongo import MongoClient

client = MongoClient()

db = client.get_database("my_demo_app")

users = db.get_collection("users")

for u in users.find():
    pprint(u["id"])
    pprint(u["name"])
