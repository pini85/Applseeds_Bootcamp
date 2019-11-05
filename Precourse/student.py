print("Enter a string: ", end="")
str = input()


def longestWord(str):
    max = 0
    answer = ""
    temp = str.split(" ")
    for i in temp:
        if len(i) > max:
            max = len(i)
            answer = i
    print(answer)


longestWord(str)