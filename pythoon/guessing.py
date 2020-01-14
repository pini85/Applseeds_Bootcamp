secret = input("enter secret number")

print("\n" * 100)

while True:
    user_input = input("enter number")
    if user_input > secret:
        print("It is too high")
   elif user_input < secret:
    print("It is too low")
print("correct")
    break



# x = int(input("Pick between 1,2,3,4,5: "))
#
# while x not in [1, 2, 3, 4, 5]:
#     print("This is not a valid input, please try again")
#     x = int(input("Pick between 1,2,3,4,5: "))
# print("You picked {}".format(x))







# Player 2 looks to the other direction, while player 1 enters a secret number between 1 and 100. (use input() to get a number from the user)
#
# The screen is cleared. (Print a lot of blank lines with "\n" * 100)
#
# Player 2 returns and tries to guess the number. The computer might say Correct! You win! and the game is done.
#
# Otherwise print Your guess is too high! or Your guess is too low! and ask again.