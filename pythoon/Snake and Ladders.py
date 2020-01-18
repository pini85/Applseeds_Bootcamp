from random import randrange
class SnakesLadders():
    def __init__(self):
        self.position = 0
        self.board = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, "ladder_s_1", 1, 1, 1, "snake_e_1", 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, "ladder_e_1", 1, "snake_s_1", 1, 1, 1, 1,
            1, "snake_e_2", 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            "snake_s_2", 1, "ladder_s_2", 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, "ladder_e_2", 1, 1, 1, 1, 1, 1, 1, 1]

    def play(self, die1, die2):
        self.positionBefore = 98
        self.moves = 0
        self.moves =+die1 + die2
        self.position += self.moves
        print(f"Your dice total is {self.moves} you went to square {self.position}")
        if self.position > 100:
            self.position = 100-(self.position-self.positionBefore)
            print(f"Almost! You didn't hit exactly 100 you fell to {self.position}")
        elif "ladder_s_1" == self.board[self.position-1]:
            self.ladder("ladder_e_1")
        elif "ladder_s_2" == self.board[self.position-1]:
            self.ladder("ladder_e_2")
        elif "snake_s_1" == self.board[self.position-1]:
            self.snake("snake_e_1")
        elif self.position == 100:
            print("YOU WON!")

    def ladder(self,end):
        for i, n in enumerate(self.board):
            if n == end:
                self.position = i
        print(f"You hit a ladder! Jumped up to square {self.position}")

    def snake(self, end):
        print(self.position)
        for i, n in enumerate(self.board):
            print(i,n)
            if n == end:
                self.position = i
        print(f"You hit a snake! Fell down to square {self.position}")

def start():
    player1 = SnakesLadders()
    player2 = SnakesLadders()
    while player1.position != 100 and player2.position !=100:
        while player2.position !=100:
            ready = input("Player 1 turn. Hit enter to start")
            die1 = randrange(1,6)
            die2 = randrange(1,6)
            player1.play(die1,die2)
            if die1 == die2:
                print("You hit a double!")
                continue
            else:
                break
        while player1.position !=100:
            ready = input("Player 2 turn. Hit enter to start")
            die1 = randrange(1,6)
            die2 = randrange(1,6)
            player2.play(die1, die2)
            if die1 == die2:
                print("You hit a double!")
                continue
            else:
                break
start()