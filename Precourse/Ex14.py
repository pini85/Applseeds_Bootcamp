# array = [1, 2, 3, 4, 5]
# my_list = list(array)
# for item in my_list:
#     print(item)
import string
import random


def list_of_5():
    list_5 = random.sample(string.printable, 5)
    for item in list_5:
        print(item)


list_of_5()