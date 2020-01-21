class Hangman:
    def __init__(self,word):
        self.word = word
        self.guesses = []
    def status(self):
        self.s = ""
        for char in self.word:
            if char in self.guesses:
                self.s+=char
            else:
                self.s+="?"
        return self.s


       # return len(self.word) * "?"
    def guess(self,letter):
        self.guesses.append(letter)






game = Hangman("hello")
game.guess("x")
game.guess("r")
game.guess("l")
print(game.status())


# class Hangman:
#     def __init__(self, word: str):
#         self.word = word
#         self.guesses = set()
#     def status(self):
#         s =""
#         for c in self.word:
#                 if c in self.guesses:
#                     s+=c
#                 else:
#                     s+="?"
#         return s
#
#     def guess(self,letter:str):
#         if not letter.isalpha():
#             raise ValueError(f"letter must be a letter not {letter}")
#         self.guesses.add(letter)
#         return self.word.count(letter)



# game1 = Hangman("hello")
# game1.guess("h")
# game1.status()