user_input = input("Enter your name: ")
def main(s):
   print("I am shouting your words:")
   print(s.upper())
   print("Your words as a title:")
   print(s.title())
   print("Your words as an inverse title:")
   sentence = [f"{word[0].lower()}{word[1:]}" for word in s.upper().split(" ")]
   print(" ".join(sentence))
main(user_input)

