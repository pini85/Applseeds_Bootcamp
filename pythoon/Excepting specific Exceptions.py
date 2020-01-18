import errno
num = "1031"

# .....
try:
    with open("item-" + num + ".txt") as f:
        s = f.read()
except IOError as e:
    print(e.strerror)
