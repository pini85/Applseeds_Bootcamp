import random
random_number_1 = random.randint(1,50)
random_number_2 = random.randint(1,50)
my_list = [random_number_1, random_number_2]
if my_list[0] > my_list[1]:
    highest_number = my_list[0]
    lowest_number = my_list[1]
else:
    highest_number = my_list[1]
    lowest_number = my_list[0]
print("highest number:",highest_number,"\n"
      "Lowest number:", lowest_number
      )

# Better way to do it:

maximum = max(my_list)
minimum = min(my_list)
print("max:",maximum)
print("min:", minimum)


