def Boom():
    for x in range(1,100):
        if x < 10:
            if(x % 7 == 0):
                print("BOOM", end=", ")
            else:
                print(x, end=", ")
        else:
            firstNum = (int(x / 10))
            secondNum = x - ((int(x / 10)) * 10)
            if(firstNum == 7 or secondNum == 7):
                print("BOOM", end=", ")
            elif (x % 7 == 0):
                print("BOOM", end=", ")
            else:
                print(x, end=", ")

Boom()