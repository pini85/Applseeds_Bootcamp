def reverse(mylist):
    high = len(mylist) - 1
    print(high)
    middle = int(len(mylist) / 2)
    for x in range(0, middle):
        temp = mylist[x]
        mylist[x] = mylist[high]
        mylist[high] = temp
        high -= 1
    print(mylist)


mylist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,100,"gi"]
reverse(mylist)