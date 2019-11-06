import math
n = int(input("please enter a positive number greater than one"))

for d in range(2, n + 1):
    prime = True
    for p in range(2, d):
        if d % p == 0:
            prime = False
    if prime:
        print(d)