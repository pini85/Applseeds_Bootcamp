import feedparser
from pymongo import MongoClient

# RSS = "http://feeds.feedburner.com/TechCrunch/"
# OR:
# RSS = "https://news.ycombinator.com/rss"
# OR:
# RSS = "https://news.yahoo.com/rss"
# OR:
RSS = "http://feeds.reuters.com/Reuters/worldNews"

d = feedparser.parse(RSS)
client = MongoClient()
db = client.get_database("rss")
news = db.get_collection("news")
for e in d.entries:
    rss_feed = {
        "feed_title":d.feed.title,
        'title': e.title,
        'published_at': e.published,
        'link': e.link,
        "content":e.summary

    }
    news.insert_one(rss_feed)
print(d["feed"]["title"])






























#
# myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# mydb = myclient["mydatabase"]
#
# mycol = mydb["customers"]
# users = db.get_collection("users")
# print(type(users))  # <class 'pymongo.collection.Collection'>
#
# user_info = {
#     'name': 'John Lennon',
#     'email': 'john@beatles.com',
#     'phone': '5555-555',
# }
#
# result = users.insert_one(user_info)
#
# print(type(result))  # <class 'pymongo.results.InsertOneResult'>
# uid = result.inserted_id
# print(type(uid))  # <class 'bson.objectid.ObjectId'>
# print(uid)  # 5c63fd645409a94b452ccab9