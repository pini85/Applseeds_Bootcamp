import re

user_input = input("Hello, please enter something:\n")
string = re.sub('a', 'A', user_input)
string = re.sub('e', 'E', string)
string = re.sub('i', 'I', string)
string = re.sub('o', 'O', string)
string = re.sub('u', 'U', string)
string = re.sub('y', 'Y', string)
print(string)