x = int(input("please choose a number larger than 10"))
try:
    while x <= 10:
        x = int(input("please choose a number LARGER than 10"))
    print ("thank you")
except ValueError:
    print("Valid number")




# while True:
#     print("Please choose a number larger than 10")
#     user_input = int(input("number: "))
#     if user_input > 10 or user_input != "NaN":
#         print("Thank you")
#     else:
#         print("LARGER")
