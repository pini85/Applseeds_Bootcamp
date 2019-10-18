
x = input("type something: ")
array = []
result = ""
for i in reversed(x):
    array.append(i)
    result = "".join(array)
if x == result:
    print("It is a palindrome")
else:
    print("It is not a palindorme")
