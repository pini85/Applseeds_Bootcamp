import random
import time

MAX = 1_000_000
N=100_000


mylist = random.sample(range(MAX),N)
myset = set(mylist)


hits = 0
start_time = time.time()
for i in range(N):
    x = random.randrange(MAX)
    if x in mylist:
        hits +=1

print(time.time() - start_time)

hits = 0
start_time = time.time()
for i in range(N):
    x = random.randrange(MAX)
    if x in myset:
        hits +=1

print(time.time() - start_time)






# start_time = time.time()
# for i in range(100000):
#     if 32222 in mylist:
#         print("found")
# print(time.time() - start_time)
#
#







