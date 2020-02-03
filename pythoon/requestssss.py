import requests
def celeb(name):
    url = f'https://en.wikipedia.org/wiki/sdfghjk'
    r = requests.get(url)
    print(r)
    text = r.text
    age = text.find("age&#160;")
    x = text[age+9:age+11]
    return f"{name}'s age is {x}"
