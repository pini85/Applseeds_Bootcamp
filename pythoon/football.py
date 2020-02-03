import requests
import json

BASE = "https://worldcup.sfg.io/"
matches = "matches"
url = BASE + matches

r = requests.get(url)

data = r.json()

for i in data:
    print(f"{i['home_team_country']} vs {i['away_team_country']}")