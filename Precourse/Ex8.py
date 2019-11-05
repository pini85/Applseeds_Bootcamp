#
# for i in range (1, 101):
#     if i % 7 == 0 or "7" in str(i):
#         print ("BOOM")
#     else:
#         print (i)

def boom_7():
    for num in range(1, 100):
        if num % 7 == 0 or num % 10 == 7 or int(num / 10) == 7:
            print("Boom")
        else:
            print(num)


boom_7()