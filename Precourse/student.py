word = input("enter a word to check if its a palindrome?")
word1 = list(word)
word1 = [ch for ch in word1]

for x in word1:
    if x == "a" or x == "e" or x == "o" or x == "i" or x == "u":
        print(x.capitalize(), end="")
    else:
        print(x, end="")