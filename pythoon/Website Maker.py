data = {}
def read(title,txt):
    with open(txt) as f:
        # d['mynewkey'] = 'mynewvalue'
        for line in f:
            data[title] = line
read("about","./website/about.txt")
read("portfolio","./website/portfolio.txt")
read("news","./website/news.txt")
read("contact","./website/contact.txt")
print(data)

# with open("") as f:
#     about
#     portfolio
#     news
#     contact