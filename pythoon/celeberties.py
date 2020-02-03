import requests
def celeb(name):
    base =f"https://en.wikipedia.org/wiki/{name}"
    r = requests.get(base)
    find = r.text.find("age&#160")
    print(find)
    age = r.text[find+9:find+11]
    return f"{name}'s age is {age}"
celeb("chuck norris")

def guess(guess):
    secret = 100
    while True:
        if guess > secret:
            return "Your guess is too high!"
        elif guess < secret:
            return "Your guess is too low!"
        else:
            break



