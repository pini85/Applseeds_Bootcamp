def program(array):
    minimum = array.index(min(array))
    maximum = array.index(max(array))
    my_array = [maximum, minimum]
    print(my_array)


my_array = [-3, 30, 300, 1, 4, 600]
program(my_array)