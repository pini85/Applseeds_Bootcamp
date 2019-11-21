import random
import re

while_loop = 0
tries = 10

# //charlist randomword 1
def print_word(char, word, is_finish):
    func_word = list(word)
    count = 0
    if not char:
        for t in range(len(word)):
            print("*", end=" ")
    else:
        for j in range(len(func_word)):
            y = 0
            for h in range(len(char)):
                if char[h] == func_word[j]:
                    print(func_word[j], end=" ")
                    y = 0
                    count += 1
                else:
                    y = y + 1
            if y == len(char) and char[y - 1] != func_word[j]:
                print("*", end=" ")
        if is_finish == 1:  # return count is a flag for me if i want to use this function just to print or also make desicions
            return count


print("""////////////////     Welcome to the HANGMEN game       \\\\\\\\\\\\\\\\\\
 ___________.._______
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  \
| |          ||  `/,|
| |          (\\`_.'
| |         .-`--'.
| |        /Y . . Y\
| |       // |   | \\
| |      //  | . |  \\
| |     ')   |   |   (`
| |          ||'||
| |          || ||
| |          || ||
| |          || ||
| |         / | | \
""""""""""|_`-' `-' |""")

word_list = ["bull", "horse", "metadore", "spaceshipe", "alphabet"]
random_word = random.choice(word_list)
print("\n")
for i in range(len(random_word)):
    print("*", end=" ")
char_list = []
while while_loop == 0:
    user_char = input("\n\nEnter a char to discover: ")
    if len(user_char) == 1 and re.search("[@_!#$%^&*()<>?/|}{~:1234567890]", user_char) is None:
        user_char = user_char.lower()
        tries = tries - 1
        if user_char in random_word:
            char_list.append(user_char)
            print("\nWOW you are good!!!\n")
            x = print_word(char_list, random_word, 1)
            if x == len(random_word):
                exit("\nYou got it!!! brilliant guesses")
            elif tries == 0:
                exit("\nNo more tries left")
        else:
            print_word(char_list, random_word, 0)
            if tries == 0:
                exit("\nNo more tries left")
    else:
        print("Please enter only one character\n" + "You have " + str(tries) + " guesses\n" + "The word is:\n")
        print_word(char_list, random_word, 0)
        print("\nWhat is your guesses?\n")
