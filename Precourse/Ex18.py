my_list = [1, 2, 3, 4, 5]


def program(list):
    list.reverse()
    return print(list)


program(my_list)


def reverse_list(list_n):
    return list_n[::-1]


print(reverse_list([1, 2, 3, 4, 5]))