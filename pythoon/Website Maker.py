data = {}
def read(title,txt):
    with open(txt) as f:
        for line in f:
            data.setdefault(title,[]).append(line.strip())
read("about","./website/about.txt")
read("portfolio","./website/portfolio.txt")
read("news","./website/news.txt")
read("contact","./website/contact.txt")
print(data)
def create_pages(pages):
    for page in pages:
        with open(f"{page}.html","w") as fw:#about
            fw.write(f"<h1>{data[page][0]}</h1>\n")
            fw.write(f"<p>{data[page][1]}</p>\n")
            fw.write(f"<p>{data[page][2]}</p>\n")
            fw.write("<hr/>\n")
            fw.write("<ul>")
            def create_links(link1,link2,link3):
                fw.write(f'\n    <li><a href="{link1}.html"</a>{data[link1][0]}</li>')
                fw.write(f'\n    <li><a href="{link2}.html"</a>{data[link2][0]}</li>')
                fw.write(f'\n    <li><a href="{link3}.html"</a>{data[link3][0]}</li>\n')
            if page == "about":
                create_links("portfolio","news","contact")
            if page == "portfolio":
                create_links("about","news","contact")
            if page == "news":
                create_links("about","portfolio","contact")
            if page == "contact":
                create_links("about", "portfolio", "news")
            fw.write("</ul>")
create_pages(["about","portfolio","news","contact"])



