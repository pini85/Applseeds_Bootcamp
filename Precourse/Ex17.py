list_1 = [1, 2, 3, 4, 5]
list_2 = [6, 7, 8, 9, 10]


def program_1(list_1, list_2):
    return print(list_1 + list_2)


program_1(list_1, list_2)


# If you don't need the second list around:


def program_2(list_1, list_2):
    list_1.extend(list_2)
    return print(list_1)


program_2(list_1, list_2)
