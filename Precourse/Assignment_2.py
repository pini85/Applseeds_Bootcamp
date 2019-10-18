import random
user_money = 50
user_bet = 0
computer_card: 0
user_card: 0


def start_program():
    global user_money
    print("---------------Welcome to WAR---------------")
    user_name = input("please enter your name: ")
    print("Hello",user_name,"You currently have", user_money, "dollars.")
    user_money = 50
    start_round()


def start_round():
    global user_bet
    user_bet = int(input("Place your bet for the next round: 1 to 50: "))
    if user_bet < 1 or user_bet > 50:
        print("I said between 1 to 50. You typed", user_bet,"!!")
        print("I dont play with liars!!! Bye")
        exit()
    else:
        card_results()


def card_results():
    global user_money, user_card, computer_card, user_money, user_bet
    user_card = random.randint(1, 13)
    computer_card = random.randint(1, 13)
    print("Your card is", user_card, " and my card is", computer_card)
    if computer_card > user_card:
        user_money = user_money - user_bet
        print("You lost", user_bet, "and now you have", user_money)
        if user_money <= 0:
            print("You are broke... Bye bye")
            exit()
        if user_money > 0:
            restart_game()
    elif computer_card == user_card:
        print("It is a draw. Lets try another round")
        card_results()
    else:
        user_money = user_money + user_bet
        print("You won", user_bet, "and now you have", user_money)
        restart_game()


def restart_game():
    user_input = int(input("What would you like to do?\n"
    "1. Play another round\n"
    "2. Leave with my money :)"
    ))
    if user_input == 1:
        start_round()
    else:
        exit()


start_program()





