def palindrome():
    my_str = str(input("please enter a number or a word"))
    if my_str == my_str[::-1]:
        print("palindrome!!!")
    else:
        print("not palindrome")


palindrome()