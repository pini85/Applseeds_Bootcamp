

import HangedGameUtils
import random


def change_char(s, p, r):
    return s[:p]+r+s[p+1:]


print (HangedGameUtils.test)
word = HangedGameUtils.words[random.randint(0,3)]
size = len(word)
tries = 10
userWord = "*"*size



while (tries>0) and (userWord != word):
    print("You have " , tries , " guesses")
    print("the word is ")
    print (userWord)
    guess = input("What is your guess?\n").lower()
    if((guess>='a' and guess<= 'z') or (guess>='A' and guess<='Z')) and (len(guess)== 1):
        found = False
        for idx,letter in enumerate(word):
            if letter == guess:
                userWord = change_char(userWord, idx ,guess)
                found = True

        if not found:
            tries -= 1
    else:
        print("invalid input")


if tries==0:
     print("game over, you lose")
else:
    print("game over, you won")


    

