secret = int(input("PLAYER 1: Enter a secret number between 1 and 100: "))

print("\n" * 100)

print("PLAYER 2:")

# OPTION 1, Simple:

while True:
    guess = int(input("Enter your guess: "))
    if guess > secret:
        print("Your guess is too high!")
    elif guess < secret:
        print("Your guess is too low!")
    else:
        print("Correct! You win!")
        break