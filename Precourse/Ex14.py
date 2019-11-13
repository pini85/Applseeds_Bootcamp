import re
def prime():

    allprimes = int(input("print a positive number:"))
    for num in range(2, allprimes):
            for i in range(2, num):
                if num % i == 0:
                   break
            else:
               print(num)

prime()