
def number_to_string(value):
    if value == 0:
        print("Zero")
    elif value == 1:
        print("One")
    elif value == 2:
        print("Two")
    elif value == 3:
        print("Three")
    elif value == 4:
        print("Four")
    elif value == 5:
        print("Five")
    elif value == 6:
        print("Six")
    elif value == 7:
        print("Seven")
    elif value == 8:
        print("Eight")
    elif value == 9:
        print("nine")
    else:
        print("Only numbers between 0 and 9")


user_input = int(input("Enter a value between 0 and 9:"))

number_to_string(user_input)



