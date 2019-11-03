import random
import string


def return_list_word_from_file(file_name):
    file = open(file_name, "r")
    words = []
    for line in file:
        word = ""
        for char in line:
            if char in string.ascii_letters:
                word += char
            else:
                words.append(word)
                word = ""
    words = [word.lower() for word in words if word]
    return words


def hangman(words_list):
    user_trials = 10
    words = words_list
    print(
        """                          ''~``
                         ( o o )
    +---------------.ooo0--(_)--0ooo.------------+
    |               H A N G - M A N              |
    |              .ooo0                         |
    |              (   )    0ooo.                |
    +---------------\ (----(   )-----------------+
                     \_)    ) / 
                           (_/
    """)

    word = random.choice(words)
    encrypted_word = ["*" for char in word]
    print("Hi player!")
    correct = False
    guesses = []
    while not correct:
        if user_trials <= 0:
            print("You are out of trials! Bye Bye")
            exit()
        print("You have", user_trials, "guesses")
        print("The word is: ", *encrypted_word)
        guess = (input("what is your guess?")).lower()
        if len(guess) > 1:
            if guess != word:
                print("Please enter characters only")
            else:
                correct = True
        else:
            if guess == "":
                print("You didn't entere a guess.")
                exit_game = input("Would you like to leave the game?  n or y")
                if exit_game == "y":
                    print("Thanks for playing!")
                    exit()
                else:
                    print("Yeye! lets continue guessing!")
                    continue
            if guess not in string.ascii_letters or guess == "":
                print("You entered", guess, "please enter a valid input")
                continue
            guesses.append(guess)
            if guesses.count(guess) > 1:
                print("You already entered", guess, "please enter a new input")
                continue
            if guess in word:
                print("Good guess!")
                user_trials -= 1
                for index in range(len(word)):
                    if word[index] == guess:
                        encrypted_word[index] = guess
                if "*" not in encrypted_word:
                    correct = True
            else:
                user_trials -= 1
                print("Nope!")
    print("Correct! The word is", word)
    exit()


hangman(return_list_word_from_file("Philosophy.txt"))
