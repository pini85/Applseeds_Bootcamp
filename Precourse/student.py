import random
import re

choise = 1
user_bank = 50
print("/////////----------   Welcome To War  -------------\\\\\\\\\\")
user_name = input("please enter your name: ")
print("Hello " + str(user_name) + " You currently have " + str(user_bank) + " ILS")
while choise == 1:
    loop = 0
    print("\nPlace your bet for the next round: 1 to " + str(user_bank))
    bet = input()
    if bet.isdigit() is False:
        print("\nplease enter only numbers!!!\n" + "You currently have " + str(user_bank) + " ILS\n")
    else:
        bet = int(bet)
        if bet > user_bank or bet < 0:
            print("\nI said between 1 to " + str(user_bank) + " and you typed " + str(bet) + "!!\n"
                  + "I don't play with liars!!! Bye")
            exit()
        else:
            user_card = random.randint(1, 12)
            comp_card = random.randint(1, 12)
            if user_card > comp_card:
                user_bank = user_bank + bet
                while loop == 0:
                    choise = input("\nYour card is " + str(user_card) + " And my card is " + str(comp_card)
                                   + "\n" + "You Won " + str(bet) + " And now you have " + str(user_bank)
                                   + "\n" + "What would you like to do?" + "\n" + "1. Play another round"
                                   + "\n" + "2. Leave with my money :-)")
                    if choise.isdigit():
                        choise = int(choise)
                        if choise == 1 or choise == 2:
                            loop = 1
                        else:
                            choise = 0
                    else:
                        loop = 0
            else:
                user_bank = user_bank - bet
                if user_bank > 0:
                    while loop == 0:
                        choise = input("\nYour card is " + str(user_card) + " And my card is " + str(comp_card)
                                       + "\n" + "You lose " + str(bet) +" And now you have " + str(user_bank)
                                       + "\n" + "What would you like to do?" + "\n" + "1. Play another round"
                                       + "\n" + "2. Leave with my money :-)")
                        if choise.isdigit():
                            choise = int(choise)

                            if choise == 1 or choise == 2:
                                loop = 1
                            else:
                                choise = 0
                        else:
                            loop = 0
                else:
                    print("\nYour card is " + str(user_card) + " And my card is " + str(comp_card) + "\n"
                          + "You lost " + str(bet) + " And now you have " + str(user_bank)
                          + "\n" + "You are broke... Bye Bye")
                    exit()