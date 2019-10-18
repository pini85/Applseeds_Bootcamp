import re

numbers = range(1,101)
result = []
for i in numbers:
    i = str(i)

    if re.findall("7", i):
        i = "BOOM"
    if not i == "BOOM":
        i = int(i)
    if type(i) is int:
        if i % 7 == 0:
            i = "BOOM"
    result.append(i)

print(result)
