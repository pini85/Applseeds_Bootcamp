# def program(num):
#     if num > 1:
#         for i in range(2, num):
#             if (num % i) == 0:
#                 print(num, "is not a prime number")
#                 print(i, "times", num // i, "is", num)
#                 break
#         else:
#             print(num, "is a prime number")
#     else:
#         print(num, "is not a prime number")
#
#
# value = int(input("Number: "))
# program(value)
n=int (input("please choose a positive number"))
for i in range (1, n+1):
    if i > 1:
        for j in range (2, i):
            if i%j==0:
                break
        else:
            print (i)




