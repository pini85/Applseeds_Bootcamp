class BellWithThreeButtons:
    def __init__(self):
        self.n = 1

    def press_button_a(self):
        return "ding!" * self.n

    def press_button_b(self):
        self.n += 1
    def press_button_c(self):
        self.n = 1

bell1 = BellWithThreeButtons()
bell1.press_button_b()
bell1.press_button_c()
print(bell1.press_button_a())
