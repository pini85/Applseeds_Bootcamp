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
num = int(input("Enter a positive number: "))

factorial = 1

if num < 0:
   print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
   print("The factorial of 0 is 1")
else:
   for i in range(1,num + 1):
       print(i)
       factorial = factorial*i
   print("The factorial of",num,"is",factorial)