promt = "Type word or set of numbers: "
x = input(promt)
y = ""
for i in x:
    y = i + y # h,eh,leh,lleh,olleh
    if x == y:
        print("It is Palidrome")

if x != y:
    print("It is not")


def id_palindrome(s):
    return s == s[::-1]

# x = input("type:")
# array = []
# result = ""
# for i in reversed(x):
#     array.append(i)
#     result = "".join(array)
# if x == result:
#     print("It is a palindrome")
# else:
#     print("It is not a palindorme")def palindrome():




#     my_str = str(input("please enter a number or a word"))
#     if my_str == my_str[::-1]:
#         print("palindrome!!!")
#     else:
#         print("not palindrome")
#
#
# palindrome()
