# Create a small program that asks the user to enter floating point numbers.
#
# If the user enters an invalid number, the error message "Invalid value" is
# displayed and the program continues.
#
# Whenever the user enters an empty answer, the sum of all entered numbers
# rounded to 6 decimal digits is displayed, and the program ends.


# while True:
#     user_input = input("Enter float number")
#     if user_input == "":
#        print(sum(result))
#     else:
#         result = [int(user_input)]
# total = 0
# while True:
#     try:
#         total+= float(input(">"))
#     except ValueError:
#         print("invalid message")
#     print(total)


total = 0

while True:
    try:
        s = input(">")
        if s =="":
            break
        total +=float(s)
    except ValueError:
        print("invlaid message")
print(total)

total = 0

while True:
    s = input(">")
    if s =="":
        break
    try:
        total +=float(s)
    except ValueError:
        print("invlaid message")
print(total)
