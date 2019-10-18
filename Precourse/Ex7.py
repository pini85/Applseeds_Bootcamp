def factorial(number):
    num = 1
    while number > 1:
        num = num * number #1*5, 5*4, 20*3, 60*2, 120*1
        number = number - 1 #5,4,3,2,1
    return print(num)

factorial(5)

# Can also import the math libary
# import math
# print(math.factorial(5))
