x = range(1,50)
for n in x:
    if n % 7 == 0 or "7" in str(n):
        print("<!>")
    else:
        print(n)

