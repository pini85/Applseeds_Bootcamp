def restaurant():
    try:
        num_people = int(input("How many people are you going with?:"))
    except ValueError:
        print('Error! Not an integer!')
        exit()

    is_kosher = input("Should it be kosher? Yes or No?:").upper()
    if is_kosher in ['Y', 'YES']:
        kashrut = input("Should it be Kashrut Lemehadrin? Yes or No?:").upper()
    elif is_kosher in ['N', 'NO']:
        print('No kosher')
    else:
        print('Error! Please type yes or no')
        exit()
    array_of_foods = ["Hummus", "Falafel", "Kebab"]
    print("What foods do you like?")
    print("1.", array_of_foods[0], "\n"
          "2,", array_of_foods[1], "\n"
          "3.", array_of_foods[2])
    food_type = int(input("Type 1, 2 or 3:")) - 1
    print(food_type)
    if food_type in [0, 1, 2]:
        print("Your order: \n"
              "Number of people:", num_people, "\n"
              "Kosher:", is_kosher, "\n"
              "Kashrut Lemehadrin?:", kashrut, "\n"
              "Food you like:", array_of_foods[food_type])
    else:
        print('Error! Type 1, 2 or 3.')
        exit()

restaurant()
