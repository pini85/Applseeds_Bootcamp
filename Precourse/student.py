import random


print("~ welcome to WAR ~")
username = input('please enter your name:')
money = 50
flag = True
print('hello ', username,'you currently have ' + str(money) + ' dollars.')

while flag:
    cOntinue = int(input('1. if you want to bet.\n2. if you want to take the many and go.\n choose 1 \ 2:\n'))
    if cOntinue ==1:
        print("let's go!!")
        print(username, ' you currently have ' + str(money) + ' dollars.')
        userBet = int(input('place your bet for the next round:you can bet between 1 to ' + str(money) + ' $ --> \n'))

        if money >= userBet:
            computerCard = random.randint(1,12)
            userCard = random.randint(1,12)
            print('Computer Card is: '+str(computerCard))
            print('User Card is: ' + str(userCard))

            if userCard > computerCard:
                money += userBet
            else:
                money -= userBet
        if money == 0:
            print('You dont have money, go home')
            exit()
        else:
            print('Your bet is to high')

        print('now you have ' + str(money) + ' $ \n')

    elif cOntinue == 2:
        print("you are a coward! Bye.")
        flag = False
    elif cOntinue != 1 and cOntinue != 2:
        print('read again!')