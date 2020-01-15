class BetterBell:
    def __init__(self, sound="ding!", initial=1):
        self.n = initial
        self.msg = msg

    def press_button_a(self):
        return self.msg * self.n

    def press_button_b(self):
        self.n += 1

def myFunc():
    return 1+1
bell1 = BetterBell("BONG")
bell1.press_button_b()
print(bell1.press_button_a())