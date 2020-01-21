from csv import DictReader
from math import radians, cos, sin, asin, sqrt
import os
os.makedirs("countries", exist_ok=True)
#We need to loop over the data
#in the loop we create html file of the short name
#we need to loop over that specific country and place the
#that data in that html
def find_distance(name):
    def haversine(lon1, lat1, lon2, lat2):
        lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
        # haversine formula
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
        c = 2 * asin(sqrt(a))
        km = 6367 * c
        return km

    def country(country):
        with open('cow.csv') as f:
            reader = DictReader(f)
            for d in reader:
                if d["name"] == country.title():
                    return float(d["lat"]),float(d["lon"])


    with open('cow.csv') as f:
        reader = DictReader(f)
        for d in reader:
            print(d)
            with open(os.path.join('countries',f"{d['short_name']}.html"),"w") as fw:
                fw.write(f'''<html>
<head>
<title>{d['name']}</title>
</head>
<body>
<h1>{d['name']}</h1>
<dl>

<dt>Capital</dt>
<dd>{d['capital']}</dd>
        
<dt> Population </dt>
<dd>{d['population']}</dd>
        
<dt> Land Area </dt>
<dd> {d['land']} km 
<sup>{d['dialing_code']}</sup> 
</dd>
<dt> Continent </dt>
<dd> {d['continent']} </dd>
</dl>
</body>
</html>
'''
)
        #         < html >
        #         < head >
        #         < title > Afghanistan < / title >
        #     < / head >
        #     < body >
        #     < h1 > Afghanistan < / h1 >
        #     < dl >
        #
        #     < dt > Capital < / dt >
        #     < dd > Kabul < / dd >
        #
        #     < dt > Population < / dt >
        #     < dd > 30, 419, 928 < / dd >
        #
        #     < dt > Land
        #     Area < / dt >
        #     < dd > 652, 230
        #     km < sup > 2 < / sup > < / dd >
        #
        #     < dt > Continent < / dt >
        #     < dd > Asia < / dd >
        #
        # < / dl >
        # < / body >
        # < / html >



        #
        # reader = DictReader(f)
        # # find the lon and lat of each countrZ
        # with open("indexxxxx.html", "w") as fw:
        #     fw.write("<ul>\n")
        #     for d in reader:
        #         fw.write("  <li>\n")
        #         fw.write(f"{d['name']}: {round(haversine(country(name)[0], country(name)[1], float(d['lat']), float(d['lon'])), 2)}\n")
        #         fw.write("  </li>\n")
        #     fw.write("</ul>")

find_distance("israel")







