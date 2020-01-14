age = 5
if age >= 21:
    print("have a beer")

elif age >= 6:
    print("juice")
else:
    print("milk")

while True:
    s = input("enter password")
    if s == "12345":
        break
    if not s:
        continue
    else:
        print("access denieed")
