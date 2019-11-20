import sys
import re
import random
import string
from termcolor import colored
import My_Words ## for importing words from there

##########################################################################################################################################################################################################
## MY LOGO ##

print(colored("*****************************************************************************", 'green'))
print(colored("*              .======.                                                      *\n"
              "*              | INRI |                                                      *\n"
              "*              |      |                                                      *\n"
              "*              |      |                                                      *\n"
              "*     .========'      '========.           WELCOME TO MY GAME!               *\n"
              "*     |   _      xxxx      _   |                                             *\n"
              "*     |  /_;-.__ / _\  _.-;_\  |           COPY RIGTHS RESERVED FOR:         *\n"
              "*     |     `-._`'`_/'`.-'     |                                             *\n"
              "*     '========.`\   /`========'           IBRAHIM ABU RMAILEH Ⓒ            *\n"
              "*              | |  / |                                                      *\n"
              "*              |/-.(  |                                                      *\n"
              "*              |\_._\ |                                                      *\n"
              "*              | \ \`;|                                                      *\n"
              "*              |  > |/|                                                      *\n"
              "*              | / // |                                                      *\n"
              "*              | |//  |                                                      *\n"
              "*              | \(\  |                                                      *\n"
              "*              |  ``  |                                                      *\n"
              "*              |      |                                                      *\n"
              "*              |      |                                                      *\n"
              "*     \\jgs _  _\\| \//  |//_   _ \// _                                        *\n"
              "*   ^ `^`^ ^`` `^ ^` ``^^`  `^^` `^ `^                                       *\n"
              "* WELCOME TO THE HANGMAN GAME!                                               *\n* DID YOU KNOW THAT THE ONLY HANGED-MAN THAT DIDN'T TRY OUR GAME WAS JESUS!! *",
              'green'))
print(colored("*****************************************************************************", 'green'))


##########################################################################################################################################################################################################

############################### YES NO CHECKING####################################################################

def Yes_No_check(answer):
    yes = {'yes', 'y', 'Y', 'Yes', 'YES'}
    no = {'no', 'n', 'N', 'No', 'NO'}

    if answer in yes:
        return True
    elif answer in no:
        return False
    else:
        sys.exit("it's a Yes/No question!")


#####################################################################################################################

def game_on():
    words = My_Words.words
    choosen_word = random.choice(words)
    encrypted_choosen_word = []

    for letter in choosen_word:
        encrypted_choosen_word.append("_")

    guess = None
    attempts = 10

    def guess_check(guesses):

        while not guesses or guesses not in string.ascii_letters:
            guesses = input(colored("Invalid input! only individual letters are allowed! Try another guess:", 'red'))
        return guesses

    while ('_' in encrypted_choosen_word) and attempts > 0:

        print("You have", attempts, "attempts left!\n" + "The word is:")
        print(*encrypted_choosen_word, sep=' ')
        guess = input("What is your guess?")

        guess = guess_check(guess)


        while guess.upper() in encrypted_choosen_word or guess.lower() in encrypted_choosen_word:
            guess = input(colored("You have already guessed that letter! choose another guess!", 'blue'))
            guess = guess_check(guess)

        if guess.upper() in choosen_word or guess.lower() in choosen_word:
            for i in range(0, len(choosen_word)):
                if choosen_word[i] == guess.upper():
                    encrypted_choosen_word[i] = guess.upper()
                    correct_guess = True
                elif choosen_word[i] == guess.lower():
                    encrypted_choosen_word[i] = guess.lower()
                    correct_guess = True

        else:
            attempts = attempts - 1
            correct_guess = False

        if correct_guess == True:
            print(colored("\nCorrect guess!", 'green'))
        else:
            print(colored("\nWrong guess!", 'red'))

    if attempts == 0:
        print(colored("The word was: "+str(choosen_word),'red'))
        print(colored(user_name + ",YOU LOST! GET YOUR KNECK READY!SAY YOUR LAST WORDS. WE ARE SENDING YOU TO JESUS! R.I.P",'red'))
        print(colored("                    |/|\n"
                      "                    |/|\n"
                      "                    |/|\n"
                      "                    |/|\n"
                      "                    |/|\n"
                      "                    |/|\n"
                      "                    |/| /¯)\n"
                      "                    |/|/\/\n"
                      "                    |/|\/\n"
                      "                    (¯¯¯)\n"
                      "                    (¯¯¯)\n"
                      "                    (¯¯¯)\n"
                      "                    (¯¯¯)\n"
                      "                    (¯¯¯)\n"
                      "                    /¯¯/\ \n"
                      "                   / ,^./\ \n"
                      "                  / /   \/\ \n"
                      "                 / /     \/\ \n"
                      "                ( (       )/)\n"
                      "                | |       |/|\n"
                      "                | |       |/|\n"
                      "                | |       |/|\n"
                      "                ( (       )/)\n"
                      "                 \ \     / /\n"
                      "                  \ `---' /\n"
                      "                   `-----'", 'red'))
    else:

        print(colored((
                "         ______________________________________\n"
                "________|               " + user_name + "                |_______\n"
                                                         "\       |      YOU JUST SAVED YOUR NECK !!     |      /\n"
                                                         "\       |    CONGRATULATION LUCKY BASTARD!     |     /\n"
                                                         "/       |______________________________________|     \ \n"
                                                         "/__________)                                (_________\ \n"),
            'green'))


###############################################################################

user_name = input("Please Enter your name:")
ready = input("Ok " + str(user_name) + " are you ready?(y/n)")
Yes_No_check(ready)

game_on()








