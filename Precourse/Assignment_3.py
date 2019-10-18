import random
import re
hidden_word = ""
word = ""
stricks = 0


def program():
    global hidden_word, word
    words = ["rabbit", "dog", "carpet"]
    print("Welcome to hangman")
    word = random.choice(words)
    split = list(word)
    hidden_word = [i.replace(i, "_") for i in split]
    for i in hidden_word:
        print(i, end=" ")
    user_guess()


def user_guess():
    global hidden_word, word, stricks
    user_input = input("\n Guess the word: ").lower()
    if not user_input.isalpha():
        print("Type only a letter. Try again")
        joined_word = " ".join(hidden_word)
        print(joined_word)
        user_guess()
    if word.find(user_input) != -1:
        for match in re.finditer(user_input, word):
            index = [match.start()]
            for i in index:
                hidden_word[i] = user_input
                joined_word = " ".join(hidden_word)
        print(joined_word)
        if joined_word.find("_") == -1:
            print("You won")
            exit()

    else:
        stricks +=1
        print("Letter not found you have", stricks, "/10 chances left")
        if stricks == 10:
            print("Sorry we have reached 8 chances. Bye")
            exit()

    user_guess()

program()
