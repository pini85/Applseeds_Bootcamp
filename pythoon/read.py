# with open("test.text") as f:
#     s= f.read()
# print(s)
#
# with open("story.text") as f:
#     for line in f:
#         print(line.strip())
# print(s)

with open("udi.txt", "w") as fw:
    fw.write("Shalom")
    fw.write("Shalom\n")
    print(1,2,3, file=fw)

print("ok")

import csv

with open("cow.csv") as f:
    reader = csv.DictReader(f)
    for d in reader:
        print(d['name'],d['population'])

# //will print you a dictionary


