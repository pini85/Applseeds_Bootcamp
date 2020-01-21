import feedparser
import datetime

# RSS = "http://feeds.feedburner.com/TechCrunch/"
# OR:
# RSS = "https://news.ycombinator.com/rss"
# OR:
# RSS = "https://news.yahoo.com/rss"
# OR:
RSS = "http://feeds.reuters.com/Reuters/worldNews"

d = feedparser.parse(RSS)
print(d.feed.title)
# OR:
# print(d['feed']['title'])
print()

for e in d.entries:
    print(e.title)
    print(e.link)
    tt = e.published_parsed
    # print(tt)
    print(datetime.datetime(*tt[:6], tzinfo=datetime.timezone.utc))
    print()