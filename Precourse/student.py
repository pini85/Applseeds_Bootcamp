number = 0
while number < 100:
    result = number / 7
    print(number)
    number = number + 1
    if result in range(1, 15):
        print(result, "Boom")
